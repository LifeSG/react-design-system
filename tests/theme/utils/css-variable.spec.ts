import type { CSSVariableString } from "src/theme/types";
import {
    getInheritedInlineCssVariables,
    parseCSSVariableValue,
    parsePxOrRemValue,
} from "src/theme/utils";

import { setupThemeVariables } from "../setup";

describe("parseCSSVariableValue", () => {
    const root = document.documentElement;

    beforeEach(() => {
        setupThemeVariables();
    });

    it("returns a valid CSS variable with px unit", () => {
        const value = parseCSSVariableValue(
            "var(--fds-breakpoint-md-min)",
            root
        );
        expect(value).toBe("481px");
    });

    it("returns a valid CSS variable with rem unit", () => {
        root.style.setProperty("--fds-navbar-full-height", "24rem");
        const value = parseCSSVariableValue(
            "var(--fds-navbar-full-height)" as CSSVariableString,
            root
        );
        expect(value).toBe("24rem");
    });

    it("returns negative values correctly", () => {
        root.style.setProperty("--fds-breakpoint-margin-lg", "-10px");

        const value = parseCSSVariableValue(
            "var(--fds-breakpoint-margin-lg)" as CSSVariableString,
            root
        );
        expect(value).toBe("-10px");
    });

    it("returns unitless values as-is", () => {
        root.style.setProperty("--fds-breakpoint-margin-lg", "100");

        const value = parseCSSVariableValue(
            "var(--fds-breakpoint-margin-lg)" as CSSVariableString,
            root
        );
        expect(value).toBe("100");
    });

    it("returns decimal values as-is", () => {
        root.style.setProperty("--fds-breakpoint-margin-lg", "42.5px");

        const value = parseCSSVariableValue(
            "var(--fds-breakpoint-margin-lg)" as CSSVariableString,
            root
        );
        expect(value).toBe("42.5px");
    });

    it("returns empty string for non-existent CSS variable", () => {
        const value = parseCSSVariableValue("var(--fds-spacing-8)", root);
        expect(value).toBe("");
    });

    it("reads CSS variable from provided element", () => {
        const themeElement = document.createElement("div");
        themeElement.style.setProperty("--fds-breakpoint-md-min", "999px");

        const value = parseCSSVariableValue(
            "var(--fds-breakpoint-md-min)",
            themeElement
        );
        expect(value).toBe("999px");
    });

    it("returns empty string when provided element has no value", () => {
        const themeElement = document.createElement("div");

        const value = parseCSSVariableValue(
            "var(--fds-breakpoint-md-min)",
            themeElement
        );
        expect(value).toBe("");
    });

    it("returns non-numeric values", () => {
        root.style.setProperty("--fds-breakpoint-margin-lg", "not-a-number");

        const value = parseCSSVariableValue(
            "var(--fds-breakpoint-margin-lg)" as CSSVariableString,
            root
        );
        expect(value).toBe("not-a-number");
    });

    it("returns empty string when window is undefined", () => {
        const windowSpy = jest
            .spyOn(globalThis, "window", "get")
            .mockReturnValue(undefined as any);
        const consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();

        const value = parseCSSVariableValue(
            "var(--fds-breakpoint-md-min)",
            root
        );
        expect(value).toBe("");
        expect(consoleWarnSpy).toHaveBeenCalledWith(
            'Cannot parse CSS variable value for "var(--fds-breakpoint-md-min)" because window or sourceElement is not available.'
        );

        windowSpy.mockRestore();
        consoleWarnSpy.mockRestore();
    });

    it("returns empty string when sourceElement is null", () => {
        const consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();

        const value = parseCSSVariableValue(
            "var(--fds-breakpoint-md-min)",
            null
        );
        expect(value).toBe("");
        expect(consoleWarnSpy).toHaveBeenCalledWith(
            'Cannot parse CSS variable value for "var(--fds-breakpoint-md-min)" because window or sourceElement is not available.'
        );

        consoleWarnSpy.mockRestore();
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

describe("getInheritedInlineCssVariables", () => {
    it("returns empty object when themeElement is null", () => {
        const result = getInheritedInlineCssVariables(null);

        expect(result).toEqual({});
    });

    it("returns empty object when no inline styles are found", () => {
        const themeElement = document.createElement("div");

        expect(themeElement.style.length).toBe(0);
        expect(getInheritedInlineCssVariables(themeElement)).toEqual({});
    });

    it("extracts only --fds* variables from the theme element", () => {
        const themeElement = document.createElement("div");

        themeElement.style.setProperty("--fds-color", "red");
        themeElement.style.setProperty("--color", "blue");
        themeElement.style.color = "green";

        const result = getInheritedInlineCssVariables(themeElement);

        expect(result).toEqual({
            "--fds-color": "red",
        });
    });

    it("ignores --fds variables with empty or whitespace-only values", () => {
        const themeElement = document.createElement("div");

        themeElement.style.setProperty("--fds-empty", "");
        themeElement.style.setProperty("--fds-space", "   ");
        themeElement.style.setProperty("--fds-valid", "16px");

        expect(getInheritedInlineCssVariables(themeElement)).toEqual({
            "--fds-valid": "16px",
        });
    });

    it("only reads variables from the provided theme element", () => {
        const root = document.createElement("div");
        const themeElement = document.createElement("div");
        const child = document.createElement("button");

        root.style.setProperty("--fds-root", "root");
        child.style.setProperty("--fds-ref", "ref");
        themeElement.style.setProperty("--fds-theme", "theme");

        root.appendChild(themeElement);
        themeElement.appendChild(child);

        const result = getInheritedInlineCssVariables(themeElement);

        expect(result).toEqual({
            "--fds-theme": "theme",
        });
    });

    it("returns empty object when theme element has no inline --fds* variables", () => {
        const themeElement = document.createElement("div");

        themeElement.style.setProperty("--color", "red");
        themeElement.style.color = "blue";

        expect(getInheritedInlineCssVariables(themeElement)).toEqual({});
    });
});
