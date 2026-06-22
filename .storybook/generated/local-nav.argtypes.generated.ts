// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const localNavExtraArgTypes = {
    "LocalNavItemProps.title": {
        name: "title",
        control: false,
        table: {
            category: "LocalNavItemProps",
            type: {
                summary: "string | React.ReactNode",
            },
        },
    },
    "LocalNavItemProps.id": {
        name: "id",
        control: false,
        table: {
            category: "LocalNavItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "BaseLocalNavProps.className": {
        name: "className",
        control: false,
        table: {
            category: "BaseLocalNavProps",
            type: {
                summary: "string",
            },
        },
    },
    "BaseLocalNavProps.id": {
        name: "id",
        control: false,
        table: {
            category: "BaseLocalNavProps",
            type: {
                summary: "string",
            },
        },
    },
    "BaseLocalNavProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "BaseLocalNavProps",
            type: {
                summary: "string",
            },
        },
    },
    "BaseLocalNavProps.onNavItemSelect": {
        name: "onNavItemSelect",
        control: false,
        table: {
            category: "BaseLocalNavProps",
            type: {
                summary:
                    "( e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, item: LocalNavItemProps, index: number ) => void",
            },
        },
    },
    "BaseLocalNavProps.items": {
        name: "items",
        control: false,
        table: {
            category: "BaseLocalNavProps",
            type: {
                summary: "LocalNavItemProps[]",
            },
        },
    },
    "BaseLocalNavProps.selectedItemIndex": {
        name: "selectedItemIndex",
        control: false,
        table: {
            category: "BaseLocalNavProps",
            type: {
                summary: "number",
            },
        },
    },
    "LocalNavMenuItemRenderProps.selected": {
        name: "selected",
        control: false,
        table: {
            category: "LocalNavMenuItemRenderProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "LocalNavMenuProps.renderItem": {
        name: "renderItem",
        control: false,
        table: {
            category: "LocalNavMenuProps",
            type: {
                summary:
                    "| (( item: LocalNavItemProps, renderProps: LocalNavMenuItemRenderProps ) => React.ReactNode)",
            },
        },
    },
    "LocalNavDropdownItemRenderProps.selected": {
        name: "selected",
        control: false,
        table: {
            category: "LocalNavDropdownItemRenderProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "LocalNavDropdownItemRenderProps.stickied": {
        name: "stickied",
        control: false,
        table: {
            category: "LocalNavDropdownItemRenderProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "LocalNavDropdownProps.defaultLabel": {
        name: "defaultLabel",
        control: false,
        table: {
            category: "LocalNavDropdownProps",
            type: {
                summary: "string | React.ReactNode",
            },
        },
    },
    "LocalNavDropdownProps.stickyOffset": {
        name: "stickyOffset",
        control: false,
        table: {
            category: "LocalNavDropdownProps",
            type: {
                summary: "number",
            },
        },
    },
    "LocalNavDropdownProps.renderItem": {
        name: "renderItem",
        control: false,
        table: {
            category: "LocalNavDropdownProps",
            type: {
                summary:
                    "| (( item: LocalNavItemProps, renderProps: LocalNavDropdownItemRenderProps ) => React.ReactNode)",
            },
        },
    },
} satisfies Record<string, unknown>;
