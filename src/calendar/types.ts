import type {
    CommonCalendarProps,
    YearMonthDisplay,
} from "../shared/internal-calendar/types";

export type { Variant as CalendarVariant } from "../shared/internal-calendar/types";

// @storybookSkipProps
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
    /**
     * Called when a day cell is hovered.
     *
     * @param value The hovered date in `YYYY-MM-DD` format.
     */
    onHover?: ((value: string) => void) | undefined;
    /**
     * Called when the visible month or year changes.
     *
     * @param value The updated visible year-month pair.
     */
    onYearMonthDisplayChange?: ((value: YearMonthDisplay) => void) | undefined;
}

/**
 * Props for the `Calendar` component in single-date selection mode.
 *
 * Pass `variant="single"` or omit `variant` to activate this mode.
 */
export interface CalendarSingleProps {
    /**
     * @default "single"
     */
    variant?: "single" | undefined;
    /** Selected date in `YYYY-MM-DD` format */
    value?: string | undefined;
    /**
     * Called when the selected date changes.
     *
     * @param value The selected date in `YYYY-MM-DD` format.
     */
    onChange?: ((value: string) => void) | undefined;
    /**
     * Called when a date is selected.
     *
     * @param value The selected date in `YYYY-MM-DD` format.
     * @deprecated Use `onChange` instead.
     */
    onSelect?: ((value: string) => void) | undefined;
}

/**
 * Props for the `Calendar` component in multi-date selection mode.
 *
 * Requires `variant="multi"`.
 */
export interface CalendarMultiProps {
    variant: "multi";
    /** Selected dates in `YYYY-MM-DD` format */
    values?: string[] | undefined;
    /** Minimum number of dates that must be selected */
    minSelectable?: number | undefined;
    /** Maximum number of dates that can be selected */
    maxSelectable?: number | undefined;
    /**
     * Called when the selection changes.
     *
     * @param values The selected dates in `YYYY-MM-DD` format.
     */
    onChange?: ((values: string[]) => void) | undefined;
}

/** Props for the `Calendar` component */
export type CalendarProps = CalendarBaseProps &
    (CalendarSingleProps | CalendarMultiProps);
