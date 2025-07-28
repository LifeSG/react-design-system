import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";
import { TabAttribute, Tabs } from "../storybook-common/tabs";

const MENU_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "menuContent",
                description: "The menu content inside this menu",
                propTypes: ["Menu.Content"],
                mandatory: true,
            },
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
                defaultValue: `"menu"`,
            },
            {
                name: "-",
                description: (
                    <>
                        This component also inherits props from&nbsp;
                        <a
                            href="/?path=/docs/overlays-popoverv2--docs"
                            target="_blank"
                            rel="noreferrer"
                        >
                            PopoverV2TriggerProps
                        </a>
                        , except <code>popoverContent</code>
                    </>
                ),
            },
            {
                name: "position",
                description: (
                    <>
                        The visual position of the <code>Popover</code> in
                        relation to its trigger
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
                defaultValue: `"bottom-start"`,
            },
        ],
    },
];

const MENU_CONTENT_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description: (
                    <>
                        The menu sections inside this content. Must be one or
                        more <code>{`<Menu.Section />`}</code>
                    </>
                ),
                propTypes: ["Menu.Section", "Menu.Section[]"],
                mandatory: true,
            },
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
                defaultValue: `"menu-content"`,
            },
            {
                name: "-",
                description: (
                    <>
                        This component also inherits props from&nbsp;
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement"
                            target="_blank"
                            rel="noreferrer"
                        >
                            HTMLAttributes&lt;HTMLDivElement&gt;
                        </a>
                    </>
                ),
            },
            {
                name: "overflow",
                description: "Controls how content overflows",
                propTypes: ["visible", "hidden", "clip", "scroll", "auto"],
            },
            {
                name: "maxHeight",
                description: (
                    <>
                        Sets the maximum height (in pixels) for the content
                        container. If content exceeds this height, overflow
                        behavior applies
                    </>
                ),
                propTypes: ["number"],
            },
        ],
    },
];

const MENU_LINK_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
                defaultValue: `"menu-link"`,
            },
            {
                name: "-",
                description: (
                    <>
                        This component also inherits props from&nbsp;
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement"
                            target="_blank"
                            rel="noreferrer"
                        >
                            HTMLAttributes&lt;HTMLAnchorElement&gt;
                        </a>
                    </>
                ),
            },
        ],
    },
];

const MENU_ITEM_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
                defaultValue: `"menu-item"`,
            },
            {
                name: "label",
                description: "Main text for the menu item",
                propTypes: ["string"],
            },
            {
                name: "subLabel",
                description: "Secondary text for the menu item",
                propTypes: ["string"],
            },
            {
                name: "-",
                description: (
                    <>
                        This component also inherits props from&nbsp;
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLLIElement"
                            target="_blank"
                            rel="noreferrer"
                        >
                            HTMLAttributes&lt;HTMLLIElement&gt;
                        </a>
                    </>
                ),
            },
        ],
    },
];

const MENU_SECTION_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
                defaultValue: `"menu-section"`,
            },
            {
                name: "children",
                description: (
                    <>
                        The menu items or menu links inside this section. Must
                        be one or more <code>{`<Menu.Item />`}</code> or{" "}
                        <code>{`<Menu.Link />`}</code> components
                    </>
                ),
                propTypes: [
                    "Menu.Item",
                    "Menu.Link",
                    "(Menu.Item | Menu.Link)[]",
                ],
                mandatory: true,
            },
            {
                name: "showDivider",
                description: "Toggle to show dividers above the section",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
            {
                name: "label",
                description: "Optional label for this section",
                propTypes: ["string"],
            },
            {
                name: "-",
                description: (
                    <>
                        This component also inherits props from&nbsp;
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement"
                            target="_blank"
                            rel="noreferrer"
                        >
                            HTMLAttributes&lt;HTMLDivElement&gt;
                        </a>
                    </>
                ),
            },
        ],
    },
];

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "Menu",
        component: <ApiTable sections={MENU_DATA} />,
    },
    {
        title: "Menu.Content",
        component: <ApiTable sections={MENU_CONTENT_DATA} />,
    },
    {
        title: "Menu.Section",
        component: <ApiTable sections={MENU_SECTION_DATA} />,
    },
    {
        title: "Menu.Item",
        component: <ApiTable sections={MENU_ITEM_DATA} />,
    },
    {
        title: "Menu.Link",
        component: <ApiTable sections={MENU_LINK_DATA} />,
    },
];
export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
