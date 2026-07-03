import type {
    CommonCalendarProps,
    YearMonthDisplay,
} from "../shared/internal-calendar/types";

export type { Variant as CalendarVariant } from "../shared/internal-calendar/types";

interface CalendarBaseProps extends CommonCalendarProps {
    className?: string | undefined;
    "data-testid"?: string | undefined;
    id?: string | undefined;
    /**
     * Border style of the calendar container.
     *
     * @default "bordered"
     */
    styleType?: "no-border" | "bordered" | undefined;
    /** Called when a day cell is hovered. Receives the date in `YYYY-MM-DD` format. */
    onHover?: ((value: string) => void) | undefined;
    /** Called when the visible month or year changes. */
    onYearMonthDisplayChange?: ((value: YearMonthDisplay) => void) | undefined;
}

/**
 * Props for Calendar in single-date selection mode.
 *
 * Pass `variant="single"` or omit `variant` to activate this mode.
 */
export interface CalendarSingleProps extends CalendarBaseProps {
    /**
     * @default "single"
     */
    variant?: "single" | undefined;
    /** Selected date in `YYYY-MM-DD` format */
    value?: string | undefined;
    /** Called when the selected date changes. Receives the date in `YYYY-MM-DD` format. */
    onChange?: ((value: string) => void) | undefined;
    /**
     * Called when a date is selected. Receives the date in `YYYY-MM-DD` format.
     * @deprecated Use `onChange` instead.
     */
    onSelect?: ((value: string) => void) | undefined;
}

/**
 * Props for Calendar in multi-date selection mode.
 *
 * Requires `variant="multi"`. Use `minSelectable` and `maxSelectable` to
 * constrain how many dates can be chosen.
 */
export interface CalendarMultiProps extends CalendarBaseProps {
    variant: "multi";
    /** Selected dates in `YYYY-MM-DD` format */
    values?: string[] | undefined;
    /** Minimum number of dates that must be selected */
    minSelectable?: number | undefined;
    /** Maximum number of dates that can be selected */
    maxSelectable?: number | undefined;
    /** Called when the selection changes. Receives all selected dates in `YYYY-MM-DD` format. */
    onChange?: ((values: string[]) => void) | undefined;
}

/**
 * Props for the Calendar component.
 *
 * `variant` discriminates between `CalendarSingleProps` (`"single"`) and
 * `CalendarMultiProps` (`"multi"`). Omitting `variant` defaults to `"single"`.
 */
export type CalendarProps = CalendarSingleProps | CalendarMultiProps;
