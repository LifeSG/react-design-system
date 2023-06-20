import findIndex from "lodash/findIndex";
import isEqual from "lodash/isEqual";
import { useEffect, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { FileItem } from "./file-item";
import { FileItemEdit } from "./file-item-edit";
import { EditableItemsContainer, ListWrapper } from "./file-list.styles";
import { FileUploadHelper } from "./helper";
import { FileItemProps } from "./types";
import { SimpleIdGenerator } from "../util";

// =============================================================================
// INTERFACES
// =============================================================================
type RenderMode = "cancelled-edit" | "list" | "edit";

interface FileItemRenderProps {
    fileItem: FileItemProps;
    renderMode: RenderMode;
}

type RenderItem = FileItemRenderProps | FileItemRenderProps[];

interface Props {
    fileItems: FileItemProps[];
    onItemUpdate: (item: FileItemProps) => void;
    onItemDelete: (item: FileItemProps) => void;
    editableFileItems: boolean;
    descriptionMaxLength?: number | undefined;
}

// =============================================================================
// COMPONENT
// =============================================================================

export const FileList = ({
    fileItems,
    editableFileItems,
    descriptionMaxLength,
    onItemUpdate,
    onItemDelete,
}: Props) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const [arrangedItems, setArrangedItems] = useState<RenderItem[]>([]);
    const [itemsRenderMode, setItemsRenderMode] = useState<
        FileItemRenderProps[]
    >([]);

    const { width: wrapperWidth, ref: wrapperRef } = useResizeDetector();

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        setItemsRenderMode(getItemsRenderMode(fileItems));
    }, [fileItems]);

    useEffect(() => {
        setArrangedItems(getArrangedItemsToRender(itemsRenderMode));
    }, [itemsRenderMode]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleDescriptionUpdate =
        (item: FileItemProps) => (description: string) => {
            const updatedItem = { ...item, description };
            onItemUpdate(updatedItem);
        };

    const handleCancel = (item: FileItemProps) => () => {
        setItemsRenderMode((prevState) => {
            return prevState.map((renderItem) => {
                if (isEqual(item, renderItem.fileItem)) {
                    return {
                        ...renderItem,
                        renderMode: item.description
                            ? "list"
                            : "cancelled-edit",
                    };
                }

                return renderItem;
            });
        });
    };

    const handleInitiateEdit = (item: FileItemProps) => () => {
        setItemsRenderMode((prevState) => {
            return prevState.map((renderItem) => {
                if (isEqual(item, renderItem.fileItem)) {
                    return {
                        ...renderItem,
                        renderMode: "edit",
                    };
                }

                return renderItem;
            });
        });
    };

    const handleDelete = (item: FileItemProps) => () => {
        onItemDelete(item);
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
    ): FileItemRenderProps[] => {
        if (!fileItems || fileItems.length === 0) return [];

        return fileItems.map((item) => {
            const existingIndex = findIndex(itemsRenderMode, (renderedItem) => {
                return isEqual(renderedItem.fileItem, item);
            });

            if (existingIndex < 0) {
                // New item
                return {
                    fileItem: item,
                    renderMode: shouldRenderEditMode(item) ? "edit" : "list",
                };
            } else {
                const existingRenderedItem = itemsRenderMode[existingIndex];

                /**
                 * If an item previously had it's edit cancelled,
                 * we'll not re-render the edit mode even if the
                 * description is undefined
                 */
                return {
                    fileItem: item,
                    renderMode:
                        shouldRenderEditMode(item) &&
                        !(existingRenderedItem.renderMode === "cancelled-edit")
                            ? "edit"
                            : existingRenderedItem.renderMode,
                };
            }
        });
    };

    /**
     * Due to a UI requirement, we will render
     */
    const getArrangedItemsToRender = (
        fileItemRenders: FileItemRenderProps[]
    ) => {
        if (!fileItemRenders || fileItemRenders.length === 0) {
            return [];
        }

        return fileItemRenders.reduce((accumulator, currentItem) => {
            const { renderMode } = currentItem;

            if (renderMode === "edit") {
                const previousElement = accumulator[accumulator.length - 1];
                if (Array.isArray(previousElement)) {
                    previousElement.push(currentItem);
                } else {
                    accumulator.push([currentItem]);
                }
            } else {
                accumulator.push(currentItem);
            }

            return accumulator;
        }, []);
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderItemsInEditMode = (fileItems: FileItemRenderProps[]) => {
        const itemsToRender = fileItems.map((item) => {
            const { fileItem } = item;
            return (
                <FileItemEdit
                    key={fileItem.id}
                    fileItem={fileItem}
                    wrapperWidth={wrapperWidth}
                    descriptionMaxLength={descriptionMaxLength}
                    onEdit={handleDescriptionUpdate(fileItem)}
                    onCancel={handleCancel(fileItem)}
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
        if (arrangedItems.length === 0) return null;

        return arrangedItems.map((item) => {
            if (Array.isArray(item)) {
                return renderItemsInEditMode(item);
            } else {
                const { fileItem } = item;
                return (
                    <FileItem
                        key={fileItem.id}
                        fileItem={fileItem}
                        editable={checkEditable(fileItem)}
                        wrapperWidth={wrapperWidth}
                        onDelete={handleDelete(fileItem)}
                        onEditClick={handleInitiateEdit(fileItem)}
                    />
                );
            }
        });
    };

    return <ListWrapper ref={wrapperRef}>{renderItems()}</ListWrapper>;
};
