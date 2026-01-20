import {
    DndContext,
    DragEndEvent,
    DragStartEvent,
    KeyboardSensor,
    TouchSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    SortableContext,
    arrayMove,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import React, {
    forwardRef,
    useContext,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { useResizeDetector } from "react-resize-detector";
import { FileUploadContext } from "./context";
import { MouseSensor } from "./custom-sensors";
import { FileItemEdit } from "./file-item-edit";
import { FileListItem } from "./file-list-item";
import { EditableItemsContainer, ListWrapper } from "./file-list.styles";
import { FileUploadHelper } from "./helper";
import { FileItemProps } from "./types";
import { VisuallyHidden } from "../shared/accessibility";

// =============================================================================
// INTERFACES
// =============================================================================
type RenderMode = "edit" | "display" | "error";

type FileItemRenderModes = Record<string, RenderMode>;
type FileEditedDescriptions = Record<string, string>;

type RenderItem = FileItemProps | FileItemProps[];

interface Props {
    fileItems: FileItemProps[] | undefined;
    editableFileItems: boolean;
    fileDescriptionMaxLength?: number | undefined;
    sortable?: boolean | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    onItemUpdate: (item: FileItemProps) => void;
    onItemDelete: (item: FileItemProps) => void;
    onSort?: ((reorderedFileItems: FileItemProps[]) => void) | undefined;
}

type AnnouncementProgress = Record<
    string,
    {
        progress: number;
        timestamp: number;
        status: "in-progress" | "complete" | "error";
    }
>;

export interface FileListRef {
    focus: () => void;
}

// =============================================================================
// COMPONENT
// =============================================================================

function Component(
    {
        fileItems = [],
        editableFileItems,
        fileDescriptionMaxLength,
        sortable,
        disabled,
        readOnly,
        onItemUpdate,
        onItemDelete,
        onSort,
    }: Props,
    ref: React.Ref<FileListRef>
) {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const [renderModes, setRenderModes] = useState<FileItemRenderModes>({});
    const { setActiveId } = useContext(FileUploadContext);

    // Progress announcement state (for aria-live) - announces start and completion only
    const [progressAnnouncement, setProgressAnnouncement] = useState("");
    const lastAnnouncedRef = useRef<AnnouncementProgress>({});

    useImperativeHandle(ref, () => ({
        focus: () => {
            wrapperRef.current?.focus();
        },
    }));
    const { width: wrapperWidth = 0, ref: wrapperRef } = useResizeDetector();

    // Keep track of edited description without re-rendering
    const descriptionsValueRef = useRef<FileEditedDescriptions>({});

    /**
     * As the default drag sensors interfere with click events
     * on the file items, we'll need to configure the sensor to
     * only activate the drag if the mouse moves a certain distance
     */
    const sensors = useSensors(
        useSensor(MouseSensor, {
            activationConstraint: {
                distance: 8, // mouse drag of 8px then activate the drag event
            },
        }),
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 150,
                tolerance: 5,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    // =========================================================================
    // REF METHODS
    // =========================================================================
    const removeDescription = (itemId: string) => {
        delete descriptionsValueRef.current[itemId];
    };

    const shallowCompareRenderModes = (
        prev: FileItemRenderModes,
        next: FileItemRenderModes
    ) => {
        const prevKeys = Object.keys(prev);
        const nextKeys = Object.keys(next);
        if (prevKeys.length !== nextKeys.length) {
            return false;
        }
        for (const k of nextKeys) {
            if (prev[k] !== next[k]) {
                return false;
            }
        }
        return true;
    };

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        const nextModes = getItemsRenderMode(fileItems);
        const prevModes = renderModes;
        // We perform shallowCompare to avoid infinite re-render loop
        if (shallowCompareRenderModes(prevModes, nextModes)) {
            return;
        }
        setRenderModes(nextModes);
    }, [fileItems, editableFileItems, readOnly]);

    // Progress announcements only at start and completion
    useEffect(() => {
        if (!fileItems || fileItems.length === 0) {
            setProgressAnnouncement("");
            return;
        }
        const now = Date.now();
        const messages: string[] = [];

        for (const item of fileItems) {
            const fileStatus = lastAnnouncedRef.current[item.id];

            if (item.errorMessage) {
                if (fileStatus?.status !== "error") {
                    messages.push(
                        typeof item.errorMessage === "string"
                            ? `Error uploading ${item.name}: ${item.errorMessage}`
                            : `Error uploading ${item.name}`
                    );
                    lastAnnouncedRef.current[item.id] = {
                        progress: item.progress ?? 1,
                        timestamp: now,
                        status: "error",
                    };
                }
                continue;
            }

            if (item.progress === undefined) {
                continue;
            }

            if (item.progress >= 1) {
                if (fileStatus?.status !== "complete") {
                    messages.push(`${item.name} upload is complete`);
                    lastAnnouncedRef.current[item.id] = {
                        progress: 1,
                        timestamp: now,
                        status: "complete",
                    };
                }
                continue;
            }

            // In progress - only announce start, not progress updates
            if (typeof item.progress === "number" && item.progress < 1) {
                // Only announce when starting upload (no previous status or status was not in-progress)
                const shouldAnnounce =
                    !fileStatus || fileStatus.status !== "in-progress";

                if (shouldAnnounce) {
                    messages.push(`Starting upload of ${item.name}`);
                    lastAnnouncedRef.current[item.id] = {
                        progress: item.progress,
                        timestamp: now,
                        status: "in-progress",
                    };
                }
            }
        }

        if (messages.length > 0) {
            // Update aria-live region once with aggregated message
            setProgressAnnouncement(messages.join(", "));
        }
    }, [fileItems]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleSaveEdit = (item: FileItemProps) => (description: string) => {
        updateRenderModes(item.id, "display");
        removeDescription(item.id);

        const updatedItem = { ...item, description };
        onItemUpdate(updatedItem);
    };

    const handleBlurEdit = (item: FileItemProps) => (value: string) => {
        descriptionsValueRef.current[item.id] = value;
    };

    const handleCancel = (item: FileItemProps) => () => {
        if (!item.description || item.description.length === 0) {
            // New addition
            onItemDelete(item);
        } else {
            updateRenderModes(item.id, "display");
        }
        removeDescription(item.id);
    };

    const handleInitiateEdit = (item: FileItemProps) => () => {
        updateRenderModes(item.id, "edit");
    };

    const handleDelete = (item: FileItemProps) => () => {
        onItemDelete(item);
        if (wrapperRef.current) {
            wrapperRef.current.focus();
        }
    };

    const handleDragEnd = (event: DragEndEvent) => {
        if (onSort && fileItems) {
            const { active, over } = event;

            if (over && active.id !== over.id) {
                const oldIndex = fileItems.findIndex(
                    (item) => item.id === active.id
                );
                const newIndex = fileItems.findIndex(
                    (item) => item.id === over.id
                );

                const updatedFileItems = arrayMove(
                    fileItems,
                    oldIndex,
                    newIndex
                );

                onSort(updatedFileItems);
            }
        }

        setActiveId(undefined);
    };

    const handleDragStart = (event: DragStartEvent) => {
        const { active } = event;
        setActiveId(active.id as string);
    };

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const checkEditable = (item: FileItemProps) => {
        return (
            editableFileItems &&
            FileUploadHelper.isSupportedImageType(item.type)
        );
    };

    const shouldRenderEditMode = (item: FileItemProps) => {
        return (
            !item.errorMessage &&
            !readOnly &&
            !(typeof item.progress === "number" && item.progress < 1) &&
            checkEditable(item) &&
            !item.description
        );
    };

    const getItemsRenderMode = (
        fileItems: FileItemProps[] | undefined
    ): FileItemRenderModes => {
        if (!fileItems || fileItems.length === 0) return {};

        const newRenderModes: FileItemRenderModes = {};

        for (const item of fileItems) {
            if (item.errorMessage) {
                newRenderModes[item.id] = "error";
            } else if (!renderModes[item.id]) {
                newRenderModes[item.id] = shouldRenderEditMode(item)
                    ? "edit"
                    : "display";
            } else {
                newRenderModes[item.id] = renderModes[item.id];
            }
        }

        return newRenderModes;
    };

    const updateRenderModes = (itemId: string, mode: RenderMode) => {
        setRenderModes((prevRenderModes) => {
            return {
                ...prevRenderModes,
                [itemId]: mode,
            };
        });
    };

    /**
     * Due to a UI requirement, we will render the items
     * with edit modes as a group
     */
    const getArrangedItems = (
        fileItems: FileItemProps[] | undefined,
        renderModes: FileItemRenderModes
    ) => {
        if (!fileItems || fileItems.length === 0) return [];

        const arrangedItems: RenderItem[] = [];

        for (const fileItem of fileItems) {
            if (renderModes[fileItem.id] === "edit") {
                const previousElement = arrangedItems[arrangedItems.length - 1];
                if (Array.isArray(previousElement)) {
                    previousElement.push(fileItem);
                } else {
                    arrangedItems.push([fileItem]);
                }
            } else {
                arrangedItems.push(fileItem);
            }
        }

        return arrangedItems;
    };

    const areAllItemsInDisplayViews = () => {
        return Object.values(renderModes).every((mode) => mode === "display");
    };

    const shouldEnableSort = () => {
        return (
            fileItems &&
            fileItems.length > 1 &&
            sortable &&
            areAllItemsInDisplayViews()
        );
    };

    /**
     * If there are no files, return "No files uploaded".
     * If readOnly is true, return "Read-only file list".
     * If there are files, return a summary of the file statuses.
     * For example, "File list. 2 completed files, 1 file in progress, 1 file with error".
     *
     * @returns aria label
     */
    const getWrapperAriaLabel = () => {
        if (fileItems.length === 0) {
            return "No files uploaded";
        }
        const completedCount = fileItems.filter(
            (item) =>
                !item?.errorMessage &&
                (item.progress === 1 || item.progress === undefined)
        ).length;
        const inProgressCount = fileItems.filter(
            (item) => typeof item.progress === "number" && item.progress < 1
        ).length;
        const errorCount = fileItems.filter((item) => item.errorMessage).length;
        if (completedCount === 0 && inProgressCount === 0 && errorCount === 0) {
            return `File list`;
        }
        const completedText =
            completedCount > 0 ? `${completedCount} completed files` : "";
        const inProgressText =
            inProgressCount > 0 ? `${inProgressCount} file in progress` : "";
        const errorText =
            errorCount > 0
                ? `${errorCount} ${
                      errorCount > 1 ? "files" : "file"
                  } with error`
                : "";
        const parts = [completedText, inProgressText, errorText].filter(
            Boolean
        );
        const prefix = readOnly ? "Read-only file list" : "File list";
        return `${prefix}. ${parts.join(", ")}`;
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderItemsInEditMode = (
        fileItems: FileItemProps[],
        keyToUse: number
    ) => {
        const itemsToRender = fileItems.map((item) => {
            const updatedFileItem = { ...item };
            if (descriptionsValueRef.current[item.id] !== undefined) {
                updatedFileItem.description =
                    descriptionsValueRef.current[item.id];
            }

            return (
                <FileItemEdit
                    key={item.id}
                    fileItem={updatedFileItem}
                    wrapperWidth={wrapperWidth}
                    fileDescriptionMaxLength={fileDescriptionMaxLength}
                    onSave={handleSaveEdit(item)}
                    onCancel={handleCancel(item)}
                    onBlur={handleBlurEdit(item)}
                />
            );
        });

        return (
            <EditableItemsContainer key={`editable-${keyToUse}`}>
                <ul>{itemsToRender}</ul>
            </EditableItemsContainer>
        );
    };

    const renderItems = () => {
        const arrangedItems = getArrangedItems(fileItems, renderModes);

        if (arrangedItems.length === 0) return null;

        return arrangedItems.map((item, index) => {
            if (Array.isArray(item)) {
                return renderItemsInEditMode(item, index);
            } else {
                return (
                    <FileListItem
                        key={item.id}
                        fileItem={item}
                        editable={checkEditable(item)}
                        wrapperWidth={wrapperWidth}
                        sortable={shouldEnableSort()}
                        disabled={disabled}
                        readOnly={readOnly}
                        onDelete={handleDelete(item)}
                        onEditClick={handleInitiateEdit(item)}
                    />
                );
            }
        });
    };

    /**
     * Renders the progress status of each file upload.
     * In progress: 25% complete for uploading filename.pdf
     * Complete: filename.pdf upload is complete
     * Error: Error uploading filename.pdf: error message
     *
     * @returns A visually hidden element announcing the progress status.
     */
    const renderProgressStatus = () => (
        <VisuallyHidden aria-live="polite" aria-atomic="true">
            {progressAnnouncement}
        </VisuallyHidden>
    );

    const renderItemsWithWrapper = () => {
        return (
            <>
                {renderProgressStatus()}
                <ListWrapper
                    tabIndex={-1}
                    $readOnly={readOnly}
                    ref={wrapperRef}
                    aria-label={getWrapperAriaLabel()}
                >
                    {renderItems()}
                </ListWrapper>
            </>
        );
    };

    if (disabled || readOnly || !shouldEnableSort()) {
        return renderItemsWithWrapper();
    } else {
        return (
            <DndContext
                sensors={sensors}
                onDragEnd={handleDragEnd}
                onDragStart={handleDragStart}
            >
                <SortableContext
                    items={fileItems}
                    strategy={verticalListSortingStrategy}
                >
                    {renderItemsWithWrapper()}
                </SortableContext>
            </DndContext>
        );
    }
}

export const FileList = forwardRef<FileListRef, Props>(Component);
