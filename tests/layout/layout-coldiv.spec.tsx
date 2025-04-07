import { render } from "@testing-library/react";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import { ColDiv } from "../../src/layout/col-div";
import { MOCK_THEME } from "./mock-theme-data";
describe("ColDiv Component", () => {
    it("should render with default settings (spanning 1 column)", () => {
        const { container } = render(
            <ThemeProvider theme={MOCK_THEME}>
                <ColDiv>Default ColDiv</ColDiv>
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule(
            "grid-column",
            "auto / span 1"
        );
    });

    it("should correctly apply xxs column span", () => {
        const { container } = render(
            <ThemeProvider theme={MOCK_THEME}>
                <ColDiv xxsCols={2}>XXS ColDiv</ColDiv>
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule(
            "grid-column",
            "auto / span 2",
            {
                media: `screen and (max-width: 320px)`,
            }
        );
    });

    it("should correctly apply xs column span", () => {
        const { container } = render(
            <ThemeProvider theme={MOCK_THEME}>
                <ColDiv xsCols={3}>XS ColDiv</ColDiv>
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule(
            "grid-column",
            "auto / span 3",
            {
                media: `screen and (max-width: 375px)`,
            }
        );
    });

    it("should correctly apply sm column span", () => {
        const { container } = render(
            <ThemeProvider theme={MOCK_THEME}>
                <ColDiv smCols={4}>SM ColDiv</ColDiv>
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule(
            "grid-column",
            "auto / span 4",
            {
                media: `screen and (max-width: 420px)`,
            }
        );
    });

    it("should correctly apply start and span for xxs", () => {
        const { container } = render(
            <ThemeProvider theme={MOCK_THEME}>
                <ColDiv xxsCols={[1, 3]}>XXS Start and Span ColDiv</ColDiv>
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule(
            "grid-column",
            "1 / span 2",
            {
                media: `screen and (max-width: 320px)`,
            }
        );
    });

    it("should correctly apply start and span for lg", () => {
        const { container } = render(
            <ThemeProvider theme={MOCK_THEME}>
                <ColDiv lgCols={[2, 6]}>LG Start and Span ColDiv</ColDiv>
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule(
            "grid-column",
            "2 / span 4",
            {
                media: `screen and (max-width: 1023px)`,
            }
        );
    });
});
