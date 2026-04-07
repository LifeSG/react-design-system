import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { LanguageSwitcher } from "src/language-switcher";
import { LanguageCode } from "src/language-switcher/types";
import { StackDecorator } from "../storybook-common";

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
    render: () => {
        const [language, setLanguage] = useState<LanguageCode>("en");

        return (
            <LanguageSwitcher
                variant="dropdown"
                selectedLanguage={language}
                onSelectLanguage={setLanguage}
            />
        );
    },
    decorators: [StackDecorator()],
};

export const DropdownPreselected: StoryObj<Component> = {
    render: () => {
        const [language, setLanguage] = useState<LanguageCode>("zh");

        return (
            <LanguageSwitcher
                variant="dropdown"
                selectedLanguage={language}
                onSelectLanguage={setLanguage}
            />
        );
    },
    decorators: [StackDecorator()],
};

// =============================================================================
// LINK CONTAINER VARIANT
// =============================================================================
export const LinkContainer: StoryObj<Component> = {
    render: () => {
        const [language, setLanguage] = useState<LanguageCode>("en");

        return (
            <LanguageSwitcher
                variant="link-container"
                selectedLanguage={language}
                onSelectLanguage={setLanguage}
            />
        );
    },
    decorators: [StackDecorator()],
};

export const LinkContainerPreselected: StoryObj<Component> = {
    render: () => {
        const [language, setLanguage] = useState<LanguageCode>("ta");

        return (
            <LanguageSwitcher
                variant="link-container"
                selectedLanguage={language}
                onSelectLanguage={setLanguage}
            />
        );
    },
    decorators: [StackDecorator()],
};
