"use client";
import {
    V3_DSThemeProvider,
    V3_LifeSGTheme,
} from "@lifesg/react-design-system/v3_theme";
import styles from "./layout.module.css";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <V3_DSThemeProvider theme={V3_LifeSGTheme}>
            <div data-testid="story-layout" className={styles["story-layout"]}>
                {children}
            </div>
        </V3_DSThemeProvider>
    );
}
