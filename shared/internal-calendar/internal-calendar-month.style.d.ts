import { MonthVariant } from "./internal-calendar-month";
interface StyleProps {
    $variant: MonthVariant;
    $disabledDisplay?: boolean;
    $interactive?: boolean;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const MonthCell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export {};
