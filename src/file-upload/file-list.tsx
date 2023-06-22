import { useEffect, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { SimpleIdGenerator } from "../util";
import { FileItem } from "./file-item";
import { FileItemEdit } from "./file-item-edit";
import { EditableItemsContainer, ListWrapper } from "./file-list.styles";
import { FileUploadHelper } from "./helper";
import { FileItemProps } from "./types";

// =============================================================================
// INTERFACES
// =============================================================================
type RenderMode = "cancelled-edit" | "list" | "edit";

type FileItemRenderModes = Record<string, RenderMode>;

type RenderItem = FileItemProps | FileItemProps[];

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
    const [renderModes, setRenderModes] = useState<FileItemRenderModes>({});
    const [arrangedItems, setArrangedItems] = useState<RenderItem[]>([]);

    const { width: wrapperWidth, ref: wrapperRef } = useResizeDetector();

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        setRenderModes(getItemsRenderMode(fileItems));
    }, [fileItems]);

    useEffect(() => {
        setArrangedItems(getArrangedItems(fileItems, renderModes));
    }, [fileItems, renderModes]);

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
                        onDelete={handleDelete(item)}
                        onEditClick={handleInitiateEdit(item)}
                    />
                );
            }
        });
    };

    return <ListWrapper ref={wrapperRef}>{renderItems()}</ListWrapper>;
};
