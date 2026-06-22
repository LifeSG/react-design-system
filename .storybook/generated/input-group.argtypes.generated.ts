// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const inputGroupExtraArgTypes = {
    "CustomAddon.children": {
        name: "children",
        control: false,
        table: {
            category: "CustomAddon",
            type: {
                summary: "JSX.Element",
            },
        },
    },
    "LabelAddon.value": {
        name: "value",
        control: false,
        table: {
            category: "LabelAddon",
            type: {
                summary: "string",
            },
        },
    },
    "ListAddon.placeholder": {
        name: "placeholder",
        control: false,
        table: {
            category: "ListAddon<T>",
            type: {
                summary: "string",
            },
        },
    },
    "ListAddon.displayValueExtractor": {
        name: "displayValueExtractor",
        control: false,
        table: {
            category: "ListAddon<T>",
            type: {
                summary: "((item: T) => string)",
            },
        },
    },
    "ListAddon.data-selector-testid": {
        name: "data-selector-testid",
        control: false,
        table: {
            category: "ListAddon<T>",
            type: {
                summary: "string",
            },
        },
    },
    "ListAddon.aria-label": {
        name: "aria-label",
        control: false,
        table: {
            category: "ListAddon<T>",
            type: {
                summary: "string",
            },
        },
    },
    "ListAddon.options": {
        name: "options",
        control: false,
        table: {
            category: "ListAddon<T>",
            type: {
                summary: "T[]",
            },
        },
    },
    "ListAddon.selectedOption": {
        name: "selectedOption",
        control: false,
        table: {
            category: "ListAddon<T>",
            type: {
                summary: "T",
            },
        },
    },
    "ListAddon.onSelectOption": {
        name: "onSelectOption",
        control: false,
        table: {
            category: "ListAddon<T>",
            type: {
                summary: "((option: T, extractedValue: T | V) => void)",
            },
        },
    },
    "ListAddon.optionsLoadState": {
        name: "optionsLoadState",
        description:
            'Used when items are loaded from an api call.\nValues: "loading" | "fail" | "success"',
        control: false,
        table: {
            category: "ListAddon<T>",
            type: {
                summary: "ItemsLoadStateType",
            },
        },
    },
    "ListAddon.optionTruncationType": {
        name: "optionTruncationType",
        description:
            'Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end"',
        control: false,
        table: {
            category: "ListAddon<T>",
            type: {
                summary: "TruncateType",
            },
        },
    },
    "ListAddon.onRetry": {
        name: "onRetry",
        control: false,
        table: {
            category: "ListAddon<T>",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "ListAddon.onHideOptions": {
        name: "onHideOptions",
        control: false,
        table: {
            category: "ListAddon<T>",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "ListAddon.onShowOptions": {
        name: "onShowOptions",
        control: false,
        table: {
            category: "ListAddon<T>",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "ListAddon.dropdownZIndex": {
        name: "dropdownZIndex",
        control: false,
        table: {
            category: "ListAddon<T>",
            type: {
                summary: "number",
            },
        },
    },
    "ListAddon.dropdownRootNode": {
        name: "dropdownRootNode",
        description:
            "The root element that contains the dropdown element. Defaults to the document body.\n\nIf the parent that contains the trigger element has a higher z-index than the dropdown,\nthe dropdown may not be visible. Specify the parent element here instead",
        control: false,
        table: {
            category: "ListAddon<T>",
            type: {
                summary: "RefObject<HTMLElement>",
            },
        },
    },
    "AddonProps.type": {
        name: "type",
        control: false,
        table: {
            category: "AddonProps<T>",
            type: {
                summary: "InputGroupAddonType",
            },
        },
    },
    "AddonProps.attributes": {
        name: "attributes",
        control: false,
        table: {
            category: "AddonProps<T>",
            type: {
                summary: "ListAddon<T, V> | LabelAddon | CustomAddon",
            },
        },
    },
    "AddonProps.position": {
        name: "position",
        control: false,
        table: {
            category: "AddonProps<T>",
            type: {
                summary: "InputGroupAddonPosition",
            },
        },
    },
    "InputGroupProps.addon": {
        name: "addon",
        control: false,
        table: {
            category: "InputGroupProps<T>",
            type: {
                summary: "AddonProps<T, V>",
            },
        },
    },
    "InputGroupProps.noBorder": {
        name: "noBorder",
        control: false,
        table: {
            category: "InputGroupProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "InputGroupProps.onBlur": {
        name: "onBlur",
        control: false,
        table: {
            category: "InputGroupProps<T>",
            type: {
                summary:
                    "((event?: React.FocusEvent<HTMLInputElement>) => void)",
            },
        },
    },
    InputGroupAddonType: {
        name: "InputGroupAddonType",
        control: false,
        table: {
            category: "InputGroupAddonType",
            type: {
                summary: '"label" | "list" | "custom"',
            },
        },
    },
    InputGroupAddonPosition: {
        name: "InputGroupAddonPosition",
        control: false,
        table: {
            category: "InputGroupAddonPosition",
            type: {
                summary: '"left" | "right"',
            },
        },
    },
    InputGroupPartialProps: {
        name: "InputGroupPartialProps<T>",
        description: "To be exposed for Form component inheritance",
        control: false,
        table: {
            category: "InputGroupPartialProps<T>",
            type: {
                summary: 'Omit<InputGroupProps<T, V>, "error">',
            },
        },
    },
} satisfies Record<string, unknown>;
