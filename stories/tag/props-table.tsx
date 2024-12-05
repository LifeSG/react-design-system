import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
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
                name: "colorType",
                description: (
                    <>
                        The color style of the <code>Tag</code>
                    </>
                ),
                propTypes: [
                    `"black"`,
                    `"grey"`,
                    `"green"`,
                    `"yellow"`,
                    `"red"`,
                    `"blue"`,
                ],
                defaultValue: `"black"`,
            },
            {
                name: "type",
                mandatory: true,
                description: (
                    <>
                        The display style of the <code>Tag</code>
                    </>
                ),
                propTypes: [`"solid"`, `"outline"`],
            },
            {
                name: "icon",
                description: "A component to be displayed as the icon",
                propTypes: ["JSX.Element"],
            },
            {
                name: "iconPosition",
                description:
                    "The position of the icon relative to the label text",
                propTypes: [`"left"`, `"right"`],
                defaultValue: `"left"`,
            },
            {
                name: "interactive",
                description: <>Specifies if the tag is interactive</>,
                propTypes: ["boolean"],
                defaultValue: "false",
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
