export interface FileDownloadProps {
    "data-testid"?: string | undefined;
    /** className of file download component */
    className?: string | undefined;
    /** The name of the file */
    fileName: string;
    /** File to be downloaded on click */
    file?: Blob | undefined;
    /** File size in bytes */
    fileSize?: number | undefined;
    /** Toggles the loading state of file download component */
    loading?: boolean | undefined;
    /** Indicates if text should be truncated */
    truncateText?: boolean | undefined;
    /** Called when file download component is clicked */
    onClick?: () => void | undefined;
    /** Icon to be rendered in icon button component */
    downloadIcon?: JSX.Element | undefined;
    /** aria label of component */
    ariaLabel?: string | undefined;
}
