import type { FileItemDownloadProps } from "../types";
export interface FileListItemProps {
    fileItem: FileItemDownloadProps;
    descriptionLabel?: string | undefined;
    onDownload: (file: FileItemDownloadProps) => void | Promise<void>;
    onClick?: ((file: FileItemDownloadProps) => void) | undefined;
}
