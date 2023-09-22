import React from "react";

type Minutes = { minutes: number };
type Seconds = { seconds: number };

interface Offset {
    top?: number | undefined;
    left?: number | undefined;
}

type Timer = {
    minutes?: number | undefined;
    seconds?: number | undefined;
} & (Minutes | Seconds);

type Duration = Minutes & Seconds;

export interface CountdownTimerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    "data-testid"?: string | undefined;
    /** To show/play the countdown timer */
    show: boolean;
    /** Specifies the countdown timer */
    timer: Timer;
    /** Specifies a timer for notifications */
    notifyTimer?: Timer | undefined;
    /** Allows customization of the sticky position */
    offset?: Offset | undefined;
    /**
     * Called when timer value becomes equal to or
     * less than the total specified amount of `notifyMinutes` and `notifySeconds`
     */
    onDuration?: ((duration: Duration) => void) | undefined;
    /**
     * Called when timer value becomes
     * less than the total specified amount `notifyMinutes and notifySeconds`
     */
    onNotify?: (() => void) | undefined;
    /** Called when timer value has finished */
    onFinish?: (() => void) | undefined;
}
