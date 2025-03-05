/// <reference types="react" />
export type ItemFocusType = "self" | "others" | "none";
interface ItemStyleProps {
    $sortable: boolean;
    $disabled?: boolean | undefined;
    $focusType: ItemFocusType;
}
interface DragHandleIconStyleProps {
    $disabled?: boolean | undefined;
    $active?: boolean | undefined;
}
interface BoxStyleProps {
    $error?: boolean | undefined;
    $disabled?: boolean | undefined;
    $focused?: boolean | undefined;
    $loading?: boolean | undefined;
    $editable?: boolean | undefined;
}
interface ContentSectionStyleProps {
    $hasThumbnail?: boolean | undefined;
}
interface ActionContainerStyleProps {
    $editable?: boolean | undefined;
    $error?: boolean | undefined;
    $loading?: boolean | undefined;
}
interface FileSizeSectionStyleProps {
    $hideInMobile?: boolean | undefined;
}
export declare const Item: import("styled-components").StyledComponent<"li", import("styled-components").DefaultTheme, ItemStyleProps, never>;
export declare const DragHandleIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, DragHandleIconStyleProps, never>;
export declare const Box: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, BoxStyleProps, never>;
export declare const ContentSection: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ContentSectionStyleProps, never>;
export declare const NameSection: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ExtendedNameSection: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const FileSizeSection: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, FileSizeSectionStyleProps, never>;
export declare const ItemText: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../../typography").TypographyProps, never>;
export declare const ItemDescriptionText: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../../typography").TypographyProps, never>;
export declare const BaseErrorMessage: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../../typography").TypographyProps, never>;
export declare const DesktopErrorMessage: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../../typography").TypographyProps, never>;
export declare const MobileErrorMessage: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../../typography").TypographyProps, never>;
export declare const ActionContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ActionContainerStyleProps, never>;
export declare const IconButton: import("styled-components").StyledComponent<(props: import("../../icon-button").IconButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, {}, never>;
export declare const ErrorIconButton: import("styled-components").StyledComponent<(props: import("../../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, {}, never>;
export {};
