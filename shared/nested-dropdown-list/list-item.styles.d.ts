/// <reference types="react" />
import { TruncateType } from "./types";
interface ListProps {
    $expanded: boolean;
}
interface ListItemSelectorProps {
    $selected: boolean;
    $level_3: boolean;
}
interface LabelProps {
    $truncateType?: TruncateType;
}
interface ArrowButtonProps extends Pick<ListProps, "$expanded"> {
}
export declare const Category: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ListItemSelector: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, ListItemSelectorProps, never>;
export declare const Label: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, LabelProps, never>;
export declare const Bold: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {}, never>;
export declare const TruncateContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TruncateFirstLine: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TruncateSecondLine: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ArrowButton: import("styled-components").StyledComponent<(props: import("../../icon-button").IconButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, ArrowButtonProps, never>;
export declare const TriangleIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const Title: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
export declare const List: import("styled-components").StyledComponent<"ul", import("styled-components").DefaultTheme, ListProps, never>;
export {};
