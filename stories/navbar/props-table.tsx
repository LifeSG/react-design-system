import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

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
                description:
                    "Navbar resources such as the brand name and logo source",
                propTypes: ["LifeSG resources"],
            },
            {
                name: "resourcesSecondaryBrand",
                description:
                    "Navbar partner secondary resources such as the brand name and logo source",
                propTypes: ["LifeSG resources"],
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
                name: "children",
                description: "The custom component to be rendered",
                propTypes: ["JSX.Element"],
            },

            {
                name: "onBrandClick",
                description: "Called when the brand icon is clicked",
                propTypes: ["() => void"],
            },
            {
                name: "onSecondaryBrandClick",
                description: "Called when the secondary brand icon is clicked",
                propTypes: ["() => void"],
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
            {
                name: "subMenu",
                description:
                    "The navigation items for the mobile viewport. Uses desktop's if not specified",
                propTypes: ["NavItemProps<T>[]"],
            },
        ],
    },
    {
        name: "NavItemCommonProps",
        attributes: [
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
                        <a href="/?path=/docs/general-button--button">
                            <code>ButtonProps</code>
                        </a>
                        &nbsp;
                        <code>NavbarButtonComponentProps</code>
                    </>
                ),
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
        name: "NavResourcesProps",
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
];

export const PropsTable = () => <ApiTable sections={DATA} />;
