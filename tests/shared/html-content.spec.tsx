import { applyHtmlContentStyle } from "src/shared/html-content/html-content";

describe("applyHtmlContentStyle", () => {
    it("returns base class name when text size is not provided", () => {
        expect(applyHtmlContentStyle()).toMatch(/^\S+$/);
        expect(applyHtmlContentStyle({})).toMatch(/^\S+$/);
    });

    it("returns base class and text-size class when text size is provided", () => {
        const classNames = applyHtmlContentStyle({ textSize: "body-sm" });

        const classNameArray = classNames.split(" ");
        expect(classNameArray).toHaveLength(2);
        expect(classNameArray[1]).toContain("body-sm");
    });

    it("returns different classes for different text sizes", () => {
        const bodySmClassNames = applyHtmlContentStyle({ textSize: "body-sm" });
        const bodyMdClassNames = applyHtmlContentStyle({ textSize: "body-md" });

        expect(bodySmClassNames).not.toEqual(bodyMdClassNames);
    });
});
