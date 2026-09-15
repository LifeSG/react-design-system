/**
 * How a file's thumbnail slot should be rendered.
 *
 * - `image` — a thumbnail was supplied; render it at `src`
 * - `pdf-icon` — a PDF with no thumbnail; render the PDF badge borderless
 * - `none` — nothing to show; render no thumbnail slot at all
 */
export type FileThumbnailDisplay = {
    type: "image";
    src: string;
} | {
    type: "pdf-icon";
} | {
    type: "none";
};
export declare namespace FileUploadHelper {
    const PDF_MIME_TYPE = "application/pdf";
    const PDF_ICON_URL = "https://assets.life.gov.sg/react-design-system/img/upload/pdf.svg";
    const formatFileSizeDisplay: (size?: number) => string;
    const isSupportedImageType: (type: string) => boolean;
    /**
     * Decides how a file's thumbnail slot should render, given its MIME type
     * and any thumbnail the consumer supplied.
     *
     * Lives on `FileUploadHelper` so `FileUpload` can adopt it later. Today
     * only `FileDownload` calls it: `FileUpload` still decides this inline in
     * `file-list-item-thumbnail.tsx`, and the two do NOT yet agree — for a
     * non-PDF with no thumbnail this returns `"none"` while `FileUpload`
     * renders an `<img>` with an empty `src`. Do not read this as an invariant
     * the two components already share.
     *
     * Callers render the result with their own markup, because their thumbnails
     * change size at different breakpoints.
     */
    const resolveThumbnailDisplay: (mimeType: string | undefined, thumbnailImageDataUrl: string | undefined) => FileThumbnailDisplay;
}
