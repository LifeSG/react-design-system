import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This component also inherits props from&nbsp;
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement"
                            rel="noreferrer"
                            target="_blank"
                        >
                            HTMLButtonElement
                        </a>
                    </>
                ),
            },
            {
                name: "className",
                description:
                    "The className of the component for custom styling.",
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
                name: "headersConfig",
                description: "The headers Config",
                propTypes: ["IHeadersConfigProps<T>"],
            },

            {
                name: "headers",
                description: "The list of headers",
                propTypes: ["THeaderProps<T>[]"],
                mandatory: true,
            },
            {
                name: "rowsConfig",
                description: "The rows Config",
                propTypes: ["IRowsConfigProps<T>"],
            },
            {
                name: "rows",
                description: "The list of rows",
                propTypes: ["IRowProps<T>"],
            },

            {
                name: "selectionConfig",
                description: "The selection config",
                propTypes: ["ISelectionConfigProps<T>"],
            },
            {
                name: "selection",
                description: "The selected item list",
                propTypes: ["String<T>[]"],
            },
            {
                name: "sortIndicators",
                description: "The sort Indicators",
                propTypes: ["ISortIndicatorsProps<T>"],
            },
            {
                name: "actionsConfig",
                description: "The selection actions Config",
                propTypes: ["IActionsConfigProps<T>"],
            },
            {
                name: "alternatingRows",
                description: "The alternating Rows",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "customEmptyView",
                description: "The custom Empty View",
                propTypes: ["React.ReactNode"],
            },
            {
                name: "isLoadingData",
                description: "The is Loading Data indicator",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
        ],
    },
    {
        name: "IActionsConfigProps",
        attributes: [
            {
                name: "showActions",
                description: "The show Actions",
                propTypes: ["boolean"],
                defaultValue: "false",
                mandatory: true,
            },
            {
                name: "className",
                description:
                    "The className of the component for custom styling.",
                propTypes: ["string"],
            },
            {
                name: "headerClassName",
                description:
                    "The header className of the component for custom styling.",
                propTypes: ["string"],
            },
            {
                name: "headerLabel",
                description: "The header Label.",
                propTypes: ["string"],
            },
            {
                name: "actions",
                description: "Called when a selection happen",
                propTypes: [
                    "(row: IRowProps, isSelected: boolean) => ReactNode",
                ],
            },
            {
                name: "headerWidth",
                description: "The header Width.",
                propTypes: ["string"],
            },
        ],
    },
    {
        name: "THeaderProps",
        attributes: [
            {
                name: "IHeaderProps",
                description: "IHeaderProps",
                propTypes: ["IHeaderProps"],
                mandatory: true,
            },
        ],
    },
    {
        name: "IHeaderProps",
        attributes: [
            {
                name: "colId",
                description: "column Id",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "label",
                description: "The column label",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "clickable",
                description: "The column clickable or not",
                propTypes: ["boolean"],
            },
            {
                name: "className",
                description: "The column className ",
                propTypes: ["string"],
            },
            {
                name: "style",
                description: "The column style ",
                propTypes: ["CSSProperties"],
            },
        ],
    },
    {
        name: "IHeadersConfigProps",
        attributes: [
            {
                name: "className",
                description: "The class Name Props",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "onClickHeader",
                description: "on Click Header click",
                propTypes: ["(colId: string) => void"],
            },
        ],
    },
    {
        name: "IRowsConfigProps",
        attributes: [
            {
                name: "className",
                description: "The class Name",
                propTypes: ["string"],
            },
            {
                name: "alternatingClassName",
                description: "The alternating Class Name",
                propTypes: ["string"],
            },
        ],
    },
    {
        name: "ISelectionConfigProps",
        attributes: [
            {
                name: "showCheckboxes",
                description: "The show Check boxes Prop",
                propTypes: ["boolean"],
                mandatory: true,
            },
            {
                name: "showHeaderCheckbox",
                description: "The show Header Check box Prop",
                propTypes: ["boolean"],
                mandatory: false,
            },
            {
                name: "onClickSelect",
                description: "on Click Select",
                propTypes: [
                    "(colId: string, rowId: string, isSelected: boolean) => void",
                ],
            },
            {
                name: "onClickSelectAll",
                description: "on Click Select All",
                propTypes: ["(isSelected: boolean) => void"],
            },
            {
                name: "headerClassName",
                description: "The header Class Name",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "The class Name",
                propTypes: ["string"],
            },
            {
                name: "headerWidth",
                description: "The header Width",
                propTypes: ["string"],
            },
        ],
    },
    {
        name: "ISortIndicatorsProps",
        attributes: [
            {
                name: "colId",
                description: "The col Id",
                propTypes: ["string | SortIndicatorProps"],
            },
        ],
    },
    {
        name: "SortIndicatorProps",
        attributes: [
            {
                name: "ASC",
                description: "The ASC",
                propTypes: ["string"],
                defaultValue: "asc",
            },
            {
                name: "DESC",
                description: "The DESC",
                propTypes: ["string"],
                defaultValue: "desc",
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
