interface TimeSlotTimeIndicatorProps {
    minTime: string;
    maxTime: string;
    format: "12hr" | "24hr";
    timelineOffset?: number | null;
    isWeekView?: boolean;
}
export declare const TimeIndicator: ({ minTime, maxTime, format, timelineOffset, isWeekView, }: TimeSlotTimeIndicatorProps) => import("react/jsx-runtime").JSX.Element;
export {};
