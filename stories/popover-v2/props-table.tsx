import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";
import { TabAttribute, Tabs } from "../storybook-common/tabs";

export const COMMON_POPOVER_ATTRIBUTES: ApiTableSectionProps["attributes"] = [
    {
        name: "popoverContent",
        description: (
            <>
                The content of the <code>Popover</code>
            </>
        ),
        propTypes: ["string", "JSX.Element", "() => React.ReactNode"],
        mandatory: true,
    },
    {
        name: "trigger",
        description: (
            <>
                The trigger for the appearance of the <code>Popover</code>
            </>
        ),
        propTypes: [`"click"`, `"hover"`],
        defaultValue: `"click"`,
    },
    {
        name: "position",
        description: (
            <>
                The visual position of the <code>Popover</code> in relation to
                its trigger
            </>
        ),
        propTypes: [
            `"top"`,
            `"top-start"`,
            `"top-end"`,
            `"bottom"`,
            `"bottom-start"`,
            `"bottom-end"`,
            `"left"`,
            `"left-start"`,
            `"left-end"`,
            `"right"`,
            `"right-start"`,
            `"right-end"`,
        ],
        defaultValue: `"top"`,
    },
    {
        name: "zIndex",
        description: (
            <>
                The custom z-index of the <code>Popover</code>. Try specifying
                this if you encounter z-index conflicts.
            </>
        ),
        propTypes: ["number"],
    },
    {
        name: "rootNode",
        description: (
            <>
                The root element that hosts the popover element. Try specifying
                this if <code>zIndex</code> does not work.
                <br />
                <br />
                For example, if the parent of the trigger element has a higher
                z-index than the popover, the popover may not be visible.
                Specify the parent here instead so that they share the same
                stacking context.
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
];

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
                name: "offset",
                description: "How much offset to apply for the popover (in px)",
                propTypes: ["number"],
                defaultValue: "16",
            },
            {
                name: "delay",
                description: (
                    <>
                        How much delay for popover to appear/dismiss <br />
                        <b>Note</b>: When trigger is of type <code>click</code>,
                        delay is not applied.
                    </>
                ),
                propTypes: ["{ open: number, close: number }"],
                defaultValue: "{ open: 0, close: 500 }",
            },
            ...COMMON_POPOVER_ATTRIBUTES,
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
