import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "displaySize",
                description: "The display size of the component",
                propTypes: [`"default"`, `"small"`],
                defaultValue: `"default"`,
            },
            {
                name: "checked",
                description: "The selected state of the component",
                propTypes: ["boolean"],
            },
            {
                name: "indeterminate",
                description: "The indeterminate state of the component",
                propTypes: ["boolean"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
