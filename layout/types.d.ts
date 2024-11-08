/// <reference types="react" />
import { DefaultTheme } from "styled-components";
import { AddOne, Range } from "../util/utility-types";
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
export interface SectionProps extends CommonLayoutProps {
}
export interface ContentProps extends ContainerProps {
}
export type ColSpan<Max extends number | undefined> = Max extends number ? Range<Max> | [Range<AddOne<Max>>, Range<AddOne<Max>>] | undefined : number | [number, number] | undefined;
export type BreakpointSpan<Breakpoint extends keyof DefaultTheme["maxColumns"]> = DefaultTheme["maxColumns"] extends Record<Breakpoint, infer Max extends number> ? ColSpan<Max> : number | [number, number] | undefined;
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
export interface ColDivProps extends React.HTMLAttributes<HTMLDivElement>, ColProps {
    "data-testid"?: string;
}
export {};
