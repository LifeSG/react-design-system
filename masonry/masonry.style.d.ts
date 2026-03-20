import { MasonryGridProps, MasonryTileProps } from "./types";
type GridStyleProps = Omit<MasonryGridProps, "children">;
type TileStyleProps = Omit<MasonryTileProps, "children">;
export declare const GridContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, GridStyleProps>> & string;
export declare const TileContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, TileStyleProps>> & string;
export {};
