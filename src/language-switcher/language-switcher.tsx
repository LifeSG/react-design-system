import { announce } from "@react-aria/live-announcer";
import { DropdownVariant } from "./dropdown-variant";
import { LinkContainerVariant } from "./link-container-variant";
import { LANGUAGE_DISPLAY_MAP } from "./data";
import { LanguageCode, LanguageSwitcherProps } from "./types";

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
    const handleSelectLanguage = (code: LanguageCode) => {
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
                    otherProps={otherProps}
                />
            );
        case "link-container":
            return (
                <LinkContainerVariant
                    selectedLanguage={selectedLanguage}
                    onSelectLanguage={handleSelectLanguage}
                    testId={testId}
                    otherProps={otherProps}
                />
            );
    }
};
