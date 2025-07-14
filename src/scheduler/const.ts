export const ROW_BAR_COLOR_SEQUENCE = [
    "#FFE6BB",
    "#D8EFEB",
    "#E6EAFE",
    "#FAE4E5",
    "#D3EEFC",
] as const; // Assert to be a readonly tuple
export type RowBarMainColors = (typeof ROW_BAR_COLOR_SEQUENCE)[number];
export const ROW_CELL_GAP = 2;
export const ROW_INTERVAL = 30; // Changed from 15 to 30 for 30-min intervals
export const MIN_INTERVAL_WIDTH = 21;
export const ROW_HEADER_WIDTH = 252;
export const ROW_HEIGHT = 68;
export const MIN_HOURLY_INTERVAL_WIDTH = 84;
export const ROW_BAR_COLOR_ALTERNATE_COLOR = [
    "#FFF2DD",
    "#EBF7F5",
    "#F2F4FE",
    "#FCF1F2",
    "#E9F6FD",
] as const;
export type RowBarAlternateColors =
    (typeof ROW_BAR_COLOR_ALTERNATE_COLOR)[number];

// New constants for Scheduler
export const CURRENT_TIME_LINE_COLOR = "#8B5CF6"; // Purple color for current time line
export const WEEK_VIEW_COLUMN_WIDTH = 200; // Fixed width for week view columns
