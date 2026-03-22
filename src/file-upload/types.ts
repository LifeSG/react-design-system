/**
 * Props for an individual file item displayed in the upload list.
 */
export interface FileItemProps {
    id: string;
    /** The name of the file */
    name: string;
    /** The MIME type of the file */
    type: string;
    /** The size of the file in bytes */
    size: number;
    /** The alt text or description of the file */
    description?: string | undefined;
    /** The upload progress display. Values from 0 to 1 */
    progress?: number | undefined;
    /** The error message display to indicate file upload error */
    errorMessage?: string | undefined;
    /** The thumbnail of the file that will be rendered */
    thumbnailImageDataUrl?: string | undefined;
    /** Indicates if text should be truncated */
    truncateText?: boolean | undefined;
}

export type FileUploadStyle = "bordered" | "no-border";

/**
 * HTML file input pass-through attributes for the hidden `<input type="file">` element.
 */
export interface FileInputProps {
    /** Defines the file types that is accepted */
    accept?: string | undefined;
    /** Specifies which camera to use for capture of image or video data  */
    capture?: boolean | "user" | "environment" | undefined; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
    /** Specifies if user is allowed to select more than one file. */
    multiple?: boolean | undefined;
    disabled?: boolean | undefined;
    id?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    name?: string | undefined;
}

/**
 * Props for the FileUpload component - drag-and-drop file input.
 *
 * Renders a drop zone with optional file list, sortable items, editable
 * descriptions, and error display. Extends `FileInputProps` (the underlying
 * `<input type="file">` attributes).
 *
 * @example
 * ```tsx
 * <FileUpload
 *     title="Upload documents"
 *     maxFiles={5}
 *     fileItems={uploadedFiles}
 *     onChange={(files) => handleUpload(files)}
 *     onDelete={(item) => handleDelete(item)}
 * />
 * ```
 * @keywords drop zone, drag and drop, attachment, file input, upload field
 */
export interface FileUploadProps extends FileInputProps {
    /** Component specific */
    title?: string | JSX.Element | undefined;
    description?: string | JSX.Element | undefined;
    /** The style type for the component. Values "bordered" | "no-border" */
    styleType?: FileUploadStyle | undefined;
    /** The maximum number of files the user can upload. */
    maxFiles?: number | undefined;
    /** A warning message displayed below the drop zone. */
    warning?: string | JSX.Element | undefined;
    /** The list of uploaded file items to render. */
    fileItems?: FileItemProps[] | undefined;
    /** If set, file items will have editable descriptions (only image files) */
    editableFileItems?: boolean | undefined;
    /** The max length of the description of the file (only image files) */
    fileDescriptionMaxLength?: number | undefined;
    /** Specifies if sorting is enabled for the file items */
    sortable?: boolean | undefined;
    /** The general error message for the component */
    errorMessage?: string | undefined;
    /** Indicates if the component is in the readonly state */
    readOnly?: boolean | undefined;
    /** Called when an upload happens via drag drop or click */
    onChange?: ((files: File[]) => void) | undefined;
    /** Called when an update to the description happens */
    onEdit?: ((fileItem: FileItemProps) => void) | undefined;
    /** Called when a file item's delete button is clicked */
    onDelete?: ((fileItem: FileItemProps) => void) | undefined;
    /** Called when a drag sort is made */
    onSort?: ((fileItems: FileItemProps[]) => void) | undefined;
}
