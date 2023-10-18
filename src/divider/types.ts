import { ColDivProps } from "../layout/types";

export type DividerLineStyleType = "solid" | "dashed";
type DividerLayoutType = "flex" | "grid";

export interface DividerProps extends ColDivProps {
    /** The thickness of the Divider in px */
    thickness?: number | undefined;
    /** The line display style type. Values: "solid" | "dashed" */
    lineStyle?: DividerLineStyleType | undefined;
    /** The layout type. Values: "flex" | "grid" */
    layoutType?: DividerLayoutType | undefined;
}
