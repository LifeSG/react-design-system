// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const toggleExtraArgTypes = {
    "ToggleProps.type": {
        name: "type",
        description:
            'The type of toggle. Values: "checkbox" | "radio" | "yes" | "no"\n\n"checkbox" - allows deselection\n\n"radio", "yes", "no" - does not allow deselection. However they\nwill determine the indicator to be displayed',
        control: false,
        table: {
            category: "ToggleProps",
            type: {
                summary: "ToggleType",
            },
        },
    },
    "ToggleProps.indicator": {
        name: "indicator",
        description: "Specifies if the indicator icon should be displayed",
        control: false,
        table: {
            category: "ToggleProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "ToggleProps.checked": {
        name: "checked",
        description: "Indicates if the element is checked",
        control: false,
        table: {
            category: "ToggleProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "ToggleProps.styleType": {
        name: "styleType",
        description:
            'The style type of the Toggle. Values: "default" | "no-border"',
        control: false,
        table: {
            category: "ToggleProps",
            type: {
                summary: "ToggleStyleType",
            },
        },
    },
    "ToggleProps.children": {
        name: "children",
        description: "The Toggle label",
        control: false,
        table: {
            category: "ToggleProps",
            type: {
                summary: "React.ReactNode",
            },
        },
    },
    "ToggleProps.childrenMaxLines": {
        name: "childrenMaxLines",
        description:
            "The number of lines visible. Additional lines will be truncated",
        control: false,
        table: {
            category: "ToggleProps",
            type: {
                summary:
                    "| { mobile?: number; desktop?: number; tablet?: number; }",
            },
        },
    },
    "ToggleProps.subLabel": {
        name: "subLabel",
        control: false,
        table: {
            category: "ToggleProps",
            type: {
                summary: "(() => JSX.Element) | JSX.Element | string",
            },
        },
    },
    "ToggleProps.disabled": {
        name: "disabled",
        control: false,
        table: {
            category: "ToggleProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "ToggleProps.error": {
        name: "error",
        description: "Specifies if the error display should be present",
        control: false,
        table: {
            category: "ToggleProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "ToggleProps.className": {
        name: "className",
        control: false,
        table: {
            category: "ToggleProps",
            type: {
                summary: "string",
            },
        },
    },
    "ToggleProps.name": {
        name: "name",
        control: false,
        table: {
            category: "ToggleProps",
            type: {
                summary: "string",
            },
        },
    },
    "ToggleProps.id": {
        name: "id",
        control: false,
        table: {
            category: "ToggleProps",
            type: {
                summary: "string",
            },
        },
    },
    "ToggleProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "ToggleProps",
            type: {
                summary: "string",
            },
        },
    },
    "ToggleProps.onChange": {
        name: "onChange",
        control: false,
        table: {
            category: "ToggleProps",
            type: {
                summary:
                    "| ((event: React.ChangeEvent<HTMLInputElement>) => void)",
            },
        },
    },
    "ToggleProps.compositeSection": {
        name: "compositeSection",
        description: "The Toggle subsection",
        control: false,
        table: {
            category: "ToggleProps",
            type: {
                summary: "ToggleCompositeSectionProps",
            },
        },
    },
    "ToggleProps.removable": {
        name: "removable",
        description: "Specifies if the remove button should be displayed",
        control: false,
        table: {
            category: "ToggleProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "ToggleProps.onRemove": {
        name: "onRemove",
        control: false,
        table: {
            category: "ToggleProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "ToggleProps.useContentWidth": {
        name: "useContentWidth",
        description: "Changes min-width to fit content",
        control: false,
        table: {
            category: "ToggleProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "ToggleProps.focusableWhenDisabled": {
        name: "focusableWhenDisabled",
        control: false,
        table: {
            category: "ToggleProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "ToggleCompositeSectionProps.children": {
        name: "children",
        control: false,
        table: {
            category: "ToggleCompositeSectionProps",
            type: {
                summary: "React.ReactNode",
            },
        },
    },
    "ToggleCompositeSectionProps.collapsible": {
        name: "collapsible",
        description: "Specifies if the subsection is collapsible",
        control: false,
        table: {
            category: "ToggleCompositeSectionProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "ToggleCompositeSectionProps.initialExpanded": {
        name: "initialExpanded",
        description:
            "The initial expanded state. Only applicable if collapsible",
        control: false,
        table: {
            category: "ToggleCompositeSectionProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "ToggleCompositeSectionProps.errors": {
        name: "errors",
        description:
            "Specifies errors to be displayed when the subsection is collapsed",
        control: false,
        table: {
            category: "ToggleCompositeSectionProps",
            type: {
                summary: "string[] | JSX.Element",
            },
        },
    },
    ToggleType: {
        name: "ToggleType",
        control: false,
        table: {
            category: "ToggleType",
            type: {
                summary: '"checkbox" | "radio" | "yes" | "no"',
            },
        },
    },
    ToggleStyleType: {
        name: "ToggleStyleType",
        control: false,
        table: {
            category: "ToggleStyleType",
            type: {
                summary: '"default" | "no-border"',
            },
        },
    },
} satisfies Record<string, unknown>;
