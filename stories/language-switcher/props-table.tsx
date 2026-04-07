import { ApiTable, ApiTableSectionProps } from "stories/storybook-common";

const DATA: ApiTableSectionProps[] = [
    {
        name: "LanguageSwitcher",
        attributes: [
            {
                name: "variant",
                description: "The display variant of the language switcher",
                propTypes: [`"dropdown"`, `"link-container"`],
                defaultValue: `"dropdown"`,
            },
            {
                name: "className",
                description:
                    "The className of the component for custom styling",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "selectedLanguage",
                description: "The currently selected language code",
                propTypes: [`"en"`, `"zh"`, `"ms"`, `"ta"`],
                defaultValue: `"en"`,
            },
            {
                name: "onSelectLanguage",
                description: "Called when a language is selected",
                propTypes: ["(language: LanguageCode) => void"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
