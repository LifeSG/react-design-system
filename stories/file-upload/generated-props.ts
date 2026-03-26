// AUTO-GENERATED — do not edit manually.
// Source: src/file-upload/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const FileUploadPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "title",
                description: "Component specific",
                propTypes: ["string", "JSX.Element"],
            },
            {
                name: "description",
                description: "",
                propTypes: ["string", "JSX.Element"],
            },
            {
                name: "styleType",
                description:
                    'The style type for the component. Values "bordered" | "no-border"',
                propTypes: ["FileUploadStyle"],
            },
            {
                name: "maxFiles",
                description: "The maximum number of files the user can upload.",
                propTypes: ["number"],
            },
            {
                name: "warning",
                description: "A warning message displayed below the drop zone.",
                propTypes: ["string", "JSX.Element"],
            },
            {
                name: "fileItems",
                description: "The list of uploaded file items to render.",
                propTypes: ["FileItemProps[]"],
            },
            {
                name: "editableFileItems",
                description:
                    "If set, file items will have editable descriptions (only image files)",
                propTypes: ["boolean"],
            },
            {
                name: "fileDescriptionMaxLength",
                description:
                    "The max length of the description of the file (only image files)",
                propTypes: ["number"],
            },
            {
                name: "sortable",
                description:
                    "Specifies if sorting is enabled for the file items",
                propTypes: ["boolean"],
            },
            {
                name: "errorMessage",
                description: "The general error message for the component",
                propTypes: ["string", "JSX.Element"],
            },
            {
                name: "readOnly",
                description:
                    "Indicates if the component is in the readonly state",
                propTypes: ["boolean"],
            },
            {
                name: "customLabels",
                description:
                    "Specify custom label text for elements within the component",
                propTypes: ["{ uploadButtonLabel?: string | undefined }"],
            },
            {
                name: "onChange",
                description:
                    "Called when an upload happens via drag drop or click",
                propTypes: ["((files: File[]) => void) | undefined"],
            },
            {
                name: "onEdit",
                description: "Called when an update to the description happens",
                propTypes: ["((fileItem: FileItemProps) => void) | undefined"],
            },
            {
                name: "onDelete",
                description:
                    "Called when a file item's delete button is clicked",
                propTypes: ["((fileItem: FileItemProps) => void) | undefined"],
            },
            {
                name: "onSort",
                description: "Called when a drag sort is made",
                propTypes: [
                    "((fileItems: FileItemProps[]) => void) | undefined",
                ],
            },
            {
                name: "accept",
                description: "Defines the file types that is accepted",
                propTypes: ["string"],
            },
            {
                name: "capture",
                description:
                    "Specifies which camera to use for capture of image or video data",
                propTypes: ["boolean", '"user"', '"environment"'],
            },
            {
                name: "multiple",
                description:
                    "Specifies if user is allowed to select more than one file.",
                propTypes: ["boolean"],
            },
            {
                name: "disabled",
                description: "",
                propTypes: ["boolean"],
            },
            {
                name: "id",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "name",
                description: "",
                propTypes: ["string"],
            },
        ],
    },
];

export const FileItemPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "id",
                description: "",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "name",
                description: "The name of the file",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "type",
                description: "The MIME type of the file",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "size",
                description: "The size of the file in bytes",
                propTypes: ["number"],
                mandatory: true,
            },
            {
                name: "description",
                description: "The alt text or description of the file",
                propTypes: ["string"],
            },
            {
                name: "progress",
                description: "The upload progress display. Values from 0 to 1",
                propTypes: ["number"],
            },
            {
                name: "errorMessage",
                description:
                    "The error message display to indicate file upload error",
                propTypes: ["string", "React.ReactNode"],
            },
            {
                name: "thumbnailImageDataUrl",
                description: "The thumbnail of the file that will be rendered",
                propTypes: ["string"],
            },
            {
                name: "truncateText",
                description: "Indicates if text should be truncated",
                propTypes: ["boolean"],
            },
        ],
    },
];

export const FileInputPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "accept",
                description: "Defines the file types that is accepted",
                propTypes: ["string"],
            },
            {
                name: "capture",
                description:
                    "Specifies which camera to use for capture of image or video data",
                propTypes: ["boolean", '"user"', '"environment"'],
            },
            {
                name: "multiple",
                description:
                    "Specifies if user is allowed to select more than one file.",
                propTypes: ["boolean"],
            },
            {
                name: "disabled",
                description: "",
                propTypes: ["boolean"],
            },
            {
                name: "id",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "name",
                description: "",
                propTypes: ["string"],
            },
        ],
    },
];
