"use client";
import "@lifesg/react-design-system/theme/styles/a11y-playground.css";
import "@lifesg/react-design-system/theme/styles/bookingsg.css";
import "@lifesg/react-design-system/theme/styles/careercompass.css";
import "@lifesg/react-design-system/theme/styles/ccube.css";
import "@lifesg/react-design-system/theme/styles/imda.css";
import "@lifesg/react-design-system/theme/styles/lifesg.css";
import "@lifesg/react-design-system/theme/styles/mylegacy.css";
import "@lifesg/react-design-system/theme/styles/oneservice.css";
import "@lifesg/react-design-system/theme/styles/pa.css";
import "@lifesg/react-design-system/theme/styles/rbs.css";
import "@lifesg/react-design-system/theme/styles/sgw-digital-lobby.css";
import "@lifesg/react-design-system/theme/styles/smgs.css";
import "@lifesg/react-design-system/theme/styles/spf.css";
import "@lifesg/react-design-system/theme/styles/supportgowhere.css";
import "@lifesg/react-design-system/theme/styles/tote-board.css";
import "@lifesg/react-design-system/theme/styles/vica.css";
import "@lifesg/react-design-system/theme/styles/websg.css";
import "@lifesg/react-design-system/theme/styles/wise.css";
import "@lifesg/react-design-system/theme/styles/wogaa.css";

import {
    THEME_TYPES,
    type ThemeFontPreset,
    ThemeProvider,
    type ThemeType,
} from "@lifesg/react-design-system/theme";
import { useSearchParams } from "next/navigation";
import type React from "react";

import styles from "./layout.module.css";

const FONT_PRESETS: ThemeFontPreset[] = ["wise-public", "wise-admin"];

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const searchParams = useSearchParams();
    const themeParam = searchParams?.get("theme");
    const fontPresetParam = searchParams?.get("fontPreset");

    const theme: ThemeType | undefined =
        themeParam && THEME_TYPES.includes(themeParam as ThemeType)
            ? (themeParam as ThemeType)
            : undefined;

    const fontPreset: ThemeFontPreset | undefined =
        fontPresetParam &&
        FONT_PRESETS.includes(fontPresetParam as ThemeFontPreset)
            ? (fontPresetParam as ThemeFontPreset)
            : undefined;

    return (
        <ThemeProvider theme={theme} fontPreset={fontPreset}>
            <div data-testid="story-layout" className={styles["story-layout"]}>
                {children}
            </div>
        </ThemeProvider>
    );
}
