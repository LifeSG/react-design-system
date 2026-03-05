import { parseCSSVariableValue } from "../../../src/theme/utils/css-variable";
import { setupThemeVariables } from "../setup";

describe("parseCSSVariableValue", () => {
    beforeEach(() => {
        setupThemeVariables();
    });

    it("parses a valid CSS variable with px unit", () => {
        const value = parseCSSVariableValue("var(--fds-breakpoint-md-min)");
        expect(value).toBe(481);
    });

    it("parses a valid CSS variable with rem unit", () => {
        const root = document.documentElement;
        root.style.setProperty("--fds-navbar-full-height", "24rem");
        const value = parseCSSVariableValue("var(--fds-navbar-full-height)");
        expect(value).toBe(24);
    });

    it("parses negative values correctly", () => {
        const root = document.documentElement;
        root.style.setProperty("--fds-breakpoint-margin-lg", "-10px");

        const value = parseCSSVariableValue("var(--fds-breakpoint-margin-lg)");
        expect(value).toBe(-10);
    });

    it("returns 0 for unitless value", () => {
        const root = document.documentElement;
        root.style.setProperty("--fds-breakpoint-margin-lg", "100");

        const value = parseCSSVariableValue("var(--fds-breakpoint-margin-lg)");
        expect(value).toBe(0);
    });

    it("parses a valid CSS variable with decimal values", () => {
        const root = document.documentElement;
        root.style.setProperty("--fds-breakpoint-margin-lg", "42.5px");

        const value = parseCSSVariableValue("var(--fds-breakpoint-margin-lg)");
        expect(value).toBe(42.5);
    });

    it("returns 0 for non-existent CSS variable", () => {
        const value = parseCSSVariableValue("var(--fds-spacing-8)");
        expect(value).toBe(0);
    });

    it("returns 0 for CSS variable with non-numeric value", () => {
        const root = document.documentElement;
        root.style.setProperty("--fds-breakpoint-margin-lg", "not-a-number");

        const value = parseCSSVariableValue("var(--fds-breakpoint-margin-lg)");
        expect(value).toBe(0);
    });

    it("returns 0 when window is undefined", () => {
        const originalWindow = global.window;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        delete global.window;

        const value = parseCSSVariableValue("var(--fds-breakpoint-md-min)");
        expect(value).toBe(0);

        global.window = originalWindow;
    });
});
