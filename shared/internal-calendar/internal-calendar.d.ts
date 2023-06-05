import React from "react";
import { CalendarRef, InternalCalendarProps } from "./types";
export declare const Component: ({ disabledDates, onYearMonthDisplayChange, onCalendarView, onSelect, onHover, onDismiss, actionComponent, isOpen, value, endValue, currentFocus, withButton, variant, between, type, ...otherProps }: InternalCalendarProps, ref: React.ForwardedRef<CalendarRef>) => JSX.Element;
export declare const InternalCalendar: (props: InternalCalendarProps & React.RefAttributes<CalendarRef>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
