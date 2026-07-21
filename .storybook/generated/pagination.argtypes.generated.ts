// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const paginationExtraArgTypes = {
    "PageSizeItemProps.label": {
        control: false,
        name: "label",
        type: {
            required: true,
        },
        table: {
            category: "PageSizeItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "PageSizeItemProps.value": {
        control: false,
        name: "value",
        type: {
            required: true,
        },
        table: {
            category: "PageSizeItemProps",
            type: {
                summary: "number",
            },
        },
    },
    "PaginationProps.activePage": {
        control: false,
        description:
            "The currently active 1-based page number. This is a controlled prop;\nupdate it in response to `onPageChange`.",
        name: "activePage",
        type: {
            required: true,
        },
        table: {
            category: "PaginationProps",
            type: {
                summary: "number",
            },
        },
    },
    "PaginationProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "PaginationProps",
            type: {
                summary: "string",
            },
        },
    },
    "PaginationProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "PaginationProps",
            type: {
                summary: "string",
            },
        },
    },
    "PaginationProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "PaginationProps",
            type: {
                summary: "string",
            },
        },
    },
    "PaginationProps.onPageChange": {
        control: false,
        description: "Called when the user navigates to a different page.",
        name: "onPageChange",
        type: {
            required: false,
        },
        table: {
            category: "PaginationProps",
            type: {
                summary: "(page: number) => void",
            },
        },
    },
    "PaginationProps.onPageSizeChange": {
        control: false,
        description:
            "Called when the user selects a different page size from\nthe dropdown  and `showPageSizeChanger` is `true`.",
        name: "onPageSizeChange",
        type: {
            required: false,
        },
        table: {
            category: "PaginationProps",
            type: {
                summary: "(page: number, pageSize: number) => void",
            },
        },
    },
    "PaginationProps.pageSize": {
        control: false,
        description: "Number of items displayed per page.",
        name: "pageSize",
        type: {
            required: false,
        },
        table: {
            category: "PaginationProps",
            defaultValue: {
                summary: "10",
            },
            type: {
                summary: "number",
            },
        },
    },
    "PaginationProps.pageSizeOptions": {
        control: false,
        description:
            "Options listed in the page-size changer dropdown.\n\nOnly relevant when `showPageSizeChanger` is `true`.",
        name: "pageSizeOptions",
        type: {
            required: false,
        },
        table: {
            category: "PaginationProps",
            defaultValue: {
                summary: "10, 20, 30 per page",
            },
            type: {
                summary: "PageSizeItemProps[]",
            },
        },
    },
    "PaginationProps.showFirstAndLastNav": {
        control: false,
        description:
            "When `true`, renders first-page and last-page navigation buttons\nalongside the previous/next buttons.",
        name: "showFirstAndLastNav",
        type: {
            required: false,
        },
        table: {
            category: "PaginationProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "PaginationProps.showPageSizeChanger": {
        control: false,
        description:
            "When `true`, renders a dropdown on desktop viewports to change the `pageSize`.",
        name: "showPageSizeChanger",
        type: {
            required: false,
        },
        table: {
            category: "PaginationProps",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "PaginationProps.totalItems": {
        control: false,
        description:
            "Total number of items across all pages. Used to compute the total page count.",
        name: "totalItems",
        type: {
            required: true,
        },
        table: {
            category: "PaginationProps",
            type: {
                summary: "number",
            },
        },
    },
} satisfies Record<string, unknown>;
