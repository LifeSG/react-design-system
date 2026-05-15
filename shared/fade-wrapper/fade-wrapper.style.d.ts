interface FadeProps {
    $backgroundColor?: string[];
    $position?: "left" | "right";
    $showIndicator?: boolean;
}
interface IndicatorButtonProps {
    $position?: "left" | "right";
}
export declare const Wrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const Fade: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof FadeProps> & FadeProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof FadeProps> & FadeProps, never>>> & string;
export declare const Content: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const FadeIndicatorButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("../clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>, "$position"> & IndicatorButtonProps, never> & Partial<Pick<import("styled-components").FastOmit<import("../clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>, "$position"> & IndicatorButtonProps, never>>> & string & Omit<(props: import("../clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export {};
