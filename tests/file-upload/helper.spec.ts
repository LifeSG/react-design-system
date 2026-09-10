import { FileUploadHelper } from "src/file-upload/helper";

const THUMBNAIL = "data:image/png;base64,abc";

describe("FileUploadHelper.resolveThumbnailDisplay", () => {
    it("should return the image display when a thumbnail is provided", () => {
        expect(
            FileUploadHelper.resolveThumbnailDisplay("image/jpeg", THUMBNAIL)
        ).toEqual({ type: "image", src: THUMBNAIL });
    });

    it("should carry the thumbnail as the src when a pdf has one", () => {
        expect(
            FileUploadHelper.resolveThumbnailDisplay(
                "application/pdf",
                THUMBNAIL
            )
        ).toEqual({ type: "pdf-icon", src: THUMBNAIL });
    });

    it("should return the pdf icon display for a pdf without a thumbnail", () => {
        expect(
            FileUploadHelper.resolveThumbnailDisplay(
                "application/pdf",
                undefined
            )
        ).toEqual({ type: "pdf-icon" });
    });

    it("should return the image display for a non-image, non-pdf type that has a thumbnail", () => {
        expect(
            FileUploadHelper.resolveThumbnailDisplay(
                "application/msword",
                THUMBNAIL
            )
        ).toEqual({ type: "image", src: THUMBNAIL });
    });

    it("should return the image display when a thumbnail is provided without a mime type", () => {
        expect(
            FileUploadHelper.resolveThumbnailDisplay(undefined, THUMBNAIL)
        ).toEqual({ type: "image", src: THUMBNAIL });
    });

    it("should return none for a supported image type without a thumbnail", () => {
        // No placeholder inference: only a PDF gets a preview it did not supply
        expect(
            FileUploadHelper.resolveThumbnailDisplay("image/png", undefined)
        ).toEqual({ type: "none" });
    });

    it("should return none for a type that is neither an image nor a pdf", () => {
        expect(
            FileUploadHelper.resolveThumbnailDisplay(
                "application/msword",
                undefined
            )
        ).toEqual({ type: "none" });
    });

    it("should return none when the mime type is undefined", () => {
        expect(
            FileUploadHelper.resolveThumbnailDisplay(undefined, undefined)
        ).toEqual({ type: "none" });
    });

    it("should treat an empty thumbnail string as no thumbnail", () => {
        // An empty src renders a broken <img> instead of falling back to the badge
        expect(
            FileUploadHelper.resolveThumbnailDisplay("application/pdf", "")
        ).toEqual({ type: "pdf-icon", src: undefined });
    });
});
