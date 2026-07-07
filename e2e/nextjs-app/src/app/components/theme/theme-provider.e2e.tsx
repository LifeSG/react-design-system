"use client";
import {
    THEME_TYPES,
    ThemeProvider,
    useTheme,
} from "@lifesg/react-design-system/theme";
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
            {THEME_TYPES.map((theme) => (
                <ThemeProvider theme={theme} key={theme}>
                    <Swatch />
                </ThemeProvider>
            ))}
        </div>
    );
}
