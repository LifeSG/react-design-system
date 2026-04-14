import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useState } from "react";
import { LanguageSwitcher } from "src/language-switcher";
import type { LanguageSwitcherCode } from "src/language-switcher/types";

type Component = typeof LanguageSwitcher;

const meta: Meta<Component> = {
    title: "Navigation/Language Switcher",
    component: LanguageSwitcher,
};

export default meta;

// =============================================================================
// DROPDOWN VARIANT
// =============================================================================
export const Dropdown: StoryObj<Component> = {
    render: (_args) => {
        const [language, setLanguage] = useState<LanguageSwitcherCode>("en");

        return (
            <LanguageSwitcher
                variant="dropdown"
                selectedLanguage={language}
                onSelectLanguage={setLanguage}
            />
        );
    },
};

export const DropdownPreselected: StoryObj<Component> = {
    render: (_args) => {
        const [language, setLanguage] = useState<LanguageSwitcherCode>("zh");

        return (
            <LanguageSwitcher
                variant="dropdown"
                selectedLanguage={language}
                onSelectLanguage={setLanguage}
            />
        );
    },
};

// =============================================================================
// LINK CONTAINER VARIANT
// =============================================================================
export const LinkContainer: StoryObj<Component> = {
    render: (_args) => {
        const [language, setLanguage] = useState<LanguageSwitcherCode>("en");

        return (
            <LanguageSwitcher
                variant="link-container"
                selectedLanguage={language}
                onSelectLanguage={setLanguage}
            />
        );
    },
};

export const LinkContainerPreselected: StoryObj<Component> = {
    render: (_args) => {
        const [language, setLanguage] = useState<LanguageSwitcherCode>("ta");

        return (
            <LanguageSwitcher
                variant="link-container"
                selectedLanguage={language}
                onSelectLanguage={setLanguage}
            />
        );
    },
};
