import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            // Component specific
            {
                name: "className",
                description: "The class selector of the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
            },
            {
                name: "description",
                description: "The description to be displayed",
                propTypes: ["string", "JSX.Element"],
            },
            {
                name: "fileItems",
                description: "The files to be rendered",
                mandatory: true,
                propTypes: ["FileItemProps[]"],
            },
            {
                name: "id",
                description: "The unique id of the component",
                propTypes: ["string"],
            },
            {
                name: "styleType",
                description: "The style type for the component",
                propTypes: [`"bordered"`, `"no-border"`],
                defaultValue: `"bordered"`,
            },
            {
                name: "title",
                description: "A title to be displayed for the component",
                propTypes: ["string", "JSX.Element"],
            },
            {
                name: "onDownload",
                description: "Called when file item is clicked",
                mandatory: true,
                propTypes: [
                    "(file: FileItemDownloadProps) => void | Promise<void>",
                ],
            },
        ],
    },
    {
        name: "FileItemProps",
        attributes: [
            {
                name: "id",
                description: "The unique identifier of the file",
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
                name: "mimeType",
                description: "The MIME type of the file",
                mandatory: true,
                propTypes: ["string"],
            },
            {
                name: "size",
                description: "The size of the file in bytes",
                propTypes: ["number"],
            },
            {
                name: "filePath",
                description: "The remote path of the file",
                mandatory: true,
                propTypes: ["string"],
            },
            {
                name: "errorMessage",
                description:
                    "The custom error message to display when file download fails",
                propTypes: ["string"],
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
                defaultValue: `true`,
            },
            {
                name: "ready",
                description: "Indicates if the file is ready for download",
                propTypes: ["boolean"],
                defaultValue: `true`,
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
