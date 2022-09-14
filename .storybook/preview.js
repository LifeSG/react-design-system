import { withThemes } from "@react-theming/storybook-addon";
import { withA11y } from "@storybook/addon-a11y";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addDecorator } from "@storybook/react";
import pretty from "pretty";
import { ThemeProvider } from "styled-components";
import { BaseTheme, BookingSGTheme } from "src/theme";

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
    options: {
        storySort: {
            order: [
                "Getting started",
                "General",
                "Form",
                "Data Input",
                "Modules",
            ],
        },
    },
};

const themes = [
    { ...BaseTheme, name: "LifeSG" },
    { ...BookingSGTheme, name: "BookingSG" },
];

addDecorator(withThemes(ThemeProvider, themes));
addDecorator(withA11y);
