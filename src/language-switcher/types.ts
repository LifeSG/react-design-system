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
