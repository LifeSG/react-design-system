export interface DateNavigatorProps {
    id?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    /** The current visible date in YYYY-MM-DD format */
    selectedDate: string;
    /** YYYY-MM-DD format */
    minDate?: string | undefined;
    /** YYYY-MM-DD format */
    maxDate?: string | undefined;
    loading?: boolean | undefined;
    showDateAsShortForm?: boolean | undefined;
    showCurrentDateAsToday?: boolean | undefined;
    onLeftArrowClick: ((currentDate: string) => void);
    onRightArrowClick: ((currentDate: string) => void);
    onCalendarDateSelect?: ((currentDate: string) => void) | undefined;
}
