// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const checkboxExtraArgTypes = {
    "CheckboxProps.__inheritedHtmlProps": {
        control: false,
        description: "Inherits props from `HTMLInputElement`.",
        name: "",
        table: {
            category: "CheckboxProps",
            type: {},
        },
    },
    "CheckboxProps.checked": {
        control: false,
        description:
            "Controls the checked state of the checkbox. When omitted, the checkbox is uncontrolled.",
        name: "checked",
        table: {
            category: "CheckboxProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "CheckboxProps.displaySize": {
        control: false,
        description: "Controls the visual size of the checkbox.",
        name: "displaySize",
        table: {
            category: "CheckboxProps",
            defaultValue: {
                summary: '"default"',
            },
            type: {
                summary: "'default' | 'small'",
            },
        },
    },
    "CheckboxProps.focusableWhenDisabled": {
        control: false,
        description:
            'Allows the checkbox to receive focus when `disabled` is true.\n\nWhen set alongside `disabled`, the native `disabled` attribute is omitted\nin favor of `aria-disabled="true"` and `tabIndex={0}`, keeping the element\nkeyboard-reachable. `onChange` is still suppressed.',
        name: "focusableWhenDisabled",
        table: {
            category: "CheckboxProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "CheckboxProps.indeterminate": {
        control: false,
        description:
            "Puts the checkbox into an indeterminate visual and accessibility state.",
        name: "indeterminate",
        table: {
            category: "CheckboxProps",
            type: {
                summary: "boolean",
            },
        },
    },
} satisfies Record<string, unknown>;
