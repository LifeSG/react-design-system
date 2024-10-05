import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import { Typography } from "../../src/typography/typography";
import { ThemeSpec } from "../../src/theme/types";
import { ThemeProvider } from "styled-components";

describe("Typography Components", () => {
    const mockTheme: ThemeSpec = {
        colourScheme: "lifesg",
        fontScheme: "lifesg",
        motionScheme: "lifesg",
        borderScheme: "lifesg",
        spacingScheme: "lifesg",
        radiusScheme: "lifesg",
        breakpointScheme: "lifesg",
    };

    describe("Body Text", () => {
        it("renders BodyLG with correct text", () => {
            const { getByText } = render(
                <ThemeProvider theme={mockTheme}>
                    <Typography.BodyLG weight="semibold" inline>
                        This is large body text
                    </Typography.BodyLG>
                </ThemeProvider>
            );

            expect(getByText("This is large body text")).toBeInTheDocument();
        });
    });

    describe("Link Components", () => {
        it("renders external LinkSM with external icon", () => {
            const { getByText, container } = render(
                <ThemeProvider theme={mockTheme}>
                    <Typography.LinkSM external>
                        External Small Link
                    </Typography.LinkSM>
                </ThemeProvider>
            );

            expect(getByText("External Small Link")).toBeInTheDocument();

            const icon = container.querySelector("svg");
            expect(icon).not.toBeNull();
        });
    });

    describe("Header Components", () => {
        it("renders HeaderXXL with correct text", () => {
            const { getByText } = render(
                <ThemeProvider theme={mockTheme}>
                    <Typography.HeaderXXL weight="bold" inline>
                        Hello World
                    </Typography.HeaderXXL>
                </ThemeProvider>
            );

            expect(getByText("Hello World")).toBeInTheDocument();
        });
    });
});
