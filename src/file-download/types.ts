/**
 * Metadata describing a single downloadable file item.
 */
export interface FileItemDownloadProps {
    id: string;
    /** The display name of the file. */
    name: string;
    /** The MIME type of the file (e.g. `"application/pdf"`). */
    mimeType: string;
    /** The size of the file in bytes. Displayed as formatted text when provided. */
    size?: number | undefined;
    /** The remote path or URL used to fetch the file for download. */
    filePath: string;
    /**
     * Error message shown on the file item to indicate a download failure.
     * Accepts a plain string or a React node for richer error display.
     */
    errorMessage?: string | React.ReactNode | undefined;
    /** URL or data URL for a thumbnail image shown alongside the file entry. */
    thumbnailImageDataUrl?: string | undefined;
    /** Truncates long file names with an ellipsis when `true`. */
    truncateText?: boolean | undefined;
    /**
     * Indicates the file is available and ready to be downloaded.
     *
     * @default true
     */
    ready?: boolean | undefined;
}

/** Visual style variant controlling whether the component renders with a dashed border. */
export type FileDownloadStyle = "bordered" | "no-border";

/**
 * Props for the `FileDownload` component.
 */
export interface FileDownloadProps {
    /**
     * Optional heading rendered above the file list.
     * Accepts a plain string or a JSX element for rich content.
     */
    title?: string | JSX.Element | undefined;
    /**
     * Optional text rendered beneath the title.
     * Accepts a plain string or a JSX element for rich content.
     */
    description?: string | JSX.Element | undefined;
    /** The list of file items to display. When empty, no file cards are rendered. */
    fileItems: FileItemDownloadProps[];
    /**
     * Controls whether the component is wrapped in a dashed border.
     *
     * @default "bordered"
     */
    styleType?: FileDownloadStyle | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    id?: string | undefined;
    /**
     * Called when the user triggers a download for an individual file item.
     * May return a `Promise` to handle async download logic; the component awaits resolution.
     * If the callback throws or the promise rejects, the item is marked as failed
     * and the error UI is shown for that file card.
     *
     * @param file The file item that was activated for download.
     */
    onDownload: (file: FileItemDownloadProps) => void | Promise<void>;
}
