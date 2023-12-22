import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "className",
                description: "The class selector of the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "The unique identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "headers",
                description: "The configuration for each header column",
                propTypes: ["(string | HeaderItemProps)[]"],
                mandatory: true,
            },
            {
                name: "rows",
                description: "The list of data",
                propTypes: ["RowProps[]"],
            },
            {
                name: "selectedIds",
                description: "The ids of selected items",
                propTypes: ["string[]"],
            },
            {
                name: "disabledIds",
                description: "The ids of disabled items",
                propTypes: ["string[]"],
            },
            {
                name: "sortIndicators",
                description: "The sort indicator display state for each column",
                propTypes: [`{ [fieldKey]: "asc" | "desc" }`],
            },
            {
                name: "alternatingRows",
                description:
                    "Specifies if every alternate row has a different background colour",
                propTypes: ["boolean"],
            },
            {
                name: "renderCustomEmptyView",
                description:
                    "Returns a custom view to be rendered when the table is empty",
                propTypes: ["() => React.ReactNode"],
            },
            {
                name: "loadState",
                description:
                    "Specifies the table load state. Displays an animation when the table is loading.",
                propTypes: [`"success"`, `"loading"`],
                defaultValue: `"success"`,
            },
            {
                name: "emptyView",
                description: "Override props for the empty view display",
                propTypes: (
                    <a href="https://designsystem.life.gov.sg/react/index.html?path=/docs/modules-errordisplay--docs">
                        ErrorDisplayAttributes
                    </a>
                ),
            },
            {
                name: "enableMultiSelect",
                description:
                    "Enables a checkbox in each row for multi-selection",
                propTypes: ["boolean"],
            },
            {
                name: "enableSelectAll",
                description:
                    "Enables a checkbox in the header to select all rows or clear the current selection",
                propTypes: ["boolean"],
            },
            {
                name: "enableStickyHeader",
                description: "Specifies if the header is fixed to the top",
                propTypes: ["boolean"],
            },
            {
                name: "enableActionBar",
                description:
                    "Specifies if an action bar is visible when one or more rows are selected",
                propTypes: ["boolean"],
            },
            {
                name: "actionBarContent",
                description:
                    "Custom content to be rendered within the action bar",
                propTypes: ["React.ReactNode"],
            },
            {
                name: "onClearSelectionClick",
                description:
                    "Called when clear button in the action bar is clicked",
                propTypes: ["() => void"],
            },
            {
                name: "onSelect",
                description: "Called when a row is selected",
                propTypes: ["(rowId: string, isSelected: boolean) => void"],
            },
            {
                name: "onSelectAll",
                description:
                    "Called when all rows are selected, with the current selection state",
                propTypes: ["(isAllSelected: boolean) => void"],
            },
            {
                name: "onHeaderClick",
                description:
                    "Called with the corresponding column field key when a header is clicked",
                propTypes: ["(fieldKey: string) => void"],
            },
        ],
    },
    {
        name: "HeaderItemProps",
        attributes: [
            {
                name: "fieldKey",
                description:
                    "The name of the corresponding key in the row item object",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "label",
                description: "The display label for the column header",
                propTypes: ["string", "React.ReactNode"],
                mandatory: true,
            },
            {
                name: "clickable",
                description: (
                    <>
                        Specifies if the column header is clickable. When true,{" "}
                        <code>onHeaderClick</code> will be called when the cell
                        is clicked
                    </>
                ),
                propTypes: ["boolean"],
            },
            {
                name: "style",
                description:
                    "Specifies custom styles for the column header cell",
                propTypes: ["CSSProperties"],
            },
        ],
    },
    {
        name: "RowProps",
        attributes: [
            {
                name: "id",
                description: "Row id",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "[fieldKey]",
                description: "Other properties on the row item object",
                propTypes: [
                    "string",
                    "number",
                    "React.ReactNode",
                    "(row: RowProps, renderProps: RowRenderProps) => React.ReactNode",
                ],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
