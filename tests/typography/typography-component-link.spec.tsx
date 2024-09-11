import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import { Typography } from "../../src/typography/typography";
import { ThemeSpec } from "../../src/theme/types";
import { ThemeProvider } from "styled-components";

describe("Typography Link Components", () => {
    it("renders LinkBL with correct styles", () => {
        const mockTheme: ThemeSpec = {
            colourScheme: "lifesg",
            fontScheme: "lifesg",
            animationScheme: "lifesg",
            borderScheme: "lifesg",
            spacingScheme: "lifesg",
            radiusScheme: "lifesg",
            breakpointScheme: "lifesg",
        };

        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <Typography.LinkBL weight="regular">
                    This is a baseline link
                </Typography.LinkBL>
            </ThemeProvider>
        );

        const link = container.firstChild;
        expect(link).toHaveStyleRule("font-size", "1.125rem");
        expect(link).toHaveStyleRule("line-height", "1.625rem");
        expect(link).toHaveStyleRule("letter-spacing", "0rem");
        expect(link).toHaveStyleRule("font-weight", "400");
        expect(link).toHaveStyleRule("color", "#1768BE");
    });

    it("renders LinkLG with correct styles", () => {
        const mockTheme: ThemeSpec = {
            colourScheme: "lifesg",
            fontScheme: "lifesg",
            animationScheme: "lifesg",
            borderScheme: "lifesg",
            spacingScheme: "lifesg",
            radiusScheme: "lifesg",
            breakpointScheme: "lifesg",
        };

        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <Typography.LinkLG weight="semibold" inline>
                    This is a large link
                </Typography.LinkLG>
            </ThemeProvider>
        );

        const link = container.firstChild;
        expect(link).toHaveStyleRule("font-size", "1rem");
        expect(link).toHaveStyleRule("line-height", "1.5rem");
        expect(link).toHaveStyleRule("letter-spacing", "0.014rem");
        expect(link).toHaveStyleRule("font-weight", "600");
        expect(link).toHaveStyleRule("display", "inline");
        expect(link).toHaveStyleRule("color", "#1768BE");
    });

    it("renders external LinkSM with external icon", () => {
        const mockTheme: ThemeSpec = {
            colourScheme: "lifesg",
            fontScheme: "lifesg",
            animationScheme: "lifesg",
            borderScheme: "lifesg",
            spacingScheme: "lifesg",
            radiusScheme: "lifesg",
            breakpointScheme: "lifesg",
        };

        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <Typography.LinkSM external>
                    External Small Link
                </Typography.LinkSM>
            </ThemeProvider>
        );

        const link = container.firstChild;
        expect(link).toHaveStyleRule("font-size", "0.75rem");
        expect(link).toHaveStyleRule("line-height", "1.2rem");
        expect(link).toHaveStyleRule("letter-spacing", "0.012rem");
        expect(link).toHaveStyleRule("color", "#1768BE");

        const icon = container.querySelector("svg");
        expect(icon).not.toBeNull();
    });
});
