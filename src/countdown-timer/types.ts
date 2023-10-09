import React from "react";

type AlignPosition = "left" | "right";

interface Offset {
    top?: number | undefined;
    left?: number | undefined;
    right?: number | undefined;
}

interface MobileOffset {
    top?: number | undefined;
}

export interface CountdownTimerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    "data-testid"?: string | undefined;
    /** To show/play the countdown timer */
    show: boolean;
    fixed?: boolean | undefined;
    /** Specifies the countdown timer (in seconds) */
    timer: number;
    /** Specifies a timer (in seconds) for notifications */
    notifyTimer?: number | undefined;
    /** Allows customization of the sticky position in tablet/desktop view */
    offset?: Offset | undefined;
    /** Allows customization of the sticky position in mobile only */
    mobileOffset?: MobileOffset | undefined;
    /** Specifies if the component is aligned to its left or right in its sticky position */
    align?: AlignPosition | undefined;
    /** Called every second with the remaining time left when the timer value falls below the `notifyTimer` threshold */
    onTick?: ((seconds: number) => void) | undefined;
    /** Called when the timer value falls below the specified `notifyTimer` threshold */
    onNotify?: (() => void) | undefined;
    /** Called when countdown reaches 0 */
    onFinish?: (() => void) | undefined;
}
