interface ContentSectionStyleProps {
    $hasThumbnail?: boolean | undefined;
}
export declare const Item: import("styled-components").StyledComponent<"li", import("styled-components").DefaultTheme, {}, never>;
export declare const Box: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ContentSection: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ContentSectionStyleProps, never>;
export declare const NameSection: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ExtendedNameSection: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const FileSizeSection: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ItemNameText: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ItemDescriptionText: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const DesktopErrorMessage: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const MobileErrorMessage: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Spinner: import("styled-components").StyledComponent<({ color, className, size, }: import("../../shared/component-loading-spinner/component-loading-spinner").ComponentLoadingSpinnerProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export declare const ActionContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const IconButton: import("styled-components").StyledComponent<(props: import("../../icon-button").IconButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement | null, import("styled-components").DefaultTheme, {}, never>;
export declare const ThumbnailContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Thumbnail: import("styled-components").StyledComponent<({ src, alt, className, "data-testid": testId, }: import("../../shared/image-with-fallback/image-with-fallback").ImageWithFallbackProps) => import("react/jsx-runtime").JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export {};
