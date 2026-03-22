import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";
import { TabAttribute, Tabs } from "../storybook-common/tabs";

const WITH_POPOVER_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "content",
                mandatory: true,
                description: "The content of the Popover",
                propTypes: ["string", "JSX.Element"],
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
                name: "onPopoverAppear",
                description: "The callback when the Popover appears",
                propTypes: ["() => void"],
            },
            {
                name: "onPopoverDismiss",
                description: "The callback when the Popover dismisses",
                propTypes: ["() => void"],
            },
            {
                name: "trigger",
                description: "The trigger for the appearance of the Popover",
                propTypes: ['"click"', '"hover"'],
                defaultValue: '"click"',
            },
        ],
    },
];

const POPOVER_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                mandatory: true,
                description: "The content of the Popover",
                propTypes: ["string", "JSX.Element"],
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
                name: "onMobileClose",
                description:
                    "The callback when the user dismisses the Popover " +
                    "(modal form) in mobile viewports",
                propTypes: ["() => void"],
            },
            {
                name: "visible",
                description: "The visibility state of the Popover",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
        ],
    },
];

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "withPopover",
        component: <ApiTable sections={WITH_POPOVER_DATA} />,
    },
    {
        title: "Popover",
        component: <ApiTable sections={POPOVER_DATA} />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
