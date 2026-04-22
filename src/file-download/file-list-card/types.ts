import { FileItemDownloadProps } from "../types";

/** Props for an individual file download card item. */
export interface FileListItemProps {
    /** The file item data to display. */
    fileItem: FileItemDownloadProps;
    /** Called when the user clicks to download the file. */
    onDownload: (file: FileItemDownloadProps) => void | Promise<void>;
}
