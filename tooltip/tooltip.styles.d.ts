import { TooltipPosition } from "./types";
interface TooltipStyleProps {
    position?: TooltipPosition;
    visible?: boolean;
}
export declare const BubbleWrap: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, TooltipStyleProps>> & string;
export declare const Bubble: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../card/types").CardProps, never>> & string & Omit<({ children, ...otherProps }: import("../card/types").CardProps) => JSX.Element, keyof import("react").Component<any, {}, any>>;
export declare const Arrow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, TooltipStyleProps>> & string;
export declare const HOCWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export {};
