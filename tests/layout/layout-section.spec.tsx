import { render } from "@testing-library/react";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import { ThemeSpec } from "../../src/theme/types";
import { Section } from "../../src/layout/section";

const mockTheme: ThemeSpec = {
    colourScheme: "lifesg",
    fontScheme: "lifesg",
    animationScheme: "lifesg",
    borderScheme: "lifesg",
    spacingScheme: "lifesg",
    radiusScheme: "lifesg",
    breakpointScheme: "lifesg",
};

describe("Section Component", () => {
    it("should render with default block display and apply default padding when 'stretch' prop is not provided", () => {
        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <Section>Content</Section>
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule("display", "block");
        expect(container.firstChild).toHaveStyleRule("padding", "0 1.5rem");
        expect(container.firstChild).toHaveStyleRule(
            "padding-left",
            "1.5rem !important"
        );
        expect(container.firstChild).toHaveStyleRule(
            "padding-right",
            "1.5rem !important"
        );
    });

    it("should apply stretch styles when 'stretch' prop is true", () => {
        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <Section stretch>Content</Section>
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule("padding", "0 1.5rem", {
            media: `screen and (max-width: 1440px)`,
        });
        expect(container.firstChild).toHaveStyleRule(
            "padding-left",
            "1.5rem !important",
            {
                media: `screen and (max-width: 1440px)`,
            }
        );
        expect(container.firstChild).toHaveStyleRule(
            "padding-right",
            "1.5rem !important",
            {
                media: `screen and (max-width: 1440px)`,
            }
        );
    });

    it("should apply media query styles correctly for default", () => {
        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <Section>Content</Section>
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule("padding", "0 1.5rem");
        expect(container.firstChild).toHaveStyleRule(
            "padding-left",
            "1.5rem !important"
        );
        expect(container.firstChild).toHaveStyleRule(
            "padding-right",
            "1.5rem !important"
        );
    });
});
