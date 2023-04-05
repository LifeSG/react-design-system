import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import {
    ApiTableAttributeRowProps,
    ApiTableSectionProps,
} from "../storybook-common/api-table/types";

const BASE_ATTRIBUTES: ApiTableAttributeRowProps[] = [
    {
        name: "id",
        description: "The unique id of the component",
        propTypes: ["string"],
    },
    {
        name: "className",
        description: "The class selector of the component",
        propTypes: ["string"],
    },
    {
        name: "data-testid",
        description: "The test identifier for the component",
        propTypes: ["string"],
    },
];

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [...BASE_ATTRIBUTES],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;

const CUSTOMISED_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            ...BASE_ATTRIBUTES,
            {
                name: "color",
                description:
                    "The color that is to be applied on the animated elements",
                propTypes: ["string"],
            },
        ],
    },
];

export const CustomisedPropsTable = () => (
    <ApiTable sections={CUSTOMISED_DATA} />
);
