// AUTO-GENERATED — do not edit manually.
// Source: src/input-range-select/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const InputRangeSelectPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "readOnly",
                description:
                    "Makes the component read-only, preventing user input.",
                propTypes: ["boolean"],
            },
            {
                name: "placeholders",
                description:
                    "Placeholder text for each of the from/to dropdowns.",
                propTypes: ["InputRangeProp<string>"],
            },
            {
                name: "selectedOptions",
                description: "The currently selected from/to options.",
                propTypes: ["InputRangeProp<T>"],
            },
            {
                name: "alignment",
                description:
                    "Alignment of the dropdowns relative to their trigger elements.",
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
                    "The root element that contains the dropdown element. Defaults to the document body.",
                propTypes: ["RefObject<HTMLElement>"],
            },
            {
                name: "dropdownWidth",
                description: "Custom width for the dropdown.",
                propTypes: ["string"],
            },
            {
                name: "onSelectOption",
                description:
                    "Callback fired when either the from or to option changes. Returns the full range selection and its extracted value.",
                propTypes: [
                    "",
                    "((option: InputRangeProp<T>, extractedValue: V | undefined) => void)\n        | undefined",
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
                name: "options",
                description: "",
                propTypes: ["InputRangeProp<T[]>"],
                mandatory: true,
            },
            {
                name: "optionsLoadState",
                description: "",
                propTypes: ["InputRangeProp<ItemsLoadStateType | undefined>"],
            },
            {
                name: "optionTruncationType",
                description:
                    'Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end"',
                propTypes: ["ropdown input for selecti"],
            },
            {
                name: "onShowOptions",
                description:
                    "Callback fired when the dropdown options list is shown.",
                propTypes: ["art-end, dropdown-pair, f"],
            },
            {
                name: "onHideOptions",
                description:
                    "Callback fired when the dropdown options list is hidden.",
                propTypes: [".HTMLAttributes<HTMLEleme"],
            },
            {
                name: "onRetry",
                description:
                    "Callback fired when the user retries loading options after a failure.",
                propTypes: [",\n        DropdownDisplay"],
            },
            {
                name: "name",
                description:
                    "The name attribute for the underlying button element.",
                propTypes: ["undefined;\n    /**"],
            },
            {
                name: "disabled",
                description: "Disables user interaction with the component.",
                propTypes: ["e dropdown layer. */"],
            },
            {
                name: "error",
                description: "Displays the component in an error state.",
                propTypes: ["that contains the d"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["?: RefObject<HTMLEl"],
            },
            {
                name: "valueExtractor",
                description: "Function to derive value from an item",
                propTypes: ["its own options list.\n *\n *"],
            },
            {
                name: "listExtractor",
                description:
                    "Function to derive options display value from an item",
                propTypes: [
                    "nterface InputRangeSelectProps<T, V>\n    extends React.HT",
                ],
            },
            {
                name: "renderListItem",
                description: "Function to render custom component",
                propTypes: [
                    'Omit<InputSelectSharedProps<T>, "options">,\n        DropdownDisplayProps<T,',
                ],
            },
            {
                name: "renderCustomCallToAction",
                description:
                    "Function to render a custom call-to-action component at the bottom of the dropdown list.",
                propTypes: [
                    "owns relative to their trigger elements. */\n    alignment?: DropdownAlignmentType",
                    "und",
                ],
            },
            {
                name: "enableSearch",
                description:
                    "Specifying will render a search bar in the dropdown",
                propTypes: ["at contains the drop"],
            },
            {
                name: "hideNoResultsDisplay",
                description:
                    "If specified, the default no results display will not be rendered",
                propTypes: [";\n    /** Custom wid"],
            },
            {
                name: "noResultsDescription",
                description: "",
                propTypes: ["he from or to option changes"],
            },
            {
                name: "searchPlaceholder",
                description: "",
                propTypes: ["((option: InputRang"],
            },
            {
                name: "searchFunction",
                description:
                    "Custom function to perform search when a user keys in a value in the search input",
                propTypes: ["selected option */\n    displayValueExtract"],
            },
            {
                name: "onSearch",
                description: "",
                propTypes: [") => string) | undefined;"],
            },
        ],
    },
];

export const InputRangeSelectOptionsPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "options",
                description: "",
                propTypes: ["InputRangeProp<T[]>"],
                mandatory: true,
            },
            {
                name: "optionsLoadState",
                description: "",
                propTypes: ["InputRangeProp<ItemsLoadStateType | undefined>"],
            },
            {
                name: "optionTruncationType",
                description:
                    'Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end"',
                propTypes: ["ropdown input for selecti"],
            },
            {
                name: "onShowOptions",
                description:
                    "Callback fired when the dropdown options list is shown.",
                propTypes: ["art-end, dropdown-pair, f"],
            },
            {
                name: "onHideOptions",
                description:
                    "Callback fired when the dropdown options list is hidden.",
                propTypes: [".HTMLAttributes<HTMLEleme"],
            },
            {
                name: "onRetry",
                description:
                    "Callback fired when the user retries loading options after a failure.",
                propTypes: [",\n        DropdownDisplay"],
            },
        ],
    },
];
