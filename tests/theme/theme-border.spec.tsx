import "jest-styled-components";
import styled, { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import { ThemeSpec } from "../../src/theme/types";
import { Border } from "../../src";

const StyledBorderComponent = styled.div`
    border: ${Border["width-010"]} ${Border.solid};
    ${Border["dashed-default"]};
`;

describe("Border Theming Test", () => {
    it("should apply correct border styles based on the theme", () => {
        const mockTheme: ThemeSpec = {
            colourScheme: "lifesg",
            fontScheme: "lifesg",
            animationScheme: "lifesg",
            borderScheme: "lifesg",
        };

        // Constants for border-top (dashed-default)
        const thickness = "1px";
        const color = "%23DDE1E2";
        const strokeWidth = 2;
        // Stroke width is thickeness + 1

        const expectedSvg = `<svg width="8" height="${thickness}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${color}" stroke-width="${strokeWidth}" stroke-dasharray="4 4" /></svg>`;

        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <StyledBorderComponent />
            </ThemeProvider>
        );

        const receivedBorderStyle = getComputedStyle(
            container.firstElementChild
        ).border;

        expect(receivedBorderStyle).toBe("1px solid");

        expect(container.firstChild).toHaveStyleRule(
            "background-color",
            "transparent"
        );
        expect(container.firstChild).toHaveStyleRule("height", thickness);
        expect(container.firstChild).toHaveStyleRule(
            "background-repeat",
            "repeat-x"
        );
        expect(container.firstChild).toHaveStyleRule(
            "background-image",
            `url('data:image/svg+xml,${expectedSvg}')`
        );
    });

    it("should apply correct border styles when overriding border color in dashed-default", () => {
        const StyledBorderComponentDash = styled.div`
            border: ${Border["width-010"]} ${Border.solid};
            ${Border["dashed-default"](2, "red")};
        `;

        const mockTheme: ThemeSpec = {
            colourScheme: "lifesg",
            fontScheme: "lifesg",
            animationScheme: "lifesg",
            borderScheme: "lifesg",
        };

        const dashThickness = "2px";
        const dashColor = "red";
        const dashStrokeWidth = parseInt(dashThickness) + 1;
        const dashExpectedSvg = `<svg width="8" height="${dashThickness}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${dashColor}" stroke-width="${dashStrokeWidth}" stroke-dasharray="4 4" /></svg>`;

        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <StyledBorderComponentDash />
            </ThemeProvider>
        );

        const receivedBorderStyle = getComputedStyle(
            container.firstElementChild
        ).border;

        expect(receivedBorderStyle).toBe("1px solid");

        expect(container.firstChild).toHaveStyleRule(
            "background-color",
            "transparent"
        );
        expect(container.firstChild).toHaveStyleRule("height", dashThickness);
        expect(container.firstChild).toHaveStyleRule(
            "background-repeat",
            "repeat-x"
        );
        expect(container.firstChild).toHaveStyleRule(
            "background-image",
            `url('data:image/svg+xml,${dashExpectedSvg}')`
        );
    });

    it("should apply correct border styles based on the override for the border", () => {
        const mockTheme: ThemeSpec = {
            colourScheme: "lifesg",
            fontScheme: "lifesg",
            borderScheme: "lifesg",
            animationScheme: "lifesg",
            overrides: {
                border: {
                    "width-010": 3,
                },
            },
        };

        // Constants for border-top (dashed-default)
        const thickness = "1px";
        const color = "%23DDE1E2";
        const strokeWidth = 2;

        const expectedSvg = `<svg width="8" height="${thickness}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${color}" stroke-width="${strokeWidth}" stroke-dasharray="4 4" /></svg>`;

        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <StyledBorderComponent />
            </ThemeProvider>
        );

        const receivedBorderStyle = getComputedStyle(
            container.firstElementChild
        ).border;

        expect(receivedBorderStyle).toBe("3px solid");

        expect(container.firstChild).toHaveStyleRule(
            "background-color",
            "transparent"
        );
        expect(container.firstChild).toHaveStyleRule("height", thickness);
        expect(container.firstChild).toHaveStyleRule(
            "background-repeat",
            "repeat-x"
        );
        expect(container.firstChild).toHaveStyleRule(
            "background-image",
            `url('data:image/svg+xml,${expectedSvg}')`
        );
    });
});
