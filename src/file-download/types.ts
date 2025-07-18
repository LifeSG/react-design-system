export interface FileItemDownloadProps {
    id: string;
    /** The name of the file */
    name: string;
    /** The MIME type of the file */
    mimeType: string;
    /** The size of the file in bytes */
    size?: number | undefined;
    /** The remote path of the file */
    filePath: string;
    /** The custom error message to display when file download fails */
    errorMessage?: string | undefined;
    /** The thumbnail of the file */
    thumbnailImageDataUrl?: string | undefined;
    /** Indicates if text should be truncated */
    truncateText?: boolean | undefined;
    /** Indicate if file is ready for download, defaults to true */
    ready?: boolean | undefined;
}

export type FileDownloadStyle = "bordered" | "no-border";

export interface FileDownloadProps {
    /** Component specific */
    title?: string | React.JSX.Element | undefined;
    description?: string | React.JSX.Element | undefined;
    fileItems: FileItemDownloadProps[];
    /** The style type for the component. Values "bordered" | "no-border" */
    styleType?: FileDownloadStyle | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    id?: string | undefined;
    /** Called when file item is clicked  */
    onDownload: (file: FileItemDownloadProps) => void | Promise<void>;
}
