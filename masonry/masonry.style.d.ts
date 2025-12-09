import { MasonryGridProps, MasonryTileProps } from "./types";
type GridStyleProps = Omit<MasonryGridProps, "children">;
type TileStyleProps = Omit<MasonryTileProps, "children">;
export declare const GridContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, GridStyleProps, never>;
export declare const TileContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TileStyleProps, never>;
export {};
