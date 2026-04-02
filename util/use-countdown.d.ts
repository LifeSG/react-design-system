export interface UseCountdownOptions {
    /** Duration in seconds */
    duration: number;
    /** Called when countdown ends */
    onComplete?: () => void;
}
export interface UseCountdownReturn {
    /** Current countdown time in seconds */
    timeLeft: number;
    /** Whether countdown is currently running */
    isRunning: boolean;
    /** Start the countdown */
    start: () => void;
    /** Stop the countdown */
    stop: () => void;
    /** Reset countdown to initial duration */
    reset: () => void;
    /** Format time as "X second(s)" */
    formatTime: (time?: number) => string;
}
/**
 * Countdown hook
 */
export declare const useCountdown: ({ duration, onComplete, }: UseCountdownOptions) => UseCountdownReturn;
