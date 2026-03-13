"use client";
import {
    ThemeProvider,
    V3_DSThemeProvider,
    V3_LifeSGTheme,
} from "@lifesg/react-design-system";
import styles from "./layout.module.css";

import "@lifesg/react-design-system/theme/styles/lifesg.css";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://assets.life.gov.sg/react-design-system/v3/css/main.css"
            />

            <link
                rel="stylesheet"
                href="https://assets.life.gov.sg/react-design-system/v3/css/open-sans.css"
            />
            <V3_DSThemeProvider theme={V3_LifeSGTheme}>
                <ThemeProvider>
                    <div
                        data-testid="story-layout"
                        className={styles["story-layout"]}
                    >
                        {children}
                    </div>
                </ThemeProvider>
            </V3_DSThemeProvider>
        </>
    );
}
