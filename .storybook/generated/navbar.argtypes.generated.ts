// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const navbarExtraArgTypes = {
    "BrandType": {
        "control": false,
        "description": "Identifies which brand slot was interacted with in brand-related callbacks.",
        "name": "BrandType",
        "table": {
            "category": "BrandType",
            "type": {
                "summary": "'secondary' | 'primary'"
            }
        }
    },
    "DrawerDismissalMethod": {
        "control": false,
        "description": "Identifies the user action that can dismiss the mobile navigation drawer.\n\nPass one or more values to `drawerDismissalExclusions` on `NavbarProps` to\nprevent those actions from closing the drawer.\n\n- `\"close-button-click\"` — the drawer's close button or overlay click\n- `\"item-click\"` — clicking a nav item or action button\n- `\"brand-click\"` — clicking a brand logo",
        "name": "DrawerDismissalMethod",
        "table": {
            "category": "DrawerDismissalMethod",
            "type": {
                "summary": "'close-button-click' | 'item-click' | 'brand-click'"
            }
        }
    },
    "NavbarActionButtonComponentProps.args": {
        "control": false,
        "name": "args",
        "table": {
            "category": "NavbarActionButtonComponentProps",
            "type": {
                "summary": "NavbarButtonComponentProps"
            }
        }
    },
    "NavbarActionButtonComponentProps.type": {
        "control": false,
        "name": "type",
        "table": {
            "category": "NavbarActionButtonComponentProps",
            "type": {
                "summary": "\"component\""
            }
        }
    },
    "NavbarActionButtonComponentProps.uncollapsible": {
        "control": false,
        "description": "When `true`, the button remains visible outside the mobile drawer rather\nthan being collapsed into it.",
        "name": "uncollapsible",
        "table": {
            "category": "NavbarActionButtonComponentProps",
            "defaultValue": {
                "summary": "false"
            },
            "type": {
                "summary": "boolean"
            }
        }
    },
    "NavbarActionButtonCtaProps.args": {
        "control": false,
        "name": "args",
        "table": {
            "category": "NavbarActionButtonCtaProps",
            "type": {
                "summary": "ButtonProps"
            }
        }
    },
    "NavbarActionButtonCtaProps.type": {
        "control": false,
        "name": "type",
        "table": {
            "category": "NavbarActionButtonCtaProps",
            "type": {
                "summary": "\"button\""
            }
        }
    },
    "NavbarActionButtonCtaProps.uncollapsible": {
        "control": false,
        "description": "When `true`, the button remains visible outside the mobile drawer rather\nthan being collapsed into it.",
        "name": "uncollapsible",
        "table": {
            "category": "NavbarActionButtonCtaProps",
            "defaultValue": {
                "summary": "false"
            },
            "type": {
                "summary": "boolean"
            }
        }
    },
    "NavbarActionButtonDownloadProps.args": {
        "control": false,
        "name": "args",
        "table": {
            "category": "NavbarActionButtonDownloadProps",
            "type": {
                "summary": "ButtonProps"
            }
        }
    },
    "NavbarActionButtonDownloadProps.type": {
        "control": false,
        "name": "type",
        "table": {
            "category": "NavbarActionButtonDownloadProps",
            "type": {
                "summary": "\"download\""
            }
        }
    },
    "NavbarActionButtonDownloadProps.uncollapsible": {
        "control": false,
        "description": "When `true`, the button remains visible outside the mobile drawer rather\nthan being collapsed into it.",
        "name": "uncollapsible",
        "table": {
            "category": "NavbarActionButtonDownloadProps",
            "defaultValue": {
                "summary": "false"
            },
            "type": {
                "summary": "boolean"
            }
        }
    },
    "NavbarActionButtonsProps.desktop": {
        "control": false,
        "description": "Action buttons rendered in the desktop navbar.",
        "name": "desktop",
        "table": {
            "category": "NavbarActionButtonsProps",
            "type": {
                "summary": "NavbarButtonProps[]"
            }
        }
    },
    "NavbarActionButtonsProps.mobile": {
        "control": false,
        "description": "Action buttons rendered in the mobile drawer. Falls back to `desktop`\nwhen omitted.",
        "name": "mobile",
        "table": {
            "category": "NavbarActionButtonsProps",
            "type": {
                "summary": "NavbarButtonProps[]"
            }
        }
    },
    "NavbarBrandingProps.brandName": {
        "control": false,
        "description": "The name of the brand, used for accessibility and alt text.",
        "name": "brandName",
        "table": {
            "category": "NavbarBrandingProps",
            "type": {
                "summary": "string"
            }
        }
    },
    "NavbarBrandingProps.logoSrc": {
        "control": false,
        "description": "The source URL for the brand logo image.",
        "name": "logoSrc",
        "table": {
            "category": "NavbarBrandingProps",
            "type": {
                "summary": "string"
            }
        }
    },
    "NavbarButtonComponentProps.render": {
        "control": false,
        "description": "The custom component to be rendered",
        "name": "render",
        "table": {
            "category": "NavbarButtonComponentProps",
            "type": {
                "summary": "JSX.Element"
            }
        }
    },
    "NavbarButtonProps": {
        "control": false,
        "description": "Props for a single action button in the navbar.\n\n`type` discriminates between `\"button\"`, `\"download\"`, and `\"component\"`.",
        "name": "NavbarButtonProps",
        "table": {
            "category": "NavbarButtonProps",
            "type": {
                "summary": "NavbarActionButtonDownloadProps | NavbarActionButtonCtaProps | NavbarActionButtonComponentProps"
            }
        }
    },
    "NavbarButtonProps.args": {
        "control": false,
        "name": "args",
        "table": {
            "category": "NavbarButtonProps",
            "type": {
                "summary": "ButtonProps | NavbarButtonComponentProps"
            }
        }
    },
    "NavbarButtonProps.type": {
        "control": false,
        "name": "type",
        "table": {
            "category": "NavbarButtonProps",
            "type": {
                "summary": "'button' | 'download' | 'component'"
            }
        }
    },
    "NavbarButtonProps.uncollapsible": {
        "control": false,
        "description": "When `true`, the button remains visible outside the mobile drawer rather\nthan being collapsed into it.",
        "name": "uncollapsible",
        "table": {
            "category": "NavbarButtonProps",
            "defaultValue": {
                "summary": "false"
            },
            "type": {
                "summary": "false | true"
            }
        }
    },
    "NavbarProps.actionButtons": {
        "control": false,
        "description": "Action buttons rendered in the navbar and mobile drawer.",
        "name": "actionButtons",
        "table": {
            "category": "NavbarProps<T>",
            "type": {
                "summary": "NavbarActionButtonsProps"
            }
        }
    },
    "NavbarProps.className": {
        "control": false,
        "name": "className",
        "table": {
            "category": "NavbarProps<T>",
            "type": {
                "summary": "string"
            }
        }
    },
    "NavbarProps.compress": {
        "control": false,
        "description": "Reduces the height and logo size of the navbar.",
        "name": "compress",
        "table": {
            "category": "NavbarProps<T>",
            "defaultValue": {
                "summary": "false"
            },
            "type": {
                "summary": "boolean"
            }
        }
    },
    "NavbarProps.data-testid": {
        "control": false,
        "name": "data-testid",
        "table": {
            "category": "NavbarProps<T>",
            "type": {
                "summary": "string"
            }
        }
    },
    "NavbarProps.drawerDismissalExclusions": {
        "control": false,
        "description": "Drawer dismissal methods that should be suppressed. The drawer will not\nclose when the user performs any of the listed actions.",
        "name": "drawerDismissalExclusions",
        "table": {
            "category": "NavbarProps<T>",
            "type": {
                "summary": "DrawerDismissalMethod[]"
            }
        }
    },
    "NavbarProps.drawerLabel": {
        "control": false,
        "description": "Accessible label announced for the mobile navigation drawer.",
        "name": "drawerLabel",
        "table": {
            "category": "NavbarProps<T>",
            "type": {
                "summary": "string"
            }
        }
    },
    "NavbarProps.fixed": {
        "control": false,
        "description": "Pins the navbar to the top of the viewport while the page scrolls.",
        "name": "fixed",
        "table": {
            "category": "NavbarProps<T>",
            "defaultValue": {
                "summary": "true"
            },
            "type": {
                "summary": "boolean"
            }
        }
    },
    "NavbarProps.headerLabel": {
        "control": false,
        "description": "Accessible label announced for the main navigation header.",
        "name": "headerLabel",
        "table": {
            "category": "NavbarProps<T>",
            "defaultValue": {
                "summary": "\"Main navigation menu\""
            },
            "type": {
                "summary": "string"
            }
        }
    },
    "NavbarProps.hideLinkIndicator": {
        "control": false,
        "description": "Hides the active-item underline indicator across desktop and drawer views.",
        "name": "hideLinkIndicator",
        "table": {
            "category": "NavbarProps<T>",
            "defaultValue": {
                "summary": "false"
            },
            "type": {
                "summary": "boolean"
            }
        }
    },
    "NavbarProps.hideNavBranding": {
        "control": false,
        "description": "Hides all brand logos from the navbar and drawer.",
        "name": "hideNavBranding",
        "table": {
            "category": "NavbarProps<T>",
            "defaultValue": {
                "summary": "false"
            },
            "type": {
                "summary": "boolean"
            }
        }
    },
    "NavbarProps.hideNavElements": {
        "control": false,
        "description": "Hides nav items and action buttons, leaving only the brand area visible.",
        "name": "hideNavElements",
        "table": {
            "category": "NavbarProps<T>",
            "defaultValue": {
                "summary": "false"
            },
            "type": {
                "summary": "boolean"
            }
        }
    },
    "NavbarProps.id": {
        "control": false,
        "name": "id",
        "table": {
            "category": "NavbarProps<T>",
            "type": {
                "summary": "string"
            }
        }
    },
    "NavbarProps.items": {
        "control": false,
        "name": "items",
        "table": {
            "category": "NavbarProps<T>",
            "type": {
                "summary": "NavItemsProps<T>"
            }
        }
    },
    "NavbarProps.layout": {
        "control": false,
        "description": "Controls how the navbar content fills its container. `\"stretch\"` expands\nto the full container width; `\"default\"` uses the standard content width.",
        "name": "layout",
        "table": {
            "category": "NavbarProps<T>",
            "defaultValue": {
                "summary": "\"default\""
            },
            "type": {
                "summary": "\"default\" | \"stretch\""
            }
        }
    },
    "NavbarProps.masthead": {
        "control": false,
        "description": "Renders the `Masthead` (SGDS official government banner) above the navbar.",
        "name": "masthead",
        "table": {
            "category": "NavbarProps<T>",
            "defaultValue": {
                "summary": "true"
            },
            "type": {
                "summary": "boolean"
            }
        }
    },
    "NavbarProps.onActionButtonClick": {
        "control": false,
        "description": "Called when an action button without its own `onClick` handler is\nactivated. The button's full props object is passed as the argument.",
        "name": "onActionButtonClick",
        "table": {
            "category": "NavbarProps<T>",
            "type": {
                "summary": "(actionButton: NavbarButtonProps) => void"
            }
        }
    },
    "NavbarProps.onBrandClick": {
        "control": false,
        "description": "Called when a brand logo is clicked. `type` identifies which brand slot\nwas activated.",
        "name": "onBrandClick",
        "table": {
            "category": "NavbarProps<T>",
            "type": {
                "summary": "(type: BrandType) => void"
            }
        }
    },
    "NavbarProps.onItemClick": {
        "control": false,
        "description": "Called when a navigation item is activated from the desktop bar or the\nmobile drawer. The item's full props object is passed as the argument.",
        "name": "onItemClick",
        "table": {
            "category": "NavbarProps<T>",
            "type": {
                "summary": "(item: NavItemProps<T> | NavItemCommonProps<T>) => void"
            }
        }
    },
    "NavbarProps.resources": {
        "control": false,
        "description": "Branding and logo resources for the navbar.",
        "name": "resources",
        "table": {
            "category": "NavbarProps<T>",
            "type": {
                "summary": "NavbarResourcesProps"
            }
        }
    },
    "NavbarProps.selectedId": {
        "control": false,
        "description": "The currently selected navigation item identifier.\nMust match the `id` of one of the rendered items.",
        "name": "selectedId",
        "table": {
            "category": "NavbarProps<T>",
            "type": {
                "summary": "string"
            }
        }
    },
    "NavbarResourcesProps.primary": {
        "control": false,
        "description": "When omitted, a default logo derived from the active theme is used.",
        "name": "primary",
        "table": {
            "category": "NavbarResourcesProps",
            "type": {
                "summary": "NavbarBrandingProps"
            }
        }
    },
    "NavbarResourcesProps.secondary": {
        "control": false,
        "description": "When omitted, the secondary brand slot is hidden.",
        "name": "secondary",
        "table": {
            "category": "NavbarResourcesProps",
            "type": {
                "summary": "NavbarBrandingProps"
            }
        }
    },
    "NavbarSharedProps.actionButtons": {
        "control": false,
        "description": "Action buttons rendered in the navbar and mobile drawer.",
        "name": "actionButtons",
        "table": {
            "category": "NavbarSharedProps",
            "type": {
                "summary": "NavbarActionButtonsProps"
            }
        }
    },
    "NavbarSharedProps.hideLinkIndicator": {
        "control": false,
        "description": "Hides the active-item underline indicator across desktop and drawer views.",
        "name": "hideLinkIndicator",
        "table": {
            "category": "NavbarSharedProps",
            "defaultValue": {
                "summary": "false"
            },
            "type": {
                "summary": "boolean"
            }
        }
    },
    "NavbarSharedProps.hideNavBranding": {
        "control": false,
        "description": "Hides all brand logos from the navbar and drawer.",
        "name": "hideNavBranding",
        "table": {
            "category": "NavbarSharedProps",
            "defaultValue": {
                "summary": "false"
            },
            "type": {
                "summary": "boolean"
            }
        }
    },
    "NavbarSharedProps.resources": {
        "control": false,
        "description": "Branding and logo resources for the navbar.",
        "name": "resources",
        "table": {
            "category": "NavbarSharedProps",
            "type": {
                "summary": "NavbarResourcesProps"
            }
        }
    },
    "NavItemCommonProps.data-testid": {
        "control": false,
        "name": "data-testid",
        "table": {
            "category": "NavItemCommonProps<T>",
            "type": {
                "summary": "string"
            }
        }
    },
    "NavItemCommonProps.external": {
        "control": false,
        "description": "Appends an external-link icon after the link text to signal that the\ndestination is outside the current site.",
        "name": "external",
        "table": {
            "category": "NavItemCommonProps<T>",
            "type": {
                "summary": "boolean"
            }
        }
    },
    "NavItemCommonProps.id": {
        "control": false,
        "name": "id",
        "table": {
            "category": "NavItemCommonProps<T>",
            "type": {
                "summary": "string"
            }
        }
    },
    "NavItemCommonProps.inert": {
        "control": false,
        "name": "inert",
        "table": {
            "category": "NavItemCommonProps<T>",
            "type": {
                "summary": "boolean | string"
            }
        }
    },
    "NavItemCommonProps.options": {
        "control": false,
        "description": "Arbitrary data passed through to callback arguments such as `onItemClick`.",
        "name": "options",
        "table": {
            "category": "NavItemCommonProps<T>",
            "type": {
                "summary": "T"
            }
        }
    },
    "NavItemCommonProps.underlineStyle": {
        "control": false,
        "description": "Text-decoration style for the link.",
        "name": "underlineStyle",
        "table": {
            "category": "NavItemCommonProps<T>",
            "defaultValue": {
                "summary": "\"underline\""
            },
            "type": {
                "summary": "TypographyUnderlineStyle"
            }
        }
    },
    "NavItemCommonProps.weight": {
        "control": false,
        "description": "Font weight of the link text.",
        "name": "weight",
        "table": {
            "category": "NavItemCommonProps<T>",
            "defaultValue": {
                "summary": "\"regular\""
            },
            "type": {
                "summary": "TypographyWeight"
            }
        }
    },
    "NavItemComponentProps.children": {
        "control": false,
        "name": "children",
        "table": {
            "category": "NavItemComponentProps",
            "type": {
                "summary": "JSX.Element"
            }
        }
    },
    "NavItemComponentProps.itemType": {
        "control": false,
        "name": "itemType",
        "table": {
            "category": "NavItemComponentProps",
            "type": {
                "summary": "\"component\""
            }
        }
    },
    "NavItemLinkProps.data-testid": {
        "control": false,
        "name": "data-testid",
        "table": {
            "category": "NavItemLinkProps<T>",
            "type": {
                "summary": "string"
            }
        }
    },
    "NavItemLinkProps.external": {
        "control": false,
        "description": "Appends an external-link icon after the link text to signal that the\ndestination is outside the current site.",
        "name": "external",
        "table": {
            "category": "NavItemLinkProps<T>",
            "type": {
                "summary": "boolean"
            }
        }
    },
    "NavItemLinkProps.id": {
        "control": false,
        "name": "id",
        "table": {
            "category": "NavItemLinkProps<T>",
            "type": {
                "summary": "string"
            }
        }
    },
    "NavItemLinkProps.inert": {
        "control": false,
        "name": "inert",
        "table": {
            "category": "NavItemLinkProps<T>",
            "type": {
                "summary": "boolean | string"
            }
        }
    },
    "NavItemLinkProps.itemType": {
        "control": false,
        "name": "itemType",
        "table": {
            "category": "NavItemLinkProps<T>",
            "type": {
                "summary": "\"link\""
            }
        }
    },
    "NavItemLinkProps.options": {
        "control": false,
        "description": "Arbitrary data passed through to callback arguments such as `onItemClick`.",
        "name": "options",
        "table": {
            "category": "NavItemLinkProps<T>",
            "type": {
                "summary": "T"
            }
        }
    },
    "NavItemLinkProps.subMenu": {
        "control": false,
        "name": "subMenu",
        "table": {
            "category": "NavItemLinkProps<T>",
            "type": {
                "summary": "NavItemCommonProps<T>[]"
            }
        }
    },
    "NavItemLinkProps.underlineStyle": {
        "control": false,
        "description": "Text-decoration style for the link.",
        "name": "underlineStyle",
        "table": {
            "category": "NavItemLinkProps<T>",
            "defaultValue": {
                "summary": "\"underline\""
            },
            "type": {
                "summary": "TypographyUnderlineStyle"
            }
        }
    },
    "NavItemLinkProps.weight": {
        "control": false,
        "description": "Font weight of the link text.",
        "name": "weight",
        "table": {
            "category": "NavItemLinkProps<T>",
            "defaultValue": {
                "summary": "\"regular\""
            },
            "type": {
                "summary": "TypographyWeight"
            }
        }
    },
    "NavItemProps": {
        "control": false,
        "description": "A single navigation item rendered by the navbar.",
        "name": "NavItemProps<T>",
        "table": {
            "category": "NavItemProps<T>",
            "type": {
                "summary": "NavItemLinkProps<T> | NavItemComponentProps"
            }
        }
    },
    "NavItemProps.children": {
        "control": false,
        "name": "children",
        "table": {
            "category": "NavItemProps<T>",
            "type": {
                "summary": "import(\"react\").ReactNode | JSX.Element"
            }
        }
    },
    "NavItemProps.itemType": {
        "control": false,
        "name": "itemType",
        "table": {
            "category": "NavItemProps<T>",
            "type": {
                "summary": "'link' | 'component'"
            }
        }
    },
    "NavItemsProps.desktop": {
        "control": false,
        "description": "Items rendered in the desktop navbar.",
        "name": "desktop",
        "table": {
            "category": "NavItemsProps<T>",
            "type": {
                "summary": "NavItemProps<T>[]"
            }
        }
    },
    "NavItemsProps.mobile": {
        "control": false,
        "description": "Items rendered in the mobile drawer. Falls back to `desktop` when omitted.",
        "name": "mobile",
        "table": {
            "category": "NavItemsProps<T>",
            "type": {
                "summary": "NavItemProps<T>[]"
            }
        }
    }
} satisfies Record<string, unknown>;
