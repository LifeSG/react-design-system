import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import { Typography } from "../../src/typography/typography";
import { ThemeProvider } from "styled-components";
import { MOCK_THEME } from "./mock-theme-data";

describe("Typography Components", () => {
    describe("Body Text", () => {
        it("renders BodyMD with correct text", () => {
            const { getByText } = render(
                <ThemeProvider theme={MOCK_THEME}>
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
                <ThemeProvider theme={MOCK_THEME}>
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

    describe("Heading Components", () => {
        it("renders HeadingXXL with correct text", () => {
            const { getByText } = render(
                <ThemeProvider theme={MOCK_THEME}>
                    <Typography.HeadingXXL weight="bold" inline>
                        Hello World
                    </Typography.HeadingXXL>
                </ThemeProvider>
            );

            expect(getByText("Hello World")).toBeInTheDocument();
        });
    });
});
