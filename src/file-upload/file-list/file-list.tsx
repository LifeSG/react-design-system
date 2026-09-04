import type { DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import {
    DndContext,
    KeyboardSensor,
    TouchSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import clsx from "clsx";
import type React from "react";
import {
    forwardRef,
    useContext,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { useResizeDetector } from "react-resize-detector";

import type { FormLabelProps } from "../../form/form-label/types";
import { VisuallyHidden } from "../../shared/accessibility";
import { FileUploadContext } from "../context";
import { MouseSensor } from "../custom-sensors";
import { FileListItem } from "../file-list-item";
import type { FileItemMode } from "../file-list-item/types";
import { FileUploadHelper } from "../helper";
import type { FileItemProps } from "../types";
import * as styles from "./file-list.styles";

// =============================================================================
// INTERFACES
// =============================================================================
type FileEditedDescriptions = Record<string, string>;

interface Props {
    fileItems: FileItemProps[] | undefined;
    editableFileItems: boolean;
    fileDescriptionMaxLength?: number | undefined;
    descriptionRequired?: boolean | undefined;
    descriptionLabel?: FormLabelProps | undefined;
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
        descriptionRequired,
        descriptionLabel,
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
    const { setActiveId } = useContext(FileUploadContext);
    const [editingCount, setEditingCount] = useState(0);

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

    // =========================================================================
    // EFFECTS
    // =========================================================================
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
        removeDescription(item.id);
        const updatedItem = { ...item, description };
        onItemUpdate(updatedItem);
    };

    const handleBlurEdit = (item: FileItemProps) => (value: string) => {
        descriptionsValueRef.current[item.id] = value;
    };

    const handleCancel = (item: FileItemProps) => () => {
        removeDescription(item.id);
        if (!item.description || item.description.length === 0) {
            onItemDelete(item);
        }
    };

    const handleModeChange = (mode: FileItemMode) => {
        setEditingCount((prev) =>
            mode === "edit" ? prev + 1 : Math.max(0, prev - 1)
        );
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

    const isInNonDisplayState = (item: FileItemProps) => {
        if (item.errorMessage) return true;

        const isUploaded = (item.progress ?? 1) >= 1;
        const isDescriptionRequiredAndEmpty =
            descriptionRequired && !item.description;
        return (
            !readOnly &&
            isUploaded &&
            checkEditable(item) &&
            isDescriptionRequiredAndEmpty
        );
    };

    const areAllItemsInDisplayViews = () => {
        if (editingCount > 0) return false;
        return !fileItems.some(isInNonDisplayState);
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
    const renderItems = () => {
        if (fileItems.length === 0) return null;

        return fileItems.map((item) => {
            const updatedFileItem = { ...item };
            if (descriptionsValueRef.current[item.id] !== undefined) {
                updatedFileItem.description =
                    descriptionsValueRef.current[item.id];
            }

            return (
                <FileListItem
                    key={item.id}
                    fileItem={updatedFileItem}
                    editable={checkEditable(item)}
                    wrapperWidth={wrapperWidth}
                    sortable={shouldEnableSort()}
                    disabled={disabled}
                    readOnly={readOnly}
                    descriptionLabel={descriptionLabel}
                    fileDescriptionMaxLength={fileDescriptionMaxLength}
                    descriptionRequired={descriptionRequired}
                    onDelete={handleDelete(item)}
                    onSave={handleSaveEdit(item)}
                    onCancel={handleCancel(item)}
                    onBlur={handleBlurEdit(item)}
                    onModeChange={handleModeChange}
                />
            );
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
                <ul
                    tabIndex={-1}
                    className={clsx(
                        styles.listWrapper,
                        readOnly && styles.listWrapperReadOnly
                    )}
                    ref={wrapperRef}
                    aria-label={getWrapperAriaLabel()}
                >
                    {renderItems()}
                </ul>
            </>
        );
    };

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

export const FileList = forwardRef<FileListRef, Props>(Component);
