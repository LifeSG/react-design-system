import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "type",
                mandatory: true,
                description: "The style of the component",
                propTypes: [
                    '"warning"',
                    '"error"',
                    '"success"',
                    '"info"',
                    '"description"',
                ],
            },
            {
                name: "actionLink",
                description:
                    "The attributes of an action link that performs an action on click",
                propTypes: ["HTMLAnchorAttributes"],
            },
            {
                name: "actionLinkIcon",
                description: "Specifies a custom icon for the action link",
                propTypes: ["JSX.Element"],
            },
            {
                name: "showIcon",
                description: "Specifies if the icon will be displayed",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "sizeType",
                description: "Specifies the size of the component",
                propTypes: ['"default"', '"small"'],
                defaultValue: '"default"',
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
