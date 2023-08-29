import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
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
                name: "headers",
                description: "The list of headers",
                propTypes: ["HeaderProps<T>[]"],
                mandatory: true,
            },
            {
                name: "rows",
                description: "The list of rows",
                propTypes: ["RowProps<T>"],
            },
            {
                name: "selectedIds",
                description: "The selected item id list",
                propTypes: ["String<T>[]"],
            },
            {
                name: "sortIndicators",
                description: "The sort Indicators",
                propTypes: ["SortIndicatorsProps<T>"],
            },
            {
                name: "alternatingRows",
                description: "The alternating Rows",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "renderCustomEmptyView",
                description: "The custom Empty View",
                propTypes: ["() => React.ReactNode"],
            },
            {
                name: "loadState",
                description: "The is Loading Data indicator",
                propTypes: ["LoadStateType"],
                defaultValue: "success",
            },
            {
                name: "emptyView",
                description: "The is Loading Data indicator",
                propTypes: ["ErrorDisplayAttributes<T>"],
            },
            {
                name: "enableMultiSelect",
                description: "The show checkboxes Prop",
                propTypes: ["boolean"],
            },
            {
                name: "enableSelectAll",
                description: "The show header checkbox Prop",
                propTypes: ["boolean"],
            },
            {
                name: "onSelect",
                description: "On row select",
                propTypes: ["(rowId: string, isSelected: boolean) => void"],
            },
            {
                name: "onSelectAll",
                description: "On select all",
                propTypes: ["(isSelected: boolean) => void"],
            },
            {
                name: "onClickHeader",
                description: "On header click",
                propTypes: ["(fieldKey: string) => void"],
            },
        ],
    },
    {
        name: "HeaderProps",
        attributes: [
            {
                name: "HeaderItemProps",
                description: "HeaderItemProps",
                propTypes: ["HeaderItemProps"],
                mandatory: true,
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
                name: "fieldKey",
                description: "field Key with value list",
                propTypes: ["[fieldKey: string]: string | number | ReactNode"],
                mandatory: true,
            },
            {
                name: "actions",
                description: "Row actions",
                propTypes: [
                    "((row: RowProps, renderProps: RowRenderProps) => ReactNode) => void",
                ],
            },
        ],
    },
    {
        name: "RowRenderProps",
        attributes: [
            {
                name: "isSelected",
                description: "Is row selected",
                propTypes: ["boolean"],
            },
        ],
    },
    {
        name: "HeaderItemProps",
        attributes: [
            {
                name: "fieldKey",
                description: "field Key Id",
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
        ],
    },
    {
        name: "LoadStateType",
        attributes: [
            {
                name: "The type of Loading or success or error",
                description: "",
                propTypes: [`"loading"`, `"success",`],
                defaultValue: "success",
            },
        ],
    },
    {
        name: "SortIndicatorsProps",
        attributes: [
            {
                name: "fieldKey",
                description: "The field key",
                propTypes: ["SortIndicatorProps"],
            },
        ],
    },
    {
        name: "SortIndicatorProps",
        attributes: [
            {
                name: "asc",
                description: "The asc order icon",
                propTypes: ["string"],
                defaultValue: "asc",
            },
            {
                name: "desc",
                description: "The desc order icon",
                propTypes: ["string"],
                defaultValue: "desc",
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
