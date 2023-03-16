/// <reference types="react" />
import { CalendarProps } from "./types";
export declare type View = "default" | "month-options" | "year-options";
export declare const Calendar: ({ disabledDates, onSelect, value, type, ...otherProps }: CalendarProps) => JSX.Element;
