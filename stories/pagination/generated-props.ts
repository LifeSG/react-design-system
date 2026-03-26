// AUTO-GENERATED — do not edit manually.
// Source: src/pagination/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const PaginationPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "id",
                description: "The unique id attribute of the component.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier for the component.",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "CSS class selector for the component.",
                propTypes: ["string"],
            },
            {
                name: "pageSize",
                description: "The number of items displayed per page.",
                propTypes: ["number"],
                defaultValue: "10",
            },
            {
                name: "totalItems",
                description: "The total number of items across all pages.",
                propTypes: ["number"],
                mandatory: true,
            },
            {
                name: "activePage",
                description: "The currently active page number (1-based).",
                propTypes: ["number"],
                mandatory: true,
            },
            {
                name: "pageSizeOptions",
                description:
                    "The list of page-size options shown in the page-size dropdown.",
                propTypes: ["PageSizeItemProps[]"],
            },
            {
                name: "showFirstAndLastNav",
                description:
                    "When `true`, shows first and last page navigation buttons.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "showPageSizeChanger",
                description:
                    "When `true`, shows a page size changer dropdown on desktop.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "onPageChange",
                description: "Called when the user selects a page number.",
                propTypes: ["((page: number) => void) | undefined"],
            },
            {
                name: "onPageSizeChange",
                description: "Called when the user selects a page size.",
                propTypes: [
                    "((page: number, pageSize: number) => void) | undefined",
                ],
            },
        ],
    },
];

export const PageSizeItemPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "value",
                description: "",
                propTypes: ["number"],
                mandatory: true,
            },
            {
                name: "label",
                description: "",
                propTypes: ["string"],
                mandatory: true,
            },
        ],
    },
];
