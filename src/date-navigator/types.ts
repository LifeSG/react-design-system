import { RefObject } from "react";

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
    onLeftArrowClick: (currentDate: string) => void;
    onRightArrowClick: (currentDate: string) => void;
    onCalendarDateSelect?: ((currentDate: string) => void) | undefined;
    /**
     * The root element that contains the dropdown element. Defaults to the document body.
     *
     * If the parent that contains the trigger element has a higher z-index than the dropdown,
     * the dropdown may not be visible. Specify the parent element here instead
     */
    dropdownRootNode?: RefObject<HTMLElement> | undefined;
}
