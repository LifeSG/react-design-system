import type { CountdownTimerProps } from "./types";
/**
 * Displays a live countdown of time remaining until a deadline.
 *
 * Use when a time-limited interaction — such as a session timeout or a timed
 * form — needs a persistent visual reminder.
 */
export declare const CountdownTimer: ({ className, align, timer, timestamp, notifyTimer, offset, mobileOffset, show, fixed, reminderInterval, "data-testid": testId, onFinish, onNotify, onTick, ...otherProps }: CountdownTimerProps) => import("react/jsx-runtime").JSX.Element;
