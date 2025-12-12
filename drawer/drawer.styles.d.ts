interface StyleProps {
    $show?: boolean | undefined;
}
export declare const Container: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StyleProps>> & string;
export declare const Header: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const CloseButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>, never>> & string & Omit<(props: import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const Heading: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../typography").TypographyProps & {
    ref?: import("react").RefObject<HTMLHeadingElement> | undefined;
}, never>> & string;
export declare const Content: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export {};
