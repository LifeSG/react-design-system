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

export interface VariantInternalProps {
    selectedLanguage: LanguageCode;
    onSelectLanguage: (code: LanguageCode) => void;
    testId: string;
    otherProps: React.HTMLAttributes<HTMLDivElement>;
}

// =============================================================================
// CONSTANTS
// =============================================================================
export const ARIA_LABEL =
    "Choose language / 选择语言 / Pilih bahasa / மொழியை தேர்ந்தெடுக்கவும்";

export const LANGUAGE_DISPLAY_MAP: Record<LanguageCode, string> = {
    en: "English",
    zh: "中文",
    ms: "Melayu",
    ta: "தமிழ்",
};

export const LANGUAGE_CODES: LanguageCode[] = ["en", "zh", "ms", "ta"];
