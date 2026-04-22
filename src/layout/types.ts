import { DefaultTheme } from "styled-components";
import { AddOne, Range } from "../util/utility-types";

interface CommonLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The content to render inside the layout element. */
    children: React.ReactNode;
    /** Sets the `data-testid` attribute for targeting the element in automated tests. */
    "data-testid"?: string | undefined;
    /** Allows the element to stretch beyond its max-width constraint. @default false */
    stretch?: boolean | undefined;
}

export type ContainerType = "flex" | "flex-column" | "grid";

/** Props for the Container layout component. */
export interface ContainerProps extends CommonLayoutProps {
    /** The type of display style. Values: "flex" | "flex-column" | "grid" */
    type?: ContainerType | undefined;
}

/** Props for the Section layout component. */
export interface SectionProps extends CommonLayoutProps {}

/** Props for the Content layout component. */
export interface ContentProps extends ContainerProps {}

export type ColSpan<Max extends number | undefined> = Max extends number
    ? Range<Max> | [Range<AddOne<Max>>, Range<AddOne<Max>> | -1] | undefined
    : number | [number, number] | undefined;

export type BreakpointSpan<
    Breakpoint extends keyof DefaultTheme["maxColumns"]
> = DefaultTheme["maxColumns"] extends Record<
    Breakpoint,
    infer Max extends number
>
    ? ColSpan<Max>
    : number | [number, number] | undefined;
/** Column span configuration for each responsive breakpoint. */
export interface ColProps {
    /**
     * Specifies the number of columns to be spanned across for any breakpoint.
     * If an array is specified, the format is [startCol, endCol].
     */
    xxlCols?: BreakpointSpan<"xxl">;
    /** Column span at the xl breakpoint. Supports a count or [startCol, endCol]. */
    xlCols?: BreakpointSpan<"xl">;
    /** Column span at the lg breakpoint. Supports a count or [startCol, endCol]. */
    lgCols?: BreakpointSpan<"lg">;
    /** Column span at the md breakpoint. Supports a count or [startCol, endCol]. */
    mdCols?: BreakpointSpan<"md">;
    /** Column span at the sm breakpoint. Supports a count or [startCol, endCol]. */
    smCols?: BreakpointSpan<"sm">;
    /** Column span at the xs breakpoint. Supports a count or [startCol, endCol]. */
    xsCols?: BreakpointSpan<"xs">;
    /** Column span at the xxs breakpoint. Supports a count or [startCol, endCol]. */
    xxsCols?: BreakpointSpan<"xxs">;
}
/** Props for the ColDiv grid column component. */
export interface ColDivProps
    extends React.HTMLAttributes<HTMLDivElement>,
        ColProps {
    /** Sets the `data-testid` attribute for targeting the element in automated tests. */
    "data-testid"?: string;
}
