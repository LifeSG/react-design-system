import type React from "react";

import type { LanguageSwitcherCode } from "./types";

export interface VariantInternalProps
    extends React.HTMLAttributes<HTMLDivElement> {
    selectedLanguage: LanguageSwitcherCode;
    onSelectLanguage: (code: LanguageSwitcherCode) => void;
    testId: string;
}
