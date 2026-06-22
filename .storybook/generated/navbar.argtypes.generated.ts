// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const navbarExtraArgTypes = {
    "NavItemCommonProps.id": {
        name: "id",
        description:
            "Unique identifier used for selection state and click callbacks.",
        control: false,
        table: {
            category: "NavItemCommonProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "NavItemCommonProps.data-testid": {
        name: "data-testid",
        description:
            "Sets the `data-testid` attribute for targeting the element in automated\ntests.",
        control: false,
        table: {
            category: "NavItemCommonProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "NavItemCommonProps.options": {
        name: "options",
        description:
            "Additional metadata returned in click callbacks for the item.",
        control: false,
        table: {
            category: "NavItemCommonProps<T>",
            type: {
                summary: "T",
            },
        },
    },
    "NavItemLinkProps.itemType": {
        name: "itemType",
        description: "Discriminator for union narrowing.",
        control: false,
        table: {
            category: "NavItemLinkProps<T>",
            type: {
                summary: '"link"',
            },
        },
    },
    "NavItemLinkProps.subMenu": {
        name: "subMenu",
        description:
            "Optional nested links rendered as a submenu for this item.",
        control: false,
        table: {
            category: "NavItemLinkProps<T>",
            type: {
                summary: "NavItemCommonProps<T>[]",
            },
        },
    },
    "NavItemComponentProps.itemType": {
        name: "itemType",
        control: false,
        table: {
            category: "NavItemComponentProps",
            type: {
                summary: '"component"',
            },
        },
    },
    "NavItemComponentProps.children": {
        name: "children",
        control: false,
        table: {
            category: "NavItemComponentProps",
            type: {
                summary: "JSX.Element",
            },
        },
    },
    "NavItemsProps.desktop": {
        name: "desktop",
        control: false,
        table: {
            category: "NavItemsProps<T>",
            type: {
                summary: "NavItemProps<T>[]",
            },
        },
    },
    "NavItemsProps.mobile": {
        name: "mobile",
        description:
            "Items rendered in the mobile drawer.\nFalls back to `desktop` when omitted.",
        control: false,
        table: {
            category: "NavItemsProps<T>",
            type: {
                summary: "NavItemProps<T>[]",
            },
        },
    },
    "NavbarActionButtonDownloadProps.type": {
        name: "type",
        control: false,
        table: {
            category: "NavbarActionButtonDownloadProps",
            type: {
                summary: '"download"',
            },
        },
    },
    "NavbarActionButtonDownloadProps.args": {
        name: "args",
        control: false,
        table: {
            category: "NavbarActionButtonDownloadProps",
            type: {
                summary: "ButtonProps",
            },
        },
    },
    "NavbarActionButtonDownloadProps.uncollapsible": {
        name: "uncollapsible",
        description:
            "Keeps this action visible in the top bar instead of collapsing into the\nmobile drawer.",
        control: false,
        table: {
            category: "NavbarActionButtonDownloadProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "NavbarActionButtonCtaProps.type": {
        name: "type",
        control: false,
        table: {
            category: "NavbarActionButtonCtaProps",
            type: {
                summary: '"button"',
            },
        },
    },
    "NavbarActionButtonCtaProps.args": {
        name: "args",
        control: false,
        table: {
            category: "NavbarActionButtonCtaProps",
            type: {
                summary: "ButtonProps",
            },
        },
    },
    "NavbarActionButtonCtaProps.uncollapsible": {
        name: "uncollapsible",
        description:
            "Keeps this action visible in the top bar instead of collapsing into the\nmobile drawer.",
        control: false,
        table: {
            category: "NavbarActionButtonCtaProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "NavbarButtonComponentProps.render": {
        name: "render",
        control: false,
        table: {
            category: "NavbarButtonComponentProps",
            type: {
                summary: "JSX.Element",
            },
        },
    },
    "NavbarActionButtonComponentProps.type": {
        name: "type",
        control: false,
        table: {
            category: "NavbarActionButtonComponentProps",
            type: {
                summary: '"component"',
            },
        },
    },
    "NavbarActionButtonComponentProps.args": {
        name: "args",
        control: false,
        table: {
            category: "NavbarActionButtonComponentProps",
            type: {
                summary: "NavbarButtonComponentProps",
            },
        },
    },
    "NavbarActionButtonComponentProps.uncollapsible": {
        name: "uncollapsible",
        description:
            "Keeps this action visible in the top bar instead of collapsing into the\nmobile drawer.",
        control: false,
        table: {
            category: "NavbarActionButtonComponentProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "NavbarActionButtonsProps.desktop": {
        name: "desktop",
        control: false,
        table: {
            category: "NavbarActionButtonsProps",
            type: {
                summary: "NavbarButtonProps[]",
            },
        },
    },
    "NavbarActionButtonsProps.mobile": {
        name: "mobile",
        description:
            "Action buttons rendered in the mobile drawer.\nFalls back to `desktop` when omitted.",
        control: false,
        table: {
            category: "NavbarActionButtonsProps",
            type: {
                summary: "NavbarButtonProps[]",
            },
        },
    },
    "NavbarBrandingProps.brandName": {
        name: "brandName",
        control: false,
        table: {
            category: "NavbarBrandingProps",
            type: {
                summary: "string",
            },
        },
    },
    "NavbarBrandingProps.logoSrc": {
        name: "logoSrc",
        control: false,
        table: {
            category: "NavbarBrandingProps",
            type: {
                summary: "string",
            },
        },
    },
    "NavbarResourcesProps.primary": {
        name: "primary",
        control: false,
        table: {
            category: "NavbarResourcesProps",
            type: {
                summary: "NavbarBrandingProps",
            },
        },
    },
    "NavbarResourcesProps.secondary": {
        name: "secondary",
        control: false,
        table: {
            category: "NavbarResourcesProps",
            type: {
                summary: "NavbarBrandingProps",
            },
        },
    },
    "NavbarSharedProps.resources": {
        name: "resources",
        control: false,
        table: {
            category: "NavbarSharedProps",
            type: {
                summary: "NavbarResourcesProps",
            },
        },
    },
    "NavbarSharedProps.actionButtons": {
        name: "actionButtons",
        control: false,
        table: {
            category: "NavbarSharedProps",
            type: {
                summary: "NavbarActionButtonsProps",
            },
        },
    },
    "NavbarSharedProps.hideNavBranding": {
        name: "hideNavBranding",
        description: "Hides primary and secondary brand logos from the navbar.",
        control: false,
        table: {
            category: "NavbarSharedProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "NavbarSharedProps.hideLinkIndicator": {
        name: "hideLinkIndicator",
        description: "Hides the selected-item indicator for navigation links.",
        control: false,
        table: {
            category: "NavbarSharedProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "NavbarDrawerProps.show": {
        name: "show",
        control: false,
        table: {
            category: "NavbarDrawerProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "NavbarDrawerProps.children": {
        name: "children",
        control: false,
        table: {
            category: "NavbarDrawerProps",
            type: {
                summary: "JSX.Element | JSX.Element[]",
            },
        },
    },
    "NavbarDrawerProps.onClose": {
        name: "onClose",
        control: false,
        table: {
            category: "NavbarDrawerProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "NavbarDrawerProps.onBrandClick": {
        name: "onBrandClick",
        description: "Called when a brand link inside the drawer is activated.",
        control: false,
        table: {
            category: "NavbarDrawerProps",
            type: {
                summary:
                    "| (( event: React.MouseEvent<HTMLAnchorElement>, type: BrandType ) => void)",
            },
        },
    },
    "NavbarDrawerProps.drawerLabel": {
        name: "drawerLabel",
        description:
            "Accessible label announced for the mobile navigation drawer.",
        control: false,
        table: {
            category: "NavbarDrawerProps",
            type: {
                summary: "string",
            },
        },
    },
    "NavbarDrawerProps.mobileMenuRef": {
        name: "mobileMenuRef",
        description:
            "Ref to the mobile menu trigger used for returning focus when closed.",
        control: false,
        table: {
            category: "NavbarDrawerProps",
            type: {
                summary: "React.RefObject<HTMLButtonElement>",
            },
        },
    },
    "NavbarProps.items": {
        name: "items",
        description:
            "Navigation items rendered in desktop and mobile navbar layouts.",
        control: false,
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "NavItemsProps<T>",
            },
        },
    },
    "NavbarProps.className": {
        name: "className",
        control: false,
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "NavbarProps.id": {
        name: "id",
        control: false,
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "NavbarProps.data-testid": {
        name: "data-testid",
        description:
            "Sets the `data-testid` attribute for targeting the element in automated\ntests.",
        control: false,
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "NavbarProps.selectedId": {
        name: "selectedId",
        description:
            "Currently selected navigation item id.\nShould match an `id` from the rendered item set.",
        control: false,
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "NavbarProps.compress": {
        name: "compress",
        description: "Reduces navbar vertical spacing for compact layouts.",
        control: false,
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "boolean",
            },
            defaultValue: {
                summary: "false",
            },
        },
    },
    "NavbarProps.fixed": {
        name: "fixed",
        description: "Pins the navbar to the top of the viewport.",
        control: false,
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "boolean",
            },
            defaultValue: {
                summary: "true",
            },
        },
    },
    "NavbarProps.drawerDismissalExclusions": {
        name: "drawerDismissalExclusions",
        description: "Drawer dismissal methods that should be ignored.",
        control: false,
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "DrawerDismissalMethod[]",
            },
            defaultValue: {
                summary: "[]",
            },
        },
    },
    "NavbarProps.hideNavElements": {
        name: "hideNavElements",
        description:
            "Hides desktop navigation items, action buttons, and mobile menu trigger.",
        control: false,
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "NavbarProps.onBrandClick": {
        name: "onBrandClick",
        description:
            "Called when either primary or secondary brand is activated.",
        control: false,
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "((type: BrandType) => void)",
            },
        },
    },
    "NavbarProps.onItemClick": {
        name: "onItemClick",
        description:
            "Called when a navigation item is activated.\n\nFor link items without an item-level `onClick`, the default anchor\nnavigation is prevented so selection can be controlled externally.",
        control: false,
        table: {
            category: "NavbarProps<T>",
            type: {
                summary:
                    "| ((item: NavItemProps<T> | NavItemCommonProps<T>) => void)",
            },
        },
    },
    "NavbarProps.onActionButtonClick": {
        name: "onActionButtonClick",
        description:
            "Called when an action button is activated and no item-level click handler\nis provided.",
        control: false,
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "| ((actionButton: NavbarButtonProps) => void)",
            },
        },
    },
    "NavbarProps.masthead": {
        name: "masthead",
        description: "Shows the masthead above the navbar.",
        control: false,
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "boolean",
            },
            defaultValue: {
                summary: "true",
            },
        },
    },
    "NavbarProps.layout": {
        name: "layout",
        description:
            "Controls content width behavior inside the navbar container.",
        control: false,
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: '"default" | "stretch"',
            },
            defaultValue: {
                summary: '"default"',
            },
        },
    },
    "NavbarProps.headerLabel": {
        name: "headerLabel",
        description:
            "Accessible label announced for the main navigation region.",
        control: false,
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "string",
            },
            defaultValue: {
                summary: '"Main navigation menu"',
            },
        },
    },
    "NavbarProps.drawerLabel": {
        name: "drawerLabel",
        description:
            "Accessible label announced for the mobile navigation drawer.",
        control: false,
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    NavItemProps: {
        name: "NavItemProps<T>",
        description:
            "Navigation item rendered by the navbar.\n\n`itemType` determines whether the item is a standard link or a custom\ncomponent slot.",
        control: false,
        table: {
            category: "NavItemProps<T>",
            type: {
                summary: "NavItemLinkProps<T> | NavItemComponentProps",
            },
        },
    },
    NavbarButtonProps: {
        name: "NavbarButtonProps",
        description: "Action button entry rendered by the navbar.",
        control: false,
        table: {
            category: "NavbarButtonProps",
            type: {
                summary:
                    "| NavbarActionButtonDownloadProps | NavbarActionButtonCtaProps | NavbarActionButtonComponentProps",
            },
        },
    },
    DrawerDismissalMethod: {
        name: "DrawerDismissalMethod",
        description: "User actions that can trigger mobile drawer dismissal.",
        control: false,
        table: {
            category: "DrawerDismissalMethod",
            type: {
                summary:
                    '| "close-button-click" | "item-click" | "brand-click"',
            },
        },
    },
    BrandType: {
        name: "BrandType",
        description: "Brand slot identifier passed to brand-click callbacks.",
        control: false,
        table: {
            category: "BrandType",
            type: {
                summary: '"primary" | "secondary"',
            },
        },
    },
    NavbarDrawerApi: {
        name: "NavbarDrawerApi",
        description: "Imperative API exposed by the navbar ref.",
        control: false,
        table: {
            category: "NavbarDrawerApi",
            type: {
                summary:
                    "{ /** * Closes the mobile drawer programmatically. */ dismissDrawer: () => void; }",
            },
        },
    },
    NavbarDrawerHandle: {
        name: "NavbarDrawerHandle",
        description:
            "Navbar ref handle that combines the root element with drawer controls.",
        control: false,
        table: {
            category: "NavbarDrawerHandle",
            type: {
                summary: "HTMLDivElement & NavbarDrawerApi",
            },
        },
    },
} satisfies Record<string, unknown>;
