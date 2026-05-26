import { useRef, useState } from "react";

import { Alert } from "../alert";
import { Button } from "../button";
import { Markup } from "../markup";
import { Typography } from "../typography";
import { FileUploadContext } from "./context";
import type { DropzoneElement } from "./dropzone";
import { FileUploadDropzone } from "./dropzone";
import type { FileListRef } from "./file-list";
import { FileList } from "./file-list";
import * as styles from "./file-upload.styles";
import type { FileItemProps, FileUploadProps } from "./types";

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
    customLabels,
    onChange,
    onDelete,
    onEdit,
    onSort,
}: FileUploadProps) => {
    const labels = {
        uploadButton: customLabels?.uploadButtonLabel || "Upload files",
    };
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const dropzoneRef = useRef<DropzoneElement>(null);
    const fileListRef = useRef<FileListRef>(null);
    const [activeId, setActiveId] = useState<string>();

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleChange = (files: File[]) => {
        if (!disabled && onChange) {
            onChange(files);
            fileListRef.current?.focus();
        }
    };

    const handleItemDelete = (item: FileItemProps) => {
        if (onDelete) {
            onDelete(item);
            fileListRef.current?.focus();
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
        return maxFiles && fileItems ? fileItems.length >= maxFiles : false;
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderTitle = () => {
        if (!title) {
            return null;
        }

        if (typeof title === "string") {
            return <Typography.BodyBL>{title}</Typography.BodyBL>;
        }

        return (
            <Markup
                className={styles.markupContainer}
                baseTextSize="body-baseline"
            >
                {title}
            </Markup>
        );
    };

    const renderDescription = () => {
        if (!description) {
            return null;
        }

        if (typeof description === "string") {
            return (
                <Typography.BodyMD className={styles.description}>
                    {description}
                </Typography.BodyMD>
            );
        }

        return (
            <Markup className={styles.markupContainer} baseTextSize="body-md">
                {description}
            </Markup>
        );
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
                {!!(title || description) && (
                    <div className={styles.textContainer}>
                        {renderTitle()}
                        {renderDescription()}
                    </div>
                )}
                {!!warning && (
                    <Alert className={styles.warningAlert} type="warning">
                        {warning}
                    </Alert>
                )}
                <FileList
                    ref={fileListRef}
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
                    <Alert className={styles.errorAlert} type="error">
                        {errorMessage}
                    </Alert>
                )}
                {!readOnly && (
                    <div className={styles.uploadButtonContainer}>
                        <Button
                            type="button"
                            sizeType="small"
                            styleType="secondary"
                            disabled={
                                !!activeId || disabled || reachedMaxFiles()
                            }
                            onClick={handleUploadButtonClick}
                            className={styles.uploadButton}
                        >
                            {labels.uploadButton}
                        </Button>
                        <Typography.BodyMD
                            className={styles.uploadButtonText}
                            weight="semibold"
                        >
                            or drop them here
                        </Typography.BodyMD>
                    </div>
                )}
            </FileUploadDropzone>
        </FileUploadContext.Provider>
    );
};
