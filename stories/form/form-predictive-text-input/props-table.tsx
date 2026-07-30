import type { ApiTableSectionProps } from "stories/storybook-common";
import { ApiTable } from "stories/storybook-common";

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
            {
                name: "dropdownZIndex",
                description:
                    "The custom z-index of the dropdown. Try specifying this if you encounter z-index conflicts.",
                propTypes: ["number"],
                defaultValue: "50",
            },
            {
                name: "dropdownRootNode",
                description: (
                    <>
                        The root element that hosts the dropdown element. Only
                        specify this if you absolutely need to change the parent
                        of the dropdown.
                        <br />
                        <br />
                        For example, the dropdown is rendered in{" "}
                        <code>body</code> by default. This could cause scroll
                        issues if your UI only scrolls within a certain
                        container. In that case, you can specify this prop so
                        that they share the same stacking context. However, note
                        that this might cause z-index issues since it will no
                        longer be rendered in <code>body</code>.
                    </>
                ),
                propTypes: ["RefObject<HTMLElement>"],
                defaultValue: (
                    <>
                        document <code>body</code>
                    </>
                ),
            },
            {
                name: "dropdownWidth",
                description:
                    "Custom width for the dropdown. When specified, the dropdown will use this exact width instead of matching the input element width.",
                propTypes: ["string"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
