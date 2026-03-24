import { render } from "@testing-library/react";
import "jest-styled-components";
import { Border } from "src/theme";
import { ThemeSpec } from "src/theme/types";
import styled, { ThemeProvider } from "styled-components";
import { MOCK_THEME } from "./mock-theme-data";

describe("Border Theming Test", () => {
    it("should apply correct solid border styles based on the theme", () => {
        const SolidBorderComponent = styled.div`
            border: ${Border["width-010"]} ${Border.solid};
        `;

        const { container } = render(
            <ThemeProvider theme={MOCK_THEME}>
                <SolidBorderComponent />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule("border", "1px solid");
    });

    it("should apply correct solid border styles based on theme overrides", () => {
        const mockTheme: ThemeSpec = {
            ...MOCK_THEME,
            overrides: {
                border: {
                    "width-010": 3,
                },
            },
        };

        const SolidBorderComponent = styled.div`
            border: ${Border["width-010"]} ${Border.solid};
        `;
        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <SolidBorderComponent />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule("border", "3px solid");
    });

    it("should apply correct solid border util styles when setting options", () => {
        const SolidBorderComponent = styled.div`
            ${Border.Util["solid"]({
                thickness: 10,
                radius: 11,
                colour: "red",
            })};
        `;

        const { container } = render(
            <ThemeProvider theme={MOCK_THEME}>
                <SolidBorderComponent />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule(
            "border",
            "10px solid red"
        );
        expect(container.firstChild).toHaveStyleRule("border-radius", "11px");
    });

    it("should apply correct dashed border util styles based on the theme", () => {
        const DashedBorderUtilComponent = styled.div`
            ${Border.Util["dashed-default"]};
        `;

        const { container } = render(
            <ThemeProvider theme={MOCK_THEME}>
                <DashedBorderUtilComponent />
            </ThemeProvider>
        );

        const expectedSvg = encodeURIComponent(
            `<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='0' ry='0' stroke='#DDE1E2' stroke-width='1px' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`
        );
        expect(container.firstChild).toHaveStyleRule(
            "background-image",
            `url("data:image/svg+xml,${expectedSvg}")`
        );
    });

    it("should apply correct dashed border util styles when setting options", () => {
        const DashedBorderUtilComponent = styled.div`
            ${Border.Util["dashed-default"]({
                thickness: 10,
                radius: 11,
                colour: "red",
            })};
        `;

        const { container } = render(
            <ThemeProvider theme={MOCK_THEME}>
                <DashedBorderUtilComponent />
            </ThemeProvider>
        );

        const expectedSvg = encodeURIComponent(
            "<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='11' ry='11' stroke='red' stroke-width='10' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>"
        );
        expect(container.firstChild).toHaveStyleRule(
            "background-image",
            `url("data:image/svg+xml,${expectedSvg}")`
        );
    });

    fit("should apply correct dashed border util styles based on theme overrides", () => {
        const mockTheme: ThemeSpec = {
            ...MOCK_THEME,
            overrides: {
                border: {
                    "width-010": 3,
                },
            },
        };

        const DashedBorderUtilComponent = styled.div`
            ${Border.Util["dashed-default"]};
        `;

        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <DashedBorderUtilComponent />
            </ThemeProvider>
        );

        const expectedSvg = encodeURIComponent(
            "<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='0' ry='0' stroke='#DDE1E2' stroke-width='3px' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>"
        );
        expect(container.firstChild).toHaveStyleRule(
            "background-image",
            `url("data:image/svg+xml,${expectedSvg}")`
        );
    });
});
