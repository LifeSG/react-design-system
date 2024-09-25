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
        animationScheme: "lifesg",
        borderScheme: "lifesg",
        spacingScheme: "lifesg",
        radiusScheme: "lifesg",
        breakpointScheme: "lifesg",
    };

    describe("Body Text", () => {
        it("renders BodyBL with correct text", () => {
            const { getByText } = render(
                <ThemeProvider theme={mockTheme}>
                    <Typography.BodyBL weight="regular">
                        This is body text
                    </Typography.BodyBL>
                </ThemeProvider>
            );

            expect(getByText("This is body text")).toBeInTheDocument();
        });

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

        it("renders BodyMD with correct text", () => {
            const { getByText } = render(
                <Typography.BodyMD paragraph>
                    This is medium body text
                </Typography.BodyMD>
            );

            expect(getByText("This is medium body text")).toBeInTheDocument();
        });
    });

    describe("Link Components", () => {
        it("renders LinkBL with correct text", () => {
            const { getByText } = render(
                <ThemeProvider theme={mockTheme}>
                    <Typography.LinkBL weight="regular">
                        This is a baseline link
                    </Typography.LinkBL>
                </ThemeProvider>
            );

            expect(getByText("This is a baseline link")).toBeInTheDocument();
        });

        it("renders LinkLG with correct text", () => {
            const { getByText } = render(
                <ThemeProvider theme={mockTheme}>
                    <Typography.LinkLG weight="semibold" inline>
                        This is a large link
                    </Typography.LinkLG>
                </ThemeProvider>
            );

            expect(getByText("This is a large link")).toBeInTheDocument();
        });

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

        it("renders HeaderXL with correct text", () => {
            const { getByText } = render(
                <Typography.HeaderXL paragraph>Hello World</Typography.HeaderXL>
            );

            expect(getByText("Hello World")).toBeInTheDocument();
        });
    });
});
