import { render } from "@testing-library/react";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import { ThemeSpec } from "../../src/theme/types";
import { Content } from "../../src/layout/content";

const mockTheme: ThemeSpec = {
    colourScheme: "lifesg",
    fontScheme: "lifesg",
    animationScheme: "lifesg",
    borderScheme: "lifesg",
    spacingScheme: "lifesg",
    radiusScheme: "lifesg",
    breakpointScheme: "lifesg",
};
// Test it out on the browser
describe("Content Component", () => {
    it("should render correctly with default props", () => {
        const { container, getByTestId } = render(
            <ThemeProvider theme={mockTheme}>
                <Content>Test Content</Content>
            </ThemeProvider>
        );

        // Verify that the Section and Container components are rendered
        const section = getByTestId("content");
        const containerElement = getByTestId("content-container");

        expect(section).toBeInTheDocument();
        expect(containerElement).toBeInTheDocument();

        // Verify default styling
        expect(section).toHaveStyleRule("display", "block");
        expect(containerElement).toHaveStyleRule("display", "flex");
    });

    it("should apply stretch styles when 'stretch' prop is true", () => {
        const { getByTestId } = render(
            <ThemeProvider theme={mockTheme}>
                <Content stretch>Test Content</Content>
            </ThemeProvider>
        );

        const section = getByTestId("content");
        const containerElement = getByTestId("content-container");

        // Verify stretch styles on Section
        expect(section).toHaveStyleRule("padding", "0 1.5rem", {
            media: `screen and (max-width: 1440px)`,
        });

        // Verify stretch styles on Container
        expect(containerElement).toHaveStyleRule("padding", "0 3rem");
    });

    it("should render Container with flex-column layout when type is 'flex-column'", () => {
        const { getByTestId } = render(
            <ThemeProvider theme={mockTheme}>
                <Content type="flex-column">Test Content</Content>
            </ThemeProvider>
        );

        const containerElement = getByTestId("content-container");

        // Verify that Container has flex-column layout
        expect(containerElement).toHaveStyleRule("display", "flex");
        expect(containerElement).toHaveStyleRule("flex-direction", "column");
    });

    it("should render Container with grid layout when type is 'grid'", () => {
        const { getByTestId } = render(
            <ThemeProvider theme={mockTheme}>
                <Content type="grid">Test Content</Content>
            </ThemeProvider>
        );

        const containerElement = getByTestId("content-container");

        // Verify that Container has grid layout
        expect(containerElement).toHaveStyleRule("display", "grid");
        expect(containerElement).toHaveStyleRule(
            "grid-template-columns",
            "repeat(12,minmax(0,1fr))"
        );
    });

    it("should apply default padding when 'stretch' prop is not true", () => {
        const { getByTestId } = render(
            <ThemeProvider theme={mockTheme}>
                <Content>Test Content</Content>
            </ThemeProvider>
        );

        const section = getByTestId("content");
        const containerElement = getByTestId("content-container");

        // Verify default padding styles on Section
        expect(section).toHaveStyleRule("padding", "0 1.5rem");

        // Verify default padding styles on Container
        expect(containerElement).toHaveStyleRule("padding", "0 0.75rem");
        expect(containerElement).toHaveStyleRule("max-width", "1320px");
    });
});
