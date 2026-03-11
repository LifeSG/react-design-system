interface CloseButtonProps {
    $insetTop?: string | undefined;
    $insetRight?: string | undefined;
}
export declare const Box: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const CloseButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>, CloseButtonProps>> & string & Omit<(props: import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => React.ReactElement | null, keyof import("react").Component<any, {}, any>>;
export {};
