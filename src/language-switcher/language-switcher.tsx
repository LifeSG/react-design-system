import { announce } from "@react-aria/live-announcer";

import { LANGUAGE_DISPLAY_MAP } from "./data";
import { DropdownVariant } from "./dropdown-variant";
import { LinkContainerVariant } from "./link-container-variant";
import type { LanguageSwitcherCode, LanguageSwitcherProps } from "./types";

// @catalog
/**
 * A locale-switching control that lets users change the active display language.
 *
 * Use `LanguageSwitcher` to surface supported languages as either
 * a compact dropdown or a set of inline links.
 */
export const LanguageSwitcher = ({
    variant = "dropdown",
    selectedLanguage = "en",
    onSelectLanguage,
    "data-testid": testId = "language-switcher",
    ...otherProps
}: LanguageSwitcherProps): JSX.Element => {
    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleSelectLanguage = (code: LanguageSwitcherCode) => {
        if (code !== selectedLanguage && onSelectLanguage) {
            onSelectLanguage(code);
            announce(`${LANGUAGE_DISPLAY_MAP[code]} selected`, "polite");
        }
    };

    // =========================================================================
    // RENDER
    // =========================================================================
    switch (variant) {
        case "dropdown":
            return (
                <DropdownVariant
                    selectedLanguage={selectedLanguage}
                    onSelectLanguage={handleSelectLanguage}
                    testId={testId}
                    {...otherProps}
                />
            );
        case "link-container":
            return (
                <LinkContainerVariant
                    selectedLanguage={selectedLanguage}
                    onSelectLanguage={handleSelectLanguage}
                    testId={testId}
                    {...otherProps}
                />
            );
    }
};
