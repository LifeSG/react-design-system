import React from "react";

type AlignPosition = "left" | "right";

/** Pixel-based sticky offset for desktop and tablet viewports. */
interface Offset {
    /** Top offset in pixels. */
    top?: number | undefined;
    /** Left offset in pixels. */
    left?: number | undefined;
    /** Right offset in pixels. */
    right?: number | undefined;
}

/** Pixel-based sticky offset for mobile viewports. */
interface MobileOffset {
    /** Top offset in pixels. */
    top?: number | undefined;
}

/**
 * Displays a countdown timer that can be fixed/sticky when scrolled out of view.
 *
 * Accepts either a `timer` (duration in seconds) or a `timestamp` (Unix ms) to drive the countdown.
 *
 * @keywords countdown, timer, sticky, notification, timeout
 */
interface CountdownTimerBaseProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** Specifies to start the countdown timer */
    show: boolean;
    /** Specifies if the component should be sticky when scrolled out of view. @default true */
    fixed?: boolean | undefined;
    /** Specifies the notification threshold timer (in seconds) */
    notifyTimer?: number | undefined;
    /** Specifies the sticky position in desktop and tablet. Note: values are pixel-based. @default { top: 168 } */
    offset?: Offset | undefined;
    /** Specifies the sticky position in mobile. Note: values are pixel-based. @default { top: 80 } */
    mobileOffset?: MobileOffset | undefined;
    /** Specifies if the sticky component is aligned to its left or right. @default "right" */
    align?: AlignPosition | undefined;
    /** Called every interval when the timer value becomes equal to or less than `notifyTimer`. Note: due to browser limitations, it is not guaranteed to run precisely every second. */
    onTick?: ((seconds: number) => void) | undefined;
    /** Called when the timer value becomes less than `notifyTimer` */
    onNotify?: (() => void) | undefined;
    /** Called when the timer value reaches zero */
    onFinish?: (() => void) | undefined;
    /** Specifies the interval (in seconds) for polite screen reader reminders. @default 120 */
    reminderInterval?: number | undefined;
}

/** Use this variant when driving the countdown from a fixed duration in seconds. */
interface TimerProps extends CountdownTimerBaseProps {
    /** Specifies the countdown timer duration (in seconds) */
    timer: number;
    /** Not used in this variant; provide `timer` instead. */
    timestamp?: number | undefined;
}

/** Use this variant when driving the countdown from an absolute Unix timestamp (milliseconds). */
interface TimestampProps extends CountdownTimerBaseProps {
    /** Specifies the timestamp at which the countdown ends (milliseconds since Jan 1, 1970) */
    timestamp: number;
    /** Not used in this variant; provide `timestamp` instead. */
    timer?: number | undefined;
}

export type CountdownTimerProps = TimerProps | TimestampProps;
