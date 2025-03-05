/// <reference types="react" />
import { InputStyleType } from "./types";
export interface InputStyleProps {
    $showClear?: boolean | undefined;
    $styleType?: InputStyleType | undefined;
}
export declare const InputElement: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, import("../shared/input-wrapper").InputStyleProps & InputStyleProps, never>;
export declare const ClearButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, import("../shared/input-wrapper").InputStyleProps & InputStyleProps, never>;
export declare const ClearIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const NoBorderWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const DefaultWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../shared/input-wrapper").InputWrapperStyleProps, never>;
