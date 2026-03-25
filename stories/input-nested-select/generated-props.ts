// AUTO-GENERATED — do not edit manually.
// Source: src/input-nested-select/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const InputNestedSelectOptionsPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "options",
                description: "",
                propTypes: ["L1OptionProps<V1, V2, V3>[]"],
                mandatory: true,
            },
            {
                name: "optionsLoadState",
                description:
                    'Used when options are loaded from an api call. Values: "loading" | "fail" | "success"',
                propTypes: ["ons: L1OptionProps<V1, V2, V3>["],
            },
            {
                name: "optionTruncationType",
                description:
                    'Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end"',
                propTypes: ["xport interface InputNest"],
            },
            {
                name: "onShowOptions",
                description:
                    "Callback fired when the dropdown options list is shown.",
                propTypes: ["ent read-only, preventing user input. */"],
            },
            {
                name: "onHideOptions",
                description:
                    "Callback fired when the dropdown options list is hidden.",
                propTypes: ["ifies if items are expand"],
            },
            {
                name: "onRetry",
                description:
                    "Callback fired when the user retries loading options after a failure.",
                propTypes: ["variant for the dropdown"],
            },
        ],
    },
];

export const InputNestedSelectSharedPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "readOnly",
                description:
                    "Makes the component read-only, preventing user input.",
                propTypes: ["boolean"],
            },
            {
                name: "mode",
                description:
                    "Specifies if items are expanded or collapsed when the dropdown is opened",
                propTypes: ["ExpandMode"],
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
                name: "valueToStringFunction",
                description: "Function to convert selected value into a string",
                propTypes: ["((value: V1 | V2 | V3) => string) | undefined"],
            },
            {
                name: "name",
                description:
                    "The name attribute for the underlying button element.",
                propTypes: ["mber", "undefined;"],
            },
            {
                name: "placeholder",
                description:
                    "Placeholder text displayed when no value is selected.",
                propTypes: ["as a higher z-index"],
            },
            {
                name: "disabled",
                description: "Disables user interaction with the component.",
                propTypes: ["arent element here i"],
            },
            {
                name: "error",
                description: "Displays the component in an error state.",
                propTypes: ["efined;\n    /** Func"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["on?: ((value: V1 |"],
            },
        ],
    },
];

export const L1OptionPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "value",
                description: "",
                propTypes: ["V1"],
                mandatory: true,
            },
            {
                name: "subItems",
                description: "",
                propTypes: ["L2OptionProps<V2, V3>[]"],
            },
            {
                name: "label",
                description: "",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "key",
                description: "",
                propTypes: ["string"],
                mandatory: true,
            },
        ],
    },
];

export const L2OptionPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "value",
                description: "",
                propTypes: ["V2"],
                mandatory: true,
            },
            {
                name: "subItems",
                description: "",
                propTypes: ["L3OptionProps<V3>[]"],
            },
            {
                name: "label",
                description: "",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "key",
                description: "",
                propTypes: ["string"],
                mandatory: true,
            },
        ],
    },
];

export const L3OptionPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "value",
                description: "",
                propTypes: ["V3"],
                mandatory: true,
            },
            {
                name: "subItems",
                description: "",
                propTypes: ["undefined"],
            },
            {
                name: "label",
                description: "",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "key",
                description: "",
                propTypes: ["string"],
                mandatory: true,
            },
        ],
    },
];
