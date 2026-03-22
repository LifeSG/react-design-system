/**
 * Shared layout props for all layout container components.
 */
export interface CommonLayoutProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
    /** When `true`, the container content fills full width without a max-width cap. */
    stretch?: boolean;
}

/** Props for the Layout.Section component. */
export interface SectionProps extends CommonLayoutProps {}

export type ContainerType = "flex" | "flex-column" | "grid";

/**
 * Props for the Layout.Container component - flex or grid wrapper.
 * @keywords grid container, flex layout, page wrapper, column layout, responsive container
 */
export interface ContainerProps extends CommonLayoutProps {
    /** The type of display style. Values: "flex" | "flex-column" | "grid" */
    type?: ContainerType | undefined;
}

/** Props for the Layout.Content component (same as ContainerProps). */
export interface ContentProps extends ContainerProps {}

export type DivRef = React.Ref<HTMLDivElement>;

type MobileCol = 1 | 2 | 3 | 4;
type MobileColRange = MobileCol | 5;

type TabletCol = MobileCol | 5 | 6 | 7 | 8;
type TabletColRange = TabletCol | 9;

type DesktopCol = TabletCol | 9 | 10 | 11 | 12;
type DesktopColRange = DesktopCol | 13;

export interface ColProps {
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
    /**
     * Specifies the number of columns to be span across in desktop viewports.
     * If an array is specified, the format is as such [startCol, endCol].
     *
     * If all column props are not specified, the div will span across a single
     * column.
     */
    desktopCols?: DesktopCol | [DesktopColRange, DesktopColRange] | undefined;
}

export interface ColDivProps
    extends React.HTMLAttributes<HTMLDivElement>,
        ColProps {
    "data-testid"?: string | undefined;
}
