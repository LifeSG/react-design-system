import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";
import { TabAttribute, Tabs } from "../storybook-common/tabs";

const TOOLTIP_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                mandatory: true,
                description: "The content of the Tooltip",
                propTypes: ["JSX.Element", "string"],
            },
            {
                name: "className",
                description: "Class selector for the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "A test identifier for the component",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "A unique identifier for the component",
                propTypes: ["string"],
            },
            {
                name: "position",
                description:
                    "The visual position of the Tooltip in relation to its trigger",
                propTypes: ['"top"', '"bottom"', '"left"', '"right"'],
                defaultValue: '"top"',
            },
            {
                name: "visible",
                description: "The visibility state of the Tooltip",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
        ],
    },
];

const WITH_TOOLTIP_HOC_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "content",
                mandatory: true,
                description: "The content of the Tooltip",
                propTypes: ["JSX.Element", "string"],
            },
        ],
    },
];

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "withTooltip",
        component: <ApiTable sections={WITH_TOOLTIP_HOC_DATA} />,
    },
    {
        title: "Tooltip",
        component: <ApiTable sections={TOOLTIP_DATA} />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
