import { MediaQuery } from "src/theme/tokens";

describe("Theme Tokens", () => {
    it("maps MaxWidth breakpoints to pseudo-media selectors", () => {
        expect(MediaQuery.MaxWidth).toEqual({
            xxs: "body.fds-breakpoint-xxs-max &",
            xs: "body.fds-breakpoint-xs-max &",
            sm: "body.fds-breakpoint-sm-max &",
            md: "body.fds-breakpoint-md-max &",
            lg: "body.fds-breakpoint-lg-max &",
            xl: "body.fds-breakpoint-xl-max &",
        });
    });

    it("maps MinWidth breakpoints to pseudo-media selectors", () => {
        expect(MediaQuery.MinWidth).toEqual({
            xxs: "body.fds-breakpoint-xxs-min &",
            xs: "body.fds-breakpoint-xs-min &",
            sm: "body.fds-breakpoint-sm-min &",
            md: "body.fds-breakpoint-md-min &",
            lg: "body.fds-breakpoint-lg-min &",
            xl: "body.fds-breakpoint-xl-min &",
            xxl: "body.fds-breakpoint-xxl-min &",
        });
    });
});
