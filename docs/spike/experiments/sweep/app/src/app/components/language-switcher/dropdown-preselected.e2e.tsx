"use client";

import {
    LanguageSwitcher,
    type LanguageSwitcherCode,
} from "@lifesg/react-design-system/language-switcher";
import { useState } from "react";

export default function Story() {
    const [language, setLanguage] = useState<LanguageSwitcherCode>("zh");

    return (
        <div className="story-row-container">
            <LanguageSwitcher
                data-testid="language-switcher"
                variant="dropdown"
                selectedLanguage={language}
                onSelectLanguage={setLanguage}
            />
        </div>
    );
}
