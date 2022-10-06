import { MasonryGridProps, MasonryTileProps } from "./types";
declare type GridStyleProps = Omit<MasonryGridProps, "children">;
declare type TileStyleProps = Omit<MasonryTileProps, "children">;
export declare const GridContainer: import("styled-components").StyledComponent<"div", any, GridStyleProps, never>;
export declare const TileContainer: import("styled-components").StyledComponent<"div", any, TileStyleProps, never>;
export {};
