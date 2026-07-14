import type React from "react";

/** Code identifying a supported display language. */
export type LanguageSwitcherCode = "en" | "zh" | "ms" | "ta";

/** Presentation mode for the language switcher control. */
export type LanguageSwitcherVariant = "dropdown" | "link-container";

/** Props for the `LanguageSwitcher` component. */
export interface LanguageSwitcherProps
    extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Presentation mode
     * - `"dropdown"` renders a compact select control
     * - `"link-container"` renders languages as inline links
     *
     * @default "dropdown"
     */
    variant?: LanguageSwitcherVariant | undefined;
    /**
     * The currently active language code.
     *
     * @default "en"
     */
    selectedLanguage?: LanguageSwitcherCode | undefined;
    /**
     * Called when the user selects a language different from `selectedLanguage`.
     *
     * @param language The newly selected language code.
     */
    onSelectLanguage?: ((language: LanguageSwitcherCode) => void) | undefined;
    "data-testid"?: string | undefined;
}
