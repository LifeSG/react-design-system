import { ColProps } from "../layout";
import { ThemeStyleProps } from "../theme/types";
import { V2_ColProps } from "../v2_layout/types";

export type DividerLineStyleType = "solid" | "dashed";
type DividerLayoutType = "flex" | "grid";

export interface DividerProps
    extends ColProps,
        V2_ColProps,
        Omit<React.HTMLAttributes<HTMLElement>, "color"> {
    /** The thickness of the Divider in px */
    thickness?: number | undefined;
    /** The line display style type. Values: "solid" | "dashed" */
    lineStyle?: DividerLineStyleType | undefined;
    /** The layout type. Values: "flex" | "grid" */
    layoutType?: DividerLayoutType | undefined;
    /** The line color */
    color?: string | ((props: ThemeStyleProps) => string) | undefined;
}
