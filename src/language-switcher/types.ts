import React from "react";

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================
export type LanguageCode = "en" | "zh" | "ms" | "ta";

export type LanguageSwitcherVariant = "dropdown" | "link-container";

export interface LanguageSwitcherProps
    extends React.HTMLAttributes<HTMLDivElement> {
    variant?: LanguageSwitcherVariant | undefined;
    selectedLanguage?: LanguageCode | undefined;
    onSelectLanguage?: ((language: LanguageCode) => void) | undefined;
    "data-testid"?: string | undefined;
}

// =============================================================================
// CONSTANTS
// =============================================================================
export const LANGUAGE_DISPLAY_MAP: Record<LanguageCode, string> = {
    en: "English",
    zh: "中文",
    ms: "Melayu",
    ta: "தமிழ்",
};

export const LANGUAGE_CODES: LanguageCode[] = ["en", "zh", "ms", "ta"];
