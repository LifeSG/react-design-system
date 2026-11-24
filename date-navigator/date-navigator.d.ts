import type { DateNavigatorProps } from "./types";
/**
 * Displays a date with left/right navigation arrows for stepping through dates or weeks.
 *
 * Use when users need to browse content organised by day or week — such as schedules,
 * calendars, or time-based feeds.
 */
export declare const DateNavigator: ({ selectedDate, minDate, maxDate, loading, showDateAsShortForm, showCurrentDateAsToday, view, onLeftArrowClick, onRightArrowClick, onCalendarDateSelect, dropdownRootNode, className, ...otherProps }: DateNavigatorProps) => import("react/jsx-runtime").JSX.Element;
