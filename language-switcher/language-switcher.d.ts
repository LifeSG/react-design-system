import type { LanguageSwitcherProps } from "./types";
/**
 * A locale-switching control that lets users change the active display language.
 *
 * Use `LanguageSwitcher` to surface supported languages as either
 * a compact dropdown or a set of inline links.
 */
export declare const LanguageSwitcher: ({ variant, selectedLanguage, onSelectLanguage, "data-testid": testId, ...otherProps }: LanguageSwitcherProps) => JSX.Element;
