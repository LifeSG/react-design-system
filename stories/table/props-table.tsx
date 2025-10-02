import { ApiTable, ApiTableSectionProps } from "stories/storybook-common";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "className",
                description: "CSS class applied to the table element",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "Unique identifier for the table element",
                propTypes: ["string"],
            },
            {
                name: "style",
                description: "Custom styles applied to the table element",
                propTypes: ["CSSProperties"],
            },
            {
                name: "children",
                description:
                    "Composition of Table.Head and Table.Body with Table.Row, Table.Cell, Table.HeaderCell",
                propTypes: ["React.ReactNode"],
                mandatory: true,
            },
        ],
    },
    {
        name: "Table.Head",
        attributes: [
            {
                name: "children",
                description:
                    "Table rows (`<Table.Row>`) for the header section",
                propTypes: ["React.ReactNode"],
                mandatory: true,
            },
        ],
    },
    {
        name: "Table.Body",
        attributes: [
            {
                name: "children",
                description: "Table rows (`<Table.Row>`) for the body section",
                propTypes: ["React.ReactNode"],
                mandatory: true,
            },
        ],
    },
    {
        name: "Table.Row",
        attributes: [
            {
                name: "children",
                description:
                    "Cells (`<Table.Cell>` or `<Table.HeaderCell>`) inside the row",
                propTypes: ["React.ReactNode"],
                mandatory: true,
            },
            {
                name: "className",
                description: "CSS class for the row",
                propTypes: ["string"],
            },
            {
                name: "style",
                description: "Custom styles for the row",
                propTypes: ["CSSProperties"],
            },
        ],
    },
    {
        name: "Table.Cell",
        attributes: [
            {
                name: "children",
                description: "Content of the table cell",
                propTypes: ["React.ReactNode"],
            },
            {
                name: "colSpan",
                description: "Number of columns the cell should span",
                propTypes: ["number"],
            },
            {
                name: "rowSpan",
                description: "Number of rows the cell should span",
                propTypes: ["number"],
            },
            {
                name: "className",
                description: "CSS class for the cell",
                propTypes: ["string"],
            },
            {
                name: "style",
                description: "Custom styles for the cell",
                propTypes: ["CSSProperties"],
            },
        ],
    },
    {
        name: "Table.HeaderCell",
        attributes: [
            {
                name: "children",
                description: "Content of the header cell",
                propTypes: ["React.ReactNode"],
            },
            {
                name: "colSpan",
                description: "Number of columns the header cell should span",
                propTypes: ["number"],
            },
            {
                name: "rowSpan",
                description: "Number of rows the header cell should span",
                propTypes: ["number"],
            },
            {
                name: "className",
                description: "CSS class for the header cell",
                propTypes: ["string"],
            },
            {
                name: "style",
                description: "Custom styles for the header cell",
                propTypes: ["CSSProperties"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
