import { YearVariant } from "./internal-calendar-year";
interface StyleProps {
    $disabledDisplay: boolean;
    $interactive: boolean;
    $variant: YearVariant;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const YearCell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export {};
