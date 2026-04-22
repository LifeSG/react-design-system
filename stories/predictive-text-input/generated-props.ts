// AUTO-GENERATED — do not edit manually.
// Source: src/predictive-text-input/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const PredictiveTextInputPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "id",
                description: "Unique HTML identifier for the input element.",
                propTypes: ["string"],
            },
            {
                name: "className",
                description:
                    "Additional CSS class names applied to the root element.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "minimumCharacters",
                description:
                    "Minimum number of characters, before options are shown",
                propTypes: ["number"],
            },
            {
                name: "placeholder",
                description:
                    "Placeholder text displayed when the input is empty.",
                propTypes: ["string"],
            },
            {
                name: "readOnly",
                description:
                    "When `true`, the input is read-only and cannot be changed by the user.",
                propTypes: ["boolean"],
            },
            {
                name: "disabled",
                description:
                    "When `true`, the input is disabled and cannot be interacted with.",
                propTypes: ["boolean"],
            },
            {
                name: "error",
                description:
                    "Applies error styling to indicate an invalid value.",
                propTypes: ["boolean"],
            },
            {
                name: "selectedOption",
                description:
                    "The currently selected item; controls which option appears as selected in the dropdown.",
                propTypes: ["T"],
            },
            {
                name: "alignment",
                description:
                    "Alignment of the dropdown list relative to the input field.",
                propTypes: ["DropdownAlignmentType"],
            },
            {
                name: "dropdownZIndex",
                description: "CSS z-index applied to the dropdown overlay.",
                propTypes: ["number"],
            },
            {
                name: "dropdownRootNode",
                description:
                    "The root element that contains the dropdown element. Defaults to the document body. If the parent that contains the trigger element has a higher z-index than the dropdown, the dropdown may not be visible. Specify the parent element here instead",
                propTypes: ["RefObject<HTMLElement>"],
            },
            {
                name: "dropdownWidth",
                description:
                    "Custom width for the dropdown in pixels. When specified, the dropdown will use this width instead of matching the input element width.",
                propTypes: ["string"],
            },
            {
                name: "fetchOptions",
                description: "Async Function to populate options",
                propTypes: ["(input: string) => Promise<T[]>"],
                mandatory: true,
            },
            {
                name: "valueExtractor",
                description: "Function to derive value from an item",
                propTypes: ["((item: T) => V) | undefined"],
            },
            {
                name: "listExtractor",
                description:
                    "Function to derive options display value from an item",
                propTypes: [
                    "((item: T) => string",
                    "ListItemDisplayProps) | undefined",
                ],
            },
            {
                name: "displayValueExtractor",
                description:
                    "Function to derive display value for selected option",
                propTypes: ["((option: T) => string) | undefined"],
            },
            {
                name: "onSelectOption",
                description: "Callback function when option is selected",
                propTypes: [
                    "",
                    "((option: T | undefined, extractedValue: V | undefined) => void)\n        | undefined",
                ],
            },
        ],
    },
];
