// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const sidenavExtraArgTypes = {
    "SidenavDrawerItemProps.children": {
        control: false,
        description:
            "Sub-level entries for this section. Accepts `Sidenav.DrawerSubitem`\nelements. When provided, clicking toggles the collapsed/expanded state\ninstead of invoking `onClick`.",
        name: "children",
        type: {
            required: false,
        },
        table: {
            category: "SidenavDrawerItemProps",
            tabGroup: "Sidenav.DrawerItem",
            type: {
                summary: "React.ReactNode",
            },
        },
    },
    "SidenavDrawerItemProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "SidenavDrawerItemProps",
            tabGroup: "Sidenav.DrawerItem",
            type: {
                summary: "string",
            },
        },
    },
    "SidenavDrawerItemProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "SidenavDrawerItemProps",
            tabGroup: "Sidenav.DrawerItem",
            type: {
                summary: "string",
            },
        },
    },
    "SidenavDrawerItemProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "SidenavDrawerItemProps",
            tabGroup: "Sidenav.DrawerItem",
            type: {
                summary: "string",
            },
        },
    },
    "SidenavDrawerItemProps.onClick": {
        control: false,
        description:
            "Called when the item is activated and it has no sub-item children.",
        name: "onClick",
        type: {
            required: false,
        },
        table: {
            category: "SidenavDrawerItemProps",
            tabGroup: "Sidenav.DrawerItem",
            type: {
                summary: "(id: string) => void",
            },
        },
    },
    "SidenavDrawerItemProps.title": {
        control: false,
        description: "The displayed label.",
        name: "title",
        type: {
            required: true,
        },
        table: {
            category: "SidenavDrawerItemProps",
            tabGroup: "Sidenav.DrawerItem",
            type: {
                summary: "string",
            },
        },
    },
    "SidenavDrawerSubitemProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "SidenavDrawerSubitemProps",
            tabGroup: "Sidenav.DrawerSubitem",
            type: {
                summary: "string",
            },
        },
    },
    "SidenavDrawerSubitemProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "SidenavDrawerSubitemProps",
            tabGroup: "Sidenav.DrawerSubitem",
            type: {
                summary: "string",
            },
        },
    },
    "SidenavDrawerSubitemProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "SidenavDrawerSubitemProps",
            tabGroup: "Sidenav.DrawerSubitem",
            type: {
                summary: "string",
            },
        },
    },
    "SidenavDrawerSubitemProps.onClick": {
        control: false,
        description: "Called when the sub-item is activated.",
        name: "onClick",
        type: {
            required: false,
        },
        table: {
            category: "SidenavDrawerSubitemProps",
            tabGroup: "Sidenav.DrawerSubitem",
            type: {
                summary: "(id: string) => void",
            },
        },
    },
    "SidenavDrawerSubitemProps.title": {
        control: false,
        description: "The displayed label.",
        name: "title",
        type: {
            required: true,
        },
        table: {
            category: "SidenavDrawerSubitemProps",
            tabGroup: "Sidenav.DrawerSubitem",
            type: {
                summary: "string",
            },
        },
    },
    "SidenavGroupProps.aria-label": {
        control: false,
        description: "Accessible label for this navigation group.",
        name: "aria-label",
        type: {
            required: false,
        },
        table: {
            category: "SidenavGroupProps",
            tabGroup: "Sidenav.Group",
            type: {
                summary: "string",
            },
        },
    },
    "SidenavGroupProps.children": {
        control: false,
        description:
            "Navigation items within the group. Accepts `Sidenav.Item` elements.",
        name: "children",
        type: {
            required: true,
        },
        table: {
            category: "SidenavGroupProps",
            tabGroup: "Sidenav.Group",
            type: {
                summary: "React.ReactNode",
            },
        },
    },
    "SidenavGroupProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "SidenavGroupProps",
            tabGroup: "Sidenav.Group",
            type: {
                summary: "string",
            },
        },
    },
    "SidenavGroupProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "SidenavGroupProps",
            tabGroup: "Sidenav.Group",
            type: {
                summary: "string",
            },
        },
    },
    "SidenavGroupProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "SidenavGroupProps",
            tabGroup: "Sidenav.Group",
            type: {
                summary: "string",
            },
        },
    },
    "SidenavGroupProps.separator": {
        control: false,
        description:
            "Renders a horizontal divider after the last item in the group.",
        name: "separator",
        type: {
            required: false,
        },
        table: {
            category: "SidenavGroupProps",
            tabGroup: "Sidenav.Group",
            type: {
                summary: "boolean",
            },
        },
    },
    "SidenavItemProps.children": {
        control: false,
        description:
            "Drawer content displayed to the right of the sidebar when the item is\nactive. Accepts `Sidenav.DrawerItem` elements.",
        name: "children",
        type: {
            required: false,
        },
        table: {
            category: "SidenavItemProps",
            tabGroup: "Sidenav.Item",
            type: {
                summary: "React.ReactNode",
            },
        },
    },
    "SidenavItemProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "SidenavItemProps",
            tabGroup: "Sidenav.Item",
            type: {
                summary: "string",
            },
        },
    },
    "SidenavItemProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "SidenavItemProps",
            tabGroup: "Sidenav.Item",
            type: {
                summary: "string",
            },
        },
    },
    "SidenavItemProps.icon": {
        control: false,
        description: "Icon displayed above the title.",
        name: "icon",
        type: {
            required: true,
        },
        table: {
            category: "SidenavItemProps",
            tabGroup: "Sidenav.Item",
            type: {
                summary: "React.ReactNode",
            },
        },
    },
    "SidenavItemProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "SidenavItemProps",
            tabGroup: "Sidenav.Item",
            type: {
                summary: "string",
            },
        },
    },
    "SidenavItemProps.onClick": {
        control: false,
        description:
            "Called when the item is activated and it has no drawer children. When\n`children` are provided, clicking opens the drawer without invoking this\ncallback.",
        name: "onClick",
        type: {
            required: false,
        },
        table: {
            category: "SidenavItemProps",
            tabGroup: "Sidenav.Item",
            type: {
                summary: "(id: string) => void",
            },
        },
    },
    "SidenavItemProps.selected": {
        control: false,
        description: "Sets the item as initially selected on mount.",
        name: "selected",
        type: {
            required: false,
        },
        table: {
            category: "SidenavItemProps",
            tabGroup: "Sidenav.Item",
            type: {
                summary: "boolean",
            },
        },
    },
    "SidenavItemProps.title": {
        control: false,
        description: "Label displayed below the icon.",
        name: "title",
        type: {
            required: true,
        },
        table: {
            category: "SidenavItemProps",
            tabGroup: "Sidenav.Item",
            type: {
                summary: "string",
            },
        },
    },
    "SidenavProps.aria-label": {
        control: false,
        description:
            "Accessible label announced for the sidebar navigation landmark.",
        name: "aria-label",
        type: {
            required: false,
        },
        table: {
            category: "SidenavProps",
            defaultValue: {
                summary: '"Sidebar"',
            },
            tabGroup: "Sidenav",
            type: {
                summary: "string",
            },
        },
    },
    "SidenavProps.children": {
        control: false,
        description:
            "Navigation groups and items. Accepts `Sidenav.Group` elements.",
        name: "children",
        type: {
            required: true,
        },
        table: {
            category: "SidenavProps",
            tabGroup: "Sidenav",
            type: {
                summary: "React.ReactNode",
            },
        },
    },
    "SidenavProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "SidenavProps",
            tabGroup: "Sidenav",
            type: {
                summary: "string",
            },
        },
    },
    "SidenavProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "SidenavProps",
            tabGroup: "Sidenav",
            type: {
                summary: "string",
            },
        },
    },
    "SidenavProps.fixed": {
        control: false,
        description:
            "Pins the sidebar to the left edge of the viewport while the page scrolls.",
        name: "fixed",
        type: {
            required: false,
        },
        table: {
            category: "SidenavProps",
            defaultValue: {
                summary: "true",
            },
            tabGroup: "Sidenav",
            type: {
                summary: "boolean",
            },
        },
    },
    "SidenavProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "SidenavProps",
            tabGroup: "Sidenav",
            type: {
                summary: "string",
            },
        },
    },
} satisfies Record<string, unknown>;
