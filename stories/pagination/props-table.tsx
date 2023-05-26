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
                name: "pageSizeOptions",
                description:
                    "Specifies a list of options that a user can choose from",
                propTypes: ["PageSizeItemProps<T>[]"],
                defaultValue:
                    '[ { value: 10, label: "10 / page" }, { value: 20, label: "20 / page" }, { value: 30, label: "30 / page" }]',
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
            {
                name: "onPageSizeChange",
                description: "Called when a page size changed",
                propTypes: ["(page: number, pageSize: number) => void"],
            },
        ],
    },
    {
        name: "PageSizeItemProps",
        attributes: [
            {
                name: "value",
                description: "value to be used for this item",
                propTypes: ["number"],
            },
            {
                name: "label",
                description: "label to be used for this item",
                propTypes: ["string"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
