import styled, { ThemeProvider } from "styled-components";
import { MediaQuery } from "../../src/theme/breakpoint/media-query-helper";
import { ThemeSpec } from "../../src/theme/types";
import { render } from "@testing-library/react";
import "jest-styled-components";

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
    const mockTheme: ThemeSpec = {
        colourScheme: "lifesg",
        fontScheme: "lifesg",
        motion: "lifesg",
        borderScheme: "lifesg",
        spacingScheme: "lifesg",
        radiusScheme: "lifesg",
        breakpointScheme: "lifesg",
    };

    const xsMin = "321px";
    const xsMax = "375px";

    it("should apply correct styles based on media query spec", () => {
        const { container } = render(
            <ThemeProvider theme={mockTheme}>
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
