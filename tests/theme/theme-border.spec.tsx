import { render } from "@testing-library/react";
import "jest-styled-components";
import { Border } from "src/theme";
import { ThemeSpec } from "src/theme/types";
import styled, { ThemeProvider } from "styled-components";
import { MOCK_THEME } from "./mock-theme-data";

const StyledBorderComponent = styled.div`
    border: ${Border["width-010"]} ${Border.solid};
    ${Border["dashed-default"]};
`;

describe("Border Theming Test", () => {
    it("should apply correct border styles based on the theme", () => {
        const expectedSvg = encodeURIComponent(
            `<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='0' ry='0' stroke='#DDE1E2' stroke-width='1px' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`
        );

        const { container } = render(
            <ThemeProvider theme={MOCK_THEME}>
                <StyledBorderComponent />
            </ThemeProvider>
        );

        const receivedBorderStyle = getComputedStyle(
            container.firstElementChild!
        ).border;

        expect(receivedBorderStyle).toBe("1px solid");
        expect(container.firstChild).toHaveStyleRule(
            "background-image",
            `url("data:image/svg+xml,${expectedSvg}")`
        );
    });

    it("should apply correct border styles when setting options for dashed-default", () => {
        const colour = "red";
        const strokeWidth = 2;
        const radius = 4;

        const StyledBorderComponentDash = styled.div`
            ${Border["dashed-default"]({
                thickness: strokeWidth,
                colour,
                radius,
            })};
        `;

        const expectedSvg = encodeURIComponent(
            `<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${radius}' ry='${radius}' stroke='${colour}' stroke-width='${strokeWidth}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`
        );

        const { container } = render(
            <ThemeProvider theme={MOCK_THEME}>
                <StyledBorderComponentDash />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule(
            "background-image",
            `url("data:image/svg+xml,${expectedSvg}")`
        );
    });

    it("should apply correct border styles based on the override for the border", () => {
        const mockTheme: ThemeSpec = {
            ...MOCK_THEME,
            overrides: {
                border: {
                    "width-010": 3,
                },
            },
        };

        const expectedSvg = encodeURIComponent(
            `<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='0' ry='0' stroke='#DDE1E2' stroke-width='3px' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`
        );

        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <StyledBorderComponent />
            </ThemeProvider>
        );

        const receivedBorderStyle = getComputedStyle(
            container.firstElementChild!
        ).border;

        expect(receivedBorderStyle).toBe("3px solid");
        expect(container.firstChild).toHaveStyleRule(
            "background-image",
            `url("data:image/svg+xml,${expectedSvg}")`
        );
    });
});
