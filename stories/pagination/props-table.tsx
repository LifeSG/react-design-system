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
                name: "id",
                description: "The unique identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "totalPages",
                description: "The unique identifier of the component",
                propTypes: ["number"],
                mandatory: true,
            },
            {
                name: "activePage",
                description: "The unique identifier of the component",
                propTypes: ["number"],
                mandatory: true,
            },
            {
                name: "boundaryRange",
                description: "The unique identifier of the component",
                propTypes: ["number"],
            },
            {
                name: "siblingRange",
                description: "The unique identifier of the component",
                propTypes: ["number"],
            },

            {
                name: "showFirstAndLastNav",
                description: "show first and last nav",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "showJumper",
                description: "show showJumper nav",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "onPageChange",
                description: "Called when every item in pagination clicked",
                propTypes: ["(page: number) => void"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
