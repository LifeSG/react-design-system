export type MainButtonStyle = "default" | "disabled" | "secondary" | "light" | "link";
export type MainButtonSize = "default" | "small" | "large";
export interface MainStyleProps {
    $buttonStyle: MainButtonStyle;
    $buttonSizeStyle?: MainButtonSize | undefined;
    $buttonIsDanger?: boolean;
}
export declare const Main: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, MainStyleProps>> & string;
export declare const Spinner: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../shared/component-loading-spinner").ComponentLoadingSpinnerProps, never>> & string & Omit<({ color, className, size, }: import("../shared/component-loading-spinner").ComponentLoadingSpinnerProps) => JSX.Element, keyof import("react").Component<any, {}, any>>;
