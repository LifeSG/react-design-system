// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const uneditableSectionExtraArgTypes = {
    UneditableSectionItemDisplayWidth: {
        control: false,
        description: "Grid column span for an item within the section layout.",
        name: "UneditableSectionItemDisplayWidth",
        table: {
            category: "UneditableSectionItemDisplayWidth",
            tabGroup: "UneditableSection.Item",
            type: {
                summary: "'full' | 'half'",
            },
        },
    },
    UneditableSectionItemMaskLoadingState: {
        control: false,
        description: "Async loading state during a mask or unmask action.",
        name: "UneditableSectionItemMaskLoadingState",
        table: {
            category: "UneditableSectionItemMaskLoadingState",
            tabGroup: "UneditableSection.Item",
            type: {
                summary: "'loading' | 'fail'",
            },
        },
    },
    UneditableSectionItemMaskState: {
        control: false,
        description: "Whether the item value is currently masked or unmasked.",
        name: "UneditableSectionItemMaskState",
        table: {
            category: "UneditableSectionItemMaskState",
            tabGroup: "UneditableSection.Item",
            type: {
                summary: "'masked' | 'unmasked'",
            },
        },
    },
    "UneditableSectionItemProps.alert": {
        control: false,
        description: "Alert rendered below the item value.",
        name: "alert",
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
        table: {
            category: "UneditableSectionItemProps",
            defaultValue: {
                summary: '"full"',
            },
            tabGroup: "UneditableSection.Item",
            type: {
                summary: "UneditableSectionItemDisplayWidth",
            },
        },
    },
    "UneditableSectionItemProps.id": {
        control: false,
        name: "id",
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
        table: {
            category: "UneditableSectionItemProps",
            tabGroup: "UneditableSection.Item",
            type: {
                summary: "UneditableSectionItemMaskLoadingState",
            },
        },
    },
    "UneditableSectionItemProps.maskRange": {
        control: false,
        description:
            "Index range `[start, end]` of the characters to mask (inclusive, zero-based).\nCharacters outside this range remain visible.\n\nRemarks:\nIgnored when `maskTransformer` or `maskRegex` is provided.",
        name: "maskRange",
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
        table: {
            category: "UneditableSectionItemProps",
            tabGroup: "UneditableSection.Item",
            type: {
                summary: "UneditableSectionItemMaskState",
            },
        },
    },
    "UneditableSectionItemProps.maskTransformer": {
        control: false,
        description:
            "Custom function that receives the raw value and returns the fully\nmasked string. Takes precedence over `maskRegex`, `maskRange`, and\n`unmaskRange`.",
        name: "maskTransformer",
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
        table: {
            category: "UneditableSectionItemSectionProps",
            tabGroup: "UneditableSection.ItemSection",
            type: {},
        },
    },
    "UneditableSectionItemSectionProps.inert": {
        control: false,
        name: "inert",
        table: {
            category: "UneditableSectionItemSectionProps",
            tabGroup: "UneditableSection.ItemSection",
            type: {
                summary: "boolean | string",
            },
        },
    },
    "UneditableSectionItemSectionProps.stretch": {
        control: false,
        description:
            "Stretches every child item to fill the full width of the grid.",
        name: "stretch",
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
        table: {
            category: "UneditableSectionProps",
            tabGroup: "UneditableSection",
            type: {
                summary: "JSX.Element | JSX.Element[]",
            },
        },
    },
    "UneditableSectionProps.className": {
        control: false,
        name: "className",
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
        table: {
            category: "UneditableSectionProps",
            tabGroup: "UneditableSection",
            type: {
                summary: "JSX.Element",
            },
        },
    },
} satisfies Record<string, unknown>;
