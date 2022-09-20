import React from "react";
import {
    DefaultCol,
    DescriptionCol,
    NameCol,
    Table,
} from "../storybook-common/api-table";
import { TabAttribute, Tabs } from "../storybook-common/tabs";

export const MasonryGridTable = () => (
    <Table>
        <tr>
            <NameCol mandatory>numOfCols</NameCol>
            <DescriptionCol
                propTypes={["{ lg: number, md: number, sm: number }"]}
            >
                The number of columns for the different layouts
            </DescriptionCol>
            <DefaultCol />
        </tr>
    </Table>
);

export const MasonryTileTable = () => (
    <Table>
        <tr>
            <NameCol>startLg</NameCol>
            <DescriptionCol propTypes={["number"]}>
                <>
                    The column to start for large layouts. If you intend for it
                    to be on the first column, then specify <code>1</code>
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>colsLg</NameCol>
            <DescriptionCol propTypes={["number"]}>
                <>
                    {" "}
                    The number of columns to span across for large layouts. E.g.
                    Specify <code>2</code> to span across 2 columns.
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>startMd</NameCol>
            <DescriptionCol propTypes={["number"]}>
                <>
                    The column to start for medium layouts. If you intend for it
                    to be on the first column, then specify <code>1</code>
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>colsMd</NameCol>
            <DescriptionCol propTypes={["number"]}>
                <>
                    {" "}
                    The number of columns to span across for medium layouts.
                    E.g. Specify <code>2</code> to span across 2 columns.
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>startSm</NameCol>
            <DescriptionCol propTypes={["number"]}>
                <>
                    The column to start for small layouts. If you intend for it
                    to be on the first column, then specify <code>1</code>
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>
        <tr>
            <NameCol>colsSm</NameCol>
            <DescriptionCol propTypes={["number"]}>
                <>
                    {" "}
                    The number of columns to span across for small layouts. E.g.
                    Specify <code>2</code> to span across 2 columns.
                </>
            </DescriptionCol>
            <DefaultCol />
        </tr>
    </Table>
);

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "Masonry.Grid",
        component: <MasonryGridTable />,
    },
    {
        title: "Masonry.Tile",
        component: <MasonryTileTable />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
