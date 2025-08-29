import { SingpassButtonStyleType } from "./types";
export type MainButtonSize = "default" | "small" | "large";
export interface MainStyleProps {
    $buttonStyle: SingpassButtonStyleType;
    $buttonSizeStyle?: MainButtonSize | undefined;
}
export declare const Main: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, MainStyleProps>> & string;
interface SvgContainerProps {
    $buttonSizeStyle?: MainButtonSize | undefined;
}
export declare const SvgContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, SvgContainerProps>> & string;
export {};
