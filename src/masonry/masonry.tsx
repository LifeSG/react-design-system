import React from "react";
import { GridContainer, TileContainer } from "./masonry.style";
import { MasonryGridProps, MasonryTileProps } from "./types";

// =============================================================================
// GRID
// =============================================================================
const GridComponent = (
    props: MasonryGridProps,
    ref: React.Ref<HTMLDivElement>
): JSX.Element => {
    const { children, ...otherProps } = props;

    return (
        <GridContainer ref={ref} {...otherProps}>
            {children}
        </GridContainer>
    );
};

// =============================================================================
// TILE
// =============================================================================
const TileComponent = (
    props: MasonryTileProps,
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
/** @deprecated consider switching to `Layout.ColDiv` to manage grids */
export const Masonry = {
    Grid: React.forwardRef(GridComponent),
    Tile: React.forwardRef(TileComponent),
};
