"use client";
import type { ThemeType } from "@lifesg/react-design-system/theme";
import {
    THEME_TYPES,
    ThemeProvider,
    useTheme,
} from "@lifesg/react-design-system/theme";
import { useSearchParams } from "next/navigation";

import styles from "./theme-provider.module.css";

const Swatch = () => {
    const { theme, mode } = useTheme();
    return (
        <div data-testid="colour-swatch">
            {theme} ({mode})<div className={styles.swatch}></div>
        </div>
    );
};

export default function Story() {
    const searchParams = useSearchParams();
    const themeParam = searchParams?.get("theme") as ThemeType;
    const theme =
        themeParam && THEME_TYPES.includes(themeParam) ? themeParam : undefined;

    return (
        <ThemeProvider theme={theme}>
            <Swatch />
        </ThemeProvider>
    );
}
