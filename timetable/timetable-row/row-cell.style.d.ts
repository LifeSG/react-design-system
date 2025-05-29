import { TimeTableCellType } from "../types";
interface BlockStyleProps {
    $width: number;
    $status: TimeTableCellType;
    $mainColor: string;
    $altColor: string;
    $isClickable?: boolean;
}
interface BlockContainerProps {
    $isOnTheHour: boolean;
}
export declare const BlockContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, BlockContainerProps, never>;
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Gap: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Block: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, BlockStyleProps, never>;
export declare const BlockTitle: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../../typography").TypographyProps, never>;
export declare const BlockDescription: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../../typography").TypographyProps, never>;
export {};
