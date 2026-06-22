// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const uneditableSectionExtraArgTypes = {
    "UneditableSectionItemProps.id": {
        name: "id",
        control: false,
        table: {
            category: "UneditableSectionItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "UneditableSectionItemProps.label": {
        name: "label",
        control: false,
        table: {
            category: "UneditableSectionItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "UneditableSectionItemProps.value": {
        name: "value",
        description: "Note: masking is only available for string values",
        control: false,
        table: {
            category: "UneditableSectionItemProps",
            type: {
                summary: "string | React.ReactNode",
            },
        },
    },
    "UneditableSectionItemProps.displayWidth": {
        name: "displayWidth",
        description:
            'The width that the item can span across. Values: "half", "full"',
        control: false,
        table: {
            category: "UneditableSectionItemProps",
            type: {
                summary: "UneditableSectionItemDisplayWidth",
            },
        },
    },
    "UneditableSectionItemProps.maskState": {
        name: "maskState",
        description:
            'Specifies if value is masked or unmasked.\nIf undefined, no masking or unmasking controls will be rendered.\n\nValues: "masked" | "unmasked"',
        control: false,
        table: {
            category: "UneditableSectionItemProps",
            type: {
                summary: "UneditableSectionItemMaskState",
            },
        },
    },
    "UneditableSectionItemProps.maskLoadingState": {
        name: "maskLoadingState",
        description:
            'Specifies the state of the component when there is a\nloading behaviour from a mask/unmask action. If undefined\nthe value will be rendered out.\n\nValues: "loading" | "fail"',
        control: false,
        table: {
            category: "UneditableSectionItemProps",
            type: {
                summary: "UneditableSectionItemMaskLoadingState",
            },
        },
    },
    "UneditableSectionItemProps.disableMaskUnmask": {
        name: "disableMaskUnmask",
        description: "If specified, one is unable to mask or unmask the value",
        control: false,
        table: {
            category: "UneditableSectionItemProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "UneditableSectionItemProps.alert": {
        name: "alert",
        description: "If specified, an Alert will be rendered below the item",
        control: false,
        table: {
            category: "UneditableSectionItemProps",
            type: {
                summary: "AlertProps",
            },
        },
    },
    "UneditableSectionItemSectionProps.stretch": {
        name: "stretch",
        description:
            "Specifies if contents should take up the full width of the section",
        control: false,
        table: {
            category: "UneditableSectionItemSectionProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "UneditableSectionProps.items": {
        name: "items",
        control: false,
        table: {
            category: "UneditableSectionProps",
            type: {
                summary: "UneditableSectionItemProps[]",
            },
        },
    },
    "UneditableSectionProps.title": {
        name: "title",
        control: false,
        table: {
            category: "UneditableSectionProps",
            type: {
                summary: "string",
            },
        },
    },
    "UneditableSectionProps.description": {
        name: "description",
        control: false,
        table: {
            category: "UneditableSectionProps",
            type: {
                summary: "string",
            },
        },
    },
    "UneditableSectionProps.topSection": {
        name: "topSection",
        description:
            "A custom section at the top of the main uneditable items section",
        control: false,
        table: {
            category: "UneditableSectionProps",
            type: {
                summary: "JSX.Element",
            },
        },
    },
    "UneditableSectionProps.bottomSection": {
        name: "bottomSection",
        description:
            "A custom section at the bottom of the main uneditable items section",
        control: false,
        table: {
            category: "UneditableSectionProps",
            type: {
                summary: "JSX.Element",
            },
        },
    },
    "UneditableSectionProps.children": {
        name: "children",
        description: "The body of the entire section",
        control: false,
        table: {
            category: "UneditableSectionProps",
            type: {
                summary: "JSX.Element | JSX.Element[]",
            },
        },
    },
    "UneditableSectionProps.className": {
        name: "className",
        control: false,
        table: {
            category: "UneditableSectionProps",
            type: {
                summary: "string",
            },
        },
    },
    "UneditableSectionProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "UneditableSectionProps",
            type: {
                summary: "string",
            },
        },
    },
    "UneditableSectionProps.id": {
        name: "id",
        control: false,
        table: {
            category: "UneditableSectionProps",
            type: {
                summary: "string",
            },
        },
    },
    "UneditableSectionProps.background": {
        name: "background",
        description:
            "If specified false, the background will be transparent. Else it is grey by default",
        control: false,
        table: {
            category: "UneditableSectionProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "UneditableSectionProps.stretch": {
        name: "stretch",
        description:
            "Specifies if contents should take up the full width of the section",
        control: false,
        table: {
            category: "UneditableSectionProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "UneditableSectionProps.fullWidth": {
        name: "fullWidth",
        description:
            "If true, removes the default spacing and grid alignment based on `Layout.Content`",
        control: false,
        table: {
            category: "UneditableSectionProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "UneditableSectionProps.onMask": {
        name: "onMask",
        description: "The callback function when the mask icon is clicked",
        control: false,
        table: {
            category: "UneditableSectionProps",
            type: {
                summary: "((item: UneditableSectionItemProps) => void)",
            },
        },
    },
    "UneditableSectionProps.onUnmask": {
        name: "onUnmask",
        description: "The callback function when the unmask icon is clicked",
        control: false,
        table: {
            category: "UneditableSectionProps",
            type: {
                summary: "((item: UneditableSectionItemProps) => void)",
            },
        },
    },
    "UneditableSectionProps.onTryAgain": {
        name: "onTryAgain",
        description:
            'The callback function when the "Try again" button is clicked in error state',
        control: false,
        table: {
            category: "UneditableSectionProps",
            type: {
                summary: "((item: UneditableSectionItemProps) => void)",
            },
        },
    },
    UneditableSectionItemDisplayWidth: {
        name: "UneditableSectionItemDisplayWidth",
        control: false,
        table: {
            category: "UneditableSectionItemDisplayWidth",
            type: {
                summary: '"half" | "full"',
            },
        },
    },
    UneditableSectionItemMaskState: {
        name: "UneditableSectionItemMaskState",
        control: false,
        table: {
            category: "UneditableSectionItemMaskState",
            type: {
                summary: '"masked" | "unmasked"',
            },
        },
    },
    UneditableSectionItemMaskLoadingState: {
        name: "UneditableSectionItemMaskLoadingState",
        control: false,
        table: {
            category: "UneditableSectionItemMaskLoadingState",
            type: {
                summary: '"loading" | "fail"',
            },
        },
    },
} satisfies Record<string, unknown>;
