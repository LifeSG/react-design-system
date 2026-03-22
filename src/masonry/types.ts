import React from "react";

export interface ColumnCountAttribute {
    /** number of columns on desktop resolutions */
    lg?: number | undefined;
    /** number of columns on tablet resolutions */
    md?: number | undefined;
    /** number of columns on mobile resolutions */
    sm?: number | undefined;
}

/**
 * Props for the Masonry.Grid component - responsive CSS grid container.
 *
 * Defines the number of columns at each breakpoint. Children should be
 * `Masonry.Tile` elements that specify their start column and column span.
 *
 * @example
 * ```tsx
 * <Masonry.Grid numOfCols={{ lg: 3, md: 2, sm: 1 }}>
 *     <Masonry.Tile colsLg={2}>Wide tile</Masonry.Tile>
 *     <Masonry.Tile>Normal tile</Masonry.Tile>
 * </Masonry.Grid>
 * ```
 * @keywords waterfall layout, pinterest grid, variable height grid, brick layout, responsive columns
 */
export interface MasonryGridProps extends React.HTMLAttributes<HTMLDivElement> {
    numOfCols: ColumnCountAttribute;
    children: JSX.Element | JSX.Element[];
    "data-testid"?: string | undefined;
}

/**
 * Props for the Masonry.Tile component - grid cell with responsive span.
 *
 * Specifies the start column and column span for each breakpoint inside
 * a `Masonry.Grid`.
 */
export interface MasonryTileProps extends React.HTMLAttributes<HTMLDivElement> {
    children: JSX.Element;
    /** the column to start on desktop resolutions */
    startLg?: number | undefined;
    /** the number of columns to span on desktop resolutions */
    colsLg?: number | undefined;
    /** the column to start on tablet resolutions */
    startMd?: number | undefined;
    /** the number of columns to span on tablet resolutions */
    colsMd?: number | undefined;
    /** the column to start on mobile resolutions */
    startSm?: number | undefined;
    /** the number of columns to span on mobile resolutions */
    colsSm?: number | undefined;
}
