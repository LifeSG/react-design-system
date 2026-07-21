// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const uneditableSectionExtraArgTypes = {
    "UneditableSectionItemProps.alert": {
        control: false,
        description: "Alert rendered below the item value.",
        name: "alert",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionItemProps",
            tabGroup: "UneditableSection.Item",
            type: {
                summary: "AlertProps",
            },
        },
    },
    "UneditableSectionItemProps.disableMaskUnmask": {
        control: false,
        description:
            "Prevents the user from toggling the mask or unmask control.",
        name: "disableMaskUnmask",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionItemProps",
            tabGroup: "UneditableSection.Item",
            type: {
                summary: "boolean",
            },
        },
    },
    "UneditableSectionItemProps.displayWidth": {
        control: false,
        description: "Grid column span for the item within the section layout.",
        name: "displayWidth",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionItemProps",
            defaultValue: {
                summary: '"full"',
            },
            tabGroup: "UneditableSection.Item",
            type: {
                summaryParts: ["'full'", "'half'"],
            },
        },
    },
    "UneditableSectionItemProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionItemProps",
            tabGroup: "UneditableSection.Item",
            type: {
                summary: "string",
            },
        },
    },
    "UneditableSectionItemProps.label": {
        control: false,
        description: "Field label shown above the item value.",
        name: "label",
        type: {
            required: true,
        },
        table: {
            category: "UneditableSectionItemProps",
            tabGroup: "UneditableSection.Item",
            type: {
                summary: "string",
            },
        },
    },
    "UneditableSectionItemProps.maskChar": {
        control: false,
        description:
            "Character used to replace each masked character in the displayed value.",
        name: "maskChar",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionItemProps",
            defaultValue: {
                summary: '"•"',
            },
            tabGroup: "UneditableSection.Item",
            type: {
                summary: "string",
            },
        },
    },
    "UneditableSectionItemProps.maskLoadingState": {
        control: false,
        description:
            "Async loading state during a mask or unmask action.\nWhen undefined, the resolved value is rendered directly.",
        name: "maskLoadingState",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionItemProps",
            tabGroup: "UneditableSection.Item",
            type: {
                summaryParts: ["'fail'", "'loading'"],
            },
        },
    },
    "UneditableSectionItemProps.maskRange": {
        control: false,
        description:
            "Index range `[start, end]` of the characters to mask (inclusive, zero-based).\nCharacters outside this range remain visible.\n\nRemarks:\nIgnored when `maskTransformer` or `maskRegex` is provided.",
        name: "maskRange",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionItemProps",
            tabGroup: "UneditableSection.Item",
            type: {
                summary: "number[]",
            },
        },
    },
    "UneditableSectionItemProps.maskRegex": {
        control: false,
        description:
            "Regular expression whose matches are replaced with `maskChar`.\n\nRemarks:\nIgnored when `maskTransformer` is provided.",
        name: "maskRegex",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionItemProps",
            tabGroup: "UneditableSection.Item",
            type: {
                summary: "RegExp",
            },
        },
    },
    "UneditableSectionItemProps.maskState": {
        control: false,
        description:
            "Controls whether the value is masked or unmasked.\nWhen undefined, no mask or unmask controls are rendered.",
        name: "maskState",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionItemProps",
            tabGroup: "UneditableSection.Item",
            type: {
                summaryParts: ["'masked'", "'unmasked'"],
            },
        },
    },
    "UneditableSectionItemProps.maskTransformer": {
        control: false,
        description:
            "Custom function that receives the raw value and returns the fully\nmasked string. Takes precedence over `maskRegex`, `maskRange`, and\n`unmaskRange`.",
        name: "maskTransformer",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionItemProps",
            tabGroup: "UneditableSection.Item",
            type: {
                summary: "(value: string) => string",
            },
        },
    },
    "UneditableSectionItemProps.unmaskRange": {
        control: false,
        description:
            "Index range `[start, end]` of the characters to keep visible (inclusive, zero-based).\nCharacters outside this range are masked.\n\nRemarks:\nIgnored when `maskTransformer` or `maskRegex` is provided.",
        name: "unmaskRange",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionItemProps",
            tabGroup: "UneditableSection.Item",
            type: {
                summary: "number[]",
            },
        },
    },
    "UneditableSectionItemProps.value": {
        control: false,
        description:
            "The display value for the field.\n\nRemarks:\nMasking is only available when `value` is a string.",
        name: "value",
        type: {
            required: true,
        },
        table: {
            category: "UneditableSectionItemProps",
            tabGroup: "UneditableSection.Item",
            type: {
                summary: "string | React.ReactNode",
            },
        },
    },
    "UneditableSectionItemSectionProps.__inheritedHtmlProps": {
        control: false,
        description: "Inherits props from `HTMLUListElement`.",
        name: "",
        type: {},
        table: {
            category: "UneditableSectionItemSectionProps",
            tabGroup: "UneditableSection.ItemSection",
            type: {},
        },
    },
    "UneditableSectionItemSectionProps.stretch": {
        control: false,
        description:
            "Stretches every child item to fill the full width of the grid.",
        name: "stretch",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionItemSectionProps",
            tabGroup: "UneditableSection.ItemSection",
            type: {
                summary: "boolean",
            },
        },
    },
    "UneditableSectionProps.background": {
        control: false,
        description:
            "Applies a grey background to the section container.\nSet to `false` for a transparent background.",
        name: "background",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionProps",
            defaultValue: {
                summary: "true",
            },
            tabGroup: "UneditableSection",
            type: {
                summary: "boolean",
            },
        },
    },
    "UneditableSectionProps.bottomSection": {
        control: false,
        description: "Custom content rendered below the items grid.",
        name: "bottomSection",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionProps",
            tabGroup: "UneditableSection",
            type: {
                summary: "JSX.Element",
            },
        },
    },
    "UneditableSectionProps.children": {
        control: false,
        description:
            "Fully custom section body.\n\nRemarks:\nWhen provided, `items`, `title`,`description`,\n`topSection`, and `bottomSection` are not rendered.",
        name: "children",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionProps",
            tabGroup: "UneditableSection",
            type: {
                summaryParts: ["JSX.Element", "JSX.Element[]"],
            },
        },
    },
    "UneditableSectionProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionProps",
            tabGroup: "UneditableSection",
            type: {
                summary: "string",
            },
        },
    },
    "UneditableSectionProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionProps",
            tabGroup: "UneditableSection",
            type: {
                summary: "string",
            },
        },
    },
    "UneditableSectionProps.description": {
        control: false,
        description:
            "Optional description rendered below `title` and above the items grid.",
        name: "description",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionProps",
            tabGroup: "UneditableSection",
            type: {
                summary: "string",
            },
        },
    },
    "UneditableSectionProps.fullWidth": {
        control: false,
        description:
            "When `true`, allows the section to span the full available width of its parent.",
        name: "fullWidth",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionProps",
            tabGroup: "UneditableSection",
            type: {
                summary: "boolean",
            },
        },
    },
    "UneditableSectionProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionProps",
            tabGroup: "UneditableSection",
            type: {
                summary: "string",
            },
        },
    },
    "UneditableSectionProps.items": {
        control: false,
        description:
            "List of labeled read-only field items to render in a responsive grid.",
        name: "items",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionProps",
            tabGroup: "UneditableSection",
            type: {
                summary: "UneditableSectionItemProps[]",
            },
        },
    },
    "UneditableSectionProps.onMask": {
        control: false,
        description: "Called when a mask control is activated on an item.",
        name: "onMask",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionProps",
            tabGroup: "UneditableSection",
            type: {
                summary: "(item: UneditableSectionItemProps) => void",
            },
        },
    },
    "UneditableSectionProps.onTryAgain": {
        control: false,
        description:
            "Called when the retry button is clicked on an item in error state.",
        name: "onTryAgain",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionProps",
            tabGroup: "UneditableSection",
            type: {
                summary: "(item: UneditableSectionItemProps) => void",
            },
        },
    },
    "UneditableSectionProps.onUnmask": {
        control: false,
        description: "Called when an unmask control is activated on an item.",
        name: "onUnmask",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionProps",
            tabGroup: "UneditableSection",
            type: {
                summary: "(item: UneditableSectionItemProps) => void",
            },
        },
    },
    "UneditableSectionProps.stretch": {
        control: false,
        description:
            "Stretches every item to fill the full column width of the grid.",
        name: "stretch",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionProps",
            tabGroup: "UneditableSection",
            type: {
                summary: "boolean",
            },
        },
    },
    "UneditableSectionProps.title": {
        control: false,
        description: "Optional heading rendered above the items grid.",
        name: "title",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionProps",
            tabGroup: "UneditableSection",
            type: {
                summary: "string",
            },
        },
    },
    "UneditableSectionProps.topSection": {
        control: false,
        description:
            "Custom content rendered above the items grid, below `description`.",
        name: "topSection",
        type: {
            required: false,
        },
        table: {
            category: "UneditableSectionProps",
            tabGroup: "UneditableSection",
            type: {
                summary: "JSX.Element",
            },
        },
    },
} satisfies Record<string, unknown>;
