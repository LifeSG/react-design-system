import { TimeTableCellType } from "../types";
interface BlockStyleProps {
    $width: number;
    $status: TimeTableCellType;
    $bgColour: string;
    $isClickable?: boolean;
}
interface BlockContainerProps {
    $isOnTheHour: boolean;
}
export declare const BlockContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, BlockContainerProps, never>;
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Gap: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Block: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, BlockStyleProps, never>;
export declare const BlockTitle: import("styled-components").StyledComponent<"h6", import("styled-components").DefaultTheme, import("../../v2_text").V2_TextProps, never>;
export declare const BlockDescription: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, import("../../v2_text").V2_TextProps, never>;
export {};
