import { useRef, useState } from "react";
import { FileUploadContext } from "./context";
import { DropzoneElement, FileUploadDropzone } from "./dropzone";
import { FileList } from "./file-list";
import {
    Description,
    DescriptionContainer,
    ErrorAlert,
    TextContainer,
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
    maxFiles,
    warning,
    className,
    name,
    id,
    "data-testid": testId,
    accept,
    capture,
    multiple,
    disabled,
    sortable = false,
    fileDescriptionMaxLength,
    editableFileItems = false,
    errorMessage,
    readOnly,
    onChange,
    onDelete,
    onEdit,
    onSort,
}: FileUploadProps) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const dropzoneRef = useRef<DropzoneElement>();
    const [activeId, setActiveId] = useState<string>();

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleChange = (files: File[]) => {
        if (!disabled && onChange) {
            onChange(files);
        }
    };

    const handleItemDelete = (item: FileItemProps) => {
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

    const handleItemUpdate = (updatedItem: FileItemProps) => {
        if (onEdit) {
            onEdit(updatedItem);
        }
    };

    const handleSort = (updatedItems: FileItemProps[]) => {
        if (onSort) {
            onSort(updatedItems);
        }
    };

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const reachedMaxFiles = () => {
        return maxFiles ? fileItems.length >= maxFiles : false;
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderTitle = () => {
        if (!title) {
            return null;
        }

        if (typeof title === "string") {
            return <Title weight="regular">{title}</Title>;
        }

        return <TitleContainer>{title}</TitleContainer>;
    };

    const renderDescription = () => {
        if (!description) {
            return null;
        }

        if (typeof description === "string") {
            return <Description weight="regular">{description}</Description>;
        }

        return <DescriptionContainer>{description}</DescriptionContainer>;
    };

    return (
        <FileUploadContext.Provider value={{ activeId, setActiveId }}>
            <FileUploadDropzone
                ref={dropzoneRef}
                onChange={handleChange}
                id={id ? `${id}-dropzone` : "dropzone"}
                accept={accept}
                capture={capture}
                border={styleType === "bordered"}
                className={className}
                data-testid={testId}
                name={name}
                multiple={multiple}
                disabled={disabled || reachedMaxFiles() || readOnly}
            >
                {(title || description) && (
                    <TextContainer>
                        {renderTitle()}
                        {renderDescription()}
                    </TextContainer>
                )}
                {warning && (
                    <WarningAlert type="warning">{warning}</WarningAlert>
                )}
                <FileList
                    fileItems={fileItems}
                    editableFileItems={editableFileItems}
                    fileDescriptionMaxLength={fileDescriptionMaxLength}
                    sortable={sortable}
                    disabled={disabled}
                    readOnly={readOnly}
                    onItemDelete={handleItemDelete}
                    onItemUpdate={handleItemUpdate}
                    onSort={handleSort}
                />
                {errorMessage && (
                    <ErrorAlert type="error">{errorMessage}</ErrorAlert>
                )}
                {!readOnly && (
                    <UploadButtonContainer>
                        <UploadButton
                            type="button"
                            styleType="secondary"
                            disabled={
                                !!activeId || disabled || reachedMaxFiles()
                            }
                            onClick={handleUploadButtonClick}
                        >
                            Upload files
                        </UploadButton>
                        <UploadButtonLabel>or drop them here</UploadButtonLabel>
                    </UploadButtonContainer>
                )}
            </FileUploadDropzone>
        </FileUploadContext.Provider>
    );
};
