import { CSSVariableString } from "src/theme/types";
import { parseCSSVariableValue, parsePxOrRemValue } from "src/theme/utils";
import { setupThemeVariables } from "../setup";

describe("parseCSSVariableValue", () => {
    beforeEach(() => {
        setupThemeVariables();
    });

    it("returns a valid CSS variable with px unit", () => {
        const value = parseCSSVariableValue("var(--fds-breakpoint-md-min)");
        expect(value).toBe("481px");
    });

    it("returns a valid CSS variable with rem unit", () => {
        const root = document.documentElement;
        root.style.setProperty("--fds-navbar-full-height", "24rem");
        const value = parseCSSVariableValue(
            "var(--fds-navbar-full-height)" as CSSVariableString
        );
        expect(value).toBe("24rem");
    });

    it("returns negative values correctly", () => {
        const root = document.documentElement;
        root.style.setProperty("--fds-breakpoint-margin-lg", "-10px");

        const value = parseCSSVariableValue(
            "var(--fds-breakpoint-margin-lg)" as CSSVariableString
        );
        expect(value).toBe("-10px");
    });

    it("returns unitless values as-is", () => {
        const root = document.documentElement;
        root.style.setProperty("--fds-breakpoint-margin-lg", "100");

        const value = parseCSSVariableValue(
            "var(--fds-breakpoint-margin-lg)" as CSSVariableString
        );
        expect(value).toBe("100");
    });

    it("returns decimal values as-is", () => {
        const root = document.documentElement;
        root.style.setProperty("--fds-breakpoint-margin-lg", "42.5px");

        const value = parseCSSVariableValue(
            "var(--fds-breakpoint-margin-lg)" as CSSVariableString
        );
        expect(value).toBe("42.5px");
    });

    it("returns empty string for non-existent CSS variable", () => {
        const value = parseCSSVariableValue("var(--fds-spacing-8)");
        expect(value).toBe("");
    });

    it("returns non-numeric values", () => {
        const root = document.documentElement;
        root.style.setProperty("--fds-breakpoint-margin-lg", "not-a-number");

        const value = parseCSSVariableValue(
            "var(--fds-breakpoint-margin-lg)" as CSSVariableString
        );
        expect(value).toBe("not-a-number");
    });

    it("returns empty string when window is undefined", () => {
        const originalWindow = globalThis.window;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        delete globalThis.window;

        const value = parseCSSVariableValue("var(--fds-breakpoint-md-min)");
        expect(value).toBe("");

        globalThis.window = originalWindow;
    });
});

describe("parsePxOrRemValue", () => {
    beforeEach(() => {
        document.documentElement.style.fontSize = "16px";
    });

    it("parses px values", () => {
        expect(parsePxOrRemValue("481px")).toBe(481);
    });

    it("parses rem values", () => {
        expect(parsePxOrRemValue("24rem")).toBe(384);
    });

    it("converts rem values to px based on root font size", () => {
        document.documentElement.style.fontSize = "20px";
        expect(parsePxOrRemValue("24rem")).toBe(480);
    });

    it("parses negative values", () => {
        expect(parsePxOrRemValue("-10px")).toBe(-10);
    });

    it("parses decimal values", () => {
        expect(parsePxOrRemValue("42.5px")).toBe(42.5);
    });

    it("returns 0 for unitless values", () => {
        expect(parsePxOrRemValue("100")).toBe(0);
    });

    it("returns 0 for unsupported units", () => {
        expect(parsePxOrRemValue("10em")).toBe(0);
    });

    it("returns 0 for non-numeric values", () => {
        expect(parsePxOrRemValue("not-a-number")).toBe(0);
    });

    it("falls back to 16px font size for rem conversion when font size is invalid", () => {
        document.documentElement.style.fontSize = "invalid-size";
        expect(parsePxOrRemValue("1.5rem")).toBe(24);
    });
});
