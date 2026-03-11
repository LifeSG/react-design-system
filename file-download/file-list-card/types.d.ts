import { FileItemDownloadProps } from "../types";
export interface FileListItemProps {
    fileItem: FileItemDownloadProps;
    onDownload: (file: FileItemDownloadProps) => void | Promise<void>;
}
