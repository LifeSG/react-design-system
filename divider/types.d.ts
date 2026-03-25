import type { ColProps } from "../layout";
import type { V2_ColProps } from "../v2_layout/types";
import type { V3_ThemeStyleProps } from "../v3_theme/types";
export type DividerLineStyleType = "solid" | "dashed";
type DividerLayoutType = "flex" | "grid";
export interface DividerProps extends ColProps, V2_ColProps, Omit<React.HTMLAttributes<HTMLElement>, "color"> {
    /** The thickness of the Divider in px */
    thickness?: number | undefined;
    /** The line display style type. Values: "solid" | "dashed" */
    lineStyle?: DividerLineStyleType | undefined;
    /** The layout type. Values: "flex" | "grid" */
    layoutType?: DividerLayoutType | undefined;
    /** The line color */
    color?: string | ((props: V3_ThemeStyleProps) => string) | undefined;
}
export {};
