/// <reference types="react" />
import { InputGroupAddonPosition } from "./types";
export interface AddonStyleProps {
    disabled?: boolean;
    $error?: boolean;
    $readOnly?: boolean;
    $position?: InputGroupAddonPosition;
}
export declare const Container: import("styled-components").StyledComponent<"div", any, AddonStyleProps, never>;
export declare const MainInput: import("styled-components").StyledComponent<(props: import("..").InputProps & import("react").RefAttributes<HTMLInputElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, any, {}, never>;
export declare const AddOnContainer: import("styled-components").StyledComponent<"div", any, AddonStyleProps, never>;
