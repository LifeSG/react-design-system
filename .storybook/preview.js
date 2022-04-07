import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import pretty from "pretty";
import React from "react";
import { ThemeProvider } from "styled-components";
import { BaseTheme } from "../src/components/styles/theme/themes";

export const parameters = {
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
    layout: "centered",
    controls: {
        expanded: true,
    },
    docs: {
        transformSource: (input) => pretty(input),
    },
};

export const decorators = [
    (Story) => (
        <ThemeProvider theme={BaseTheme}>
            <Story />
        </ThemeProvider>
    ),
];
