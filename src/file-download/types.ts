import { Readable } from "stream";

export interface FileItemProps {
    id: string;
    /** The name of the file */
    name: string;
    /** The MIME type of the file */
    type: string;
    /** The size of the file in bytes */
    size: number;
    /** The path of the file in S3 server*/
    filePath: string;
    /** The custom error message when file download when wrong */
    errorMessage?: string | undefined;
    /** The thumbnail of the file that will be rendered */
    thumbnailImageDataUrl?: string | undefined;
}

export interface FileDownloadProps {
    /** Component specific */
    title?: string | JSX.Element | undefined;
    description?: string | JSX.Element | undefined;
    fileItems: FileItemProps[] | undefined;
    /** Called when click on download button  */
    onDownload: ((files: FileItemProps) => void) | undefined;
}
