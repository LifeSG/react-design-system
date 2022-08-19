import { withThemes } from "@react-theming/storybook-addon";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addDecorator } from "@storybook/react";
import pretty from "pretty";
import { ThemeProvider } from "styled-components";
import {
    BaseTheme,
    BookingSGTheme,
} from "../src/components/styles/theme/themes";

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

const themes = [
    { ...BaseTheme, name: "LifeSG" },
    { ...BookingSGTheme, name: "BookingSG" },
];

addDecorator(withThemes(ThemeProvider, themes));
