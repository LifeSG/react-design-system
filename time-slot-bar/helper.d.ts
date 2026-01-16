export declare namespace TimeSlotBarHelper {
    /**
     * Format HH:mm to am/pm display
     * @param timeString input timeString string
     */
    const formatHourlyDisplay: (timeString: string) => string;
    /**
     * Calculate width in px base on the time range in respect the cell width
     * @param start input start string
     * @param end input end string
     * @param cellWidth input cellWidth number
     */
    const calculateWidth: (start: string, end: string, cellWidth: number) => number;
    /**
     * Based on the time type, adjust the time to the nearest hour or 30 minuites marker.
     * this helps to always show time slot marker properly.
     * @param time - time to be adjusted
     * @param type - "start" or "end" indicating which boundary to adjust
     */
    const adjustTimeForMarker: (time: string, type: "start" | "end") => string;
}
