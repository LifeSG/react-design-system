import styled, { ThemeProvider } from "styled-components";
import { MediaQuery } from "../../src/theme/breakpoint/media-query-helper";
import { render } from "@testing-library/react";
import "jest-styled-components";
import { MOCK_THEME } from "./mock-theme-data";

const StyledComponentTest = styled.div`
    background-color: red;

    ${MediaQuery.MinWidth.xs} {
        background-color: yellow;
    }

    ${MediaQuery.MaxWidth.xs} {
        background-color: purple;
    }
`;
describe("MediaQuery Helper Function Test", () => {
    const xsMin = "321px";
    const xsMax = "375px";

    it("should apply correct styles based on media query spec", () => {
        const { container } = render(
            <ThemeProvider theme={MOCK_THEME}>
                <StyledComponentTest />
            </ThemeProvider>
        );
        expect(container.firstChild).toHaveStyleRule("background-color", "red");

        expect(container.firstChild).toHaveStyleRule(
            "background-color",
            "yellow",
            {
                media: `screen and (min-width: ${xsMin})`,
            }
        );

        expect(container.firstChild).toHaveStyleRule(
            "background-color",
            "purple",
            {
                media: `screen and (max-width: ${xsMax})`,
            }
        );
    });
});
