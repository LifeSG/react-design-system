import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";
import { TabAttribute, Tabs } from "../storybook-common/tabs";

const MAIN_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "items",
                description:
                    "The uneditable items to be displayed. Items are displayed in a label and value format.",
                propTypes: [`UneditableSectionItemProps[]`],
            },
            {
                name: "title",
                description: (
                    <>
                        The title of the section (Will be rendered as{" "}
                        <code>Text.H3</code>)
                    </>
                ),
                propTypes: [`string`],
            },
            {
                name: "description",
                description: (
                    <>
                        The description of the section (Will be rendered as{" "}
                        <code>Text.Body</code>)
                    </>
                ),
                propTypes: [`string`],
            },
            {
                name: "topSection",
                description:
                    "A custom section that can be rendered on top of the main uneditable items section",
                propTypes: [`JSX.Element`],
            },
            {
                name: "bottomSection",
                description:
                    "A custom section that can be rendered on the bottom of the main uneditable items section",
                propTypes: [`JSX.Element`],
            },
            {
                name: "children",
                description:
                    "The body of the entire section. Gives flexibility for custom composition of the component",
                propTypes: [`JSX.Element[]`, `JSX.Element`],
            },
            {
                name: "id",
                description: "The unique id of the component",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "The class selector of the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
            },
        ],
    },
    {
        name: "UneditableSectionItemProps",
        attributes: [
            {
                name: "label",
                description: "The label of the uneditable item",
                propTypes: [`string`],
                mandatory: true,
            },
            {
                name: "value",
                description: "The value of the uneditable item",
                propTypes: [`string`],
                mandatory: true,
            },
            {
                name: "displayWidth",
                description:
                    "The width that the item can span across the entire section",
                propTypes: [`"half"`, `"full"`],
                defaultValue: `"full"`,
            },
        ],
    },
];

const SECTION_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This component also inherits props from&nbsp;
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLUListElement"
                            rel="noreferrer"
                            target="_blank"
                        >
                            HTMLUListElement
                        </a>
                    </>
                ),
            },
        ],
    },
];

const ITEM_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "label",
                description: "The label of the uneditable item",
                propTypes: [`string`],
                mandatory: true,
            },
            {
                name: "value",
                description: "The value of the uneditable item",
                propTypes: [`string`],
                mandatory: true,
            },
            {
                name: "displayWidth",
                description:
                    "The width that the item can span across the entire section",
                propTypes: [`"half"`, `"full"`],
                defaultValue: `"full"`,
            },
        ],
    },
];

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "UneditableSection",
        component: <ApiTable sections={MAIN_DATA} />,
    },
    {
        title: "UneditableSection.ItemSection",
        component: <ApiTable sections={SECTION_DATA} />,
    },
    {
        title: "UneditableSection.Item",
        component: <ApiTable sections={ITEM_DATA} />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
