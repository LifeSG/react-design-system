// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const navbarExtraArgTypes = {
    BrandType: {
        control: false,
        description:
            "Identifies which brand slot was interacted with in brand-related callbacks.",
        name: "BrandType",
        type: {},
        table: {
            category: "BrandType",
            type: {
                summary: "'primary' | 'secondary'",
            },
        },
    },
    DrawerDismissalMethod: {
        control: false,
        description:
            'Identifies the user action that can dismiss the mobile navigation drawer.\n\nPass one or more values to `drawerDismissalExclusions` on `NavbarProps` to\nprevent those actions from closing the drawer.\n\n- `"close-button-click"` — the drawer\'s close button or overlay click\n- `"item-click"` — clicking a nav item or action button\n- `"brand-click"` — clicking a brand logo',
        name: "DrawerDismissalMethod",
        type: {},
        table: {
            category: "DrawerDismissalMethod",
            type: {
                summary: "'brand-click' | 'close-button-click' | 'item-click'",
            },
        },
    },
    "NavbarActionButtonComponentProps.args": {
        control: false,
        name: "args",
        type: {
            required: false,
        },
        table: {
            category: "NavbarActionButtonComponentProps",
            type: {
                summary: "NavbarButtonComponentProps",
            },
        },
    },
    "NavbarActionButtonComponentProps.type": {
        control: false,
        name: "type",
        type: {
            required: true,
        },
        table: {
            category: "NavbarActionButtonComponentProps",
            type: {
                summary: '"component"',
            },
        },
    },
    "NavbarActionButtonComponentProps.uncollapsible": {
        control: false,
        description:
            "When `true`, the button remains visible outside the mobile drawer rather\nthan being collapsed into it.",
        name: "uncollapsible",
        type: {
            required: false,
        },
        table: {
            category: "NavbarActionButtonComponentProps",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "NavbarActionButtonCtaProps.args": {
        control: false,
        name: "args",
        type: {
            required: true,
        },
        table: {
            category: "NavbarActionButtonCtaProps",
            type: {
                summary: "ButtonProps",
            },
        },
    },
    "NavbarActionButtonCtaProps.type": {
        control: false,
        name: "type",
        type: {
            required: true,
        },
        table: {
            category: "NavbarActionButtonCtaProps",
            type: {
                summary: '"button"',
            },
        },
    },
    "NavbarActionButtonCtaProps.uncollapsible": {
        control: false,
        description:
            "When `true`, the button remains visible outside the mobile drawer rather\nthan being collapsed into it.",
        name: "uncollapsible",
        type: {
            required: false,
        },
        table: {
            category: "NavbarActionButtonCtaProps",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "NavbarActionButtonDownloadProps.args": {
        control: false,
        name: "args",
        type: {
            required: false,
        },
        table: {
            category: "NavbarActionButtonDownloadProps",
            type: {
                summary: "ButtonProps",
            },
        },
    },
    "NavbarActionButtonDownloadProps.type": {
        control: false,
        name: "type",
        type: {
            required: true,
        },
        table: {
            category: "NavbarActionButtonDownloadProps",
            type: {
                summary: '"download"',
            },
        },
    },
    "NavbarActionButtonDownloadProps.uncollapsible": {
        control: false,
        description:
            "When `true`, the button remains visible outside the mobile drawer rather\nthan being collapsed into it.",
        name: "uncollapsible",
        type: {
            required: false,
        },
        table: {
            category: "NavbarActionButtonDownloadProps",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "NavbarActionButtonsProps.desktop": {
        control: false,
        description: "Action buttons rendered in the desktop navbar.",
        name: "desktop",
        type: {
            required: true,
        },
        table: {
            category: "NavbarActionButtonsProps",
            type: {
                summary: "NavbarButtonProps[]",
            },
        },
    },
    "NavbarActionButtonsProps.mobile": {
        control: false,
        description:
            "Action buttons rendered in the mobile drawer. Falls back to `desktop`\nwhen omitted.",
        name: "mobile",
        type: {
            required: false,
        },
        table: {
            category: "NavbarActionButtonsProps",
            type: {
                summary: "NavbarButtonProps[]",
            },
        },
    },
    "NavbarBrandingProps.brandName": {
        control: false,
        description:
            "The name of the brand, used for accessibility and alt text.",
        name: "brandName",
        type: {
            required: true,
        },
        table: {
            category: "NavbarBrandingProps",
            type: {
                summary: "string",
            },
        },
    },
    "NavbarBrandingProps.logoSrc": {
        control: false,
        description: "The source URL for the brand logo image.",
        name: "logoSrc",
        type: {
            required: true,
        },
        table: {
            category: "NavbarBrandingProps",
            type: {
                summary: "string",
            },
        },
    },
    "NavbarButtonComponentProps.render": {
        control: false,
        description: "The custom component to be rendered",
        name: "render",
        type: {
            required: true,
        },
        table: {
            category: "NavbarButtonComponentProps",
            type: {
                summary: "JSX.Element",
            },
        },
    },
    "NavbarButtonProps.args": {
        control: false,
        name: "args",
        type: {
            required: false,
        },
        table: {
            category: "NavbarButtonProps",
            type: {
                summaryParts: ["ButtonProps", "NavbarButtonComponentProps"],
            },
        },
    },
    "NavbarButtonProps.type": {
        control: false,
        name: "type",
        type: {
            required: true,
        },
        table: {
            category: "NavbarButtonProps",
            type: {
                summaryParts: ["'button'", "'component'", "'download'"],
            },
        },
    },
    "NavbarButtonProps.uncollapsible": {
        control: false,
        description:
            "When `true`, the button remains visible outside the mobile drawer rather\nthan being collapsed into it.",
        name: "uncollapsible",
        type: {
            required: false,
        },
        table: {
            category: "NavbarButtonProps",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "false | true",
            },
        },
    },
    "NavbarProps.actionButtons": {
        control: false,
        description: "Action buttons rendered in the navbar and mobile drawer.",
        name: "actionButtons",
        type: {
            required: false,
        },
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "NavbarActionButtonsProps",
            },
        },
    },
    "NavbarProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "NavbarProps.compress": {
        control: false,
        description: "Reduces the height and logo size of the navbar.",
        name: "compress",
        type: {
            required: false,
        },
        table: {
            category: "NavbarProps<T>",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "NavbarProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "NavbarProps.drawerDismissalExclusions": {
        control: false,
        description:
            "Drawer dismissal methods that should be suppressed. The drawer will not\nclose when the user performs any of the listed actions.",
        name: "drawerDismissalExclusions",
        type: {
            required: false,
        },
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "DrawerDismissalMethod[]",
            },
        },
    },
    "NavbarProps.drawerLabel": {
        control: false,
        description:
            "Accessible label announced for the mobile navigation drawer.",
        name: "drawerLabel",
        type: {
            required: false,
        },
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "NavbarProps.fixed": {
        control: false,
        description:
            "Pins the navbar to the top of the viewport while the page scrolls.",
        name: "fixed",
        type: {
            required: false,
        },
        table: {
            category: "NavbarProps<T>",
            defaultValue: {
                summary: "true",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "NavbarProps.headerLabel": {
        control: false,
        description:
            "Accessible label announced for the main navigation header.",
        name: "headerLabel",
        type: {
            required: false,
        },
        table: {
            category: "NavbarProps<T>",
            defaultValue: {
                summary: '"Main navigation menu"',
            },
            type: {
                summary: "string",
            },
        },
    },
    "NavbarProps.hideLinkIndicator": {
        control: false,
        description:
            "Hides the active-item underline indicator across desktop and drawer views.",
        name: "hideLinkIndicator",
        type: {
            required: false,
        },
        table: {
            category: "NavbarProps<T>",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "NavbarProps.hideNavBranding": {
        control: false,
        description: "Hides all brand logos from the navbar and drawer.",
        name: "hideNavBranding",
        type: {
            required: false,
        },
        table: {
            category: "NavbarProps<T>",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "NavbarProps.hideNavElements": {
        control: false,
        description:
            "Hides nav items and action buttons, leaving only the brand area visible.",
        name: "hideNavElements",
        type: {
            required: false,
        },
        table: {
            category: "NavbarProps<T>",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "NavbarProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "NavbarProps.items": {
        control: false,
        name: "items",
        type: {
            required: true,
        },
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "NavItemsProps<T>",
            },
        },
    },
    "NavbarProps.layout": {
        control: false,
        description:
            'Controls how the navbar content fills its container. `"stretch"` expands\nto the full container width; `"default"` uses the standard content width.',
        name: "layout",
        type: {
            required: false,
        },
        table: {
            category: "NavbarProps<T>",
            defaultValue: {
                summary: '"default"',
            },
            type: {
                summaryParts: ["'default'", "'stretch'"],
            },
        },
    },
    "NavbarProps.masthead": {
        control: false,
        description:
            "Renders the `Masthead` (SGDS official government banner) above the navbar.",
        name: "masthead",
        type: {
            required: false,
        },
        table: {
            category: "NavbarProps<T>",
            defaultValue: {
                summary: "true",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "NavbarProps.onActionButtonClick": {
        control: false,
        description:
            "Called when an action button without its own `onClick` handler is\nactivated. The button's full props object is passed as the argument.",
        name: "onActionButtonClick",
        type: {
            required: false,
        },
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "(actionButton: NavbarButtonProps) => void",
            },
        },
    },
    "NavbarProps.onBrandClick": {
        control: false,
        description:
            "Called when a brand logo is clicked. `type` identifies which brand slot\nwas activated.",
        name: "onBrandClick",
        type: {
            required: false,
        },
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "(type: BrandType) => void",
            },
        },
    },
    "NavbarProps.onItemClick": {
        control: false,
        description:
            "Called when a navigation item is activated from the desktop bar or the\nmobile drawer. The item's full props object is passed as the argument.",
        name: "onItemClick",
        type: {
            required: false,
        },
        table: {
            category: "NavbarProps<T>",
            type: {
                summary:
                    "(item: NavItemProps<T> | NavItemCommonProps<T>) => void",
            },
        },
    },
    "NavbarProps.resources": {
        control: false,
        description: "Branding and logo resources for the navbar.",
        name: "resources",
        type: {
            required: false,
        },
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "NavbarResourcesProps",
            },
        },
    },
    "NavbarProps.selectedId": {
        control: false,
        description:
            "The currently selected navigation item identifier.\nMust match the `id` of one of the rendered items.",
        name: "selectedId",
        type: {
            required: false,
        },
        table: {
            category: "NavbarProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "NavbarResourcesProps.primary": {
        control: false,
        description:
            "When omitted, a default logo derived from the active theme is used.",
        name: "primary",
        type: {
            required: false,
        },
        table: {
            category: "NavbarResourcesProps",
            type: {
                summary: "NavbarBrandingProps",
            },
        },
    },
    "NavbarResourcesProps.secondary": {
        control: false,
        description: "When omitted, the secondary brand slot is hidden.",
        name: "secondary",
        type: {
            required: false,
        },
        table: {
            category: "NavbarResourcesProps",
            type: {
                summary: "NavbarBrandingProps",
            },
        },
    },
    "NavItemCommonProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "NavItemCommonProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "NavItemCommonProps.external": {
        control: false,
        description:
            "Appends an external-link icon after the link text to signal that the\ndestination is outside the current site.",
        name: "external",
        type: {
            required: false,
        },
        table: {
            category: "NavItemCommonProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "NavItemCommonProps.id": {
        control: false,
        name: "id",
        type: {
            required: true,
        },
        table: {
            category: "NavItemCommonProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "NavItemCommonProps.options": {
        control: false,
        description:
            "Arbitrary data passed through to callback arguments such as `onItemClick`.",
        name: "options",
        type: {
            required: false,
        },
        table: {
            category: "NavItemCommonProps<T>",
            type: {
                summary: "T",
            },
        },
    },
    "NavItemCommonProps.underlineStyle": {
        control: false,
        description: "Text-decoration style for the link.",
        name: "underlineStyle",
        type: {
            required: false,
        },
        table: {
            category: "NavItemCommonProps<T>",
            defaultValue: {
                summary: '"underline"',
            },
            type: {
                summaryParts: ["'none'", "'underline'"],
            },
        },
    },
    "NavItemCommonProps.weight": {
        control: false,
        description: "Font weight of the link text.",
        name: "weight",
        type: {
            required: false,
        },
        table: {
            category: "NavItemCommonProps<T>",
            defaultValue: {
                summary: '"regular"',
            },
            type: {
                summaryParts: ["'bold'", "'light'", "'regular'", "'semibold'"],
            },
        },
    },
    "NavItemComponentProps.children": {
        control: false,
        name: "children",
        type: {
            required: true,
        },
        table: {
            category: "NavItemComponentProps",
            type: {
                summary: "JSX.Element",
            },
        },
    },
    "NavItemComponentProps.itemType": {
        control: false,
        name: "itemType",
        type: {
            required: true,
        },
        table: {
            category: "NavItemComponentProps",
            type: {
                summary: '"component"',
            },
        },
    },
    "NavItemLinkProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "NavItemLinkProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "NavItemLinkProps.external": {
        control: false,
        description:
            "Appends an external-link icon after the link text to signal that the\ndestination is outside the current site.",
        name: "external",
        type: {
            required: false,
        },
        table: {
            category: "NavItemLinkProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "NavItemLinkProps.id": {
        control: false,
        name: "id",
        type: {
            required: true,
        },
        table: {
            category: "NavItemLinkProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "NavItemLinkProps.itemType": {
        control: false,
        name: "itemType",
        type: {
            required: false,
        },
        table: {
            category: "NavItemLinkProps<T>",
            type: {
                summary: '"link"',
            },
        },
    },
    "NavItemLinkProps.options": {
        control: false,
        description:
            "Arbitrary data passed through to callback arguments such as `onItemClick`.",
        name: "options",
        type: {
            required: false,
        },
        table: {
            category: "NavItemLinkProps<T>",
            type: {
                summary: "T",
            },
        },
    },
    "NavItemLinkProps.subMenu": {
        control: false,
        name: "subMenu",
        type: {
            required: false,
        },
        table: {
            category: "NavItemLinkProps<T>",
            type: {
                summary: "NavItemCommonProps<T>[]",
            },
        },
    },
    "NavItemLinkProps.underlineStyle": {
        control: false,
        description: "Text-decoration style for the link.",
        name: "underlineStyle",
        type: {
            required: false,
        },
        table: {
            category: "NavItemLinkProps<T>",
            defaultValue: {
                summary: '"underline"',
            },
            type: {
                summaryParts: ["'none'", "'underline'"],
            },
        },
    },
    "NavItemLinkProps.weight": {
        control: false,
        description: "Font weight of the link text.",
        name: "weight",
        type: {
            required: false,
        },
        table: {
            category: "NavItemLinkProps<T>",
            defaultValue: {
                summary: '"regular"',
            },
            type: {
                summaryParts: ["'bold'", "'light'", "'regular'", "'semibold'"],
            },
        },
    },
    "NavItemProps.children": {
        control: false,
        name: "children",
        type: {
            required: true,
        },
        table: {
            category: "NavItemProps<T>",
            type: {
                summary: 'JSX.Element | import("react").ReactNode',
            },
        },
    },
    "NavItemProps.itemType": {
        control: false,
        name: "itemType",
        type: {
            required: true,
        },
        table: {
            category: "NavItemProps<T>",
            type: {
                summaryParts: ["'component'", "'link'"],
            },
        },
    },
    "NavItemsProps.desktop": {
        control: false,
        description: "Items rendered in the desktop navbar.",
        name: "desktop",
        type: {
            required: true,
        },
        table: {
            category: "NavItemsProps<T>",
            type: {
                summary: "NavItemProps<T>[]",
            },
        },
    },
    "NavItemsProps.mobile": {
        control: false,
        description:
            "Items rendered in the mobile drawer. Falls back to `desktop` when omitted.",
        name: "mobile",
        type: {
            required: false,
        },
        table: {
            category: "NavItemsProps<T>",
            type: {
                summary: "NavItemProps<T>[]",
            },
        },
    },
} satisfies Record<string, unknown>;
