import { MediaQuery } from "../../src/theme/tokens";

describe("Theme Tokens", () => {
    it("maps MaxWidth breakpoints to pseudo-media selectors", () => {
        expect(MediaQuery.MaxWidth.xxs).toBe("body.fds-breakpoint-xxs-max &");
        expect(MediaQuery.MaxWidth.xs).toBe("body.fds-breakpoint-xs-max &");
        expect(MediaQuery.MaxWidth.sm).toBe("body.fds-breakpoint-sm-max &");
        expect(MediaQuery.MaxWidth.md).toBe("body.fds-breakpoint-md-max &");
        expect(MediaQuery.MaxWidth.lg).toBe("body.fds-breakpoint-lg-max &");
        expect(MediaQuery.MaxWidth.xl).toBe("body.fds-breakpoint-xl-max &");
    });

    it("maps MinWidth breakpoints to pseudo-media selectors", () => {
        expect(MediaQuery.MinWidth.xxs).toBe("body.fds-breakpoint-xxs-min &");
        expect(MediaQuery.MinWidth.xs).toBe("body.fds-breakpoint-xs-min &");
        expect(MediaQuery.MinWidth.sm).toBe("body.fds-breakpoint-sm-min &");
        expect(MediaQuery.MinWidth.md).toBe("body.fds-breakpoint-md-min &");
        expect(MediaQuery.MinWidth.lg).toBe("body.fds-breakpoint-lg-min &");
        expect(MediaQuery.MinWidth.xl).toBe("body.fds-breakpoint-xl-min &");
        expect(MediaQuery.MinWidth.xxl).toBe("body.fds-breakpoint-xxl-min &");
    });

    it("can be used as pseudo-media selector text", () => {
        const styleTag = document.createElement("style");
        styleTag.textContent = `
            .mq-token-max-width { background-color: red; }
            ${MediaQuery.MaxWidth.md} {
                .mq-token-max-width { background-color: yellow; }
            }
        `;

        expect(styleTag.textContent).toContain("body.fds-breakpoint-md-max &");
        expect(styleTag.textContent).toContain(
            ".mq-token-max-width { background-color: yellow; }"
        );
    });
});
