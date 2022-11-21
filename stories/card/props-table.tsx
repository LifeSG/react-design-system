import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description: "The contents of the bubble",
                propTypes: ["string", "JSX.Element"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
