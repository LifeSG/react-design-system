import type { ScheduleProps } from "./types";
/**
 * A grid visualisation of slot-based time availability for services across day and week views.
 * @keywords availability, booking, calendar, grid, slots
 */
export declare const Schedule: ({ id, className, view, date, serviceData, loading, minTime, maxTime, initialScrollTime, minDate, maxDate, emptyContentMessage, emptySlotPopover, onPreviousDayClick, onNextDayClick, onCalendarDateSelect, onTodayClick, onEmptySlotClick, blockedMessage, onClickHiddenSlots, "data-testid": testId, ...otherProps }: ScheduleProps) => import("react/jsx-runtime").JSX.Element;
