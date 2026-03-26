// AUTO-GENERATED — do not edit manually.
// Source: src/input-multi-select/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const InputMultiSelectPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "readOnly",
                description:
                    "Makes the component read-only, preventing user input.",
                propTypes: ["boolean"],
            },
            {
                name: "selectedOptions",
                description: "The currently selected options.",
                propTypes: ["T[]"],
            },
            {
                name: "onSelectOptions",
                description: "Callback fired when the selected options change.",
                propTypes: ["((options: T[]) => void) | undefined"],
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
                name: "maxSelectable",
                description: "Maximum number of options that can be selected.",
                propTypes: ["number"],
            },
            {
                name: "customLabels",
                description:
                    "Custom labels for dropdown UI elements such as the search placeholder or empty state.",
                propTypes: ["DropdownCustomLabelProps"],
            },
            {
                name: "dropdownWidth",
                description: "Custom width for the dropdown.",
                propTypes: ["string"],
            },
            {
                name: "dropdownRootNode",
                description:
                    "The root element that contains the dropdown element. Defaults to the document body. If the parent that contains the trigger element has a higher z-index than the dropdown, the dropdown may not be visible. Specify the parent element here instead",
                propTypes: ["RefObject<HTMLElement>"],
            },
            {
                name: "options",
                description: "",
                propTypes: ["nput"],
                mandatory: true,
            },
            {
                name: "optionsLoadState",
                description:
                    'Used when options are loaded from an api call. Values: "loading" | "fail" | "success"',
                propTypes: ["user input. */\n    readOnly?:"],
            },
            {
                name: "optionTruncationType",
                description:
                    'Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end"',
                propTypes: ["d options change. */"],
            },
            {
                name: "onShowOptions",
                description:
                    "Callback fired when the dropdown options list is shown.",
                propTypes: ["omponent loses focus. */"],
            },
            {
                name: "onHideOptions",
                description:
                    "Callback fired when the dropdown options list is hidden.",
                propTypes: ["variant?: DropdownVari"],
            },
            {
                name: "onRetry",
                description:
                    "Callback fired when the user retries loading options after a failure.",
                propTypes: ["lignment?: DropdownAlignm"],
            },
            {
                name: "name",
                description:
                    "The name attribute for the underlying button element.",
                propTypes: ["ements such as the"],
            },
            {
                name: "disabled",
                description: "Disables user interaction with the component.",
                propTypes: ["to the document bod"],
            },
            {
                name: "error",
                description: "Displays the component in an error state.",
                propTypes: ["as a higher z-index"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["parent element here"],
            },
            {
                name: "valueExtractor",
                description: "Function to derive value from an item",
                propTypes: ["=> void) | undefined;\n    /**"],
            },
            {
                name: "listExtractor",
                description:
                    "Function to derive options display value from an item",
                propTypes: [
                    "ed;\n    /** Visual variant for the dropdown list. */",
                ],
            },
            {
                name: "renderListItem",
                description: "Function to render custom component",
                propTypes: [
                    "ropdown relative to the trigger element. */\n    alignment?: DropdownAlignmentType",
                ],
            },
            {
                name: "renderCustomCallToAction",
                description:
                    "Function to render a custom call-to-action component at the bottom of the dropdown list.",
                propTypes: [
                    "pdown. */\n    dropdownWidth?: string",
                    "undefined;\n    /**\n     * The root element that",
                ],
            },
            {
                name: "enableSearch",
                description:
                    "Specifying will render a search bar in the dropdown",
                propTypes: ["a higher z-index tha"],
            },
            {
                name: "hideNoResultsDisplay",
                description:
                    "If specified, the default no results display will not be rendered",
                propTypes: ["dropdownRootNode?"],
            },
            {
                name: "noResultsDescription",
                description: "",
                propTypes: ["type InputMultiSelectPartial"],
            },
            {
                name: "searchPlaceholder",
                description: "",
                propTypes: [""],
            },
            {
                name: "searchFunction",
                description:
                    "Custom function to perform search when a user keys in a value in the search input",
                propTypes: [""],
            },
            {
                name: "onSearch",
                description: "",
                propTypes: [""],
            },
        ],
    },
];
