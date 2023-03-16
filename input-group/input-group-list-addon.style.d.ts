/// <reference types="react" />
import { InputGroupAddonPosition } from "./types";
interface StyleProps {
    disabled?: boolean;
    $readOnly?: boolean;
    $expanded?: boolean;
    $position?: InputGroupAddonPosition;
}
interface DividerStyleProps {
    $readOnly?: boolean;
    $position?: InputGroupAddonPosition;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ElementBoundary: import("styled-components").StyledComponent<"div", any, import("../input-select/input-select.styles").InputSelectStyleProps, never>;
export declare const DisplayContainer: import("styled-components").StyledComponent<"div", any, StyleProps, never>;
export declare const Selector: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare const SelectorReadOnly: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const IconContainer: import("styled-components").StyledComponent<"div", any, StyleProps, never>;
export declare const StyledChevronIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, any, {}, never>;
export declare const LabelContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ValueLabel: import("styled-components").StyledComponent<"p", any, import("..").TextProps, never>;
export declare const PlaceholderLabel: import("styled-components").StyledComponent<"p", any, import("..").TextProps, never>;
export declare const Divider: import("styled-components").StyledComponent<"div", any, DividerStyleProps, never>;
export {};
