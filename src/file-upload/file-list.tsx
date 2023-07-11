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
import { useContext, useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { FileUploadContext } from "./context";
import { MouseSensor } from "./custom-sensors";
import { FileItemEdit } from "./file-item-edit";
import { FileListItem } from "./file-list-item";
import { EditableItemsContainer, ListWrapper } from "./file-list.styles";
import { FileUploadHelper } from "./helper";
import { FileItemProps } from "./types";

// =============================================================================
// INTERFACES
// =============================================================================
type RenderMode = "edit" | "display" | "error";

type FileItemRenderModes = Record<string, RenderMode>;
type FileEditedDescriptions = Record<string, string>;

type RenderItem = FileItemProps | FileItemProps[];

interface Props {
    fileItems: FileItemProps[];
    editableFileItems: boolean;
    fileDescriptionMaxLength?: number | undefined;
    sortable?: boolean | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    onItemUpdate: (item: FileItemProps) => void;
    onItemDelete: (item: FileItemProps) => void;
    onSort?: ((reorderedFileItems: FileItemProps[]) => void) | undefined;
}

// =============================================================================
// COMPONENT
// =============================================================================

export const FileList = ({
    fileItems,
    editableFileItems,
    fileDescriptionMaxLength,
    sortable,
    disabled,
    readOnly,
    onItemUpdate,
    onItemDelete,
    onSort,
}: Props) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const [renderModes, setRenderModes] = useState<FileItemRenderModes>({});
    const { setActiveId } = useContext(FileUploadContext);
    const { width: wrapperWidth, ref: wrapperRef } = useResizeDetector();

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
    useEffect(() => {
        setRenderModes(getItemsRenderMode(fileItems));
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
    };

    const handleDragEnd = (event: DragEndEvent) => {
        if (onSort) {
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
        fileItems: FileItemProps[]
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
        fileItems: FileItemProps[],
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

    if (!fileItems || fileItems.length === 0) return null;

    if (disabled || readOnly || !shouldEnableSort()) {
        return (
            <ListWrapper $readOnly={readOnly} ref={wrapperRef}>
                {renderItems()}
            </ListWrapper>
        );
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
                    <ListWrapper $readOnly={readOnly} ref={wrapperRef}>
                        {renderItems()}
                    </ListWrapper>
                </SortableContext>
            </DndContext>
        );
    }
};
