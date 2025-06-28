import { Dayjs } from "dayjs";

export type CellType =
    | "hover-subtle"
    | "hover"
    | "hover-outline"
    | "selected-outline"
    | "selected-outline-subtle"
    | "selected-hover"
    | "selected-hover-outline";

export type LabelType =
    | "available"
    | "unavailable"
    | "current"
    | "hover"
    | "selected"
    | "selected-hover"
    | "hidden";

export interface CellStyleProps {
    bgLeft?: CellType | undefined;
    bgRight?: CellType | undefined;
    circleLeft?: CellType | undefined;
    circleRight?: CellType | undefined;
    labelType?: LabelType | undefined;
    disabled?: boolean | undefined;
    interactive?: boolean | null | undefined;
    currentDateIndicator?: boolean | undefined;
}

export interface DayCellProps extends CellStyleProps {
    date: Dayjs;
    calendarDate: Dayjs;
    focusDate?: Dayjs | undefined;
    onSelect: (value: Dayjs) => void;
    onHover: (value: Dayjs) => void;
    onKeyDown?: (event: React.KeyboardEvent) => void | undefined;
    onHoverEnd?: ((value: Dayjs) => void) | undefined;
    role?: string | undefined;
    onFocus?: ((value: Dayjs) => void) | undefined;
    tabIndex?: number | undefined;
    label?: string | undefined;
    ariaHidden?: boolean | undefined;
}
