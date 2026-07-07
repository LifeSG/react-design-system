import type { FileDownloadProps } from "./types";
/**
 * Displays a list of downloadable files, optionally grouped under a title and description.
 *
 * Use `FileDownload` to present one or more files that users can download individually.
 * Each file item renders as a card with file metadata and a download trigger.
 */
export declare const FileDownload: ({ id, fileItems, title, description, onDownload, "data-testid": testId, className, styleType, }: FileDownloadProps) => import("react/jsx-runtime").JSX.Element;
