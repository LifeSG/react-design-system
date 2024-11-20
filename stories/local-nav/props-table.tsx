import { ApiTable, TabAttribute, Tabs } from "../storybook-common";
import {
    ApiTableAttributeRowProps,
    ApiTableSectionProps,
} from "../storybook-common/api-table/types";

const COMMON_ATTRIBUTES: ApiTableAttributeRowProps[] = [
    {
        name: "selectedItemIndex",
        description: "The current selected nav item",
        propTypes: ["number"],
    },
    {
        name: "className",
        description: "The class selector of the element",
        propTypes: ["string"],
    },
    {
        name: "id",
        description: "The unique identifier of the element",
        propTypes: ["string"],
    },
    {
        name: "data-testid",
        description: "The test identifier of the element",
        propTypes: ["string"],
    },
    {
        name: "items",
        description: "The nav items",
        propTypes: ["LocalNavItemProps[]"],
    },
    {
        name: "onNavItemSelect",
        description: "Called when the nav item is selected",
        propTypes: [
            "(e: React.MouseEvent, item: LocalNavItemProps, index: number) => void",
        ],
    },
    {
        name: "renderItem",
        description: "Function to customise the rendering of the nav item",
        propTypes: [
            "((item: LocalNavItemProps,renderProps: { selected: boolean }) => React.ReactNode",
        ],
    },
];

const NAV_ITEM_DATA: ApiTableSectionProps = {
    name: "LocalNavItemProps",
    attributes: [
        {
            name: "title",
            description: "Display title of the nav item",
            propTypes: ["string", "React.ReactNode"],
            mandatory: true,
        },
        {
            name: "id",
            description: "Unique identifier of the nav item",
            propTypes: ["string"],
        },
    ],
};

const MENU_DATA: ApiTableSectionProps[] = [
    {
        attributes: [...COMMON_ATTRIBUTES],
    },
    NAV_ITEM_DATA,
];

const DROPDOWN_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            ...COMMON_ATTRIBUTES,
            {
                name: "defaultLabel",
                description: "Default label when no nav items are selected",
                propTypes: ["boolean"],
                defaultValue: "0",
                mandatory: true,
            },
            {
                name: "stickyOffset",
                description: "The top offset when the dropdown is sticky",
                propTypes: ["number"],
            },
        ],
    },
    NAV_ITEM_DATA,
];

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "LocalNavMenu",
        component: <ApiTable sections={MENU_DATA} />,
    },
    {
        title: "LocalNavDropdown",
        component: <ApiTable sections={DROPDOWN_DATA} />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
