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
        resourceScheme: "lifesg",
    };

    describe("Body Text", () => {
        it("renders BodyMD with correct text", () => {
            const { getByText } = render(
                <ThemeProvider theme={mockTheme}>
                    <Typography.BodyMD weight="semibold" inline>
                        This is medium body text
                    </Typography.BodyMD>
                </ThemeProvider>
            );

            expect(getByText("This is medium body text")).toBeInTheDocument();
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
