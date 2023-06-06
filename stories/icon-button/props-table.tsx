import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "focusHighlight",
                description: "Specifies if button is highlighted when focused",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
            {
                name: "focusOutline",
                description:
                    "Controls the outline style when button is focused",
                propTypes: [`"none"`, `"browser"`],
                defaultValue: `"none"`,
            },
            {
                name: "buttonStyle",
                description: "The navigation action button",
                propTypes: ["ButtonStyle"],
                defaultValue: `"primary"`,
            },
            {
                name: "sizeType",
                description: "The button style",
                propTypes: ["SizeType"],
                defaultValue: `"default"`,
            },
        ],
    },
    {
        name: "ButtonStyle",
        attributes: [
            {
                name: "",
                description: "The button style",
                propTypes: [
                    `"primary"`,
                    `"secondary"`,
                    `"light"`,
                    `"disabled"`,
                ],
            },
        ],
    },
    {
        name: "SizeType",
        attributes: [
            {
                name: "",
                description: "The button size type",
                propTypes: [`"large"`, `"default"`, `"small"`],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
