import React from "react";
import { LanguageSwitcherCode } from "./types";
export interface VariantInternalProps extends React.HTMLAttributes<HTMLDivElement> {
    selectedLanguage: LanguageSwitcherCode;
    onSelectLanguage: (code: LanguageSwitcherCode) => void;
    testId: string;
}
