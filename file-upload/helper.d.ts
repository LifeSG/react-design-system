export declare class FileUploadHelper {
    static readonly PDF_MIME_TYPE = "application/pdf";
    static readonly PDF_ICON_URL = "https://assets.life.gov.sg/react-design-system/img/upload/pdf.svg";
    static formatFileSizeDisplay(size?: number): string;
    static isSupportedImageType(type: string): boolean;
}
