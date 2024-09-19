import { DefaultTheme } from "styled-components";

interface CommonLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    "data-testid"?: string | undefined;
    stretch?: boolean | undefined;
}

export type ContainerType = "flex" | "flex-column" | "grid";

export interface ContainerProps extends CommonLayoutProps {
    /** The type of display style. Values: "flex" | "flex-column" | "grid" */
    type?: ContainerType | undefined;
}

export interface SectionProps extends CommonLayoutProps {}

export interface ContentProps extends ContainerProps {}

// does recursion till it gets the max col number
type Range<
    N extends number,
    Result extends number[] = []
> = Result["length"] extends N
    ? Exclude<Result[number] | N, 0>
    : Range<N, [...Result, Result["length"]]>;

//add one to the range for array
type AddOne<
    N extends number,
    Result extends number[] = []
> = Result["length"] extends N
    ? [...Result, Result["length"]]["length"]
    : AddOne<N, [...Result, Result["length"]]>;

// uses the range and if there is no max defined it just becomes a number
export type ColSpan<Max extends number | undefined> = Max extends number
    ? Range<Max> | [Range<AddOne<Max>>, Range<AddOne<Max>>] | undefined
    : number | [number, number] | undefined;

// using generic breakpointspan to extract column span for a specific breakpoint
export type BreakpointSpan<
    Breakpoint extends keyof DefaultTheme["maxColumns"]
> = DefaultTheme["maxColumns"] extends Record<
    Breakpoint,
    infer Max extends number
>
    ? ColSpan<Max>
    : number | [number, number] | undefined;

// refactor ColProps to use BreakpointSpan
export interface ColProps {
    /**
     * Specifies the number of columns to be spanned across for any breakpoint.
     * If an array is specified, the format is [startCol, endCol].
     */
    xxlCols?: BreakpointSpan<"xxl">;
    xlCols?: BreakpointSpan<"xl">;
    lgCols?: BreakpointSpan<"lg">;
    mdCols?: BreakpointSpan<"md">;
    smCols?: BreakpointSpan<"sm">;
    xsCols?: BreakpointSpan<"xs">;
    xxsCols?: BreakpointSpan<"xxs">;
}
export interface ColDivProps
    extends React.HTMLAttributes<HTMLDivElement>,
        ColProps {
    "data-testid"?: string;

    xxlMargin?: string | number;
    xxlGutter?: string | number;
    xlMargin?: string | number;
    xlGutter?: string | number;
    lgMargin?: string | number;
    lgGutter?: string | number;
    mdMargin?: string | number;
    mdGutter?: string | number;
    smMargin?: string | number;
    smGutter?: string | number;
    xsMargin?: string | number;
    xsGutter?: string | number;
    xxsMargin?: string | number;
    xxsGutter?: string | number;
}
