// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const tabExtraArgTypes = {
    "TabProps.children": {
        name: "children",
        control: false,
        table: {
            category: "TabProps",
            type: {
                summary: "JSX.Element | JSX.Element[]",
            },
        },
    },
    "TabProps.initialActive": {
        name: "initialActive",
        description: "Specify the initial tab index that is to be displayed",
        control: false,
        table: {
            category: "TabProps",
            type: {
                summary: "number",
            },
        },
    },
    "TabProps.currentActive": {
        name: "currentActive",
        description:
            "Specify the current tab index that is to be displayed. By specifying\nthis prop, the tab rendering will be manually controlled by you",
        control: false,
        table: {
            category: "TabProps",
            type: {
                summary: "number",
            },
        },
    },
    "TabProps.className": {
        name: "className",
        control: false,
        table: {
            category: "TabProps",
            type: {
                summary: "string",
            },
        },
    },
    "TabProps.id": {
        name: "id",
        control: false,
        table: {
            category: "TabProps",
            type: {
                summary: "string",
            },
        },
    },
    "TabProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "TabProps",
            type: {
                summary: "string",
            },
        },
    },
    "TabProps.onTabClick": {
        name: "onTabClick",
        control: false,
        table: {
            category: "TabProps",
            type: {
                summary: "((title: string, index: number) => void)",
            },
        },
    },
    "TabProps.fullWidthIndicatorLine": {
        name: "fullWidthIndicatorLine",
        control: false,
        table: {
            category: "TabProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "TabProps.fadeColor": {
        name: "fadeColor",
        control: false,
        table: {
            category: "TabProps",
            type: {
                summary: "string[] | FadeColorSet",
            },
        },
    },
    "TabItemProps.title": {
        name: "title",
        control: false,
        table: {
            category: "TabItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "TabItemProps.children": {
        name: "children",
        control: false,
        table: {
            category: "TabItemProps",
            type: {
                summary: "JSX.Element | JSX.Element[]",
            },
        },
    },
    "TabItemProps.titleAddon": {
        name: "titleAddon",
        description: "Custom addon content displayed next to the tab title",
        control: false,
        table: {
            category: "TabItemProps",
            type: {
                summary: "TitleAddonProps",
            },
        },
    },
    "TabItemProps.className": {
        name: "className",
        control: false,
        table: {
            category: "TabItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "TabItemProps.id": {
        name: "id",
        control: false,
        table: {
            category: "TabItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "TabItemProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "TabItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "TabItemProps.width": {
        name: "width",
        control: false,
        table: {
            category: "TabItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "TitleAddonProps.content": {
        name: "content",
        description: "addon content",
        control: false,
        table: {
            category: "TitleAddonProps",
            type: {
                summary: "JSX.Element",
            },
        },
    },
    "TitleAddonProps.position": {
        name: "position",
        description: 'position of the addon content, defaults to "right"',
        control: false,
        table: {
            category: "TitleAddonProps",
            type: {
                summary: '"left" | "right"',
            },
        },
    },
} satisfies Record<string, unknown>;
