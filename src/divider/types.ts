import { ColProps } from "../layout/types";

export type DividerLineStyleType = "solid" | "dashed";
type DividerLayoutType = "flex" | "grid";

export interface DividerProps
    extends ColProps,
        Omit<React.HTMLAttributes<HTMLElement>, "color"> {
    /** The thickness of the Divider in px */
    thickness?: number | undefined;
    /** The line display style type. Values: "solid" | "dashed" */
    lineStyle?: DividerLineStyleType | undefined;
    /** The layout type. Values: "flex" | "grid" */
    layoutType?: DividerLayoutType | undefined;
    /** The line color */
    color?: string | ((props: unknown) => string) | undefined;
}
