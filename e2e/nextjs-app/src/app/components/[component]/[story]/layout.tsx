"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
    ThemeMode,
    ThemeProvider,
    ThemeType,
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

const themeOptions: readonly ThemeType[] = [
    "a11y-playground",
    "bookingsg",
    "ccube",
    "imda",
    "lifesg",
    "mylegacy",
    "oneservice",
    "pa",
    "rbs",
    "sgw-digital-lobby",
    "spf",
    "supportgowhere",
] as const;

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const selectedTheme = searchParams.get("theme");
    const theme: ThemeType = themeOptions.includes(
        selectedTheme as (typeof themeOptions)[number]
    )
        ? (selectedTheme as ThemeType)
        : "lifesg";
    const themeMode: ThemeMode =
        searchParams.get("mode") === "dark" ? "dark" : "light";
    const updateQueryParam = (key: string, value: string) => {
        const nextParams = new URLSearchParams(searchParams.toString());
        nextParams.set(key, value);
        router.replace(`${pathname}?${nextParams.toString()}`, {
            scroll: false,
        });
    };

    const toggleThemeMode = () => {
        const nextMode: ThemeMode = themeMode === "dark" ? "light" : "dark";
        updateQueryParam("mode", nextMode);
    };

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
                <ThemeProvider mode={themeMode} theme={theme}>
                    <div className={styles["toolbar"]}>
                        <label className={styles["toolbar-label"]}>
                            Theme
                            <select
                                data-testid="theme-select"
                                className={styles["theme-select"]}
                                value={theme}
                                onChange={(e) =>
                                    updateQueryParam("theme", e.target.value)
                                }
                            >
                                {themeOptions.map((themeOption) => (
                                    <option
                                        key={themeOption}
                                        value={themeOption}
                                    >
                                        {themeOption}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <button
                            type="button"
                            data-testid="theme-toggle"
                            onClick={toggleThemeMode}
                            className={styles["theme-toggle"]}
                        >
                            Theme: {themeMode}
                        </button>
                    </div>
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
