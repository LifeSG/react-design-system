interface WrapperStyleProps {
    $background: boolean;
}
interface ContentStyleProps {
    $stretch: boolean | undefined;
}
export declare const Wrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("../layout").ContentProps & import("react").RefAttributes<HTMLDivElement>, WrapperStyleProps>> & string & Omit<(props: import("../layout").ContentProps & import("react").RefAttributes<HTMLDivElement>) => import("react").ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const Title: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("../typography").TypographyProps & {
    ref?: import("react").RefObject<HTMLHeadingElement> | undefined;
}, ContentStyleProps>> & string;
export declare const Description: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("../typography").TypographyProps & {
    ref?: import("react").RefObject<HTMLParagraphElement> | undefined;
}, ContentStyleProps>> & string;
export declare const CustomSection: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ContentStyleProps>> & string;
export declare const GridUl: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, ContentStyleProps>> & string;
export {};
