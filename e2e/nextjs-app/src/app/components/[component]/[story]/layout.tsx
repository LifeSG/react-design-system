"use client";
import { useSearchParams } from "next/navigation";
import {
    ThemeProvider,
    THEME_TYPES,
    type ThemeType,
} from "@lifesg/react-design-system/theme";
import {
    V3_DSThemeProvider,
    V3_LifeSGTheme,
} from "@lifesg/react-design-system/v3_theme";
import styles from "./layout.module.css";

import "@lifesg/react-design-system/theme/styles/a11y-playground.css";
import "@lifesg/react-design-system/theme/styles/bookingsg.css";
import "@lifesg/react-design-system/theme/styles/ccube.css";
import "@lifesg/react-design-system/theme/styles/imda.css";
import "@lifesg/react-design-system/theme/styles/lifesg.css";
import "@lifesg/react-design-system/theme/styles/mylegacy.css";
import "@lifesg/react-design-system/theme/styles/oneservice.css";
import "@lifesg/react-design-system/theme/styles/pa.css";
import "@lifesg/react-design-system/theme/styles/rbs.css";
import "@lifesg/react-design-system/theme/styles/sgw-digital-lobby.css";
import "@lifesg/react-design-system/theme/styles/spf.css";
import "@lifesg/react-design-system/theme/styles/supportgowhere.css";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const searchParams = useSearchParams();
    const themeParam = searchParams?.get("theme");

    const theme: ThemeType | undefined =
        themeParam && THEME_TYPES.includes(themeParam as ThemeType)
            ? (themeParam as ThemeType)
            : undefined;

    return (
        <V3_DSThemeProvider theme={V3_LifeSGTheme}>
            <ThemeProvider theme={theme}>
                <div
                    data-testid="story-layout"
                    className={styles["story-layout"]}
                >
                    {children}
                </div>
            </ThemeProvider>
        </V3_DSThemeProvider>
    );
}
