// AUTO-GENERATED — do not edit manually.
// Source: src/input-select/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const InputSelectPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "readOnly",
                description:
                    "Makes the component read-only, preventing user input.",
                propTypes: ["boolean"],
            },
            {
                name: "selectedOption",
                description: "The currently selected option.",
                propTypes: ["T"],
            },
            {
                name: "onSelectOption",
                description:
                    "Callback fired when an option is selected. Returns the option and its extracted value.",
                propTypes: [
                    "((option: T, extractedValue: V) => void) | undefined",
                ],
            },
            {
                name: "displayValueExtractor",
                description:
                    "Function to derive display value for selected option",
                propTypes: ["((option: T) => string) | undefined"],
            },
            {
                name: "valueToStringFunction",
                description: "Function to convert value into a string",
                propTypes: ["((value: V) => string) | undefined"],
            },
            {
                name: "renderCustomSelectedOption",
                description: "Function to render selected custom component",
                propTypes: ["((option: T) => JSX.Element) | undefined"],
            },
            {
                name: "onBlur",
                description: "Callback fired when the component loses focus.",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "variant",
                description: "Visual variant for the dropdown list.",
                propTypes: ["DropdownVariantType"],
            },
            {
                name: "alignment",
                description:
                    "Alignment of the dropdown relative to the trigger element.",
                propTypes: ["DropdownAlignmentType"],
            },
            {
                name: "dropdownZIndex",
                description: "Z-index override for the dropdown layer.",
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
                name: "customLabels",
                description:
                    "Custom labels for dropdown UI elements such as the search placeholder or empty state.",
                propTypes: ["DropdownCustomLabelProps"],
            },
            {
                name: "options",
                description: "",
                propTypes: ["T[]"],
                mandatory: true,
            },
            {
                name: "optionsLoadState",
                description:
                    'Used when options are loaded from an api call. Values: "loading" | "fail" | "success"',
                propTypes: ["ItemsLoadStateType"],
            },
            {
                name: "optionTruncationType",
                description:
                    'Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end"',
                propTypes: ["TruncateType"],
            },
            {
                name: "onShowOptions",
                description:
                    "Callback fired when the dropdown options list is shown.",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onHideOptions",
                description:
                    "Callback fired when the dropdown options list is hidden.",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onRetry",
                description:
                    "Callback fired when the user retries loading options after a failure.",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "name",
                description:
                    "The name attribute for the underlying button element.",
                propTypes: ["string"],
            },
            {
                name: "disabled",
                description: "Disables user interaction with the component.",
                propTypes: ["boolean"],
            },
            {
                name: "error",
                description: "Displays the component in an error state.",
                propTypes: ["boolean"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "valueExtractor",
                description: "Function to derive value from an item",
                propTypes: ["dropdown options list is sho"],
            },
            {
                name: "listExtractor",
                description:
                    "Function to derive options display value from an item",
                propTypes: [
                    "ropdown options list is hidden. */\n    onHideOptions?: ((",
                ],
            },
            {
                name: "renderListItem",
                description: "Function to render custom component",
                propTypes: [
                    "loading options after a failure. */\n    onRetry?: (() => void) | undefined;\n}\n\n/**",
                ],
            },
            {
                name: "renderCustomCallToAction",
                description:
                    "Function to render a custom call-to-action component at the bottom of the dropdown list.",
                propTypes: [
                    "is selected. */\n    placeholder?: string",
                    "undefined;\n    /** Disables user interactio",
                ],
            },
            {
                name: "enableSearch",
                description:
                    "Specifying will render a search bar in the dropdown",
                propTypes: ["olean", "undefined;"],
            },
            {
                name: "hideNoResultsDisplay",
                description:
                    "If specified, the default no results display will not be rendered",
                propTypes: ["===================="],
            },
            {
                name: "noResultsDescription",
                description: "",
                propTypes: ["============================"],
            },
            {
                name: "searchPlaceholder",
                description: "",
                propTypes: ["ion from a list.\n *"],
            },
            {
                name: "searchFunction",
                description:
                    "Custom function to perform search when a user keys in a value in the search input",
                propTypes: ["extends React.HTMLAttributes<HTMLElement>,"],
            },
            {
                name: "onSearch",
                description: "",
                propTypes: ["lectOptionsProps<T>,"],
            },
        ],
    },
];

export const InputSelectOptionsPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "options",
                description: "",
                propTypes: ["T[]"],
                mandatory: true,
            },
            {
                name: "optionsLoadState",
                description:
                    'Used when options are loaded from an api call. Values: "loading" | "fail" | "success"',
                propTypes: ["ItemsLoadStateType"],
            },
            {
                name: "optionTruncationType",
                description:
                    'Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end"',
                propTypes: ["TruncateType"],
            },
            {
                name: "onShowOptions",
                description:
                    "Callback fired when the dropdown options list is shown.",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onHideOptions",
                description:
                    "Callback fired when the dropdown options list is hidden.",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onRetry",
                description:
                    "Callback fired when the user retries loading options after a failure.",
                propTypes: ["(() => void) | undefined"],
            },
        ],
    },
];

export const InputSelectSharedPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "name",
                description:
                    "The name attribute for the underlying button element.",
                propTypes: ["string"],
            },
            {
                name: "options",
                description: "The list of options to display in the dropdown.",
                propTypes: ["T[]"],
                mandatory: true,
            },
            {
                name: "placeholder",
                description:
                    "Placeholder text displayed when no value is selected.",
                propTypes: ["string"],
            },
            {
                name: "disabled",
                description: "Disables user interaction with the component.",
                propTypes: ["boolean"],
            },
            {
                name: "error",
                description: "Displays the component in an error state.",
                propTypes: ["boolean"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
        ],
    },
];
