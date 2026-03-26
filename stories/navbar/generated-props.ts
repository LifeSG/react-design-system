// AUTO-GENERATED — do not edit manually.
// Source: src/navbar/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const NavbarPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "items",
                description:
                    "The navigation link items for desktop and mobile viewports.",
                propTypes: ["NavItemsProps<T>"],
                mandatory: true,
            },
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "Unique identifier for the component.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "selectedId",
                description: "The current selected navigation item identifier.",
                propTypes: ["string"],
            },
            {
                name: "compress",
                description: "Specifies if the Navbar should be compressed",
                propTypes: ["boolean"],
            },
            {
                name: "fixed",
                description: "Specifies if Navbar should be fixed to top",
                propTypes: ["boolean"],
            },
            {
                name: "drawerDismissalExclusions",
                description:
                    "Specifies which methods will not dismiss the drawer",
                propTypes: ["DrawerDismissalMethod[]"],
            },
            {
                name: "hideNavElements",
                description: "Specifies if links and buttons are hidden.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "onBrandClick",
                description: "Called when the brand icon is clicked.",
                propTypes: ["((type: BrandType) => void) | undefined"],
            },
            {
                name: "onItemClick",
                description: "Called when a navigation item is clicked.",
                propTypes: [
                    "",
                    "((item: NavItemProps<T> | NavItemCommonProps<T>) => void)\n        | undefined",
                ],
            },
            {
                name: "onActionButtonClick",
                description:
                    "Called when a navigation action button is clicked.",
                propTypes: [
                    "",
                    "((actionButton: NavbarButtonProps) => void)\n        | undefined",
                ],
            },
            {
                name: "masthead",
                description: "Specifies if masthead should be rendered",
                propTypes: ["boolean"],
            },
            {
                name: "layout",
                description:
                    "Specifies the layout type of the content in the navbar.",
                propTypes: ['"default"', '"stretch"'],
                defaultValue: '"default"',
            },
            {
                name: "headerLabel",
                description: "Custom aria-label for the main navigation header",
                propTypes: ["string"],
            },
            {
                name: "drawerLabel",
                description:
                    "Custom aria-label for the mobile navigation drawer",
                propTypes: ["string"],
            },
            {
                name: "resources",
                description:
                    "Navbar resources as objects containing primary and secondary branding.",
                propTypes: ["NavbarResourcesProps"],
            },
            {
                name: "actionButtons",
                description:
                    "The navigation action buttons shown in the Navbar.",
                propTypes: ["NavbarActionButtonsProps"],
            },
            {
                name: "hideNavBranding",
                description: "Specifies if brand logos are visible",
                propTypes: ["boolean"],
            },
            {
                name: "hideLinkIndicator",
                description:
                    "Hide the selected link indicator across the navbar",
                propTypes: ["boolean"],
            },
        ],
    },
];

export const NavItemLinkPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "itemType",
                description: "The link type of this navigation item.",
                propTypes: ['"link"'],
                defaultValue: '"link"',
            },
            {
                name: "subMenu",
                description:
                    "Sub-menu navigation items displayed under this link.",
                propTypes: ["NavItemCommonProps<T>[]"],
            },
            {
                name: "id",
                description:
                    "The unique identifier of the navigation item. Used for the `selectedId` property.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "options",
                description:
                    "Additional props to be passed to the navigation item.",
                propTypes: ["T"],
            },
            {
                name: "weight",
                description: "The font weight",
                propTypes: ["he custom component to render"],
            },
            {
                name: "external",
                description:
                    "Displays indicator to signal that link leads to an external site",
                propTypes: ["inkProps<T>", "NavIte"],
            },
            {
                name: "underlineStyle",
                description:
                    "Toggle text decoration for hyperlinks, underline by default",
                propTypes: ["ords nav item, common props, identifi"],
            },
        ],
    },
];

export const NavItemComponentPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "itemType",
                description: "The component type of this navigation item.",
                propTypes: ['"component"'],
                mandatory: true,
            },
            {
                name: "children",
                description:
                    "The custom component to render in place of a link.",
                propTypes: ["JSX.Element"],
                mandatory: true,
            },
        ],
    },
];

export const NavItemPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "itemType",
                description: "The link type of this navigation item.",
                propTypes: ['"link"'],
                defaultValue: '"link"',
            },
        ],
    },
];

export const NavItemCommonPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "id",
                description:
                    "The unique identifier of the navigation item. Used for the `selectedId` property.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "options",
                description:
                    "Additional props to be passed to the navigation item.",
                propTypes: ["T"],
            },
            {
                name: "weight",
                description: "The font weight",
                propTypes: ["he custom component to render"],
            },
            {
                name: "external",
                description:
                    "Displays indicator to signal that link leads to an external site",
                propTypes: ["inkProps<T>", "NavIte"],
            },
            {
                name: "underlineStyle",
                description:
                    "Toggle text decoration for hyperlinks, underline by default",
                propTypes: ["ords nav item, common props, identifi"],
            },
        ],
    },
];

export const NavItemsPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "desktop",
                description: "The navigation items for the desktop viewport.",
                propTypes: ["NavItemProps<T>[]"],
                mandatory: true,
            },
            {
                name: "mobile",
                description: "",
                propTypes: ["NavItemProps<T>[]"],
            },
        ],
    },
];

export const NavbarActionButtonDownloadPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "type",
                description: "The type of action button.",
                propTypes: ['"download"'],
                mandatory: true,
            },
            {
                name: "args",
                description: "The props for the download button.",
                propTypes: ["ButtonProps"],
            },
            {
                name: "uncollapsible",
                description:
                    "If specified, the item remains on the Navbar and is not collapsed to the drawer in mobile viewports.",
                propTypes: ["boolean"],
            },
        ],
    },
];

export const NavbarActionButtonCtaPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "type",
                description: "The type of action button.",
                propTypes: ['"button"'],
                mandatory: true,
            },
            {
                name: "args",
                description: "The props for the CTA button.",
                propTypes: ["ButtonProps"],
                mandatory: true,
            },
            {
                name: "uncollapsible",
                description:
                    "If specified, the item remains on the Navbar and is not collapsed to the drawer in mobile viewports.",
                propTypes: ["boolean"],
            },
        ],
    },
];

export const NavbarButtonComponentPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "render",
                description: "The custom component to render.",
                propTypes: ["JSX.Element"],
                mandatory: true,
            },
        ],
    },
];

export const NavbarActionButtonComponentPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "type",
                description: "The type of action button.",
                propTypes: ['"component"'],
                mandatory: true,
            },
            {
                name: "args",
                description: "The props for the custom component button.",
                propTypes: ["NavbarButtonComponentProps"],
            },
            {
                name: "uncollapsible",
                description:
                    "If specified, the item remains on the Navbar and is not collapsed to the drawer in mobile viewports.",
                propTypes: ["boolean"],
            },
        ],
    },
];

export const NavbarButtonPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "type",
                description: "The type of action button.",
                propTypes: ['"download"'],
                mandatory: true,
            },
            {
                name: "args",
                description: "The props for the download button.",
                propTypes: ["ButtonProps"],
            },
            {
                name: "uncollapsible",
                description:
                    "If specified, the item remains on the Navbar and is not collapsed to the drawer in mobile viewports.",
                propTypes: ["boolean"],
            },
        ],
    },
];

export const NavbarActionButtonsPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "desktop",
                description:
                    "The navigation action buttons for the desktop viewport.",
                propTypes: ["NavbarButtonProps[]"],
                mandatory: true,
            },
            {
                name: "mobile",
                description:
                    "Navbar action buttons for mobile drawer. Takes desktop if not specified",
                propTypes: ["NavbarButtonProps[]"],
            },
        ],
    },
];

export const NavbarBrandingPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "brandName",
                description: "The brand name of the website.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "logoSrc",
                description: "The image source URL of the brand logo.",
                propTypes: ["string"],
                mandatory: true,
            },
        ],
    },
];

export const NavbarResourcesPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "primary",
                description:
                    "The primary branding. Defaults to the theme service branding.",
                propTypes: ["NavbarBrandingProps"],
            },
            {
                name: "secondary",
                description: "The secondary branding.",
                propTypes: ["NavbarBrandingProps"],
            },
        ],
    },
];

export const NavbarSharedPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "resources",
                description:
                    "Navbar resources as objects containing primary and secondary branding.",
                propTypes: ["NavbarResourcesProps"],
            },
            {
                name: "actionButtons",
                description:
                    "The navigation action buttons shown in the Navbar.",
                propTypes: ["NavbarActionButtonsProps"],
            },
            {
                name: "hideNavBranding",
                description: "Specifies if brand logos are visible",
                propTypes: ["boolean"],
            },
            {
                name: "hideLinkIndicator",
                description:
                    "Hide the selected link indicator across the navbar",
                propTypes: ["boolean"],
            },
        ],
    },
];

export const NavbarDrawerPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "show",
                description:
                    "Toggles the visibility of the mobile navigation drawer.",
                propTypes: ["boolean"],
                mandatory: true,
            },
            {
                name: "children",
                description:
                    "The navigation content to render inside the drawer.",
                propTypes: ["JSX.Element", "JSX.Element[]"],
                mandatory: true,
            },
            {
                name: "onClose",
                description: "Callback when the drawer is closed.",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onBrandClick",
                description: "Triggered when the brand icon is being clicked",
                propTypes: [
                    "",
                    "((\n              event: React.MouseEvent<HTMLAnchorElement>,\n              type: BrandType\n          ) => void)\n        | undefined",
                ],
            },
            {
                name: "drawerLabel",
                description:
                    "Custom aria-label for the mobile navigation drawer",
                propTypes: ["string"],
            },
            {
                name: "mobileMenuRef",
                description:
                    "Ref to the mobile menu button for focus management",
                propTypes: ["React.RefObject<HTMLButtonElement>"],
            },
            {
                name: "resources",
                description:
                    "Navbar resources as objects containing primary and secondary branding.",
                propTypes: ["NavbarResourcesProps"],
            },
            {
                name: "actionButtons",
                description:
                    "The navigation action buttons shown in the Navbar.",
                propTypes: ["NavbarActionButtonsProps"],
            },
            {
                name: "hideNavBranding",
                description: "Specifies if brand logos are visible",
                propTypes: ["boolean"],
            },
            {
                name: "hideLinkIndicator",
                description:
                    "Hide the selected link indicator across the navbar",
                propTypes: ["boolean"],
            },
        ],
    },
];
