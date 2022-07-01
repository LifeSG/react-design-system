import React from "react";
import { GridContainer, TileContainer } from "./masonry.style";
import { IMasonryGrid, IMasonryTile } from "./types";

// =============================================================================
// GRID
// =============================================================================
const GridComponent = (
    props: IMasonryGrid,
    ref: React.Ref<HTMLDivElement>
): JSX.Element => {
    const { numOfCols, children, ...otherProps } = props;

    return (
        <GridContainer ref={ref} numOfCols={numOfCols} {...otherProps}>
            {children}
        </GridContainer>
    );
};

// =============================================================================
// TILE
// =============================================================================
const TileComponent = (
    props: IMasonryTile,
    ref: React.Ref<HTMLDivElement>
): JSX.Element => {
    const { children, ...otherProps } = props;

    return (
        <TileContainer ref={ref} {...otherProps}>
            {children}
        </TileContainer>
    );
};

// =============================================================================
// EXPORTABLE
// =============================================================================
export const Masonry = {
    Grid: React.forwardRef(GridComponent),
    Tile: React.forwardRef(TileComponent),
};
