import { ApiTable, TabAttribute, Tabs } from "../storybook-common";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const MENU_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "selectedItemIndex",
                description: "which item should be selected from the dropdown",
                propTypes: ["number"],
            },
            {
                name: "className",
                description: "The class selector of the element",
                propTypes: ["string"],
                mandatory: false,
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
                name: "onNavItemClickCb",
                description: (
                    <>
                        Called when the item in the <code>Menu</code> is
                        selected or deselected
                    </>
                ),
                propTypes: [
                    "...args: any[]) => (e?: React.MouseEvent) => any;",
                ],
            },
            {
                name: "renderItem",
                description: (
                    <>
                        To customise the item in the <code>Menu</code>
                    </>
                ),
                propTypes: [
                    "((item: LocalNavItemProps,renderProps: { selected: boolean }) => React.ReactNode",
                ],
            },
            {
                name: "titleList",
                description: (
                    <>
                        The title inside the <code>Menu</code>, displayed when
                        the dropdown is open
                    </>
                ),
                propTypes: ["string"],
            },
        ],
    },
    {
        name: "LocalNavItemProps",
        attributes: [
            {
                name: "title",
                description: "title of the item",
                propTypes: ["string", "React.ReactNode"],
                mandatory: true,
            },
            {
                name: "id",
                description: "id of the element",
                propTypes: ["string"],
                mandatory: false,
            },
        ],
    },
];

const DROPDOWN_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "selectedItemIndex",
                description:
                    "which item should be selected from the dropdown for the initial render",
                propTypes: ["number"],
            },
            {
                name: "defaultLabelText",
                description:
                    "Default label text that should be displayed for the initial render",
                propTypes: ["boolean"],
            },

            {
                name: "stickyOffset",
                description: "from where we want the dropdown to start",
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
                name: "onNavItemClickCb",
                description: (
                    <>
                        Called when the item in the <code>dropdown</code> is
                        selected or deselected
                    </>
                ),
                propTypes: [
                    "...args: any[]) => (e?: React.MouseEvent) => any;",
                ],
            },
            {
                name: "renderItem",
                description: (
                    <>
                        To customise the item in the <code>dropdown</code>
                    </>
                ),
                propTypes: [
                    "((item: LocalNavItemProps,renderProps: { selected: boolean }) => React.ReactNode",
                ],
            },
            {
                name: "titleList",
                description: (
                    <>
                        The title inside the <code>dropdown</code>, displayed
                        when the dropdown is open
                    </>
                ),
                propTypes: ["string"],
            },
        ],
    },
    {
        name: "LocalNavItemProps",
        attributes: [
            {
                name: "title",
                description: "title of the item",
                propTypes: ["string", "React.ReactNode"],
                mandatory: true,
            },
            {
                name: "id",
                description: "id of the element",
                propTypes: ["string"],
                mandatory: false,
            },
        ],
    },
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
