/// <reference types="react" />
interface ColumnHeaderRowProps {
    $numOfColumns: number;
    $isScrolled: boolean;
}
interface RowHeaderColumnProps {
    $numOfRows: number;
    $isScrolled: boolean;
}
interface TimeTableContainerProps {
    $loading: boolean;
    $allRecordsLoaded: boolean;
}
interface RowColumnHeaderProps {
    $isScrolledY: boolean;
    $isScrolledX: boolean;
}
interface RowHeaderProps {
    $isScrolled: boolean;
}
interface ClickableRowHeaderTitleProps {
    $isClickable: boolean;
}
interface RowHeaderSubtitleProps {
    $show: boolean;
}
interface LoadingCellWrapperProps {
    $width: number;
}
interface ContentContainerPopoverProps {
    $numOfRows: number;
}
interface LoaderProps {
    $isEmptyContent: boolean;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const EmptyTableContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TimeTableContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TimeTableContainerProps, never>;
export declare const RowColumnHeader: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, RowColumnHeaderProps, never>;
export declare const RowHeaderColumn: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, RowHeaderColumnProps, never>;
export declare const ColumnHeaderRow: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ColumnHeaderRowProps, never>;
export declare const ColumnHeader: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ColumnHeaderTitle: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../typography").TypographyProps, never>;
export declare const ContentContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ContentContainerPopoverProps, never>;
export declare const RowHeader: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, RowHeaderProps, never>;
export declare const ClickableRowHeaderTitle: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../typography").TypographyProps & ClickableRowHeaderTitleProps, never>;
export declare const RowHeaderSubtitle: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../typography").TypographyProps & RowHeaderSubtitleProps, never>;
export declare const Loader: import("styled-components").StyledComponent<({ color, ...otherProps }: import("../animations").CustomisableAnimationProps) => import("react/jsx-runtime").JSX.Element, import("styled-components").DefaultTheme, LoaderProps, never>;
export declare const NoResultsFound: import("styled-components").StyledComponent<({ type, img, title, description, actionButton, additionalProps, imageOnly, illustrationScheme, ...otherProps }: import("../error-display").ErrorDisplayProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export declare const LoadingWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const LoadingCell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, LoadingCellWrapperProps, never>;
export declare const LoadingBar: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const StyledPopoverTrigger: import("styled-components").StyledComponent<({ children, popoverContent, trigger: _trigger, position, zIndex, rootNode, customOffset, delay, onPopoverAppear, onPopoverDismiss, ...otherProps }: import("../popover-v2").PopoverV2TriggerProps) => import("react/jsx-runtime").JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export {};
