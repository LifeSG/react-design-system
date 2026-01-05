/// <reference types="react" />
import { InputStyleProps } from "../input-wrapper/input-wrapper";
import { IconProps } from "./types";
export declare const Container: import("styled-components").StyledComponent<"li", import("styled-components").DefaultTheme, {}, never>;
export declare const SearchInput: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, InputStyleProps, never>;
export declare const SearchIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, IconProps, never>;
export declare const CancelButton: import("styled-components").StyledComponent<(props: import("../clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, IconProps, never>;
