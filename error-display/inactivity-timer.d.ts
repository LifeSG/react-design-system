interface InactivityTimerProps {
    secondsLeft?: number;
    reminderInterval?: number;
    imageOnly?: boolean;
    hasCustomDescription?: boolean;
}
export declare const InactivityTimer: ({ secondsLeft, reminderInterval, imageOnly, hasCustomDescription, }: InactivityTimerProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
