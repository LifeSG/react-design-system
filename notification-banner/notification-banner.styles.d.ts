interface WrapperStyleProps {
    $sticky: boolean;
    $clickable: boolean;
}
interface ContentStyleProps {
    $maxCollapsedHeight?: number;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, WrapperStyleProps, never>;
export declare const Container: import("styled-components").StyledComponent<(props: import("../layout").ContentProps & import("react").RefAttributes<HTMLDivElement>) => import("react").ReactElement | null, import("styled-components").DefaultTheme, {}, never>;
export declare const ContentContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Content: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ContentStyleProps, never>;
export declare const ContentLink: import("styled-components").StyledComponent<{
    ({ external, children, ...rest }: import("../typography").TypographyLinkProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const StyledIconButton: import("styled-components").StyledComponent<(props: import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement | null, import("styled-components").DefaultTheme, {}, never>;
export declare const StyledIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const ActionButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
export declare const AccessibleBannerButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
export {};
