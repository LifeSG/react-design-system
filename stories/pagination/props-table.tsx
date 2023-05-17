import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "className",
                description:
                    "The className of the component for custom styling.",
                propTypes: ["string"],
            },
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
                name: "pageSize",
                description: "The number of items per page",
                propTypes: ["number"],
                defaultValue: "10",
            },
            {
                name: "totalItems",
                description: "The total number of items",
                propTypes: ["number"],
                mandatory: true,
            },
            {
                name: "activePage",
                description: "The active page number",
                propTypes: ["number"],
                mandatory: true,
            },
            {
                name: "showFirstAndLastNav",
                description:
                    "Specifies if the buttons to jump to the first and last pages are visible",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "showPageSizeChanger",
                description:
                    "Specifies if the page size changer dropdown is visible",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "onPageChange",
                description: "Called when a page is selected",
                propTypes: ["(page: number) => void"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
