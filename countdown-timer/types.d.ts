import type React from "react";
type AlignPosition = "left" | "right";
interface Offset {
    top?: number | undefined;
    left?: number | undefined;
    right?: number | undefined;
}
interface MobileOffset {
    top?: number | undefined;
}
/** Base props shared by both the `timer`-based and `timestamp`-based variants. */
interface CountdownTimerBaseProps extends React.HTMLAttributes<HTMLDivElement> {
    "data-testid"?: string | undefined;
    /** Controls whether the timer is visible and actively counting down. */
    show: boolean;
    /**
     * When `true`, the timer switches to a fixed viewport overlay once its
     * inline position scrolls out of view, keeping the countdown visible at
     * all times.
     *
     * @default true
     */
    fixed?: boolean | undefined;
    /**
     * Remaining-seconds threshold at which the warning state activates.
     * Once the countdown reaches this value, `onNotify` fires once and
     * `onTick` fires every second until the timer finishes.
     */
    notifyTimer?: number | undefined;
    /**
     * Fine-tunes the fixed overlay position on tablet and desktop viewports.
     *
     * @remarks `top` defaults to 168 when not provided; `left`/`right`
     * fall back to the bounding-rect of the inline wrapper.
     */
    offset?: Offset | undefined;
    /**
     * Fine-tunes the fixed overlay position on mobile viewports.
     *
     * @default { top: 80 }
     */
    mobileOffset?: MobileOffset | undefined;
    /**
     * Side of the inline wrapper the fixed overlay is pinned to when
     * scrolled into sticky mode.
     *
     * @default "right"
     */
    align?: AlignPosition | undefined;
    /**
     * Called every second with the remaining seconds once the countdown falls
     * at or below `notifyTimer`.
     */
    onTick?: ((seconds: number) => void) | undefined;
    /**
     * Called once when the remaining seconds first reach the `notifyTimer`
     * threshold.
     *
     * @remarks Fires at most once per timer session; resets when `show` or
     * `timer`/`timestamp` changes.
     */
    onNotify?: (() => void) | undefined;
    /** Called when the countdown reaches zero. */
    onFinish?: (() => void) | undefined;
    /**
     * Interval in seconds between polite screen-reader announcement of the
     * remaining time while the timer is above the `notifyTimer`
     * threshold.
     *
     * @default 120
     */
    reminderInterval?: number | undefined;
}
/** Props for the duration-based variant. Supply `timer` to count down from a fixed number of seconds. */
interface TimerProps extends CountdownTimerBaseProps {
    /** Duration of the countdown in seconds. */
    timer: number;
    timestamp?: number | undefined;
}
/** Props for the deadline-based variant. Supply `timestamp` to count down to an absolute point in time. */
interface TimestampProps extends CountdownTimerBaseProps {
    /** Unix timestamp (milliseconds since Jan 1, 1970) at which the countdown ends. */
    timestamp: number;
    timer?: number | undefined;
}
/** Props for `CountdownTimer`. Provide either `timer` (duration in seconds) or `timestamp` (Unix ms deadline). */
export type CountdownTimerProps = TimerProps | TimestampProps;
export {};
