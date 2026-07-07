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
}
