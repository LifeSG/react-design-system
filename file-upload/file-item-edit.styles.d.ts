/// <reference types="react" />
interface ActionButtonSectionStyleProps {
    $thumbnail?: boolean | undefined;
}
export declare const Item: import("styled-components").StyledComponent<"li", import("styled-components").DefaultTheme, {}, never>;
export declare const ContentSection: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const DetailsSection: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const NameSection: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const FileNameText: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../typography").TypographyProps, never>;
export declare const FileSizeText: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../typography").TypographyProps, never>;
export declare const ActionButtonsSection: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ActionButtonSectionStyleProps, never>;
export declare const ActionButton: import("styled-components").StyledComponent<(props: import("..").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, {}, never>;
export {};
