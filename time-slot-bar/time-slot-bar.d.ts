import type { TimeSlotBarProps, TimeSlotBarRef } from "./types";
/**
 * A horizontally scrollable timeline bar that visualises time slots across a
 * defined time range.
 *
 * Use `TimeSlotBar` to display availability, bookings, or schedule occupancy
 * as coloured cells on a shared time axis.
 */
export declare const TimeSlotBar: (props: TimeSlotBarProps & import("react").RefAttributes<TimeSlotBarRef>) => React.ReactElement | null;
