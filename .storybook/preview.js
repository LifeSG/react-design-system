import { withThemes } from "@react-theming/storybook-addon";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addDecorator } from "@storybook/react";
import pretty from "pretty";
import { ThemeProvider } from "styled-components";
import { BaseTheme, BookingSGTheme, RBSTheme } from "src/theme";

export const parameters = {
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
    layout: "centered",
    controls: {
        disabled: true,
    },
    actions: {
        disabled: true,
    },
    docs: {
        transformSource: (input) => pretty(input),
    },
    options: {
        storySort: {
            order: [
                "Getting started",
                ["Installation", "Themes", "Media Query", "Layout"],
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
    { ...RBSTheme, name: "RBS" },
];

addDecorator(withThemes(ThemeProvider, themes));
