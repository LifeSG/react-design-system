// AUTO-GENERATED — do not edit manually.
// Source: src/input-nested-multi-select/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const InputNestedMultiSelectPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "selectedKeyPaths",
                description:
                    "Specifies key paths to select particular option label",
                propTypes: ["string[][]"],
            },
            {
                name: "onSelectOptions",
                description:
                    "Called when a selection is made. Returns the key paths and values of selected items in the next selection state",
                propTypes: [
                    "",
                    "((keyPaths: string[][], values: Array<V1 | V2 | V3>) => void)\n        | undefined",
                ],
            },
            {
                name: "dropdownWidth",
                description: "Custom width for the dropdown.",
                propTypes: ["string"],
            },
            {
                name: "onBlur",
                description: "Callback fired when the component loses focus.",
                propTypes: ["(() => void) | undefined"],
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
                propTypes: ["1, V2, V3>,\n        Dropdown"],
                mandatory: true,
            },
            {
                name: "optionsLoadState",
                description:
                    'Used when options are loaded from an api call. Values: "loading" | "fail" | "success"',
                propTypes: ["ps<V1, V2, V3>,\n        Dropdow"],
            },
            {
                name: "optionTruncationType",
                description:
                    'Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end"',
                propTypes: ["undefined;\n    /** Calle"],
            },
            {
                name: "onShowOptions",
                description:
                    "Callback fired when the dropdown options list is shown.",
                propTypes: ["t selection state */"],
            },
            {
                name: "onHideOptions",
                description:
                    "Callback fired when the dropdown options list is hidden.",
                propTypes: ["", "undefined;"],
            },
            {
                name: "onRetry",
                description:
                    "Callback fired when the user retries loading options after a failure.",
                propTypes: ["fired when the component"],
            },
            {
                name: "readOnly",
                description:
                    "Makes the component read-only, preventing user input.",
                propTypes: ["ues: Array<V1 | V2 |"],
            },
            {
                name: "mode",
                description:
                    "Specifies if items are expanded or collapsed when the dropdown is opened",
                propTypes: [": string", "undefined;"],
            },
            {
                name: "variant",
                description: "Visual variant for the dropdown list.",
                propTypes: ["lur?: (() => void) | undefined;"],
            },
            {
                name: "alignment",
                description:
                    "Alignment of the dropdown relative to the trigger element.",
                propTypes: ["state. */\n    customLabels?: Dropd"],
            },
            {
                name: "dropdownZIndex",
                description: "Z-index override for the dropdown layer.",
                propTypes: ["nheritance */\nexpor"],
            },
            {
                name: "dropdownRootNode",
                description:
                    "The root element that contains the dropdown element. Defaults to the document body. If the parent that contains the trigger element has a higher z-index than the dropdown, the dropdown may not be visible. Specify the parent element here instead",
                propTypes: [""],
            },
            {
                name: "valueToStringFunction",
                description: "Function to convert selected value into a string",
                propTypes: [""],
            },
            {
                name: "name",
                description:
                    "The name attribute for the underlying button element.",
                propTypes: ["ritance */\nexport t"],
            },
            {
                name: "disabled",
                description: "Disables user interaction with the component.",
                propTypes: [""],
            },
            {
                name: "error",
                description: "Displays the component in an error state.",
                propTypes: [""],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: [""],
            },
            {
                name: "enableSearch",
                description:
                    "Specifying will render a search bar in the dropdown",
                propTypes: [""],
            },
            {
                name: "hideNoResultsDisplay",
                description:
                    "If specified, the default no results display will not be rendered",
                propTypes: [""],
            },
            {
                name: "noResultsDescription",
                description: "",
                propTypes: [""],
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
