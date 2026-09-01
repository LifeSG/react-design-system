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

import {
    type FontVariant,
    THEME_TYPES,
    ThemeProvider,
    type ThemeType,
} from "@lifesg/react-design-system/theme";
import { useSearchParams } from "next/navigation";
import type React from "react";

import styles from "./layout.module.css";

const FONT_VARIANTS = ["wise-public", "wise-admin"] as const;

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const searchParams = useSearchParams();
    const themeParam = searchParams?.get("theme");
    const fontVariantParam = searchParams?.get("fontVariant");

    const theme: ThemeType | undefined =
        themeParam && THEME_TYPES.includes(themeParam as ThemeType)
            ? (themeParam as ThemeType)
            : undefined;

    const fontVariant: FontVariant | undefined =
        fontVariantParam &&
        FONT_VARIANTS.includes(fontVariantParam as FontVariant)
            ? (fontVariantParam as FontVariant)
            : undefined;

    return (
        <ThemeProvider theme={theme} fontVariant={fontVariant}>
            <div data-testid="story-layout" className={styles["story-layout"]}>
                {children}
            </div>
        </ThemeProvider>
    );
}
