import type { ToastType } from "./types";
interface StyleProps {
    $type: ToastType;
    $fixed?: boolean | undefined;
}
export declare const Wrapper: import("@react-spring/web").AnimatedComponent<import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof StyleProps> & StyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof StyleProps> & StyleProps, never>>> & string>;
export declare const ContentWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const TextIconWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof StyleProps> & StyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof StyleProps> & StyleProps, never>>> & string;
export declare const TextContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const Title: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, keyof StyleProps> & StyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, keyof StyleProps> & StyleProps, never>>> & string;
export declare const DescriptionMD: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>, keyof StyleProps> & StyleProps, never> & Partial<Pick<import("styled-components").FastOmit<Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>, keyof StyleProps> & StyleProps, never>>> & string & Omit<(props: Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const DescriptionBL: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>, keyof StyleProps> & StyleProps, never> & Partial<Pick<import("styled-components").FastOmit<Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>, keyof StyleProps> & StyleProps, never>>> & string & Omit<(props: Omit<any, "ref"> & {
    weight?: import("..").TypographyWeight | undefined;
    inline?: boolean | undefined;
    paragraph?: boolean | undefined;
    maxLines?: number | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("react").RefAttributes<HTMLParagraphElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const ActionButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("..").ButtonProps & import("react").RefAttributes<HTMLButtonElement>, never> & Partial<Pick<import("..").ButtonProps & import("react").RefAttributes<HTMLButtonElement>, never>>> & string & Omit<(props: import("..").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const DismissButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>, keyof StyleProps> & StyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>, keyof StyleProps> & StyleProps, never>>> & string & Omit<(props: import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export {};
