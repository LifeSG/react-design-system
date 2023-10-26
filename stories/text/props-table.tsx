import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";
import { TabAttribute, Tabs } from "../storybook-common/tabs";

const TEXT_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This component also inherits props from&nbsp;
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"
                            target="_blank"
                            rel="noreferrer"
                        >
                            HTMLElement
                        </a>
                    </>
                ),
            },
            {
                name: "weight",
                description: "The weight of the text component",
                propTypes: [`"regular"`, `"semibold"`, `"bold"`, `"light"`],
                defaultValue: (
                    <>
                        Display and Headers: <code>{`"bold"`}</code>
                        <br />
                        General: <br />
                        <code>{`"regular"`}</code>
                    </>
                ),
            },
            {
                name: "inline",
                description:
                    "Sets the text to an inline display to allow a combination of components in a single line",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "paragraph",
                description:
                    "Adds an extra bottom margin to non header text to allow a better separation of blocks of text",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "maxLines",
                description:
                    "Specifies the number of lines visible, the additional lines will be truncated",
                propTypes: ["number"],
            },
        ],
    },
];

const HYPERLINK_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This component also inherits props from&nbsp;
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement"
                            target="_blank"
                            rel="noreferrer"
                        >
                            HTMLAnchorElement
                        </a>
                    </>
                ),
            },
            {
                name: "weight",
                description: "The weight of the hyperlink component",
                propTypes: [`"regular"`, `"semibold"`, `"bold"`, `"light"`],
                defaultValue: `"regular"`,
            },
            {
                name: "inline",
                description:
                    "Sets the hyperlink text to an inline display to allow a combination of components in a single line",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "external",
                description:
                    "It is an indication if the link is external to the domain. Adds an extra indicator at the end of the link",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
        ],
    },
];

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "Text",
        component: <ApiTable sections={TEXT_DATA} />,
    },
    {
        title: "Hyperlink",
        component: <ApiTable sections={HYPERLINK_DATA} />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
