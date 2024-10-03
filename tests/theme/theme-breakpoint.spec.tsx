import { render } from "@testing-library/react";
import "jest-styled-components";
import styled, { ThemeProvider } from "styled-components";
import { Breakpoint } from "../../src";
import { ThemeSpec } from "../../src/theme/types";

const StyledComponentTest = styled.div`
    background-color: red;

    @media (min-width: ${Breakpoint["xs-min"]}px) {
        background-color: blue;
    }

    @media (min-width: ${Breakpoint["xs-max"]}px) {
        background-color: green;
    }
`;

describe("Media Width Breakpoints Test", () => {
    const mockTheme: ThemeSpec = {
        colourScheme: "lifesg",
        fontScheme: "lifesg",
        motion: "lifesg",
        borderScheme: "lifesg",
        spacingScheme: "lifesg",
        radiusScheme: "lifesg",
        breakpointScheme: "lifesg",
    };
    it("should apply correct styles based on media width", () => {
        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <StyledComponentTest />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule("background-color", "red");

        expect(container.firstChild).toHaveStyleRule(
            "background-color",
            "blue",
            {
                media: `(min-width: 321px)`,
            }
        );

        expect(container.firstChild).toHaveStyleRule(
            "background-color",
            "green",
            {
                media: `(min-width: 375px)`,
            }
        );
    });
});
