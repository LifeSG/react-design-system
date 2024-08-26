import React from "react";
import { MasonryGridProps, MasonryTileProps } from "./types";
/** @deprecated consider switching to `Layout.ColDiv` to manage grids */
export declare const Masonry: {
    Grid: (props: MasonryGridProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    Tile: (props: MasonryTileProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};
