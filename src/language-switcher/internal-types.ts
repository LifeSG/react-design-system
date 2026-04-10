import React from "react";
import { LanguageSwitcherCode } from "./types";

export interface VariantInternalProps {
    selectedLanguage: LanguageSwitcherCode;
    onSelectLanguage: (code: LanguageSwitcherCode) => void;
    testId: string;
    otherProps: React.HTMLAttributes<HTMLDivElement>;
}
