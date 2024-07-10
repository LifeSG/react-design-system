import { FileItemProps } from "../types";

export interface FileListItemProps {
    fileItem: FileItemProps;
    onDownload: (fileItem: FileItemProps) => void;
}
