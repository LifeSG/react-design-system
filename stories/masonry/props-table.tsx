import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";
import { TabAttribute, Tabs } from "../storybook-common/tabs";

const MASONRY_GRID_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "numOfCols",
                mandatory: true,
                description: "The number of columns for the different layouts",
                propTypes: ["ColumnCountAttribute"],
            },
        ],
    },
    {
        name: "ColumnCountAttribute",
        attributes: [
            {
                name: "lg",
                description: "The number of columns for the large layouts",
                propTypes: ["number"],
            },
            {
                name: "md",
                description: "The number of columns for the medium layouts",
                propTypes: ["number"],
            },
            {
                name: "sm",
                description: "The number of columns for the small layouts",
                propTypes: ["number"],
            },
        ],
    },
];

const MASONRY_TILE_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "colsLg",
                description:
                    "The number of columns to span across for large layouts. " +
                    "E.g. Specify 2 to span across 2 columns.",
                propTypes: ["number"],
            },
            {
                name: "colsMd",
                description:
                    "The number of columns to span across for medium layouts. " +
                    "E.g. Specify 2 to span across 2 columns.",
                propTypes: ["number"],
            },
            {
                name: "colsSm",
                description:
                    "The number of columns to span across for small layouts. " +
                    "E.g. Specify 2 to span across 2 columns.",
                propTypes: ["number"],
            },
            {
                name: "startLg",
                description:
                    "The column to start for large layouts. " +
                    "If you intend for it to be on the first column, specify 1.",
                propTypes: ["number"],
            },
            {
                name: "startMd",
                description:
                    "The column to start for medium layouts. " +
                    "If you intend for it to be on the first column, specify 1.",
                propTypes: ["number"],
            },
            {
                name: "startSm",
                description:
                    "The column to start for small layouts. " +
                    "If you intend for it to be on the first column, specify 1.",
                propTypes: ["number"],
            },
        ],
    },
];

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "Masonry.Grid",
        component: <ApiTable sections={MASONRY_GRID_DATA} />,
    },
    {
        title: "Masonry.Tile",
        component: <ApiTable sections={MASONRY_TILE_DATA} />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
