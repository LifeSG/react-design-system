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
        root.style.setProperty("--fds-test-rem", "24rem");
        const value = parseCSSVariableValue("var(--fds-test-rem)");
        expect(value).toBe(24);
    });

    it("returns 0 for unitless value even if fds", () => {
        const root = document.documentElement;
        root.style.setProperty("--fds-test-unitless", "100");

        const value = parseCSSVariableValue("var(--fds-test-unitless)");
        expect(value).toBe(0);
    });

    it("parses a valid CSS variable with decimal values", () => {
        const root = document.documentElement;
        root.style.setProperty("--fds-test-decimal", "42.5px");

        const value = parseCSSVariableValue("var(--fds-test-decimal)");
        expect(value).toBe(42.5);
    });
    it("returns 0 for non-existent CSS variable", () => {
        const value = parseCSSVariableValue("var(--fds-non-existent-variable)");
        expect(value).toBe(0);
    });

    it("returns 0 for invalid CSS variable string", () => {
        const value = parseCSSVariableValue("not-a-valid-var");
        expect(value).toBe(0);
    });

    it("returns 0 for CSS variable with non-numeric value", () => {
        const root = document.documentElement;
        root.style.setProperty("--fds-test-non-numeric", "not-a-number");

        const value = parseCSSVariableValue("var(--fds-test-non-numeric)");
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

    it("handles empty string input", () => {
        const value = parseCSSVariableValue("");
        expect(value).toBe(0);
    });

    it("returns 0 for negative non-fds values", () => {
        const root = document.documentElement;
        root.style.setProperty("--test-negative", "-10px");

        const value = parseCSSVariableValue("var(--test-negative)");
        expect(value).toBe(0);
    });
});
