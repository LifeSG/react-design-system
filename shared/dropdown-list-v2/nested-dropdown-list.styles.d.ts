/// <reference types="react" />
interface ListItemStyleProps {
    $active?: boolean;
    $visible?: boolean;
    $toggleable?: boolean;
}
interface IndentStyleProps {
    $level?: number;
}
interface IndicatorStyleProps {
    $hasNestedSiblings?: boolean;
}
interface ExpandButtonStyleProps {
    $expanded?: boolean;
}
export declare const ListItemContainer: import("styled-components").StyledComponent<"li", import("styled-components").DefaultTheme, ListItemStyleProps, never>;
export declare const ListItem: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ListItemStyleProps, never>;
export declare const Indent: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, IndentStyleProps, never>;
export declare const ExpandButton: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ExpandButtonStyleProps, never>;
export declare const UnexpandableIndicator: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const SelectionIndicator: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, IndicatorStyleProps, never>;
export declare const SelectedIndicator: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const CheckboxMixedIndicator: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export {};
