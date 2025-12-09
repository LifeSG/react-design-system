import { DropdownVariantType } from "./types";
interface StyleProps {
    $expanded?: boolean;
    $variant?: DropdownVariantType;
}
export declare const Selector: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, import("../input-wrapper/input-wrapper").InputStyleProps & StyleProps, never>;
export declare const IconContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export {};
