import React from "react";
import { InternalCalendarProps, InternalCalendarRef } from "./types";
export declare const Component: ({ disabledDates, onYearMonthDisplayChange, onSelect, onHover, onDismiss, value: selectedStartDate, endValue: selectedEndDate, currentFocus, withButton, variant, minDate, maxDate, allowDisabledSelection, selectWithinRange, initialCalendarDate, numberOfDays, showActiveMonthDaysOnly, isFocusable, }: InternalCalendarProps, ref: React.ForwardedRef<InternalCalendarRef>) => import("react/jsx-runtime").JSX.Element;
export declare const InternalCalendar: (props: InternalCalendarProps & React.RefAttributes<InternalCalendarRef>) => React.ReactElement | null;
