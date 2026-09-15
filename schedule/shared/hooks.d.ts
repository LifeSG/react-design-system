/**
 * Custom hook that manages the timeline offset for the current time indicator.
 * Updates the offset every 15 minutes to keep the timeline in sync with real time.
 *
 * @param minTime - The earliest time displayed in the scheduler (format: "HH:mm").
 * @param maxTime - The latest time displayed in the scheduler (format: "HH:mm").
 * @returns The pixel offset from the top for the timeline, or null if out of range.
 */
export declare function useTimelineOffset(minTime: string, maxTime: string): number | null;
/**
 * Custom hook that handles initial scroll positioning for timeslot components.
 * Automatically scrolls to the specified initial scroll time when the component loads.
 *
 * @param loading - Whether the component is in loading state.
 * @param minTime - The earliest time displayed in the scheduler (format: "HH:mm").
 * @param initialScrollTime - Optional initial scroll position time (HH:mm format), defaults to minTime if not provided.
 * @returns A ref object to attach to the scrollable container.
 */
export declare function useInitialScroll(loading: boolean, minTime: string, initialScrollTime?: string): React.RefObject<HTMLDivElement>;
