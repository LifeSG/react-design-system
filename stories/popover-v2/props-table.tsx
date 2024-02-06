import React from "react";
import {
    ApiTable,
    DefaultCol,
    DescriptionCol,
    NameCol,
    Section,
    Table,
} from "../storybook-common/api-table";
import { TabAttribute, Tabs } from "../storybook-common/tabs";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const POPOVER_TRIGGER_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
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
            {
                name: "children",
                description: (
                    <>
                        The item to interact with to trigger the{" "}
                        <code>Popover</code>
                    </>
                ),
                propTypes: ["React.ReactNode"],
                mandatory: true,
            },
            {
                name: "popoverContent",
                description: (
                    <>
                        The content of the <code>Popover</code>
                    </>
                ),
                propTypes: ["string", "JSX.Element"],
                mandatory: true,
            },
            {
                name: "trigger",
                description: (
                    <>
                        The trigger for the appearance of the{" "}
                        <code>Popover</code>
                    </>
                ),
                propTypes: [`"click"`, `"hover"`],
                defaultValue: `"click"`,
            },
            {
                name: "rootNode",
                description: (
                    <>
                        The root element that hosts the popover element. Try
                        specifying this if you encounter z-index conflicts.
                        <br />
                        <br />
                        For example, if the parent of the trigger element has a
                        higher z-index than the popover, the popover may not be
                        visible. Specify the parent here instead so that they
                        share the same stacking context.
                    </>
                ),
                propTypes: ["RefObject<HTMLElement>"],
                defaultValue: (
                    <>
                        document<code>body</code>
                    </>
                ),
            },
            {
                name: "onPopoverAppear",
                description: (
                    <>
                        The callback when the <code>Popover</code> appears
                    </>
                ),
                propTypes: ["() => void"],
            },
            {
                name: "onPopoverDismiss",
                description: (
                    <>
                        The callback when the <code>Popover</code> dismisses
                    </>
                ),
                propTypes: ["() => void"],
            },
        ],
    },
];

const POPOVER_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
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
            {
                name: "children",
                description: (
                    <>
                        The content of the <code>Popover</code>
                    </>
                ),
                propTypes: ["string", "JSX.Element"],
                mandatory: true,
            },
            {
                name: "visible",
                description: (
                    <>
                        The visibility state of the <code>Popover</code>
                    </>
                ),
                propTypes: ["string", "JSX.Element"],
            },
            {
                name: "onMobileClose",
                description: (
                    <>
                        The callback when the user dismisses the{" "}
                        <code>Popover</code>
                        (modal form) in mobile viewports
                    </>
                ),
                propTypes: ["() => void"],
            },
        ],
    },
];

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "PopoverTrigger",
        component: <ApiTable sections={POPOVER_TRIGGER_DATA} />,
    },
    {
        title: "Popover",
        component: <ApiTable sections={POPOVER_DATA} />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
