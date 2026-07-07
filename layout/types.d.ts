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
export type ColSpan = number | [number, number] | undefined;
export interface ColProps {
    /**
     * Specifies the number of columns to be spanned across for any breakpoint.
     * If an array is specified, the format is [startCol, endCol].
     */
    xxlCols?: ColSpan;
    xlCols?: ColSpan;
    lgCols?: ColSpan;
    mdCols?: ColSpan;
    smCols?: ColSpan;
    xsCols?: ColSpan;
    xxsCols?: ColSpan;
}
export interface ColDivProps extends React.HTMLAttributes<HTMLDivElement>, ColProps {
    "data-testid"?: string;
}
export {};
