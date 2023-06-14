import isEqual from "lodash/isEqual";
import { useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { DropzoneElement, FileUploadDropzone } from "./dropzone";
import { FileItem } from "./file-item";
import {
    Description,
    EditableItemsContainer,
    ItemsContainer,
    Title,
    TitleContainer,
    UploadButton,
    UploadButtonContainer,
    UploadButtonLabel,
    WarningAlert,
} from "./file-upload.styles";
import { FileItemProps, FileUploadProps } from "./types";
import { FileUploadHelper } from "./helper";
import { FileItemEdit } from "./file-item-edit";

// =============================================================================
// INTERFACES
// =============================================================================
interface FileItemRenderProps {
    fileItem: FileItemProps;
    renderMode: "default" | "edit";
}

type RenderItem = FileItemRenderProps | FileItemRenderProps[];

// =============================================================================
// COMPONENT
// =============================================================================
export const FileUpload = ({
    styleType = "bordered",
    fileItems,
    title,
    description,
    maxFiles,
    warning,
    className,
    name,
    id,
    accept,
    capture,
    multiple,
    disabled,
    descriptionMaxLength,
    editableFileItems,
    onChange,
    onDelete,
    onEdit,
}: FileUploadProps) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const [arrangedItems, setArrangedItems] = useState<RenderItem[]>([]);
    const [itemsRenderMode, setItemsRenderMode] = useState<
        FileItemRenderProps[]
    >([]);

    const dropzoneRef = useRef<DropzoneElement>();
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
    const handleChange = (files: File[]) => {
        if (!disabled && onChange) {
            onChange(files);
        }
    };

    const handleItemDelete = (item: FileItemProps) => () => {
        if (onDelete) {
            onDelete(item);
        }
    };

    const handleUploadButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        if (!disabled) {
            event.preventDefault();
            if (dropzoneRef.current) {
                dropzoneRef.current.openFileDialog();
            }
        }
    };

    const handleDescriptionUpdate =
        (item: FileItemProps) => (description: string) => {
            if (onEdit) {
                const updatedItem = { ...item, description };
                onEdit(updatedItem);
            }
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

    const handleCancel = (item: FileItemProps) => () => {
        setItemsRenderMode((prevState) => {
            return prevState.map((renderItem) => {
                if (isEqual(item, renderItem.fileItem)) {
                    return {
                        ...renderItem,
                        renderMode: "default",
                    };
                }

                return renderItem;
            });
        });
    };

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const checkEditable = (type: string) => {
        return editableFileItems && FileUploadHelper.isSupportedImageType(type);
    };

    const getItemsRenderMode = (
        fileItems: FileItemProps[]
    ): FileItemRenderProps[] => {
        if (!fileItems || fileItems.length === 0) return [];

        return fileItems.map((item) => {
            return {
                fileItem: item,
                renderMode:
                    FileUploadHelper.isSupportedImageType(item.type) &&
                    item.description === undefined
                        ? "edit"
                        : "default",
            };
        });
    };

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

    const reachedMaxFiles = () => {
        return maxFiles ? fileItems.length >= maxFiles : false;
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

        return <EditableItemsContainer>{itemsToRender}</EditableItemsContainer>;
    };

    const renderItems = () => {
        if (arrangedItems.length === 0) return null;

        const itemsToRender = arrangedItems.map((item) => {
            if (Array.isArray(item)) {
                return renderItemsInEditMode(item);
            } else {
                const { fileItem } = item;
                return (
                    <FileItem
                        key={fileItem.id}
                        fileItem={fileItem}
                        editable={checkEditable(fileItem.type)}
                        wrapperWidth={wrapperWidth}
                        onDelete={handleItemDelete(fileItem)}
                        onEditClick={handleInitiateEdit(fileItem)}
                    />
                );
            }
        });

        return (
            <ItemsContainer ref={wrapperRef}>{itemsToRender}</ItemsContainer>
        );
    };

    return (
        <FileUploadDropzone
            ref={dropzoneRef}
            onChange={handleChange}
            id={id ? `${id}-dropzone` : "dropzone"}
            accept={accept}
            capture={capture}
            border={styleType === "bordered"}
            className={className}
            name={name}
            multiple={multiple}
            disabled={disabled || reachedMaxFiles()}
        >
            {(title || description) && (
                <TitleContainer>
                    {title && <Title weight="regular">{title}</Title>}
                    {description && (
                        <Description weight="semibold">
                            {description}
                        </Description>
                    )}
                </TitleContainer>
            )}
            {warning && <WarningAlert type="warning">{warning}</WarningAlert>}
            {renderItems()}
            <UploadButtonContainer>
                <UploadButton
                    type="button"
                    styleType="secondary"
                    disabled={disabled || reachedMaxFiles()}
                    onClick={handleUploadButtonClick}
                >
                    Upload files
                </UploadButton>
                <UploadButtonLabel>or drop them here</UploadButtonLabel>
            </UploadButtonContainer>
        </FileUploadDropzone>
    );
};
