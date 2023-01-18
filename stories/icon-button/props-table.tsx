import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "focusHighlight",
                description: "If button is highlighted when focused",
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
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
