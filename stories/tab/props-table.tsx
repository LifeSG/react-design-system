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
            {
                name: "fadeColor",
                description:
                    "The color of the fade effect when the tab is too long",
                propTypes: ["string[]", "FadeColorSet"],
            },
            {
                name: "headingLevel",
                description:
                    "Specify a custom heading level to match the component's position in the page",
                propTypes: ["number"],
                defaultValue: "2",
            },
        ],
    },
    {
        name: "FadeColorSet",
        attributes: [
            {
                name: "left",
                description: "The color of the left fade",
                propTypes: ["string[]"],
            },
            {
                name: "right",
                description: "The color of the right fade",
                propTypes: ["string[]"],
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
            {
                name: "titleAddon",
                description:
                    "Custom addon content displayed next to the tab title",
                propTypes: ["TitleAddonProps"],
            },
        ],
    },
    {
        name: "TitleAddonProps",
        attributes: [
            {
                name: "content",
                description: "The addon content",
                propTypes: ["JSX.Element"],
            },
            {
                name: "position",
                description: "The position of the addon",
                propTypes: [`"left"`, `"right"`],
                defaultValue: `"right"`,
            },
        ],
    },
];

const TAB_CONTEXT_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                mandatory: true,
                description: "",
                propTypes: ["React.ReactNode"],
            },
            {
                name: "initialActive",
                description:
                    "Zero-based index of the tab panel displayed on first render. Ignored when currentActive is provided",
                propTypes: ["number"],
                defaultValue: "0",
            },
            {
                name: "currentActive",
                description:
                    "Zero-based index of the currently active tab panel. When provided, the component operates in controlled mode",
                propTypes: ["number"],
            },
            {
                name: "onTabClick",
                description: "Called when the user clicks a tab link",
                propTypes: ["(title: string, index: number) => void"],
            },
        ],
    },
];

const TAB_TAB_LIST_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                mandatory: true,
                description: "",
                propTypes: ["React.ReactNode"],
            },
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
            },
            {
                name: "fullWidthIndicatorLine",
                description:
                    "Extends all tab indicator lines to the full width of the tab bar instead of matching only the tab link width",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "fadeColor",
                description:
                    "Background color(s) used for the fade overlays at the edges of the scrollable tab link bar",
                propTypes: ["string[]", "FadeColorSet"],
            },
        ],
    },
];

const TAB_TAB_LIST_ITEM_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "title",
                mandatory: true,
                description:
                    "Text label rendered in the tab link bar for this item",
                propTypes: ["string"],
            },
            {
                name: "titleAddon",
                description:
                    "Optional addon element rendered alongside the tab title in the link bar",
                propTypes: ["TitleAddonProps"],
            },
            {
                name: "width",
                description:
                    "Explicit width for this tab link in the tab bar. Accepts any valid CSS width value",
                propTypes: ["string"],
            },
        ],
    },
];

const TAB_PANEL_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "index",
                mandatory: true,
                description:
                    "Zero-based index identifying which active tab this panel corresponds to",
                propTypes: ["number"],
            },
            {
                name: "children",
                mandatory: true,
                description: "",
                propTypes: ["React.ReactNode"],
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
    {
        title: "Tab.Context",
        component: <ApiTable sections={TAB_CONTEXT_DATA} />,
    },
    {
        title: "Tab.TabList",
        component: <ApiTable sections={TAB_TAB_LIST_DATA} />,
    },
    {
        title: "Tab.TabListItem",
        component: <ApiTable sections={TAB_TAB_LIST_ITEM_DATA} />,
    },
    {
        title: "Tab.Panel",
        component: <ApiTable sections={TAB_PANEL_DATA} />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
