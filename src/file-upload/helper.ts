/**
 * How a file's thumbnail slot should be rendered.
 *
 * - `image` — a thumbnail was supplied; render it at `src`
 * - `pdf-icon` — a PDF. `src` carries its thumbnail when it has one; with no `src`, render the PDF badge borderless
 * - `none` — nothing to show; render no thumbnail slot at all
 */
export type FileThumbnailDisplay =
    | { type: "image"; src: string }
    | { type: "pdf-icon"; src?: string | undefined }
    | { type: "none" };

export class FileUploadHelper {
    public static readonly PDF_MIME_TYPE = "application/pdf";
    public static readonly PDF_ICON_URL =
        "https://assets.life.gov.sg/react-design-system/img/upload/pdf.svg";

    // Adapted from https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-size-to-kb-mb-gb-in-javascript
    public static formatFileSizeDisplay(size?: number) {
        if (!size || size === 0) return "0 KB";

        const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const index: number = Math.floor(Math.log(size) / Math.log(1024));

        const value = Number(size / Math.pow(1024, index)).toFixed(0);
        const measurement = sizes[index];

        return `${value} ${measurement}`;
    }

    public static isSupportedImageType(type: string): boolean {
        /** Currently only images supported by html <img> */
        const acceptedImageTypes = [
            "image/avif",
            "image/gif",
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/webp",
        ];

        return acceptedImageTypes.includes(type);
    }

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
    public static resolveThumbnailDisplay(
        mimeType: string | undefined,
        thumbnailImageDataUrl: string | undefined
    ): FileThumbnailDisplay {
        /*
         * An empty string is not a usable src. Normalising it away here keeps
         * the PDF branch falling back to the badge instead of handing the
         * caller an empty <img>.
         */
        const src = thumbnailImageDataUrl ? thumbnailImageDataUrl : undefined;

        if (mimeType === FileUploadHelper.PDF_MIME_TYPE) {
            return { type: "pdf-icon", src };
        }

        if (src) {
            return { type: "image", src };
        }

        return { type: "none" };
    }
}
