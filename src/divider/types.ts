import type { ColProps } from "../layout";

/** Visual style of the line. */
export type DividerLineStyleType = "solid" | "dashed";
type DividerLayoutType = "flex" | "grid";

/** Props for the `Divider` component. */
export interface DividerProps
    extends ColProps,
        Omit<React.HTMLAttributes<HTMLElement>, "color"> {
    /**
     * Thickness of the line in pixels.
     *
     * @default 1
     */
    thickness?: number | undefined;
    /**
     * Visual style of the line.
     *
     * @default "solid"
     */
    lineStyle?: DividerLineStyleType | undefined;
    /**
     * Controls how the divider is rendered relative to its parent layout.
     *
     * Use `"flex"` when the divider is a direct child of a flex container.
     * Use `"grid"` to wrap the line in a `ColDiv`, enabling responsive
     * column-span control via the `xxsCols`–`xxlCols` props.
     *
     * @default "flex"
     */
    layoutType?: DividerLayoutType | undefined;
    /**
     * Color of the line. Accepts a design-system colour token or any valid CSS
     * color value.
     *
     * @default Colour["border"]
     */
    color?: string | undefined;
}
