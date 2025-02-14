/// <reference types="react" />
import { InputWrapperStyleProps } from "../shared/input-wrapper";
import { InputGroupAddonPosition } from "./types";
export interface AddonStyleProps {
    $disabled?: boolean;
    $error?: boolean;
    $readOnly?: boolean;
    $position?: InputGroupAddonPosition;
}
export declare const AddonWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, InputWrapperStyleProps, never>;
export declare const NoAddonWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, InputWrapperStyleProps & AddonStyleProps, never>;
export declare const MainInput: import("styled-components").StyledComponent<(props: import("..").InputProps & import("react").RefAttributes<HTMLInputElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, {}, never>;
export declare const LabelAddonContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, AddonStyleProps, never>;
