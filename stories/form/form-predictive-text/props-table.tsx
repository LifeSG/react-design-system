import { ApiTable, ApiTableSectionProps } from "stories/storybook-common";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "PredictiveTextInput specific props",
        attributes: [
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "The class selector of the component",
                propTypes: ["string"],
            },
            {
                name: "minimumCharacters",
                description:
                    "Minimum number of characters, before options are shown",
                propTypes: ["number"],
                defaultValue: "3",
            },
            {
                name: "placeholder",
                description: "The placeholder text of the component",
                propTypes: ["string"],
                defaultValue: "Enter here...",
            },
            {
                name: "disabled",
                description:
                    "Indicates if the component is disabled and selection is not allowed",
                propTypes: ["boolean"],
            },
            {
                name: "readOnly",
                description:
                    "Indicates if the component is readOnly and selection is not allowed",
                propTypes: ["boolean"],
            },
            {
                name: "error",
                description: "Indicates if an error display is to be set",
                propTypes: ["boolean"],
            },
            {
                name: "selectedOption",
                description: "The selected option object",
                propTypes: ["T"],
            },
            {
                name: "fetchOptions",
                mandatory: true,
                description: "Async callback function to populate options",
                propTypes: ["(input: string) => Promise<T[]>"],
            },
            {
                name: "valueExtractor",
                description: "The function to derive the value from an option",
                propTypes: ["(option: T) => V"],
            },
            {
                name: "listExtractor",
                description:
                    "The function to derive the option display value from an option",
                propTypes: ["(option: T) => string"],
            },
            {
                name: "displayValueExtractor",
                description:
                    "The function to derive the selector's display value from an option",
                propTypes: ["(option: T) => string"],
            },
            {
                name: "onSelectOption",
                description: "Called when an option is selected",
                propTypes: ["(option: T, extractedValue: T | V) => void"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
