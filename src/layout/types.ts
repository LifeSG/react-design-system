// @storybookSkipFile

/**
 * Common props shared by all layout components.
 */
interface CommonLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    "data-testid"?: string | undefined;
    /**
     * Stretches the element to fill its container's full width.
     *
     * @default false
     */
    stretch?: boolean | undefined;
}

/** Layout display mode applied to a `Container` or `Content`. */
export type ContainerType = "flex" | "flex-column" | "grid";

/**
 * Props for the `Layout.Container` sub-component.
 */
export interface ContainerProps extends CommonLayoutProps {
    /**
     * Display mode applied to the container.
     *
     * @default "flex"
     */
    type?: ContainerType | undefined;
}

/**
 * Props for the `Layout.Section` sub-component.
 */
export interface SectionProps extends CommonLayoutProps {}

/**
 * Props for the `Layout.Content` sub-component.
 */
export interface ContentProps extends ContainerProps {}

/**
 * Column span value for a `ColDiv` at a given breakpoint.
 *
 * - A `number` specifies the number of columns to span.
 * - A `[start, end]` tuple specifies the start and end column lines. Use `-1`
 *   as the end value to span to the last column line of the grid.
 */
export type ColSpan = number | [number, number] | undefined;

/**
 * Responsive column placement props.
 *
 * Each prop controls the column span at the corresponding breakpoint. When a
 * breakpoint prop is omitted, it falls back to the next smaller breakpoint's
 * value (xxl → xl → lg → md → sm → xs → xxs).
 */
export interface ColProps {
    /**
     * Column span at the `xxl` breakpoint.
     */
    xxlCols?: ColSpan;
    /**
     * Column span at the `xl` breakpoint.
     */
    xlCols?: ColSpan;
    /**
     * Column span at the `lg` breakpoint.
     */
    lgCols?: ColSpan;
    /**
     * Column span at the `md` breakpoint.
     */
    mdCols?: ColSpan;
    /**
     * Column span at the `sm` breakpoint.
     */
    smCols?: ColSpan;
    /**
     * Column span at the `xs` breakpoint.
     */
    xsCols?: ColSpan;
    /**
     * Column span at the `xxs` (smallest) breakpoint.
     * Acts as the base value. All larger breakpoints fall back to this when
     * their own prop is not set.
     */
    xxsCols?: ColSpan;
}

/**
 * Props for the `Layout.ColDiv` sub-component.
 */
export interface ColDivProps
    extends React.HTMLAttributes<HTMLDivElement>,
        ColProps {
    "data-testid"?: string;
}
