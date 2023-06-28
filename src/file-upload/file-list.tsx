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
import { useContext, useEffect, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { SimpleIdGenerator } from "../util";
import { MouseSensor } from "./custom-sensors";
import { FileItem } from "./file-item";
import { FileItemEdit } from "./file-item-edit";
import { EditableItemsContainer, ListWrapper } from "./file-list.styles";
import { FileUploadContext } from "./file-upload-context";
import { FileUploadHelper } from "./helper";
import { FileItemProps } from "./types";

// =============================================================================
// INTERFACES
// =============================================================================
type RenderMode = "cancelled-edit" | "list" | "edit" | "error" | "loading";

type FileItemRenderModes = Record<string, RenderMode>;

type RenderItem = FileItemProps | FileItemProps[];

interface Props {
    fileItems: FileItemProps[];
    editableFileItems: boolean;
    descriptionMaxLength?: number | undefined;
    sortable?: boolean | undefined;
    disabled?: boolean | undefined;
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
    descriptionMaxLength,
    sortable,
    disabled,
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
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        setRenderModes(getItemsRenderMode(fileItems));
    }, [fileItems]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleDescriptionUpdate =
        (item: FileItemProps) => (description: string) => {
            const updatedItem = { ...item, description };
            onItemUpdate(updatedItem);
        };

    const handleCancel = (item: FileItemProps) => () => {
        const updatedRenderModes = { ...renderModes };
        updatedRenderModes[item.id] = item.description
            ? "list"
            : "cancelled-edit";

        setRenderModes(updatedRenderModes);
    };

    const handleInitiateEdit = (item: FileItemProps) => () => {
        const updatedRenderModes = { ...renderModes };
        updatedRenderModes[item.id] = "edit";

        setRenderModes(updatedRenderModes);
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
        return checkEditable(item) && item.description === undefined;
    };

    const getItemsRenderMode = (
        fileItems: FileItemProps[]
    ): FileItemRenderModes => {
        if (!fileItems || fileItems.length === 0) return {};

        const newRenderModes: FileItemRenderModes = {};

        for (const item of fileItems) {
            /**
             * We retain the cancelled edits to prevent the edit
             * display from re-rendering
             */
            if (
                renderModes[item.id] &&
                renderModes[item.id] === "cancelled-edit"
            ) {
                newRenderModes[item.id] = renderModes[item.id];
            } else if (item.errorMessage) {
                newRenderModes[item.id] = "error";
            } else if (item.progress < 1) {
                newRenderModes[item.id] = "loading";
            } else {
                newRenderModes[item.id] = shouldRenderEditMode(item)
                    ? "edit"
                    : "list";
            }
        }

        return newRenderModes;
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
        return Object.values(renderModes).every(
            (mode) => mode === "list" || mode === "cancelled-edit"
        );
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
    const renderItemsInEditMode = (fileItems: FileItemProps[]) => {
        const itemsToRender = fileItems.map((item) => {
            return (
                <FileItemEdit
                    key={item.id}
                    fileItem={item}
                    wrapperWidth={wrapperWidth}
                    descriptionMaxLength={descriptionMaxLength}
                    onEdit={handleDescriptionUpdate(item)}
                    onCancel={handleCancel(item)}
                />
            );
        });

        return (
            <EditableItemsContainer
                key={`editable-items-${SimpleIdGenerator.generate()}`}
            >
                <ul>{itemsToRender}</ul>
            </EditableItemsContainer>
        );
    };

    const renderItems = () => {
        const arrangedItems = getArrangedItems(fileItems, renderModes);

        if (arrangedItems.length === 0) return null;

        return arrangedItems.map((item) => {
            if (Array.isArray(item)) {
                return renderItemsInEditMode(item);
            } else {
                return (
                    <FileItem
                        key={item.id}
                        fileItem={item}
                        editable={checkEditable(item)}
                        wrapperWidth={wrapperWidth}
                        sortable={shouldEnableSort()}
                        disabled={disabled}
                        onDelete={handleDelete(item)}
                        onEditClick={handleInitiateEdit(item)}
                    />
                );
            }
        });
    };

    if (disabled || !shouldEnableSort()) {
        return <ListWrapper ref={wrapperRef}>{renderItems()}</ListWrapper>;
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
                    <ListWrapper ref={wrapperRef}>{renderItems()}</ListWrapper>
                </SortableContext>
            </DndContext>
        );
    }
};
