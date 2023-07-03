import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";
import { TabAttribute, Tabs } from "../storybook-common/tabs";

const SIDENAV_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                mandatory: true,
                description: (
                    <>
                        The groups and the items of the <code>Sidenav</code>
                    </>
                ),
                propTypes: ["React.ReactNode"],
            },
            {
                name: "className",
                description: "Class selector for the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
            },
            {
                name: "fixed",
                description:
                    "Specifies if the sidenav position is to be fixed at left",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
        ],
    },
];

const SIDENAV_GROUP_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                mandatory: true,
                description: (
                    <>
                        The list of items of the <code>SideNav.Item</code>
                    </>
                ),
                propTypes: ["React.ReactNode"],
            },
            {
                name: "className",
                description: "Class selector for the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
            },
            {
                name: "separator",
                description: "Will draw divider line after group end",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
        ],
    },
];

const SIDENAV_ITEM_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description: (
                    <>
                        The list of items of the <code>SideNav.DrawerItem</code>
                    </>
                ),
                propTypes: ["React.ReactNode"],
            },
            {
                name: "className",
                description: "Class selector for the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
            },
            {
                name: "icon",
                mandatory: true,
                description: "Display icon of the item",
                propTypes: ["React.ReactNode"],
            },
            {
                name: "id",
                description: "The id of the component",
                propTypes: ["string"],
            },
            {
                name: "selected",
                description: "Pre select side nav item",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "title",
                mandatory: true,
                description: "Display title of the item",
                propTypes: ["string"],
            },
            {
                name: "onClick",
                description: "Called when item is clicked",
                propTypes: ["(id: string) => void"],
            },
        ],
    },
];

const SIDENAV_DRAWER_ITEM_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description: (
                    <>
                        The list of items of the{" "}
                        <code>SideNav.DrawerSubitem</code>
                    </>
                ),
                propTypes: ["React.ReactNode"],
            },
            {
                name: "className",
                description: "Class selector for the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "The id of the component",
                propTypes: ["string"],
            },
            {
                name: "title",
                mandatory: true,
                description: "Display title of the item",
                propTypes: ["string"],
            },
            {
                name: "onClick",
                description: "Called when item is clicked",
                propTypes: ["(id: string) => void"],
            },
        ],
    },
];

const SIDENAV_DRAWER_SUBITEM_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "className",
                description: "Class selector for the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "The id of the component",
                propTypes: ["string"],
            },
            {
                name: "title",
                mandatory: true,
                description: "Display title of the item",
                propTypes: ["string"],
            },
            {
                name: "onClick",
                description: "Called when item is clicked",
                propTypes: ["(id: string) => void"],
            },
        ],
    },
];

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "Sidenav",
        component: <ApiTable sections={SIDENAV_DATA} />,
    },
    {
        title: "Sidenav.Group",
        component: <ApiTable sections={SIDENAV_GROUP_DATA} />,
    },
    {
        title: "Sidenav.Item",
        component: <ApiTable sections={SIDENAV_ITEM_DATA} />,
    },
    {
        title: "Sidenav.DrawerItem",
        component: <ApiTable sections={SIDENAV_DRAWER_ITEM_DATA} />,
    },
    {
        title: "Sidenav.DrawerSubitem",
        component: <ApiTable sections={SIDENAV_DRAWER_SUBITEM_DATA} />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
