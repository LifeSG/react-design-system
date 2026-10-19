import { FileHelper } from "src/util";

const THUMBNAIL = "data:image/png;base64,abc";

describe("FileHelper.formatFileSizeDisplay", () => {
    describe("numeric", () => {
        it("should return '0 KB' when size is 0", () => {
            expect(FileHelper.formatFileSizeDisplay(0)).toBe("0 KB");
        });

        it("should format bytes", () => {
            expect(FileHelper.formatFileSizeDisplay(500)).toBe("500 B");
        });

        it("should format kilobytes", () => {
            expect(FileHelper.formatFileSizeDisplay(1024)).toBe("1 KB");
        });

        it("should format megabytes", () => {
            expect(FileHelper.formatFileSizeDisplay(1048576)).toBe("1 MB");
        });

        it("should format gigabytes", () => {
            expect(FileHelper.formatFileSizeDisplay(1073741824)).toBe("1 GB");
        });

        it("should round to the nearest integer", () => {
            expect(FileHelper.formatFileSizeDisplay(1536)).toBe("2 KB");
        });
    });

    describe("string", () => {
        it("should return the trimmed string when size is a string", () => {
            expect(FileHelper.formatFileSizeDisplay("  2 MB  ")).toBe("2 MB");
        });

        it("should return an empty string when size is a whitespace-only string", () => {
            expect(FileHelper.formatFileSizeDisplay("   ")).toBe("");
        });
    });

    it("should return the default value when size is undefined", () => {
        expect(FileHelper.formatFileSizeDisplay(undefined, "unknown")).toBe(
            "unknown"
        );
    });

    it("should return the default value when size is negative", () => {
        expect(FileHelper.formatFileSizeDisplay(-1, "N/A")).toBe("N/A");
    });
});

describe("FileHelper.resolveThumbnailDisplay", () => {
    it("should return the image display when a thumbnail is provided", () => {
        expect(
            FileHelper.resolveThumbnailDisplay("image/jpeg", THUMBNAIL)
        ).toEqual({ type: "image", src: THUMBNAIL });
    });

    it("should return the image display for a pdf that has a thumbnail", () => {
        expect(
            FileHelper.resolveThumbnailDisplay("application/pdf", THUMBNAIL)
        ).toEqual({ type: "image", src: THUMBNAIL });
    });

    it("should return the pdf icon display for a pdf without a thumbnail", () => {
        expect(
            FileHelper.resolveThumbnailDisplay("application/pdf", undefined)
        ).toEqual({ type: "pdf-icon" });
    });

    it("should return the image display for a non-image, non-pdf type that has a thumbnail", () => {
        expect(
            FileHelper.resolveThumbnailDisplay("application/msword", THUMBNAIL)
        ).toEqual({ type: "image", src: THUMBNAIL });
    });

    it("should return the image display when a thumbnail is provided without a mime type", () => {
        expect(
            FileHelper.resolveThumbnailDisplay(undefined, THUMBNAIL)
        ).toEqual({ type: "image", src: THUMBNAIL });
    });

    it("should return none for a supported image type without a thumbnail", () => {
        // No placeholder inference: only a PDF gets a preview it did not supply
        expect(
            FileHelper.resolveThumbnailDisplay("image/png", undefined)
        ).toEqual({ type: "none" });
    });

    it("should return none for a type that is neither an image nor a pdf", () => {
        expect(
            FileHelper.resolveThumbnailDisplay("application/msword", undefined)
        ).toEqual({ type: "none" });
    });

    it("should return none when the mime type is undefined", () => {
        expect(
            FileHelper.resolveThumbnailDisplay(undefined, undefined)
        ).toEqual({ type: "none" });
    });

    it("should treat an empty thumbnail string as no thumbnail", () => {
        // An empty src renders a broken <img> instead of falling back to the badge
        expect(
            FileHelper.resolveThumbnailDisplay("application/pdf", "")
        ).toEqual({ type: "pdf-icon" });
    });
});
