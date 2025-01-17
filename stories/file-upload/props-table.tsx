import { ApiTable, ApiTableSectionProps } from "stories/storybook-common";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            // Inherited props
            {
                name: "",
                description: (
                    <>
                        This component also inherits the additional props from
                        the&nbsp;
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#additional_attributes"
                            rel="noreferrer"
                            target="_blank"
                        >
                            file input type
                        </a>
                    </>
                ),
            },
            // Component specific
            {
                name: "disabled",
                description: "Specifies if the component should be disabled",
                propTypes: ["boolean"],
            },
            {
                name: "id",
                description: "The unique identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "The class identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "name",
                description: "The name of the component",
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
                name: "maxFiles",
                description: "The maximum number of files that can be uploaded",
                propTypes: ["number"],
            },
            {
                name: "warning",
                description: "The warning message to be displayed",
                propTypes: ["string", "JSX.Element"],
            },
            {
                name: "fileItems",
                description: "The files to be rendered",
                propTypes: ["FileItemProps[]"],
            },
            {
                name: "editableFileItems",
                description:
                    "If set, file items will be able to have editable descriptions (only image files)",
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
                name: "onChange",
                description:
                    "Called when an upload happens via drag drop or click",
                propTypes: ["(files: File[]) => void"],
            },
            {
                name: "onEdit",
                description: "Called when an update to the description happens",
                propTypes: ["(fileItem: FileItemProps) => void"],
            },
            {
                name: "onDelete",
                description:
                    "Called when a file item's delete button is clicked",
                propTypes: ["(fileItem: FileItemProps) => void"],
            },
            {
                name: "onSort",
                description: "Called when a drag sort is made",
                propTypes: ["(fileItems: FileItemProps[]) => void"],
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
                defaultValue: "true",
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
