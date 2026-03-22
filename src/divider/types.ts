import { ColProps } from "../layout/types";

export type DividerLineStyleType = "solid" | "dashed";
type DividerLayoutType = "flex" | "grid";

/**
 * Props for the Divider component - horizontal rule separator.
 *
 * Renders a styled horizontal rule with configurable thickness, line style,
 * color, and optional grid column span (via `ColDiv` layout props).
 *
 * @example
 * ```tsx
 * <Divider />
 * <Divider thickness={2} lineStyle="dashed" color="#ccc" />
 * ```
 * @keywords separator, horizontal rule, hr, line break, section divider
 */
export interface DividerProps
    extends ColProps,
        Omit<React.HTMLAttributes<HTMLElement>, "color"> {
    /**
     * The thickness/height of the Divider line in pixels.
     *
     * @default 1
     */
    thickness?: number | undefined;
    /**
     * The CSS border style of the Divider line.
     *
     * @default "solid"
     */
    lineStyle?: DividerLineStyleType | undefined;
    /**
     * The layout type. Use `"grid"` when placing the Divider inside a grid
     * layout and configuring column spans via `mobileCols` / `tabletCols` /
     * `desktopCols`.
     *
     * @default "flex"
     */
    layoutType?: DividerLayoutType | undefined;
    /** The CSS color value or theme-aware function for the Divider line. */
    color?: string | ((props: unknown) => string) | undefined;
}
