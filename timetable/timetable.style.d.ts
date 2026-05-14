interface ColumnHeaderRowProps {
    $numOfColumns: number;
    $intervalWidth: number;
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
interface LoaderProps {
    $isEmptyContent: boolean;
}
export declare const Container: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const EmptyTableContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const TimeTableContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof TimeTableContainerProps> & TimeTableContainerProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof TimeTableContainerProps> & TimeTableContainerProps, never>>> & string;
export declare const RowColumnHeader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof RowColumnHeaderProps> & RowColumnHeaderProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof RowColumnHeaderProps> & RowColumnHeaderProps, never>>> & string;
export declare const TimeTableHeaderRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const ColumnHeaderRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof ColumnHeaderRowProps> & ColumnHeaderRowProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof ColumnHeaderRowProps> & ColumnHeaderRowProps, never>>> & string;
export declare const ColumnHeader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const ColumnHeaderTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>, never> & Partial<Pick<Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>, never>>> & string & Omit<(props: Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const TimeTableBody: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const TimeTableRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const RowHeader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$isScrolled"> & RowHeaderProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$isScrolled"> & RowHeaderProps, never>>> & string;
export declare const ClickableRowHeaderTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>, "$isClickable"> & ClickableRowHeaderTitleProps, never> & Partial<Pick<import("styled-components").FastOmit<Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>, "$isClickable"> & ClickableRowHeaderTitleProps, never>>> & string & Omit<(props: Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const RowHeaderSubtitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>, "$show"> & RowHeaderSubtitleProps, never> & Partial<Pick<import("styled-components").FastOmit<Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>, "$show"> & RowHeaderSubtitleProps, never>>> & string & Omit<(props: Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const Loader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("..").CustomisableAnimationProps, "$isEmptyContent"> & LoaderProps, never> & Partial<Pick<import("styled-components").FastOmit<import("..").CustomisableAnimationProps, "$isEmptyContent"> & LoaderProps, never>>> & string & Omit<({ className, color, ...otherProps }: import("..").CustomisableAnimationProps) => import("react/jsx-runtime").JSX.Element, keyof import("react").Component<any, {}, any>>;
export declare const NoResultsFound: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("..").ErrorDisplayProps, never> & Partial<Pick<import("..").ErrorDisplayProps, never>>> & string & Omit<({ type, img, title, description, actionButton, additionalProps, imageOnly, illustrationScheme, className, ...otherProps }: import("..").ErrorDisplayProps) => import("react/jsx-runtime").JSX.Element | null, keyof import("react").Component<any, {}, any>>;
export declare const LoadingWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const LoadingCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$width"> & LoadingCellWrapperProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$width"> & LoadingCellWrapperProps, never>>> & string;
export declare const LoadingBar: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const StyledPopoverTrigger: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("..").PopoverV2TriggerProps, never> & Partial<Pick<import("..").PopoverV2TriggerProps, never>>> & string & Omit<({ children, popoverContent, trigger: _trigger, position, zIndex, rootNode, customOffset, delay, onPopoverAppear, onPopoverDismiss, popoverAriaLabel, enableFlip, enableResize, overflow, triggerOnFocus, isModal, className, ...otherProps }: import("..").PopoverV2TriggerProps) => import("react/jsx-runtime").JSX.Element, keyof import("react").Component<any, {}, any>>;
export {};
