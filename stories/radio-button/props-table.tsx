import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "checked",
                description: "The selection state of the component",
                propTypes: ["boolean"],
            },
            {
                name: "disabled",
                description:
                    "The state in which an action is allowed to be executed",
                propTypes: ["boolean"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
