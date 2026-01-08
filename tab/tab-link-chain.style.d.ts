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
export declare const Chain: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, ChainStyleProps>> & string;
export declare const ChainItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, ChainItemStyleProps>> & string;
export declare const ChainLink: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, never>> & string;
export declare const Label: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("..").TypographyProps & {
    ref?: import("react").RefObject<HTMLParagraphElement> | undefined;
}, LabelStyleProps>> & string;
export declare const BoldLabel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("..").TypographyProps & {
    ref?: import("react").RefObject<HTMLParagraphElement> | undefined;
}, LabelStyleProps>> & string;
export declare const CustomFadeWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../shared/fade-wrapper").FadeWrapperProps & import("react").RefAttributes<import("../shared/fade-wrapper").FadeWrapperRef>, never>> & string & Omit<(props: import("../shared/fade-wrapper").FadeWrapperProps & import("react").RefAttributes<import("../shared/fade-wrapper").FadeWrapperRef>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export {};
