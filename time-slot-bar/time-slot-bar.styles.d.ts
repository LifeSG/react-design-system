import { ThemeStyleProps } from "../theme/types";
import { Direction, SlotStyle, TimeSlotBarVariant } from "./types";
export declare const getCellWidth: (variant: TimeSlotBarVariant) => 12 | 40;
export declare const getCellHeight: (variant: TimeSlotBarVariant) => 12 | 40;
interface ArrowStyleProps {
    $direction?: Direction;
    $variant: TimeSlotBarVariant;
}
export interface TimeSlotStyleProps {
    $type?: "default" | "vertical";
    $variant: TimeSlotBarVariant;
    $width?: number;
    $left?: number;
    $styleType: SlotStyle;
    $bgColor: string | ((props: ThemeStyleProps) => string);
    $bgColor2?: string | ((props: ThemeStyleProps) => string);
    $clickable?: boolean;
}
interface CellTextStyleProps {
    $slotWidth: number;
    $color?: string;
}
interface TimeMarkerStyleProps {
    $isLongMarker: boolean;
    $variant: TimeSlotBarVariant;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ArrowButton: import("styled-components").StyledComponent<(props: import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement | null, import("styled-components").DefaultTheme, ArrowStyleProps, never>;
export declare const ArrowIconRight: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const ArrowIconLeft: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const TimeSlotBarContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    $variant: TimeSlotBarVariant;
}, never>;
export declare const TimeMarkerWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TimeSlotWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TimeMarker: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TimeMarkerStyleProps, never>;
export declare const TimeLabel: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../typography").TypographyProps, never>;
export declare const TimeSlot: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TimeSlotStyleProps, never>;
export declare const TimeSlotBorder: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    $variant: TimeSlotBarVariant;
}, never>;
export declare const CellText: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../typography").TypographyProps & CellTextStyleProps, never>;
export {};
