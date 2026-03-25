// AUTO-GENERATED — do not edit manually.
// Source: src/file-download/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const FileItemDownloadPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "id",
                description: "The unique identifier of the file.",
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
                name: "mimeType",
                description: "The MIME type of the file",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "size",
                description: "The size of the file in bytes",
                propTypes: ["number"],
            },
            {
                name: "filePath",
                description: "The remote path of the file",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "errorMessage",
                description:
                    "A custom error message to display when file download fails",
                propTypes: ["string", "React.ReactNode"],
            },
            {
                name: "thumbnailImageDataUrl",
                description: "The thumbnail of the file",
                propTypes: ["string"],
            },
            {
                name: "truncateText",
                description: "Indicates if text should be truncated",
                propTypes: ["boolean"],
            },
            {
                name: "ready",
                description:
                    "Indicate if file is ready for download, defaults to true",
                propTypes: ["boolean"],
            },
        ],
    },
];
