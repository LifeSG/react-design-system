interface StyleProps {
    $show: boolean;
    $viewHeight?: number | undefined;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Container: import("styled-components").StyledComponent<"nav", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const Content: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TopBar: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const CloseIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const CloseButton: import("styled-components").StyledComponent<(props: import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement | null, import("styled-components").DefaultTheme, {}, never>;
export {};
