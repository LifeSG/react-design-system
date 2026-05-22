import { MediaQuery } from "src/theme/tokens";

describe("Theme Tokens", () => {
    it("maps MaxWidth breakpoints to pseudo-media selectors", () => {
        expect(MediaQuery.MaxWidth).toEqual({
            xxs: ":where(body.fds-breakpoint-xxs-max) &",
            xs: ":where(body.fds-breakpoint-xs-max) &",
            sm: ":where(body.fds-breakpoint-sm-max) &",
            md: ":where(body.fds-breakpoint-md-max) &",
            lg: ":where(body.fds-breakpoint-lg-max) &",
            xl: ":where(body.fds-breakpoint-xl-max) &",
        });
    });

    it("maps MinWidth breakpoints to pseudo-media selectors", () => {
        expect(MediaQuery.MinWidth).toEqual({
            xxs: ":where(body.fds-breakpoint-xxs-min) &",
            xs: ":where(body.fds-breakpoint-xs-min) &",
            sm: ":where(body.fds-breakpoint-sm-min) &",
            md: ":where(body.fds-breakpoint-md-min) &",
            lg: ":where(body.fds-breakpoint-lg-min) &",
            xl: ":where(body.fds-breakpoint-xl-min) &",
            xxl: ":where(body.fds-breakpoint-xxl-min) &",
        });
    });

    it("maps Orientation values to native media queries", () => {
        expect(MediaQuery.Orientation).toEqual({
            landscape: "@media (orientation: landscape)",
            portrait: "@media (orientation: portrait)",
        });
    });
});
