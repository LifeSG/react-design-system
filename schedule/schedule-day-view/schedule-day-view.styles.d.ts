interface HeaderContainerStyleProps {
    $isMobile: boolean;
}
interface ServiceContainerStyleProps {
    $columnCount: number;
}
interface SlotGridStyleProps {
    $columnCount: number;
}
interface SlotCellStyleProps {
    $dashed?: boolean;
}
interface SlotContentStyleProps {
    $status?: string;
    $duration?: number;
    $offsetTop?: number;
}
interface TimelineStyleProps {
    $top: number;
}
export declare const ArrowButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../..").ButtonProps & import("react").RefAttributes<HTMLButtonElement>, never> & Partial<Pick<import("../..").ButtonProps & import("react").RefAttributes<HTMLButtonElement>, never>>> & string & Omit<((props: import("../..").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null) & {
    Default: (props: import("../..").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null;
    Small: (props: import("../..").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null;
    Large: (props: import("../..").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null;
}, keyof import("react").Component<any, {}, any>>;
export declare const ArrowContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const ScheduleContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const LoadingContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const HeaderContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$isMobile"> & HeaderContainerStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$isMobile"> & HeaderContainerStyleProps, never>>> & string;
export declare const BlankCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const ServiceContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$columnCount"> & ServiceContainerStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$columnCount"> & ServiceContainerStyleProps, never>>> & string;
export declare const ServiceColumn: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const ServiceHeaderContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const Title: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<any, "ref"> & {
    weight?: import("../..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>, never> & Partial<Pick<Omit<any, "ref"> & {
    weight?: import("../..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>, never>>> & string & Omit<(props: Omit<any, "ref"> & {
    weight?: import("../..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const Description: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<any, "ref"> & {
    weight?: import("../..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>, never> & Partial<Pick<Omit<any, "ref"> & {
    weight?: import("../..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>, never>>> & string & Omit<(props: Omit<any, "ref"> & {
    weight?: import("../..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const BodyContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const SlotGrid: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$columnCount"> & SlotGridStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$columnCount"> & SlotGridStyleProps, never>>> & string;
export declare const SlotColumn: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const SlotCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$dashed"> & SlotCellStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$dashed"> & SlotCellStyleProps, never>>> & string;
export declare const SlotContent: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<Omit<any, "ref"> & {
    weight?: import("../..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>, keyof SlotContentStyleProps> & SlotContentStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<Omit<any, "ref"> & {
    weight?: import("../..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>, keyof SlotContentStyleProps> & SlotContentStyleProps, never>>> & string & Omit<(props: Omit<any, "ref"> & {
    weight?: import("../..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const SlotTime: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>>> & string;
export declare const SlotAvailability: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>>> & string;
export declare const Timeline: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$top"> & TimelineStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$top"> & TimelineStyleProps, never>>> & string;
export declare const EmptySlot: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export {};
