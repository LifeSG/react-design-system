import type React from "react";

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================
export type LanguageSwitcherCode = "en" | "zh" | "ms" | "ta";

export type LanguageSwitcherVariant = "dropdown" | "link-container";

export interface LanguageSwitcherProps
    extends React.HTMLAttributes<HTMLDivElement> {
    variant?: LanguageSwitcherVariant | undefined;
    selectedLanguage?: LanguageSwitcherCode | undefined;
    onSelectLanguage?: ((language: LanguageSwitcherCode) => void) | undefined;
    "data-testid"?: string | undefined;
}
