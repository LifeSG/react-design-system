import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                mandatory: true,
                description: "The content of the list",
                propTypes: ["JSX.Element", "JSX.Element[]"],
            },
            {
                name: "size",
                description: "Text size of the list",
                propTypes: ["TextSizeType"],
                defaultValue: '"Body"',
            },
            {
                name: "bottomMargin",
                description:
                    "Specifies the margin below the list (in rem with base pixel of 16)",
                propTypes: ["number"],
            },
            {
                name: "bulletType",
                description: "The bullet type for the unordered list",
                propTypes: ['"disc"', '"circle"', '"square"', '"none"'],
                defaultValue: '"disc"',
            },
            {
                name: "counterSeparator",
                description: "The separator between the counter and the text",
                propTypes: ["string"],
            },
            {
                name: "counterType",
                description: "The numbering system for the ordered list",
                propTypes: ['"lower-alpha"', '"decimal"', '"lower-roman"'],
                defaultValue: '"decimal"',
            },
            {
                name: "reversed",
                description:
                    "Specifies if list counting should be reversed (e.g. 5, 4, 3...)",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "start",
                description: "The start value of the ordered list counter",
                propTypes: ["number"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
