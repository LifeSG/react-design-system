// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const addonsExtraArgTypes = {
    "FilterItemCheckboxOptionProps.label": {
        control: false,
        name: "label",
        type: {
            required: true,
        },
        table: {
            category: "FilterItemCheckboxOptionProps",
            type: {
                summary: "string",
            },
        },
    },
    "FilterItemCheckboxOptionProps.options": {
        control: false,
        description:
            "Nested child options. Providing children makes this item a parent node.",
        name: "options",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemCheckboxOptionProps",
            type: {
                summary: "FilterItemCheckboxOptionProps[]",
            },
        },
    },
    "FilterItemCheckboxOptionProps.value": {
        control: false,
        name: "value",
        type: {
            required: true,
        },
        table: {
            category: "FilterItemCheckboxOptionProps",
            type: {
                summary: "any",
            },
        },
    },
    "FilterItemCheckboxProps.addon": {
        control: false,
        description: "Optional popover addon displayed inline with the title.",
        name: "addon",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemCheckboxProps<T>",
            type: {
                summary: "FormLabelAddonProps",
            },
        },
    },
    "FilterItemCheckboxProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemCheckboxProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "FilterItemCheckboxProps.collapsible": {
        control: false,
        description:
            "Whether the item can be expanded or collapsed in desktop mode.\nItems are always expanded in mobile mode regardless of this setting.",
        name: "collapsible",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemCheckboxProps<T>",
            defaultValue: {
                summary: "true",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "FilterItemCheckboxProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemCheckboxProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "FilterItemCheckboxProps.expanded": {
        control: false,
        description:
            "Controls the expanded state. When provided, the component is controlled\nand `onExpandChange` must be used to update the value.",
        name: "expanded",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemCheckboxProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "FilterItemCheckboxProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemCheckboxProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "FilterItemCheckboxProps.initialExpanded": {
        control: false,
        description:
            "Initial expanded state for the uncontrolled component.\nHas no effect when `expanded` is provided.",
        name: "initialExpanded",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemCheckboxProps<T>",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "FilterItemCheckboxProps.labelExtractor": {
        control: false,
        description:
            "Derives the display label from an option item.\nFalls back to `item.label` when not provided.",
        name: "labelExtractor",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemCheckboxProps<T>",
            type: {
                summary: "(item: T) => React.ReactNode",
            },
        },
    },
    "FilterItemCheckboxProps.minimisable": {
        control: false,
        description:
            'Whether the item content can be minimised to show a truncated height with\na "View more" button.',
        name: "minimisable",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemCheckboxProps<T>",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "FilterItemCheckboxProps.minimisableOptions": {
        control: false,
        description:
            'When `true`, shows a "View more / View less" button when there are more\noptions than the minimised threshold.',
        name: "minimisableOptions",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemCheckboxProps<T>",
            defaultValue: {
                summary: "true",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "FilterItemCheckboxProps.minimisedHeight": {
        control: false,
        description:
            "Height in pixels to clip the content when minimised.\nDefaults to 50% of content height, capped at 216 px.",
        name: "minimisedHeight",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemCheckboxProps<T>",
            type: {
                summary: "number",
            },
        },
    },
    "FilterItemCheckboxProps.onExpandChange": {
        control: false,
        description: "Called when the user toggles the expand/collapse state.",
        name: "onExpandChange",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemCheckboxProps<T>",
            type: {
                summary: "(expanded: boolean) => void",
            },
        },
    },
    "FilterItemCheckboxProps.onSelect": {
        control: false,
        description: "Called when the selection changes.",
        name: "onSelect",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemCheckboxProps<T>",
            type: {
                summary: "(options: T[]) => void",
            },
        },
    },
    "FilterItemCheckboxProps.options": {
        control: false,
        description: "The full list of selectable options.",
        name: "options",
        type: {
            required: true,
        },
        table: {
            category: "FilterItemCheckboxProps<T>",
            type: {
                summary: "T[]",
            },
        },
    },
    "FilterItemCheckboxProps.selectedOptions": {
        control: false,
        description:
            "The currently selected options. When provided, the component syncs its\ninternal selection state to this value.",
        name: "selectedOptions",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemCheckboxProps<T>",
            type: {
                summary: "T[]",
            },
        },
    },
    "FilterItemCheckboxProps.showAsCheckboxInMobile": {
        control: false,
        description:
            "When `true`, renders checkboxes instead of toggle chips in mobile mode.\nHas no effect for nested option trees, which always use checkboxes.",
        name: "showAsCheckboxInMobile",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemCheckboxProps<T>",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "FilterItemCheckboxProps.showDivider": {
        control: false,
        description:
            "Whether a divider line is shown above the item in desktop mode.",
        name: "showDivider",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemCheckboxProps<T>",
            defaultValue: {
                summary: "true",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "FilterItemCheckboxProps.showMobileDivider": {
        control: false,
        description:
            "Whether a divider line is shown above the item in mobile mode.",
        name: "showMobileDivider",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemCheckboxProps<T>",
            defaultValue: {
                summary: "true",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "FilterItemCheckboxProps.style": {
        control: false,
        name: "style",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemCheckboxProps<T>",
            type: {
                summary: "React.CSSProperties",
            },
        },
    },
    "FilterItemCheckboxProps.title": {
        control: false,
        description: "Label rendered in the item header.",
        name: "title",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemCheckboxProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "FilterItemCheckboxProps.useToggleContentWidth": {
        control: false,
        description:
            "When `true`, toggle chips in mobile mode grow to fit their content width\ninstead of stretching to a fixed minimum width.",
        name: "useToggleContentWidth",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemCheckboxProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "FilterItemCheckboxProps.valueExtractor": {
        control: false,
        description:
            "Derives the unique value key from an option item.\nFalls back to `item.value` when not provided.",
        name: "valueExtractor",
        type: {
            required: false,
        },
        table: {
            category: "FilterItemCheckboxProps<T>",
            type: {
                summary: "(item: T) => string",
            },
        },
    },
    "FlattenedFilterOption.hasChildren": {
        control: false,
        name: "hasChildren",
        type: {
            required: true,
        },
        table: {
            category: "FlattenedFilterOption<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "FlattenedFilterOption.indexInParent": {
        control: false,
        name: "indexInParent",
        type: {
            required: true,
        },
        table: {
            category: "FlattenedFilterOption<T>",
            type: {
                summary: "number",
            },
        },
    },
    "FlattenedFilterOption.keyPath": {
        control: false,
        name: "keyPath",
        type: {
            required: true,
        },
        table: {
            category: "FlattenedFilterOption<T>",
            type: {
                summary: "string[]",
            },
        },
    },
    "FlattenedFilterOption.label": {
        control: false,
        name: "label",
        type: {
            required: true,
        },
        table: {
            category: "FlattenedFilterOption<T>",
            type: {
                summary: "string",
            },
        },
    },
    "FlattenedFilterOption.level": {
        control: false,
        name: "level",
        type: {
            required: true,
        },
        table: {
            category: "FlattenedFilterOption<T>",
            type: {
                summary: "number",
            },
        },
    },
    "FlattenedFilterOption.originalItem": {
        control: false,
        name: "originalItem",
        type: {
            required: true,
        },
        table: {
            category: "FlattenedFilterOption<T>",
            type: {
                summary: "T",
            },
        },
    },
    "FlattenedFilterOption.parentKeyPath": {
        control: false,
        name: "parentKeyPath",
        type: {
            required: false,
        },
        table: {
            category: "FlattenedFilterOption<T>",
            type: {
                summary: "string[]",
            },
        },
    },
    "FlattenedFilterOption.parentSetSize": {
        control: false,
        name: "parentSetSize",
        type: {
            required: true,
        },
        table: {
            category: "FlattenedFilterOption<T>",
            type: {
                summary: "number",
            },
        },
    },
    "FlattenedFilterOption.value": {
        control: false,
        name: "value",
        type: {
            required: true,
        },
        table: {
            category: "FlattenedFilterOption<T>",
            type: {
                summary: "any",
            },
        },
    },
} satisfies Record<string, unknown>;
