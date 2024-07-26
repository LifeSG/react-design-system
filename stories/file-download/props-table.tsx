import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "className",
                description: "The class identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "fileName",
                description: "The name of the file",
                mandatory: true,
                propTypes: ["string"],
            },
            {
                name: "file",
                description: "File to be downloaded on click",
                propTypes: ["Blob"],
            },
            {
                name: "fileSize",
                description: "File size in bytes",
                propTypes: ["string"],
            },
            {
                name: "loading",
                description:
                    "Toggles the loading state of file download component",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "truncateText",
                description: "Indicates if file name should be truncated",
                propTypes: ["boolean"],
            },
            {
                name: "downloadIcon",
                description: "Icon to be rendered in icon button component",
                propTypes: ["JSX.Element"],
                defaultValue: "DownloadIcon",
            },
            {
                name: "ariaLabel",
                description: "aria label of component",
                propTypes: ["string"],
            },
            {
                name: "onClick",
                description: "Called when file download component is clicked",
                propTypes: ["() => void"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
