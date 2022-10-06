import React from "react";
import {
    ApiTable,
    DefaultCol,
    DescriptionCol,
    NameCol,
    Table,
} from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";
import { TabAttribute, Tabs } from "../storybook-common/tabs";

const ACCORDION_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                mandatory: true,
                description: "The content of the Accordion",
                propTypes: ["JSX.Element", "JSX.Element[]"],
            },
            {
                name: "title",
                description: "The header text content for the Accordion",
                propTypes: ["string"],
            },
            {
                name: "enableExpandAll",
                description:
                    "Specifies if the feature to expand/collapse all child items is enabled",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
            {
                name: "showTitleInMobile",
                description:
                    "Specifies if the title should be shown in mobile viewports",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "className",
                description: "Class selector for the component",
                propTypes: ["string"],
            },
        ],
    },
];

const ACCORDION_ITEM_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                mandatory: true,
                description: (
                    <>
                        The content of the <code>Accordion.Item</code>
                    </>
                ),
                propTypes: ["JSX.Element", "JSX.Element[]"],
            },
            {
                name: "title",
                description: (
                    <>
                        The header text of the <code>Accordion.Item</code>{" "}
                        header
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "type",
                description: "Sets the style type of the component",
                propTypes: [`"default"`, `"small"`],
                defaultValue: `"default"`,
            },
            {
                name: "expanded",
                description: "Specifies if the item is expanded",
                propTypes: ["boolean"],
                defaultValue: "true",
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

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "Accordion",
        component: <ApiTable sections={ACCORDION_DATA} />,
    },
    {
        title: "Accordion.Item",
        component: <ApiTable sections={ACCORDION_ITEM_DATA} />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
