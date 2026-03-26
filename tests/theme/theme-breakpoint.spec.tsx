import "jest-styled-components";
import { render } from "@testing-library/react";
import styled, { ThemeProvider } from "styled-components";
import { Breakpoint } from "../../src";
import { MOCK_THEME } from "./mock-theme-data";

const StyledComponentTest = styled.div`
    background-color: red;

    @media (min-width: ${Breakpoint["xs-min"]}px) {
        background-color: blue;
    }

    @media (min-width: ${Breakpoint["xs-max"]}px) {
        background-color: green;
    }
`;

// Note: There is an extra space due to an issue of jest-styled-component
// See https://github.com/styled-components/jest-styled-components/issues/430

describe("Media Width Breakpoints Test", () => {
    it("should apply correct styles based on media width", () => {
        const { container } = render(
            <ThemeProvider theme={MOCK_THEME}>
                <StyledComponentTest />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule("background-color", "red");

        expect(container.firstChild).toHaveStyleRule(
            "background-color",
            "blue",
            {
                // Extra space here
                media: `(min-width:  321px)`,
            }
        );

        expect(container.firstChild).toHaveStyleRule(
            "background-color",
            "green",
            {
                // Extra space here
                media: `(min-width:  375px)`,
            }
        );
    });
});
