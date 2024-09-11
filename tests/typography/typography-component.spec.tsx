import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import { Typography } from "../../src/typography/typography";
import { ThemeSpec } from "../../src/theme/types";
import { ThemeProvider } from "styled-components";

describe("Typography Components", () => {
    it("renders H1 with correct styles", () => {
        const mockTheme: ThemeSpec = {
            colourScheme: "lifesg",
            fontScheme: "lifesg",
            animationScheme: "lifesg",
            borderScheme: "lifesg",
            spacingScheme: "lifesg",
            radiusScheme: "lifesg",
            breakpointScheme: "lifesg",
        };

        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <Typography.HeaderXXL weight="bold" inline>
                    Hello World
                </Typography.HeaderXXL>
            </ThemeProvider>
        );

        const h1 = container.firstChild;
        expect(h1).toHaveStyleRule("font-size", "3rem");
        expect(h1).toHaveStyleRule("display", "inline");
        expect(h1).toHaveStyleRule("color", "#282828");
        expect(h1).toHaveStyleRule("font-weight", "700");
    });

    it("renders H2 as block with paragraph styling", () => {
        const { container } = render(
            <Typography.HeaderXL paragraph>Hello World</Typography.HeaderXL>
        );

        const h2 = container.firstChild;
        expect(h2).toHaveStyleRule("font-size", "2.5rem");
        expect(h2).toHaveStyleRule("display", "block");
        expect(h2).toHaveStyleRule("margin-bottom", "2.625rem");
        expect(h2).toHaveStyleRule("color", "#282828");
        expect(h2).toHaveStyleRule("font-weight", "400");
    });
});
