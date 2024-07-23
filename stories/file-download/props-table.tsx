import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            // Component specific
            {
                name: "className",
                description: "The class identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "title",
                description: "A title to be displayed for the component",
                propTypes: ["string", "JSX.Element"],
            },
            {
                name: "description",
                description: "The description to be displayed",
                propTypes: ["string", "JSX.Element"],
            },
            {
                name: "styleType",
                description: "The style type for the component",
                propTypes: [`"bordered"`, `"no-border"`],
                defaultValue: `"bordered"`,
            },
            {
                name: "fileItems",
                description: "The files to be rendered",
                mandatory: true,
                propTypes: ["FileItemProps[]"],
            },
            {
                name: "onDownload",
                description: `Called when click on the component. Remember to throw Error on error`,
                mandatory: true,
                propTypes: ["boolean"],
            },
        ],
    },
    {
        name: "FileItemProps",
        attributes: [
            {
                name: "id",
                description: "The unique identifier for a file",
                mandatory: true,
                propTypes: ["string"],
            },
            {
                name: "name",
                description: "The name of the file",
                mandatory: true,
                propTypes: ["string"],
            },
            {
                name: "type",
                description: "The MIME type of the file",
                mandatory: true,
                propTypes: ["string"],
            },
            {
                name: "size",
                description: "The size of the file in bytes",
                mandatory: true,
                propTypes: ["number"],
            },
            {
                name: "filePath",
                description: "The path of the file in S3 server",
                propTypes: ["string"],
            },
            {
                name: "errorMessage",
                description:
                    "The custom error message when file download failed ",
                propTypes: ["string"],
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
                defaultValue: `true`,
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
