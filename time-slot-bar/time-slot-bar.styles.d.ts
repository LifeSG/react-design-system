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
export declare const Container: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ArrowButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>, ArrowStyleProps>> & string & Omit<(props: import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement | null, keyof import("react").Component<any, {}, any>>;
export declare const ArrowIconRight: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("react").SVGProps<SVGSVGElement>, "ref"> & {
    ref?: ((instance: SVGSVGElement | null) => void) | import("react").RefObject<SVGSVGElement> | null | undefined;
}, never>> & string & Omit<{
    (props: import("react").SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, keyof import("react").Component<any, {}, any>>;
export declare const ArrowIconLeft: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("react").SVGProps<SVGSVGElement>, "ref"> & {
    ref?: ((instance: SVGSVGElement | null) => void) | import("react").RefObject<SVGSVGElement> | null | undefined;
}, never>> & string & Omit<{
    (props: import("react").SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, keyof import("react").Component<any, {}, any>>;
export declare const TimeSlotBarContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $variant: TimeSlotBarVariant;
}>> & string;
export declare const TimeMarkerWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const TimeSlotWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const TimeMarker: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, TimeMarkerStyleProps>> & string;
export declare const TimeLabel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("../typography").TypographyProps & {
    ref?: import("react").RefObject<HTMLParagraphElement> | undefined;
}, never>> & string;
export declare const TimeSlot: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, TimeSlotStyleProps>> & string;
export declare const TimeSlotBorder: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $variant: TimeSlotBarVariant;
}>> & string;
export declare const CellText: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("../typography").TypographyProps & {
    ref?: import("react").RefObject<HTMLParagraphElement> | undefined;
}, CellTextStyleProps>> & string;
export {};
