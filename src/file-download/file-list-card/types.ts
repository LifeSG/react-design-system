import { FileItemDownloadProps } from "../types";

export interface FileListItemProps {
    fileItem: FileItemDownloadProps;
    onDownload: (fileItem: FileItemDownloadProps) => void;
}
