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
    name?: string | undefined;
}

export interface FileUploadProps extends FileInputProps {
    /** Component specific */
    title?: string | JSX.Element | undefined;
    description?: string | JSX.Element | undefined;
    /** The style type for the component. Values "bordered" | "no-border" */
    styleType?: FileUploadStyle | undefined;
    maxFiles?: number | undefined;
    warning?: string | JSX.Element | undefined;
    fileItems?: FileItemProps[] | undefined;
    /** If set, file items will be editable (only image files) */
    editableFileItems?: boolean | undefined;
    /** The max length of the description of the file (only image files) */
    descriptionMaxLength?: number | undefined;
    /** Specifies if sorting is enabled for the file items */
    sortable?: boolean | undefined;
    /** The general error message for the component */
    errorMessage?: string | undefined;
    /** Called when an upload happens via drag drop or click */
    onChange?: ((files: File[]) => void) | undefined;
    /** Called when an update to the description happens */
    onEdit?: ((fileItem: FileItemProps) => void) | undefined;
    /** Called when a file item's delete button is clicked */
    onDelete?: ((fileItem: FileItemProps) => void) | undefined;
    /** Called when a drag sort is made */
    onSort?: ((fileItems: FileItemProps[]) => void) | undefined;
}
