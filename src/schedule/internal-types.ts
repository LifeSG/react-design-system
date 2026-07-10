import type { RefObject } from "react";

/** Shared props passed to the day-view and week-view sub-components. */
export interface CommonScheduleViewProps {
    /** The currently displayed date in `YYYY-MM-DD` format. */
    date: string;
    /** Whether the schedule is in a loading state. */
    loading: boolean;
    /** Earliest visible time in `HH:mm` format. */
    minTime: string;
    /** Latest visible time in `HH:mm` format. */
    maxTime: string;
    /** Time in `HH:mm` format to scroll into view on mount. */
    initialScrollTime?: string | undefined;
    /** Ref to the scrollable container element. */
    containerRef: RefObject<HTMLDivElement>;
    /** Message displayed inside blocked time slots. */
    blockedMessage?: string | undefined;
}
