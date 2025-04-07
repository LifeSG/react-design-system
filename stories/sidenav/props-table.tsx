import {
    ApiTable,
    ApiTableAttributeRowProps,
    ApiTableSectionProps,
    TabAttribute,
    Tabs,
    code,
} from "stories/storybook-common";

const BASE_ATTRIBUTES: ApiTableAttributeRowProps[] = [
    {
        name: "className",
        description: "The class selector for the component",
        propTypes: ["string"],
    },
    {
        name: "data-testid",
        description: "The test identifier for the component",
        propTypes: ["string"],
    },
    {
        name: "id",
        description: "The unique identifier for the component",
        propTypes: ["string"],
    },
];

const SIDENAV_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            ...BASE_ATTRIBUTES,
            {
                name: "children",
                mandatory: true,
                description: <>One or more {code("Sidenav.Group")} elements</>,
                propTypes: ["React.ReactNode"],
            },
            {
                name: "fixed",
                description: (
                    <>
                        Specifies if the {code("Sidenav")} position is to be
                        fixed at the left
                    </>
                ),
                propTypes: ["boolean"],
                defaultValue: "true",
            },
        ],
    },
];

const SIDENAV_GROUP_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            ...BASE_ATTRIBUTES,
            {
                name: "children",
                mandatory: true,
                description: <>One or more {code("Sidenav.Item")} elements</>,
                propTypes: ["React.ReactNode"],
            },
            {
                name: "separator",
                description: "Specifies if bottom divider will be rendered",
                propTypes: ["boolean"],
            },
        ],
    },
];

const SIDENAV_ITEM_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            ...BASE_ATTRIBUTES,
            {
                name: "children",
                description: (
                    <>One or more {code("Sidenav.DrawerItem")} elements</>
                ),
                propTypes: ["React.ReactNode"],
            },
            {
                name: "icon",
                mandatory: true,
                description: "Display icon of the item",
                propTypes: ["React.ReactNode"],
            },
            {
                name: "selected",
                description: "Specifies if the item is initially selected",
                propTypes: ["boolean"],
            },
            {
                name: "title",
                mandatory: true,
                description: "Display title of the item",
                propTypes: ["string"],
            },
            {
                name: "onClick",
                description: (
                    <>
                        Called when the item is clicked
                        <br />
                        <strong>Note</strong>: only applies if the item does not
                        have subitems
                    </>
                ),
                propTypes: ["(id: string) => void"],
            },
        ],
    },
];

const SIDENAV_DRAWER_ITEM_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            ...BASE_ATTRIBUTES,
            {
                name: "children",
                description: (
                    <>One or more {code("Sidenav.DrawerSubitem")} elements</>
                ),
                propTypes: ["React.ReactNode"],
            },
            {
                name: "title",
                mandatory: true,
                description: "Display title of the item",
                propTypes: ["string"],
            },
            {
                name: "onClick",
                description: (
                    <>
                        Called when the item is clicked
                        <br />
                        <strong>Note</strong>: only applies if the item does not
                        have subitems
                    </>
                ),
                propTypes: ["(id: string) => void"],
            },
        ],
    },
];

const SIDENAV_DRAWER_SUBITEM_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            ...BASE_ATTRIBUTES,
            {
                name: "title",
                mandatory: true,
                description: "Display title of the item",
                propTypes: ["string"],
            },
            {
                name: "onClick",
                description: "Called when the item is clicked",
                propTypes: ["(id: string) => void"],
            },
        ],
    },
];

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "Sidenav",
        component: <ApiTable sections={SIDENAV_DATA} />,
    },
    {
        title: "Sidenav.Group",
        component: <ApiTable sections={SIDENAV_GROUP_DATA} />,
    },
    {
        title: "Sidenav.Item",
        component: <ApiTable sections={SIDENAV_ITEM_DATA} />,
    },
    {
        title: "Sidenav.DrawerItem",
        component: <ApiTable sections={SIDENAV_DRAWER_ITEM_DATA} />,
    },
    {
        title: "Sidenav.DrawerSubitem",
        component: <ApiTable sections={SIDENAV_DRAWER_SUBITEM_DATA} />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
