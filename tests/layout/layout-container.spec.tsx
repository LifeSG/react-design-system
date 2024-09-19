import { render } from "@testing-library/react";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import { ThemeSpec } from "../../src/theme/types";
import { Container } from "../../src/layout/container";

const mockTheme: ThemeSpec = {
    colourScheme: "lifesg",
    fontScheme: "lifesg",
    animationScheme: "lifesg",
    borderScheme: "lifesg",
    spacingScheme: "lifesg",
    radiusScheme: "lifesg",
    breakpointScheme: "lifesg",
};

describe("Container Component", () => {
    it("should render with flex layout by default", () => {
        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <Container>Content</Container>
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule("display", "flex");
    });

    it("should render with flex-column layout when type is 'flex-column'", () => {
        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <Container type="flex-column">Content</Container>
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule("display", "flex");
        expect(container.firstChild).toHaveStyleRule(
            "flex-direction",
            "column"
        );
    });

    it("should render with grid layout when type is 'grid'", () => {
        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <Container type="grid">Content</Container>
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule("display", "grid");
        expect(container.firstChild).toHaveStyleRule(
            "grid-template-columns",
            "repeat(12,minmax(0,1fr))"
        );
    });

    it("should apply stretch styles when 'stretch' prop is true", () => {
        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <Container stretch>Content</Container>
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule("padding", "0 3rem");
        expect(container.firstChild).toHaveStyleRule("width", "auto");
    });

    it("should apply responsive styles based on media queries", () => {
        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <Container>Content</Container>
            </ThemeProvider>
        );

        // Check styles for xl-max media query
        expect(container.firstChild).toHaveStyleRule("max-width", "1140px", {
            media: `screen and (max-width: 1440px)`,
        });

        expect(container.firstChild).toHaveStyleRule("max-width", "720px", {
            media: `screen and (max-width: 767px)`,
        });

        expect(container.firstChild).toHaveStyleRule("width", "100%", {
            media: `screen and (max-width: 420px)`,
        });
        expect(container.firstChild).toHaveStyleRule("padding", "0", {
            media: `screen and (max-width: 420px)`,
        });
        expect(container.firstChild).toHaveStyleRule("max-width", "unset", {
            media: `screen and (max-width: 420px)`,
        });
    });

    it("should apply responsive grid styles based on media queries", () => {
        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <Container type="grid">Content</Container>
            </ThemeProvider>
        );

        // Check grid styles for md-max media query
        expect(container.firstChild).toHaveStyleRule("column-gap", "1.5rem", {
            media: `screen and (max-width: 767px)`,
        });
        expect(container.firstChild).toHaveStyleRule(
            "grid-template-columns",
            "repeat(8,minmax(0,1fr))",
            {
                media: `screen and (max-width: 767px)`,
            }
        );

        expect(container.firstChild).toHaveStyleRule("column-gap", "1rem", {
            media: `screen and (max-width: 420px)`,
        });
        expect(container.firstChild).toHaveStyleRule(
            "grid-template-columns",
            "repeat(4,minmax(0,1fr))",
            {
                media: `screen and (max-width: 420px)`,
            }
        );
    });
});
