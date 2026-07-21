// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const fileUploadExtraArgTypes = {
    "FileItemProps.description": {
        control: false,
        description: "The alt text or description of the file",
        name: "description",
        type: {
            required: false,
        },
        table: {
            category: "FileItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileItemProps.errorMessage": {
        control: false,
        description:
            "Error message shown on the file item to indicate an upload failure.\nAccepts a plain string or a React node for richer error display.",
        name: "errorMessage",
        type: {
            required: false,
        },
        table: {
            category: "FileItemProps",
            type: {
                summary: "string | React.ReactNode",
            },
        },
    },
    "FileItemProps.id": {
        control: false,
        description:
            "Unique identifier used to target delete, edit, and sort operations.",
        name: "id",
        type: {
            required: true,
        },
        table: {
            category: "FileItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileItemProps.name": {
        control: false,
        description: "The display name of the file",
        name: "name",
        type: {
            required: true,
        },
        table: {
            category: "FileItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileItemProps.progress": {
        control: false,
        description:
            "Upload progress expressed as a fraction between 0 and 1.\nWhen provided, a progress indicator is rendered on the file item.",
        name: "progress",
        type: {
            required: false,
        },
        table: {
            category: "FileItemProps",
            type: {
                summary: "number",
            },
        },
    },
    "FileItemProps.size": {
        control: false,
        description:
            "The size of the file in bytes. Displayed as formatted text when provided.",
        name: "size",
        type: {
            required: true,
        },
        table: {
            category: "FileItemProps",
            type: {
                summary: "number",
            },
        },
    },
    "FileItemProps.thumbnailImageDataUrl": {
        control: false,
        description:
            "URL or data URL for a thumbnail image shown alongside the file entry.\nWhen not provided, a PDF icon is displayed for PDF files only;\nother file types show no default icon.",
        name: "thumbnailImageDataUrl",
        type: {
            required: false,
        },
        table: {
            category: "FileItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileItemProps.truncateText": {
        control: false,
        description: "Truncates long file names with an ellipsis when `true`.",
        name: "truncateText",
        type: {
            required: false,
        },
        table: {
            category: "FileItemProps",
            defaultValue: {
                summary: "true",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "FileItemProps.type": {
        control: false,
        description: 'The MIME type of the file (e.g. `"application/pdf"`).',
        name: "type",
        type: {
            required: true,
        },
        table: {
            category: "FileItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileUploadProps.accept": {
        control: false,
        description: "Defines the file types that is accepted",
        name: "accept",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileUploadProps.capture": {
        control: false,
        description:
            "Specifies which camera to use for capture of image or video data",
        name: "capture",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            type: {
                summaryParts: ["'environment'", "'user'", "false", "true"],
            },
        },
    },
    "FileUploadProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileUploadProps.customLabels": {
        control: false,
        description:
            "Overrides default label text for elements within the component.",
        name: "customLabels",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            type: {
                summary: "{ uploadButtonLabel?: string }",
            },
        },
    },
    "FileUploadProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileUploadProps.description": {
        control: false,
        description:
            "Supporting text rendered below `title`. Accepts a plain string or a JSX\nelement for rich formatting.",
        name: "description",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            type: {
                summaryParts: ["JSX.Element", "string"],
            },
        },
    },
    "FileUploadProps.descriptionLabel": {
        control: false,
        description:
            "Overrides the default label and subtext for the description input field\non editable file items.",
        name: "descriptionLabel",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            type: {
                summary: "FormLabelProps",
            },
        },
    },
    "FileUploadProps.descriptionRequired": {
        control: false,
        description:
            "When `false`, the save button on an editable file item is enabled even\nwhen the description field is empty.",
        name: "descriptionRequired",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            defaultValue: {
                summary: "true",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "FileUploadProps.disabled": {
        control: false,
        name: "disabled",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "FileUploadProps.editableFileItems": {
        control: false,
        description:
            "When `true`, image file items render an editable description field.\nEditing triggers `onEdit` with the updated `FileItemProps`.",
        name: "editableFileItems",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "FileUploadProps.errorMessage": {
        control: false,
        description:
            "General error message rendered below the file list.\nAccepts a plain string or a JSX element for rich formatting.",
        name: "errorMessage",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            type: {
                summaryParts: ["JSX.Element", "string"],
            },
        },
    },
    "FileUploadProps.fileDescriptionMaxLength": {
        control: false,
        description:
            "Character limit for the description input on editable image file items.\nOnly applies when `editableFileItems` is `true`.",
        name: "fileDescriptionMaxLength",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            type: {
                summary: "number",
            },
        },
    },
    "FileUploadProps.fileItems": {
        control: false,
        description:
            "Controlled list of file items displayed in the file list.\nUpdate this array in response to `onChange`, `onDelete`, `onEdit`, and\n`onSort` to reflect the current upload state.",
        name: "fileItems",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            type: {
                summary: "FileItemProps[]",
            },
        },
    },
    "FileUploadProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileUploadProps.maxFiles": {
        control: false,
        description:
            "Maximum number of files the component will accept.\nOnce `fileItems.length` reaches this value, uploading is disabled until an item is removed.",
        name: "maxFiles",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            type: {
                summary: "number",
            },
        },
    },
    "FileUploadProps.multiple": {
        control: false,
        description:
            "Specifies if user is allowed to select more than one file.",
        name: "multiple",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "FileUploadProps.name": {
        control: false,
        name: "name",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            type: {
                summary: "string",
            },
        },
    },
    "FileUploadProps.onChange": {
        control: false,
        description:
            "Called with the newly uploaded files.\nReceives only the files that fit within the remaining `maxFiles` slots.",
        name: "onChange",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            type: {
                summary: "(files: File[]) => void",
            },
        },
    },
    "FileUploadProps.onDelete": {
        control: false,
        description:
            "Called when the user clicks the delete button on a file item.",
        name: "onDelete",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            type: {
                summary: "(fileItem: FileItemProps) => void",
            },
        },
    },
    "FileUploadProps.onEdit": {
        control: false,
        description:
            "Called when the user saves an edited description on a file item.",
        name: "onEdit",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            type: {
                summary: "(fileItem: FileItemProps) => void",
            },
        },
    },
    "FileUploadProps.onSort": {
        control: false,
        description:
            "Called after the user reorders file items via drag-and-drop.\nOnly fired when `sortable` is `true`.",
        name: "onSort",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            type: {
                summary: "(fileItems: FileItemProps[]) => void",
            },
        },
    },
    "FileUploadProps.readOnly": {
        control: false,
        description:
            "When `true`, the upload button and drop zone are hidden and file items\nare rendered without delete or edit controls.",
        name: "readOnly",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "FileUploadProps.sortable": {
        control: false,
        description:
            "When `true`, file items can be reordered via drag-and-drop.\nThe reordered list is emitted via `onSort`.",
        name: "sortable",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "FileUploadProps.styleType": {
        control: false,
        description: "Visual style variant for the component.",
        name: "styleType",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            defaultValue: {
                summary: '"bordered"',
            },
            type: {
                summaryParts: ["'bordered'", "'no-border'"],
            },
        },
    },
    "FileUploadProps.title": {
        control: false,
        description:
            "Heading rendered at the top of the component. Accepts a plain string or a JSX\nelement for rich formatting.",
        name: "title",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            type: {
                summaryParts: ["JSX.Element", "string"],
            },
        },
    },
    "FileUploadProps.warning": {
        control: false,
        description:
            "Warning message rendered inside the component. Accepts a plain string\nor a JSX element for rich formatting.",
        name: "warning",
        type: {
            required: false,
        },
        table: {
            category: "FileUploadProps",
            type: {
                summaryParts: ["JSX.Element", "string"],
            },
        },
    },
    "FormLabelProps.__inheritedHtmlProps": {
        control: false,
        description: "Inherits props from `HTMLLabelElement`.",
        name: "",
        type: {},
        table: {
            category: "FormLabelProps",
            type: {},
        },
    },
    "FormLabelProps.addon": {
        control: false,
        description:
            "Informational icon and popover rendered inline with the label text.",
        name: "addon",
        type: {
            required: false,
        },
        table: {
            category: "FormLabelProps",
            type: {
                summary: "FormLabelAddonProps",
            },
        },
    },
    "FormLabelProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "FormLabelProps",
            type: {
                summary: "string",
            },
        },
    },
    "FormLabelProps.subtitle": {
        control: false,
        description: "Supporting description rendered below the label.",
        name: "subtitle",
        type: {
            required: false,
        },
        table: {
            category: "FormLabelProps",
            type: {
                summaryParts: ["JSX.Element", "string"],
            },
        },
    },
} satisfies Record<string, unknown>;
