import type { RefObject } from "react";
/** Props for the `DateNavigator` component. */
export interface DateNavigatorProps {
    id?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    /** The currently displayed date in `YYYY-MM-DD` format. */
    selectedDate: string;
    /**
     * The earliest selectable date in `YYYY-MM-DD` format. The left arrow is
     * disabled when `selectedDate` reaches this boundary.
     */
    minDate?: string | undefined;
    /**
     * The latest selectable date in `YYYY-MM-DD` format. The right arrow is
     * disabled when `selectedDate` reaches this boundary.
     */
    maxDate?: string | undefined;
    /**
     * When `true`, both navigation arrows and the calendar trigger are disabled.
     */
    loading?: boolean | undefined;
    /**
     * When `true`, formats the displayed date using abbreviated month and day names
     * (e.g. `"3 Jul 2025, Wed"` instead of `"3 July 2025, Wednesday"`).
     */
    showDateAsShortForm?: boolean | undefined;
    /**
     * When `true`, replaces the day-of-week label with `"Today"` if `selectedDate`
     * matches the current calendar date.
     */
    showCurrentDateAsToday?: boolean | undefined;
    /**
     * Controls whether navigation steps by a single day or by a full week. In
     * `"week"` mode the label shows the Sunday–Saturday range that contains
     * `selectedDate`.
     *
     * @default "day"
     */
    view?: "day" | "week" | undefined;
    /** Called with the current `selectedDate` value when the left arrow is clicked. */
    onLeftArrowClick: (currentDate: string) => void;
    /** Called with the current `selectedDate` value when the right arrow is clicked. */
    onRightArrowClick: (currentDate: string) => void;
    /**
     * Called with the chosen date string when the user selects a date from the
     * calendar dropdown. When omitted the date label is non-interactive and the
     * calendar dropdown is not shown.
     */
    onCalendarDateSelect?: ((currentDate: string) => void) | undefined;
    /**
     * The root element that contains the dropdown element.
     *
     * @remarks Specify this if you need to change the parent of the
     * dropdown in the HTML DOM.
     * Possible use case: sharing a stacking context.
     *
     * Note: if a parent of the trigger has a higher `z-index` than the dropdown,
     * the dropdown may be obscured.
     *
     * @default `document.body`
     */
    dropdownRootNode?: RefObject<HTMLElement> | undefined;
}
