import React from "react";
import { ApiTable, code } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";
import { TabAttribute, Tabs } from "../storybook-common/tabs";

const TAB_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                mandatory: true,
                description:
                    "The tab contents. The tab order is determined by the specification of the child items",
                propTypes: ["JSX.Element", "JSX.Element[]"],
            },
            {
                name: "tabItemRenderMode",
                description: (
                    <>
                        Specifies the render mode of the tab contents. By
                        default, the {code("Tab")} handles the rendering
                        automatically based on each tab item&rsquo;s selector
                        click. Specify {code("controlled")}
                        if you wish for full control of the rendering
                    </>
                ),
                propTypes: [`"default"`, `"controlled`],
                defaultValue: `"default"`,
            },
            {
                name: "currentActive",
                description:
                    "Specify the current tab index that is to be displayed",
                propTypes: ["number"],
            },
            {
                name: "className",
                description: "Class selector for the component",
                propTypes: ["string"],
            },
            {
                name: "onTabClick",
                description: "Called when a tab item selector is clicked",
                propTypes: ["(title: string, order: number) => void"],
            },
        ],
    },
];

const TAB_ITEM_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                mandatory: true,
                description: <>The content of the {code("Tab.Item")}</>,
                propTypes: ["JSX.Element", "JSX.Element[]"],
            },
            {
                name: "title",
                description: "The tab selector label",
                propTypes: ["string"],
            },
            {
                name: "show",
                description:
                    "If specified, the particular tab's content will be displayed",
                propTypes: ["boolean"],
            },
        ],
    },
];

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "Tab",
        component: <ApiTable sections={TAB_DATA} />,
    },
    {
        title: "Tab.Item",
        component: <ApiTable sections={TAB_ITEM_DATA} />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
