"use client";

import {
    LanguageSwitcher,
    type LanguageSwitcherCode,
} from "@lifesg/react-design-system/language-switcher";
import { useState } from "react";

export default function Story() {
    const [language, setLanguage] = useState<LanguageSwitcherCode | undefined>(
        undefined
    );

    return (
        <div className="story-row-container">
            <LanguageSwitcher
                data-testid="language-switcher"
                variant="link-container"
                selectedLanguage={language}
                onSelectLanguage={setLanguage}
            />
        </div>
    );
}
