// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const fileDownloadExtraArgTypes = {
    "FileItemDownloadProps.id": {
        name: "id",
        control: false,
        table: {
            category: "FileItemDownloadProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileItemDownloadProps.name": {
        name: "name",
        description: "The name of the file",
        control: false,
        table: {
            category: "FileItemDownloadProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileItemDownloadProps.mimeType": {
        name: "mimeType",
        description: "The MIME type of the file",
        control: false,
        table: {
            category: "FileItemDownloadProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileItemDownloadProps.size": {
        name: "size",
        description: "The size of the file in bytes",
        control: false,
        table: {
            category: "FileItemDownloadProps",
            type: {
                summary: "number",
            },
        },
    },
    "FileItemDownloadProps.filePath": {
        name: "filePath",
        description: "The remote path of the file",
        control: false,
        table: {
            category: "FileItemDownloadProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileItemDownloadProps.errorMessage": {
        name: "errorMessage",
        description:
            "A custom error message to display when file download fails",
        control: false,
        table: {
            category: "FileItemDownloadProps",
            type: {
                summary: "string | React.ReactNode",
            },
        },
    },
    "FileItemDownloadProps.thumbnailImageDataUrl": {
        name: "thumbnailImageDataUrl",
        description: "The thumbnail of the file",
        control: false,
        table: {
            category: "FileItemDownloadProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileItemDownloadProps.truncateText": {
        name: "truncateText",
        description: "Indicates if text should be truncated",
        control: false,
        table: {
            category: "FileItemDownloadProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "FileItemDownloadProps.ready": {
        name: "ready",
        description: "Indicate if file is ready for download, defaults to true",
        control: false,
        table: {
            category: "FileItemDownloadProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "FileDownloadProps.title": {
        name: "title",
        description: "Component specific",
        control: false,
        table: {
            category: "FileDownloadProps",
            type: {
                summary: "string | JSX.Element",
            },
        },
    },
    "FileDownloadProps.description": {
        name: "description",
        control: false,
        table: {
            category: "FileDownloadProps",
            type: {
                summary: "string | JSX.Element",
            },
        },
    },
    "FileDownloadProps.fileItems": {
        name: "fileItems",
        control: false,
        table: {
            category: "FileDownloadProps",
            type: {
                summary: "FileItemDownloadProps[]",
            },
        },
    },
    "FileDownloadProps.styleType": {
        name: "styleType",
        description:
            'The style type for the component. Values "bordered" | "no-border"',
        control: false,
        table: {
            category: "FileDownloadProps",
            type: {
                summary: "FileDownloadStyle",
            },
        },
    },
    "FileDownloadProps.className": {
        name: "className",
        control: false,
        table: {
            category: "FileDownloadProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileDownloadProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "FileDownloadProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileDownloadProps.id": {
        name: "id",
        control: false,
        table: {
            category: "FileDownloadProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileDownloadProps.onDownload": {
        name: "onDownload",
        description: "Called when file item is clicked",
        control: false,
        table: {
            category: "FileDownloadProps",
            type: {
                summary:
                    "(file: FileItemDownloadProps) => void | Promise<void>",
            },
        },
    },
    FileDownloadStyle: {
        name: "FileDownloadStyle",
        control: false,
        table: {
            category: "FileDownloadStyle",
            type: {
                summary: '"bordered" | "no-border"',
            },
        },
    },
} satisfies Record<string, unknown>;
