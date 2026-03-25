import { RefObject } from "react";

/**
 * Displays the current date with left/right arrow navigation and an optional calendar dropdown.
 * Supports day and week view modes.
 *
 * @keywords date-navigator, calendar, navigation, date, week
 */
export interface DateNavigatorProps {
    /** Unique identifier for the component. */
    id?: string | undefined;
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** The current displayed date in YYYY-MM-DD format. */
    selectedDate: string;
    /** The minimum date allowed for navigation in YYYY-MM-DD format (inclusive). */
    minDate?: string | undefined;
    /** The maximum date allowed for navigation in YYYY-MM-DD format (inclusive). */
    maxDate?: string | undefined;
    /** Disables navigation buttons while content is loading. */
    loading?: boolean | undefined;
    /** Shows the date in short form (e.g. abbreviated month). */
    showDateAsShortForm?: boolean | undefined;
    /** Shows today's system date as 'Today' instead of the full date string. */
    showCurrentDateAsToday?: boolean | undefined;
    /** View type for navigation — `"day"` for a single day, `"week"` for a week range. */
    view?: "day" | "week" | undefined;
    /** Called when the left arrow navigation button is clicked. Receives the current date string. */
    onLeftArrowClick: (currentDate: string) => void;
    /** Called when the right arrow navigation button is clicked. Receives the current date string. */
    onRightArrowClick: (currentDate: string) => void;
    /** Called when a date is selected from the calendar dropdown. Receives the selected date string. */
    onCalendarDateSelect?: ((currentDate: string) => void) | undefined;
    /**
     * The root element that contains the dropdown element. Defaults to the document body.
     *
     * If the parent that contains the trigger element has a higher z-index than the dropdown,
     * the dropdown may not be visible. Specify the parent element here instead
     */
    dropdownRootNode?: RefObject<HTMLElement> | undefined;
}
