import { useRef } from "react";
import { useResizeDetector } from "react-resize-detector";
import { DropzoneElement, FileUploadDropzone } from "./dropzone";
import { FileItem } from "./file-item";
import {
    Description,
    ItemsContainer,
    Title,
    TitleContainer,
    UploadButton,
    UploadButtonContainer,
    UploadButtonLabel,
    WarningAlert,
} from "./file-upload.styles";
import { FileItemProps, FileUploadProps } from "./types";

export const FileUpload = ({
    styleType = "bordered",
    fileItems,
    title,
    description,
    maxFiles, // TODO: In consideration. Deciding if it should be smart or parent handle
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
    const dropzoneRef = useRef<DropzoneElement>();
    const { width: wrapperWidth, ref: wrapperRef } = useResizeDetector();

    // =========================================================================
    // EFFECTS
    // =========================================================================

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

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderItems = () => {
        if (!fileItems || fileItems.length === 0) return null;

        const itemsToRender = fileItems.map((item) => {
            return (
                <FileItem
                    key={item.id}
                    {...item}
                    wrapperWidth={wrapperWidth}
                    descriptionMaxLength={descriptionMaxLength}
                    editable={editableFileItems}
                    onDelete={handleItemDelete(item)}
                    onDescriptionUpdate={handleDescriptionUpdate(item)}
                />
            );
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
            disabled={disabled}
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
                    disabled={disabled}
                    onClick={handleUploadButtonClick}
                >
                    Upload files
                </UploadButton>
                <UploadButtonLabel>or drop them here</UploadButtonLabel>
            </UploadButtonContainer>
        </FileUploadDropzone>
    );
};
