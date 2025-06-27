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
export declare const DisplayContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const Selector: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, import("../shared/dropdown-wrapper/dropdown-wrapper.styles").SelectorStyleProps, never>;
export declare const SelectorReadOnly: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const IconContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const StyledChevronIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const LabelContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ValueLabel: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../typography").TypographyProps, never>;
export declare const PlaceholderLabel: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../typography").TypographyProps, never>;
export declare const Divider: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, DividerStyleProps, never>;
export {};
