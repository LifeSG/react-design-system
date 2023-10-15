export interface CommonLayoutProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    "data-testid"?: string | undefined;
    stretch?: boolean;
}

export interface SectionProps extends CommonLayoutProps {}

export type ContainerType = "flex" | "flex-column" | "grid";

export interface ContainerProps extends CommonLayoutProps {
    /** The type of display style. Values: "flex" | "flex-column" | "grid" */
    type?: ContainerType | undefined;
}

export interface ContentProps extends ContainerProps {}

export type DivRef = React.Ref<HTMLDivElement>;

type MobileCol = 1 | 2 | 3 | 4;
type MobileColRange = MobileCol | 5;

type TabletCol = MobileCol | 5 | 6 | 7 | 8;
type TabletColRange = TabletCol | 9;

type DesktopCol = TabletCol | 9 | 10 | 11 | 12;
type DesktopColRange = DesktopCol | 13;

export interface ColDivProps extends React.HTMLAttributes<HTMLDivElement> {
    "data-testid"?: string | undefined;
    /**
     * Specifies the number of columns to be span across in mobile viewports.
     * If an array is specified, the format is as such [startCol, endCol].
     * If `tabletCols` or `desktopCols` are not specified, this
     * setting will be applied to tablet and desktop viewports.
     *
     * If all column props are not specified, the div will span across a single
     * column.
     */
    mobileCols?: MobileCol | MobileColRange[] | undefined;
    /**
     * Specifies the number of columns to be span across in tablet viewports.
     * If an array is specified, the format is as such [startCol, endCol].
     * If `desktopCols` are not specified, this setting will be
     * applied to desktop viewports as well.
     *
     * If all column props are not specified, the div will span across a single
     * column.
     */
    tabletCols?: TabletCol | TabletColRange[] | undefined;
    /**
     * Specifies the number of columns to be span across in desktop viewports.
     * If an array is specified, the format is as such [startCol, endCol].
     *
     * If all column props are not specified, the div will span across a single
     * column.
     */
    desktopCols?: DesktopCol | DesktopColRange[] | undefined;
}
