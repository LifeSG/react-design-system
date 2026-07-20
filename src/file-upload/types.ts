import type { FormLabelProps } from "../form/types";

/**
 * Represents a single file entry managed by `FileUpload`.
 */
export interface FileItemProps {
    /** Unique identifier used to target delete, edit, and sort operations. */
    id: string;
    /** The display name of the file */
    name: string;
    /** The MIME type of the file (e.g. `"application/pdf"`). */
    type: string;
    /** The size of the file in bytes. Displayed as formatted text when provided. */
    size: number;
    /** The alt text or description of the file */
    description?: string | undefined;
    /**
     * Upload progress expressed as a fraction between 0 and 1.
     * When provided, a progress indicator is rendered on the file item.
     */
    progress?: number | undefined;
    /**
     * Error message shown on the file item to indicate an upload failure.
     * Accepts a plain string or a React node for richer error display.
     */
    errorMessage?: string | React.ReactNode | undefined;
    /**
     * URL or data URL for a thumbnail image shown alongside the file entry.
     * When not provided, a PDF icon is displayed for PDF files only;
     * other file types show no default icon.
     */
    thumbnailImageDataUrl?: string | undefined;
    /**
     * Truncates long file names with an ellipsis when `true`.
     *
     * @default true
     */
    truncateText?: boolean | undefined;
}

/**
 * Visual style variant for `FileUpload`.
 *
 * - `"bordered"` — renders a visible border around the component.
 * - `"no-border"` — renders the component without a border.
 */
export type FileUploadStyle = "bordered" | "no-border";

// @storybookSkipProps
/**
 * Native file-input props forwarded to the underlying `<input type="file">` element.
 */
export interface FileInputProps {
    /** Defines the file types that is accepted */
    accept?: string | undefined;
    /**
     * Specifies which camera to use for capture of image or video data
     *
     * @see https://www.w3.org/TR/html-media-capture/#the-capture-attribute
     */
    capture?: boolean | "user" | "environment" | undefined;
    /** Specifies if user is allowed to select more than one file. */
    multiple?: boolean | undefined;
    disabled?: boolean | undefined;
    id?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    name?: string | undefined;
}

/** Props for the `FileUpload` component. */
export interface FileUploadProps extends FileInputProps {
    /**
     * Heading rendered at the top of the component. Accepts a plain string or a JSX
     * element for rich formatting.
     */
    title?: string | JSX.Element | undefined;
    /**
     * Supporting text rendered below `title`. Accepts a plain string or a JSX
     * element for rich formatting.
     */
    description?: string | JSX.Element | undefined;
    /**
     * Visual style variant for the component.
     *
     * @default "bordered"
     */
    styleType?: FileUploadStyle | undefined;
    /**
     * Maximum number of files the component will accept.
     * Once `fileItems.length` reaches this value, uploading is disabled until an item is removed.
     */
    maxFiles?: number | undefined;
    /**
     * Warning message rendered inside the component. Accepts a plain string
     * or a JSX element for rich formatting.
     */
    warning?: string | JSX.Element | undefined;
    /**
     * Controlled list of file items displayed in the file list.
     * Update this array in response to `onChange`, `onDelete`, `onEdit`, and
     * `onSort` to reflect the current upload state.
     */
    fileItems?: FileItemProps[] | undefined;
    /**
     * When `true`, image file items render an editable description field.
     * Editing triggers `onEdit` with the updated `FileItemProps`.
     *
     * @default false
     */
    editableFileItems?: boolean | undefined;
    /**
     * Character limit for the description input on editable image file items.
     * Only applies when `editableFileItems` is `true`.
     */
    fileDescriptionMaxLength?: number | undefined;
    /**
     * When `false`, the save button on an editable file item is enabled even
     * when the description field is empty.
     *
     * @default true
     */
    descriptionRequired?: boolean | undefined;
    /**
     * Overrides the default label and subtext for the description input field
     * on editable file items.
     */
    descriptionLabel?: FormLabelProps | undefined;
    /**
     * When `true`, file items can be reordered via drag-and-drop.
     * The reordered list is emitted via `onSort`.
     *
     * @default false
     */
    sortable?: boolean | undefined;
    /**
     * General error message rendered below the file list.
     * Accepts a plain string or a JSX element for rich formatting.
     */
    errorMessage?: string | JSX.Element | undefined;
    /**
     * When `true`, the upload button and drop zone are hidden and file items
     * are rendered without delete or edit controls.
     */
    readOnly?: boolean | undefined;
    /**
     * Overrides default label text for elements within the component.
     */
    customLabels?: { uploadButtonLabel?: string | undefined } | undefined;
    /**
     * Called with the newly uploaded files.
     * Receives only the files that fit within the remaining `maxFiles` slots.
     *
     * @param files Array of `File` objects added by the user.
     */
    onChange?: ((files: File[]) => void) | undefined;
    /**
     * Called when the user saves an edited description on a file item.
     *
     * @param fileItem The updated `FileItemProps` with the new description.
     */
    onEdit?: ((fileItem: FileItemProps) => void) | undefined;
    /**
     * Called when the user clicks the delete button on a file item.
     *
     * @param fileItem The item to be removed.
     */
    onDelete?: ((fileItem: FileItemProps) => void) | undefined;
    /**
     * Called after the user reorders file items via drag-and-drop.
     * Only fired when `sortable` is `true`.
     *
     * @param fileItems The full reordered array of `FileItemProps`.
     */
    onSort?: ((fileItems: FileItemProps[]) => void) | undefined;
}
