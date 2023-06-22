import {
    DndContext,
    DragEndEvent,
    DragStartEvent,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    SortableContext,
    arrayMove,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useContext, useEffect, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { SimpleIdGenerator } from "../util";
import { FileItem } from "./file-item";
import { FileItemEdit } from "./file-item-edit";
import { EditableItemsContainer, ListWrapper } from "./file-list.styles";
import { FileUploadHelper } from "./helper";
import { FileItemProps } from "./types";
import { FileUploadContext } from "./file-upload-context";

// =============================================================================
// INTERFACES
// =============================================================================
type RenderMode = "cancelled-edit" | "list" | "edit";

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
    onReorder?: ((reorderedFileItems: FileItemProps[]) => void) | undefined;
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
    onReorder,
}: Props) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const [renderModes, setRenderModes] = useState<FileItemRenderModes>({});

    const { activeId, setActiveId } = useContext(FileUploadContext);

    const { width: wrapperWidth, ref: wrapperRef } = useResizeDetector();

    /**
     * As the default drag sensors interfere with click events
     * on the file items, we'll need to configure the sensor to
     * only activate the drag if the mouse moves a certain distance
     */
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8, // mouse drag of 8px then activate the drag event
            },
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
        if (onReorder) {
            const { active, over } = event;

            if (active.id !== over.id) {
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

                onReorder(updatedFileItems);
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

        const updatedRenderModes: FileItemRenderModes = { ...renderModes };

        for (const item of fileItems) {
            if (
                !updatedRenderModes[item.id] ||
                updatedRenderModes[item.id] !== "cancelled-edit"
            ) {
                /**
                 * If new item or if previously did not have edit cancelled,
                 * we will just update the render mode according to the
                 * description value.
                 *
                 * If editing was cancelled previously, we will leave it as
                 * it is and not render the edit display
                 */
                updatedRenderModes[item.id] = shouldRenderEditMode(item)
                    ? "edit"
                    : "list";
            }
        }

        return updatedRenderModes;
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

    const hasFileItemsInEditMode = () => {
        return Object.values(renderModes).some((mode) => mode === "edit");
    };

    const shouldEnableSort = () => {
        return (
            fileItems &&
            fileItems.length > 1 &&
            sortable &&
            !hasFileItemsInEditMode()
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
