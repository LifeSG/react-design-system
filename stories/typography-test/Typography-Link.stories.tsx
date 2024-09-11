import { ThemeProvider } from "styled-components";
import { Typography } from "../../src/typography/typography";
import { mockTheme } from "./mock-theme";

export default {
    title: "Typography-Test/Link",
    component: Typography,
};

export const LinkBL_Regular = () => (
    <ThemeProvider theme={mockTheme}>
        <Typography.LinkBL weight="regular">
            This is a baseline link
        </Typography.LinkBL>
    </ThemeProvider>
);

export const LinkLG_Bold_Inline = () => (
    <ThemeProvider theme={mockTheme}>
        <Typography.LinkLG weight="bold" inline>
            This is a bold link with inline display
        </Typography.LinkLG>
    </ThemeProvider>
);

export const LinkSM_External = () => (
    <ThemeProvider theme={mockTheme}>
        <Typography.LinkSM external>External Small Link</Typography.LinkSM>
    </ThemeProvider>
);
