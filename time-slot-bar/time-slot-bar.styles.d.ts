/// <reference types="react" />
import { Direction, SlotStyle } from "./types";
export declare const CELL_WIDTH = 44;
interface ArrowStyleProps {
    $direction?: Direction;
}
interface TimeSlotStyleProps {
    $type?: "default" | "vertical";
    $width?: number;
    $left?: number;
    $styleType: SlotStyle;
    $bgColor: string;
    $bgColor2?: string;
    $clickable?: boolean;
}
interface CellTextStyleProps {
    $slotWidth: number;
    $color?: string;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ArrowButton: import("styled-components").StyledComponent<(props: import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, ArrowStyleProps, never>;
export declare const ArrowIconRight: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const ArrowIconLeft: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const TimeSlotBarContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TimeMarkerWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TimeSlotWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TimeMarker: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    isHour: boolean;
}, never>;
export declare const TimeLabel: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, import("../text").TextProps, never>;
export declare const TimeSlot: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TimeSlotStyleProps, never>;
export declare const Border: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const CellText: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, import("../text").TextProps & CellTextStyleProps, never>;
export {};
