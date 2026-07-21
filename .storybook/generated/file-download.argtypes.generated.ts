// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const fileDownloadExtraArgTypes = {
    "FileDownloadProps.className": {
        control: false,
        name: "className",
        table: {
            category: "FileDownloadProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileDownloadProps.data-testid": {
        control: false,
        name: "data-testid",
        table: {
            category: "FileDownloadProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileDownloadProps.description": {
        control: false,
        description:
            "Optional text rendered beneath the title.\nAccepts a plain string or a JSX element for rich content.",
        name: "description",
        table: {
            category: "FileDownloadProps",
            type: {
                summaryParts: ["JSX.Element", "string"],
            },
        },
    },
    "FileDownloadProps.fileItems": {
        control: false,
        description:
            "The list of file items to display. When empty, no file cards are rendered.",
        name: "fileItems",
        table: {
            category: "FileDownloadProps",
            type: {
                summary: "FileItemDownloadProps[]",
            },
        },
    },
    "FileDownloadProps.id": {
        control: false,
        name: "id",
        table: {
            category: "FileDownloadProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileDownloadProps.onDownload": {
        control: false,
        description:
            "Called when the user triggers a download for an individual file item.\nMay return a `Promise` to handle async download logic; the component awaits resolution.\nIf the callback throws or the promise rejects, the item is marked as failed\nand the error UI is shown for that file card.",
        name: "onDownload",
        table: {
            category: "FileDownloadProps",
            type: {
                summary:
                    "(file: FileItemDownloadProps) => void | Promise<void>",
            },
        },
    },
    "FileDownloadProps.styleType": {
        control: false,
        description:
            "Controls whether the component is wrapped in a dashed border.",
        name: "styleType",
        table: {
            category: "FileDownloadProps",
            defaultValue: {
                summary: '"bordered"',
            },
            type: {
                summaryParts: ["'bordered'", "'no-border'"],
            },
        },
    },
    "FileDownloadProps.title": {
        control: false,
        description:
            "Optional heading rendered above the file list.\nAccepts a plain string or a JSX element for rich content.",
        name: "title",
        table: {
            category: "FileDownloadProps",
            type: {
                summaryParts: ["JSX.Element", "string"],
            },
        },
    },
    "FileItemDownloadProps.errorMessage": {
        control: false,
        description:
            "Error message shown on the file item to indicate a download failure.\nAccepts a plain string or a React node for richer error display.",
        name: "errorMessage",
        table: {
            category: "FileItemDownloadProps",
            type: {
                summary: "string | React.ReactNode",
            },
        },
    },
    "FileItemDownloadProps.filePath": {
        control: false,
        description:
            "The remote path or URL used to fetch the file for download.",
        name: "filePath",
        table: {
            category: "FileItemDownloadProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileItemDownloadProps.id": {
        control: false,
        name: "id",
        table: {
            category: "FileItemDownloadProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileItemDownloadProps.mimeType": {
        control: false,
        description: 'The MIME type of the file (e.g. `"application/pdf"`).',
        name: "mimeType",
        table: {
            category: "FileItemDownloadProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileItemDownloadProps.name": {
        control: false,
        description: "The display name of the file.",
        name: "name",
        table: {
            category: "FileItemDownloadProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileItemDownloadProps.ready": {
        control: false,
        description:
            "Indicates the file is available and ready to be downloaded.",
        name: "ready",
        table: {
            category: "FileItemDownloadProps",
            defaultValue: {
                summary: "true",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "FileItemDownloadProps.size": {
        control: false,
        description:
            "The size of the file in bytes. Displayed as formatted text when provided.",
        name: "size",
        table: {
            category: "FileItemDownloadProps",
            type: {
                summary: "number",
            },
        },
    },
    "FileItemDownloadProps.thumbnailImageDataUrl": {
        control: false,
        description:
            "URL or data URL for a thumbnail image shown alongside the file entry.",
        name: "thumbnailImageDataUrl",
        table: {
            category: "FileItemDownloadProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileItemDownloadProps.truncateText": {
        control: false,
        description: "Truncates long file names with an ellipsis when `true`.",
        name: "truncateText",
        table: {
            category: "FileItemDownloadProps",
            defaultValue: {
                summary: "true",
            },
            type: {
                summary: "boolean",
            },
        },
    },
} satisfies Record<string, unknown>;
