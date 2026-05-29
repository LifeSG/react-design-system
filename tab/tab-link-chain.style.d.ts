interface LabelStyleProps {
    $active?: boolean;
}
interface ChainStyleProps {
    $fullWidthIndicatorLine?: boolean;
}
interface ChainItemStyleProps {
    $active?: boolean;
    $width?: string;
}
interface ChainLinkStyleProps {
    $reversed: boolean;
}
export declare const Chain: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "$fullWidthIndicatorLine"> & ChainStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "$fullWidthIndicatorLine"> & ChainStyleProps, never>>> & string;
export declare const ChainItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, keyof ChainItemStyleProps> & ChainItemStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, keyof ChainItemStyleProps> & ChainItemStyleProps, never>>> & string;
export declare const ChainLink: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$reversed"> & ChainLinkStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$reversed"> & ChainLinkStyleProps, never>>> & string;
export declare const LabelContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const Label: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$active"> & LabelStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$active"> & LabelStyleProps, never>>> & string;
export declare const BoldLabel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "$active"> & LabelStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "$active"> & LabelStyleProps, never>>> & string;
export declare const CustomFadeWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../shared/fade-wrapper").FadeWrapperProps & import("react").RefAttributes<import("../shared/fade-wrapper").FadeWrapperRef>, never> & Partial<Pick<import("../shared/fade-wrapper").FadeWrapperProps & import("react").RefAttributes<import("../shared/fade-wrapper").FadeWrapperRef>, never>>> & string & Omit<(props: import("../shared/fade-wrapper").FadeWrapperProps & import("react").RefAttributes<import("../shared/fade-wrapper").FadeWrapperRef>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export {};
