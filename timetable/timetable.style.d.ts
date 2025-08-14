interface ColumnHeaderRowProps {
    $numOfColumns: number;
    $isScrolled: boolean;
}
interface RowHeaderColumnProps {
    $numOfRows: number;
    $isScrolled: boolean;
}
interface TimeTableContainerProps {
    $loading: boolean | undefined;
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
export declare const Container: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const EmptyTableContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const TimeTableContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, TimeTableContainerProps>> & string;
export declare const RowColumnHeader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, RowColumnHeaderProps>> & string;
export declare const RowHeaderColumn: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, RowHeaderColumnProps>> & string;
export declare const ColumnHeaderRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ColumnHeaderRowProps>> & string;
export declare const ColumnHeader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ColumnHeaderTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & {
    ref?: ((instance: HTMLParagraphElement | null) => void) | import("react").RefObject<HTMLParagraphElement> | null | undefined;
}>, import("../typography").TypographyProps>, keyof import("../typography").TypographyProps> & import("../typography").TypographyProps, never>> & string;
export declare const ContentContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ContentContainerPopoverProps>> & string;
export declare const RowHeader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, RowHeaderProps>> & string;
export declare const ClickableRowHeaderTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & {
    ref?: ((instance: HTMLParagraphElement | null) => void) | import("react").RefObject<HTMLParagraphElement> | null | undefined;
}>, import("../typography").TypographyProps>, keyof import("../typography").TypographyProps> & import("../typography").TypographyProps, ClickableRowHeaderTitleProps>> & string;
export declare const RowHeaderSubtitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & {
    ref?: ((instance: HTMLParagraphElement | null) => void) | import("react").RefObject<HTMLParagraphElement> | null | undefined;
}>, import("../typography").TypographyProps>, keyof import("../typography").TypographyProps> & import("../typography").TypographyProps, RowHeaderSubtitleProps>> & string;
export declare const Loader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("../animations").CustomisableAnimationProps, LoaderProps>> & string & Omit<({ color, ...otherProps }: import("../animations").CustomisableAnimationProps) => import("react/jsx-runtime").JSX.Element, keyof import("react").Component<any, {}, any>>;
export declare const NoResultsFound: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../error-display").ErrorDisplayProps, never>> & string & Omit<({ type, img, title, description, actionButton, additionalProps, imageOnly, illustrationScheme, ...otherProps }: import("../error-display").ErrorDisplayProps) => import("react/jsx-runtime").JSX.Element | null, keyof import("react").Component<any, {}, any>>;
export declare const LoadingWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const LoadingCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, LoadingCellWrapperProps>> & string;
export declare const LoadingBar: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const StyledPopoverTrigger: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../popover-v2").PopoverV2TriggerProps, never>> & string & Omit<({ children, popoverContent, trigger: _trigger, position, zIndex, rootNode, customOffset, delay, onPopoverAppear, onPopoverDismiss, enableFlip, enableResize, overflow, ...otherProps }: import("../popover-v2").PopoverV2TriggerProps) => import("react/jsx-runtime").JSX.Element, keyof import("react").Component<any, {}, any>>;
export {};
