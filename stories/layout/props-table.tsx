import React from "react";
import {
    ApiTable,
    DefaultCol,
    DescriptionCol,
    NameCol,
    Table,
} from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";
import { TabAttribute, Tabs } from "../storybook-common/tabs";

const CONTENT_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This component also inherits props from&nbsp;
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement"
                            rel="noreferrer"
                            target="_blank"
                        >
                            HTMLDivElement
                        </a>
                    </>
                ),
            },
            {
                name: "type",
                description: "The display type to be rendered",
                propTypes: [`"flex"`, `"flex-column"`, `"grid"`],
                defaultValue: `"flex"`,
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
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
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement"
                            rel="noreferrer"
                            target="_blank"
                        >
                            HTMLDivElement
                        </a>
                    </>
                ),
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
        ],
    },
];

const CONTAINER_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This component also inherits props from&nbsp;
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement"
                            rel="noreferrer"
                            target="_blank"
                        >
                            HTMLDivElement
                        </a>
                    </>
                ),
            },
            {
                name: "type",
                description: "The display type to be rendered",
                propTypes: [`"flex"`, `"flex-column"`, `"grid"`],
                defaultValue: `"flex"`,
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
        ],
    },
];

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "Layout.Content",
        component: <ApiTable sections={CONTENT_DATA} />,
    },
    {
        title: "Layout.Section",
        component: <ApiTable sections={SECTION_DATA} />,
    },
    {
        title: "Layout.Container",
        component: <ApiTable sections={CONTAINER_DATA} />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
