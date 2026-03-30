import type {
    CommonCalendarProps,
    YearMonthDisplay,
} from "../shared/internal-calendar/types";

export type { Variant as CalendarVariant } from "../shared/internal-calendar/types";

interface CalendarBaseProps extends CommonCalendarProps {
    className?: string | undefined;
    "data-testid"?: string | undefined;
    id?: string | undefined;
    /** Specifies if the component should have a border around it. Values `no-border` | `bordered` */
    styleType?: "no-border" | "bordered" | undefined;
    /** Called when day cell is hovered, returns value in `YYYY-MM-DD` */
    onHover?: ((value: string) => void) | undefined;
    /** Called when there is a change in the current visible month and year */
    onYearMonthDisplayChange?: ((value: YearMonthDisplay) => void) | undefined;
}

export interface CalendarSingleProps extends CalendarBaseProps {
    variant?: "single" | undefined;
    /** Selected date in `YYYY-MM-DD` format */
    value?: string | undefined;
    /** Called when the selected date changes. Returns the selected date in `YYYY-MM-DD` format */
    onChange?: ((value: string) => void) | undefined;
    /**
     * Called when the selected date changes. Returns the selected date in `YYYY-MM-DD` format
     * @deprecated Use `onChange` instead
     */
    onSelect?: ((value: string) => void) | undefined;
}

export interface CalendarMultiProps extends CalendarBaseProps {
    variant: "multi";
    /** Selected dates in `YYYY-MM-DD` format */
    values?: string[] | undefined;
    /** Minimum number of dates that must be selected */
    minSelectable?: number | undefined;
    /** Maximum number of dates that can be selected */
    maxSelectable?: number | undefined;
    /** Called when the selection changes. Returns all selected dates in `YYYY-MM-DD` format */
    onChange?: ((values: string[]) => void) | undefined;
}

export type CalendarProps = CalendarSingleProps | CalendarMultiProps;
