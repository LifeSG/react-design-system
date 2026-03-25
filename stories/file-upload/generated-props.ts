// AUTO-GENERATED — do not edit manually.
// Source: src/file-upload/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

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
