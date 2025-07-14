import {
    ApiTable,
    ApiTableSectionProps,
    StorybookLink,
} from "stories/storybook-common";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "items",
                mandatory: true,
                description: "The navigation link items",
                propTypes: ["NavItemsProps<T>"],
            },
            {
                name: "resources",
                description: "Navbar resources as objects",
                propTypes: ["NavbarResourcesProps"],
            },
            {
                name: "actionButtons",
                description: "The navigation action buttons",
                propTypes: ["NavbarActionButtonsProps"],
            },
            {
                name: "selectedId",
                description: "The current selected navigation item identifier",
                propTypes: ["string"],
            },
            {
                name: "compress",
                description: (
                    <>
                        Specifies if the <code>Navbar</code> should have its
                        display compressed
                    </>
                ),
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "fixed",
                description: (
                    <>
                        Specifies if the <code>Navbar</code> position is to be
                        fixed at the top
                    </>
                ),
                propTypes: ["boolean"],
                defaultValue: "true",
            },
            {
                name: "drawerDismissalExclusions",
                description: (
                    <>
                        Specifies which methods should not dismiss the
                        drawer.&nbsp;
                        <strong>
                            Happens only in tablet and mobile viewports
                        </strong>
                    </>
                ),
                propTypes: ["DrawerDismissalMethod[]"],
                defaultValue: "[]",
            },
            {
                name: "id",
                description: "The unique identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "hideNavBranding",
                description: "Specifies if brand logos are visible",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "hideNavElements",
                description: "Specifies if links and buttons are hidden",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "onBrandClick",
                description: "Called when the brand icon is clicked",
                propTypes: ["(type: BrandType) => void"],
            },
            {
                name: "onItemClick",
                description: "Called when a navigation item is clicked",
                propTypes: ["(item: NavItemProps<T>) => void"],
            },
            {
                name: "onActionButtonClick",
                description:
                    "Called when a navigation action button is clicked",
                propTypes: ["(actionButton: NavbarButtonProps) => void"],
            },
            {
                name: "masthead",
                description: "Specifies if the masthead is to be rendered",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
            {
                name: "layout",
                description:
                    "Specifies the layout type of the content in the navbar",
                propTypes: ["stretch | default"],
                defaultValue: "default",
            },
        ],
    },
    {
        name: "NavItemsProps",
        attributes: [
            {
                name: "desktop",
                mandatory: true,
                description: "The navigation items for the desktop viewport",
                propTypes: ["NavItemProps<T>[]"],
            },
            {
                name: "mobile",
                description:
                    "The navigation items for the mobile viewport. Uses desktop's if not specified",
                propTypes: ["NavItemProps<T>[]"],
            },
        ],
    },
    {
        name: "NavItemProps",
        attributes: [
            {
                name: "",
                description: "The navigation items of the navbar",
                propTypes: ["NavItemLinkProps<T> | NavItemComponentProps"],
            },
        ],
    },
    {
        name: "NavItemLinkProps",
        attributes: [
            {
                name: "itemType",
                description: "The link type of navigation items",
                propTypes: ["link"],
            },
            {
                name: "subMenu",
                description:
                    "The navigation items for the mobile viewport. Uses desktop's if not specified",
                propTypes: ["NavItemProps<T>[]"],
            },
        ],
    },
    {
        name: "NavItemComponentProps",
        attributes: [
            {
                name: "itemType",
                description: "The component type of navigation items",
                propTypes: ["component"],
                mandatory: true,
            },
            {
                name: "children",
                description: "The custom component to be rendered",
                propTypes: ["JSX.Element"],
            },
        ],
    },
    {
        name: "NavItemCommonProps",
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This also inherits props from&nbsp;
                        <StorybookLink path="/docs/core-typography--docs#component-api">
                            TypographyLinkProps
                        </StorybookLink>
                    </>
                ),
            },
            {
                name: "id",
                description: (
                    <>
                        The unique identifier of the navigation item. Used for
                        the&nbsp;
                        <code>selectedId</code> property
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the navigation item",
                propTypes: ["string"],
            },
            {
                name: "options",
                description:
                    "Any additional props to be passed to the navigation item",
                propTypes: ["T"],
            },
        ],
    },
    {
        name: "NavbarActionButtonsProps",
        attributes: [
            {
                name: "desktop",
                mandatory: true,
                description:
                    "The navigation action buttons for the desktop viewport",
                propTypes: ["NavbarButtonProps[]"],
            },
            {
                name: "mobile",
                description:
                    "The navigation action buttons for the mobile viewport. Uses desktop's if not specified",
                propTypes: ["NavbarButtonProps[]"],
            },
        ],
    },
    {
        name: "NavbarButtonProps",
        attributes: [
            {
                name: "type",
                mandatory: true,
                description: "The type of action button",
                propTypes: [`"download"`, `"button"`, `"component"`],
            },
            {
                name: "",
                description: (
                    <>
                        <strong>Note</strong>: The <code>download</code> button
                        type is a special button that has been pre-programmed
                        specifically for LifeSG purposes
                    </>
                ),
            },
            {
                name: "args",
                description: "The props for the action button",
                propTypes: (
                    <>
                        <StorybookLink path="/docs/selection-and-input-button-base--docs#component-api">
                            <code>ButtonProps</code>
                        </StorybookLink>
                        &nbsp;
                        <code>NavbarButtonComponentProps</code>
                    </>
                ),
            },
            {
                name: "uncollapsible",
                description: (
                    <>
                        If specified, the item will remain on the{" "}
                        <code>Navbar</code> and not be collapsed to the drawer
                        in mobile viewports
                    </>
                ),
                propTypes: ["boolean"],
            },
        ],
    },
    {
        name: "NavbarButtonComponentProps",
        attributes: [
            {
                name: "render",
                description: "The custom component to be rendered",
                propTypes: ["JSX.Element"],
            },
        ],
    },
    {
        name: "NavbarResourcesProps",
        attributes: [
            {
                name: "primary",
                description: "The primary branding",
                propTypes: ["NavbarBrandingProps"],
                defaultValue: "<theme service branding>",
            },
            {
                name: "secondary",
                description: "The secondary branding",
                propTypes: ["NavbarBrandingProps"],
            },
        ],
    },
    {
        name: "NavbarBrandingProps",
        attributes: [
            {
                name: "brandName",
                description: "The brand name of the website",
                propTypes: ["string"],
            },
            {
                name: "logoSrc",
                description: "The image source of the brand logo",
                propTypes: ["string"],
            },
        ],
    },
    {
        name: "BrandType",
        attributes: [
            {
                name: "",
                description: "The type of brand icon click",
                propTypes: [`"primary"`, `"secondary"`],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
