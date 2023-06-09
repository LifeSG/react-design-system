import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";
import { TabAttribute, Tabs } from "../storybook-common/tabs";

const SIDE_NAV_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                mandatory: true,
                description: (
                    <>
                        The groups and the items of the <code>SideNav</code>
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
        ],
    },
];

const SIDE_NAV_GROUP_DATA: ApiTableSectionProps[] = [
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

const SIDE_NAV_ITEM_DATA: ApiTableSectionProps[] = [
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
                propTypes: ["() => void"],
            },
        ],
    },
];

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "SideNav",
        component: <ApiTable sections={SIDE_NAV_DATA} />,
    },
    {
        title: "SideNav.Group",
        component: <ApiTable sections={SIDE_NAV_GROUP_DATA} />,
    },
    {
        title: "SideNav.Item",
        component: <ApiTable sections={SIDE_NAV_ITEM_DATA} />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
