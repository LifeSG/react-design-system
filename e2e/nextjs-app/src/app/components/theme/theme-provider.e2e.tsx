"use client";
import { ThemeProvider, useTheme } from "@lifesg/react-design-system/theme";
import styles from "./theme-provider.module.css";

const Swatch = () => {
    const { theme, mode } = useTheme();
    return (
        <div>
            {theme} ({mode})<div className={styles.swatch}></div>
        </div>
    );
};

export default function Story() {
    return (
        <div>
            <ThemeProvider theme="a11y-playground">
                <Swatch />
            </ThemeProvider>
            <ThemeProvider theme="bookingsg">
                <Swatch />
            </ThemeProvider>
            <ThemeProvider theme="ccube">
                <Swatch />
            </ThemeProvider>
            <ThemeProvider theme="imda">
                <Swatch />
            </ThemeProvider>
            <ThemeProvider theme="lifesg">
                <Swatch />
            </ThemeProvider>
            <ThemeProvider theme="mylegacy">
                <Swatch />
            </ThemeProvider>
            <ThemeProvider theme="oneservice">
                <Swatch />
            </ThemeProvider>
            <ThemeProvider theme="pa">
                <Swatch />
            </ThemeProvider>
            <ThemeProvider theme="rbs">
                <Swatch />
            </ThemeProvider>
            <ThemeProvider theme="sgw-digital-lobby">
                <Swatch />
            </ThemeProvider>
            <ThemeProvider theme="spf">
                <Swatch />
            </ThemeProvider>
            <ThemeProvider theme="supportgowhere">
                <Swatch />
            </ThemeProvider>
        </div>
    );
}
