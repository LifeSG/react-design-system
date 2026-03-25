import { ColProps } from "../layout";
import { ThemeStyleProps } from "../theme/types";
import { V2_ColProps } from "../v2_layout/types";

export type DividerLineStyleType = "solid" | "dashed";
type DividerLayoutType = "flex" | "grid";

/**
 * A component that renders a horizontal line.
 *
 * Supports both flex and grid layouts, with configurable thickness, color, and line style.
 *
 * @keywords divider, separator, horizontal rule, line, hr
 */
export interface DividerProps
    extends ColProps,
        V2_ColProps,
        Omit<React.HTMLAttributes<HTMLElement>, "color"> {
    /** The thickness/height of the `Divider` in px. @default 1 */
    thickness?: number | undefined;
    /** The style type for the `Divider` line. @default "solid" */
    lineStyle?: DividerLineStyleType | undefined;
    /** The layout type for the `Divider`. @default "flex" */
    layoutType?: DividerLayoutType | undefined;
    /** The color for the `Divider` line */
    color?: string | ((props: ThemeStyleProps) => string) | undefined;
}
