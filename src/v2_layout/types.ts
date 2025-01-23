/** @deprecated */
export interface V2_CommonLayoutProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    "data-testid"?: string | undefined;
    stretch?: boolean;
}

/** @deprecated */
export interface V2_SectionProps extends V2_CommonLayoutProps {}

/** @deprecated */
export type V2_ContainerType = "flex" | "flex-column" | "grid";

/** @deprecated */
export interface V2_ContainerProps extends V2_CommonLayoutProps {
    /** The type of display style. Values: "flex" | "flex-column" | "grid" */
    type?: V2_ContainerType | undefined;
}
/** @deprecated */
export interface V2_ContentProps extends V2_ContainerProps {}

/** @deprecated */
export type V2_DivRef = React.Ref<HTMLDivElement>;

type MobileCol = 1 | 2 | 3 | 4;
type MobileColRange = MobileCol | 5;

type TabletCol = MobileCol | 5 | 6 | 7 | 8;
type TabletColRange = TabletCol | 9;

type DesktopCol = TabletCol | 9 | 10 | 11 | 12;
type DesktopColRange = DesktopCol | 13;

/** @deprecated */
export interface V2_ColProps {
    /** @deprecated */
    /**
     * Specifies the number of columns to be span across in mobile viewports.
     * If an array is specified, the format is as such [startCol, endCol].
     * If `tabletCols` or `desktopCols` are not specified, this
     * setting will be applied to tablet and desktop viewports.
     *
     * If all column props are not specified, the div will span across a single
     * column.
     */
    mobileCols?: MobileCol | [MobileColRange, MobileColRange] | undefined;
    /** @deprecated */
    /**
     * Specifies the number of columns to be span across in tablet viewports.
     * If an array is specified, the format is as such [startCol, endCol].
     * If `desktopCols` are not specified, this setting will be
     * applied to desktop viewports as well.
     *
     * If all column props are not specified, the div will span across a single
     * column.
     */
    tabletCols?: TabletCol | [TabletColRange, TabletColRange] | undefined;
    /** @deprecated */
    /**
     * Specifies the number of columns to be span across in desktop viewports.
     * If an array is specified, the format is as such [startCol, endCol].
     *
     * If all column props are not specified, the div will span across a single
     * column.
     */
    desktopCols?: DesktopCol | [DesktopColRange, DesktopColRange] | undefined;
}

/** @deprecated */
export interface V2_ColDivProps
    extends React.HTMLAttributes<HTMLDivElement>,
        V2_ColProps {
    "data-testid"?: string | undefined;
}
