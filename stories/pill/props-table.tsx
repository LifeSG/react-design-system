import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "colorType",
                mandatory: false,
                description: "The color variations of the pill",
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
                description: "The style of the pill",
                propTypes: [`"solid"`, `"outline"`],
            },
            {
                name: "icon",
                mandatory: false,
                description: "Display icon of the pill",
                propTypes: ["JSX.Element"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
