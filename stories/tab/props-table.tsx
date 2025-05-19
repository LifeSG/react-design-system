import {
    ApiTable,
    ApiTableSectionProps,
    TabAttribute,
    Tabs,
    code,
} from "stories/storybook-common";

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
                name: "currentActive",
                description:
                    "Specify the current tab index that is to be displayed. By specifying this prop, the tab rendering will be manually controlled by you",
                propTypes: ["number"],
            },
            {
                name: "initialActive",
                description:
                    "Specify the initial tab index that is to be displayed",
                propTypes: ["number"],
                defaultValue: "0",
            },
            {
                name: "className",
                description: "Class selector for the component",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "The unique id of the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
            },
            {
                name: "onTabClick",
                description: "Called when a tab item selector is clicked",
                propTypes: ["(title: string, index: number) => void"],
            },
            {
                name: "fullWidthIndicatorLine",
                description:
                    "Extends the bottom border to the full width of the container",
                propTypes: ["boolean"],
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
                mandatory: true,
                description: "The tab selector label",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "Class selector for the component",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "The unique id of the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
            },
            {
                name: "width",
                description: "The tab selector width",
                propTypes: ["string"],
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
