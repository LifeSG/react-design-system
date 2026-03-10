import { MediaQuery } from "../../src/theme/tokens";
import { setupThemeVariables } from "./setup";

describe("Theme Tokens", () => {
    beforeEach(() => {
        setupThemeVariables();
    });

    afterEach(() => {
        document.head.querySelectorAll("style").forEach((styleTag) => {
            if (styleTag.dataset.testid === "media-query-test") {
                styleTag.remove();
            }
        });
    });

    it("applies MediaQuery.MaxWidth with exact pixel value", () => {
        const styleTag = document.createElement("style");
        styleTag.dataset.testid = "media-query-test";
        styleTag.textContent = `
            .mq-token-max-width { background-color: red; }
            ${MediaQuery.MaxWidth.md()} {
                .mq-token-max-width { background-color: yellow; }
            }
        `;

        document.head.appendChild(styleTag);

        expect(styleTag.textContent).toContain(
            "@media screen and (max-width: 768px)"
        );
        expect(styleTag.textContent).toContain(
            ".mq-token-max-width { background-color: yellow; }"
        );
    });

    it("applies MediaQuery.MinWidth with exact pixel value", () => {
        const styleTag = document.createElement("style");
        styleTag.dataset.testid = "media-query-test";
        styleTag.textContent = `
            .mq-token-min-width { background-color: red; }
            ${MediaQuery.MinWidth.xxl()} {
                .mq-token-min-width { background-color: yellow; }
            }
        `;

        document.head.appendChild(styleTag);

        expect(styleTag.textContent).toContain(
            "@media screen and (min-width: 1441px)"
        );
        expect(styleTag.textContent).toContain(
            ".mq-token-min-width { background-color: yellow; }"
        );
    });

    it("normalizes numeric breakpoint values to px", () => {
        expect(MediaQuery.MinWidth.xxs()).toBe(
            "@media screen and (min-width: 0px)"
        );
    });

    it("supports rem breakpoint values", () => {
        document.documentElement.style.setProperty(
            "--fds-breakpoint-md-max",
            "48rem"
        );

        expect(MediaQuery.MaxWidth.md()).toBe(
            "@media screen and (max-width: 48rem)"
        );
    });

    it("throws when breakpoint CSS variable value is empty", () => {
        document.documentElement.style.setProperty(
            "--fds-breakpoint-md-max",
            ""
        );

        expect(() => MediaQuery.MaxWidth.md()).toThrow(
            'Unable to resolve breakpoint token "md-max". Ensure theme CSS variables are loaded.'
        );
    });

    it("throws when breakpoint CSS variable value is missing", () => {
        document.documentElement.style.removeProperty(
            "--fds-breakpoint-md-max"
        );

        expect(() => MediaQuery.MaxWidth.md()).toThrow(
            'Unable to resolve breakpoint token "md-max". Ensure theme CSS variables are loaded.'
        );
    });

    it("throws when breakpoint CSS variable value is invalid", () => {
        document.documentElement.style.setProperty(
            "--fds-breakpoint-md-max",
            "invalid"
        );

        expect(() => MediaQuery.MaxWidth.md()).toThrow(
            'Invalid breakpoint value "invalid" for token "md-max". Expected a px or rem value.'
        );
    });
});
