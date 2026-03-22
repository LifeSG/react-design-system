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

/**
 * Props for the CountdownTimer component - floating sticky countdown display.
 *
 * Renders a countdown clock that sticks to the viewport edge as the user
 * scrolls. When the remaining time falls below `notifyTimer`, the `onTick`
 * and `onNotify` callbacks fire. Use `show` to start or pause the timer.
 *
 * @example
 * ```tsx
 * <CountdownTimer
 *     show={isActive}
 *     timer={300}
 *     notifyTimer={60}
 *     onTick={(s) => console.log(s + " seconds left")}
 *     onFinish={() => handleExpiry()}
 * />
 * ```
 * @keywords clock, expiry timer, session timeout, time remaining, count down
 */
export interface CountdownTimerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
    /** Starts or pauses the countdown timer. Set to `true` to begin counting. */
    show: boolean;
    /**
     * Specifies if the component should stick to the viewport edge when
     * scrolled out of view.
     *
     * @default true
     */
    fixed?: boolean | undefined;
    /** The total countdown duration in seconds. */
    timer: number;
    /** The notification threshold in seconds. Callbacks fire when remaining time falls below this value. */
    notifyTimer?: number | undefined;
    /**
     * The sticky position for tablet and desktop viewports (pixel values).
     *
     * @default { top: 168 }
     */
    offset?: Offset | undefined;
    /**
     * The sticky position for mobile viewports (pixel values).
     *
     * @default { top: 80 }
     */
    mobileOffset?: MobileOffset | undefined;
    /**
     * The horizontal side the component is anchored to in its sticky position.
     *
     * @default "right"
     */
    align?: AlignPosition | undefined;
    /**
     * Called every interval when the remaining time is at or below `notifyTimer`.
     *
     * Due to browser limitations this may not fire precisely every second.
     *
     * @param seconds - The remaining time in seconds.
     */
    onTick?: ((seconds: number) => void) | undefined;
    /**
     * Called once when the remaining time first falls below `notifyTimer`.
     */
    onNotify?: (() => void) | undefined;
    /** Called when the countdown reaches zero. */
    onFinish?: (() => void) | undefined;
}
