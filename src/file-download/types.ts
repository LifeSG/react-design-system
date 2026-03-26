/**
 * Represents a single file item available for download.
 *
 * @keywords file, download, item, attachment
 */
export interface FileItemDownloadProps {
    /** The unique identifier of the file. */
    id: string;
    /** The name of the file */
    name: string;
    /** The MIME type of the file */
    mimeType: string;
    /** The size of the file in bytes */
    size?: number | undefined;
    /** The remote path of the file */
    filePath: string;
    /** A custom error message to display when file download fails */
    errorMessage?: string | React.ReactNode | undefined;
    /** The thumbnail of the file */
    thumbnailImageDataUrl?: string | undefined;
    /** Indicates if text should be truncated */
    truncateText?: boolean | undefined;
    /** Indicate if file is ready for download, defaults to true */
    ready?: boolean | undefined;
}

export type FileDownloadStyle = "bordered" | "no-border";

/**
 * A component that allows for downloading files.
 *
 * @keywords file-download, download, attachment, file
 */
export interface FileDownloadProps {
    /** A title to be displayed for the component. */
    title?: string | JSX.Element | undefined;
    /** The description to be displayed. */
    description?: string | JSX.Element | undefined;
    /** The files to be rendered. */
    fileItems: FileItemDownloadProps[];
    /** The style type for the component. Values "bordered" | "no-border". @default "bordered" */
    styleType?: FileDownloadStyle | undefined;
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** Unique identifier for the component. */
    id?: string | undefined;
    /** Called when file item is clicked  */
    onDownload: (file: FileItemDownloadProps) => void | Promise<void>;
}
