import React from "react";

export interface INumberOfColumns {
    lg?: number;
    md?: number;
    sm?: number;
}

export interface IMasonryGrid extends React.HTMLAttributes<HTMLDivElement> {
    numOfCols: INumberOfColumns;
    children: JSX.Element | JSX.Element[];
}

export interface IMasonryTile extends React.HTMLAttributes<HTMLDivElement> {
    startLg?: number /** the column to start on desktop resolutions */;
    colsLg?: number /** the number of columns to span on desktop resolutions */;
    startMd?: number /** the column to start on tablet resolutions */;
    colsMd?: number /** the number of columns to span on tablet resolutions */;
    startSm?: number /** the column to start on mobile resolutions */;
    colsSm?: number /** the number of columns to span on mobile resolutions */;
    children: JSX.Element;
}
