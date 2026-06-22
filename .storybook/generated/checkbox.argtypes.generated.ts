// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const checkboxExtraArgTypes = {
    "CheckboxProps.displaySize": {
        name: "displaySize",
        description: 'The display sizes of the Checkbox. "small" | "default"',
        control: false,
        table: {
            category: "CheckboxProps",
            type: {
                summary: "CheckboxSize",
            },
        },
    },
    "CheckboxProps.indeterminate": {
        name: "indeterminate",
        description: "The indeterminate state of the Checkbox",
        control: false,
        table: {
            category: "CheckboxProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "CheckboxProps.focusableWhenDisabled": {
        name: "focusableWhenDisabled",
        description:
            "Allows the component to receive focus when disabled. Interaction remains blocked.",
        control: false,
        table: {
            category: "CheckboxProps",
            type: {
                summary: "boolean",
            },
        },
    },
    CheckboxSize: {
        name: "CheckboxSize",
        control: false,
        table: {
            category: "CheckboxSize",
            type: {
                summary: '"small" | "default"',
            },
        },
    },
} satisfies Record<string, unknown>;
