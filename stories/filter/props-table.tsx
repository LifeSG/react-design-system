import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";
import { TabAttribute, Tabs } from "../storybook-common/tabs";

const FILTER_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                mandatory: true,
                description: (
                    <>
                        The items in the <code>Filter</code>
                    </>
                ),
                propTypes: [
                    "React.ReactNode",
                    "(mode: Mode) => React.ReactNode",
                ],
            },
            {
                name: "clearButtonDisabled",
                description:
                    "Specifies if the feature to expand/collapse all child items is enabled",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "headerTitle",
                description: "The title of the filter header",
                propTypes: ["string"],
                defaultValue: `"Filters"`,
            },
            {
                name: "toggleFilterButtonLabel",
                description:
                    "The display label of the filter toggle button (in mobile)",
                propTypes: ["string"],
                defaultValue: `"Filters"`,
            },
            {
                name: "toggleFilterButtonStyle",
                description:
                    "The style type of the filter toggle button (in mobile)",
                propTypes: [`"default"`, `"secondary"`, `"light"`, `"link"`],
                defaultValue: `"light"`,
            },
            {
                name: "onDismiss",
                description:
                    "Called when dismiss button is pressed (mobile only)",
                propTypes: ["() => void"],
            },
            {
                name: "onDone",
                description: "Called when done button is pressed (mobile only)",
                propTypes: ["() => void"],
            },
            {
                name: "onClear",
                description: "Called when clear button is pressed",
                propTypes: ["() => void"],
            },
            {
                name: "className",
                description: "Class selector for the component",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "The unique identifier for the component",
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

const FILTER_ITEM_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                mandatory: true,
                description: (
                    <>
                        The content of the <code>Filter.Item</code>
                    </>
                ),
                propTypes: [
                    "React.ReactNode",
                    "(mode: Mode) => React.ReactNode",
                ],
            },
            {
                name: "collapsible",
                description:
                    "Specifies if the contents can be collapsed or expanded",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
            {
                name: "initialExpanded",
                description:
                    "Specifies the initial expand state for the uncontrolled component",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "expanded",
                description:
                    "Specifies the expand state for the controlled component",
                propTypes: ["boolean"],
            },
            {
                name: "onExpandChange",
                description:
                    "Called when the expanded state changes (desktop only)",
                propTypes: ["(expanded: boolean) => void)"],
            },
            {
                name: "showDivider",
                description:
                    "Specifies if header divider is visible in default mode",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
            {
                name: "showMobileDivider",
                description: "Specifies if divider is visible in mobile mode",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
            {
                name: "title",
                description: (
                    <>
                        The header text of the <code>Filter.Item</code>
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "Class selector for the component",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "The unique identifier for the component",
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

const FILTER_ITEM_PAGE_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                mandatory: true,
                description: (
                    <>
                        The content of the <code>Filter.Page</code>
                    </>
                ),
                propTypes: ["React.ReactNode"],
            },
            {
                name: "onDismiss",
                description: "Called when dismiss button is pressed",
                propTypes: ["() => void"],
            },
            {
                name: "onDone",
                description: "Called when done button is pressed",
                propTypes: ["() => void"],
            },
        ],
    },
];

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "Filter",
        component: <ApiTable sections={FILTER_DATA} />,
    },
    {
        title: "Filter.Item",
        component: <ApiTable sections={FILTER_ITEM_DATA} />,
    },
    {
        title: "Filter.Page",
        component: <ApiTable sections={FILTER_ITEM_PAGE_DATA} />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
