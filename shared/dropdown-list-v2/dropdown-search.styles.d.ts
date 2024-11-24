/// <reference types="react" />
import { DropdownVariantType } from "../dropdown-list/types";
import { InputStyleProps } from "../input-wrapper/input-wrapper";
export interface StyleProps {
    $variant?: DropdownVariantType | undefined;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const SearchBox: import("styled-components").StyledComponent<"label", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const SearchInput: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, InputStyleProps, never>;
export declare const SearchIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, StyleProps, never>;
export declare const ClearButton: import("styled-components").StyledComponent<(props: import("../clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, StyleProps, never>;
