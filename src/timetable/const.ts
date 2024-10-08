export const ROW_BAR_COLOR_SEQUENCE = [
    "#FFE6BB",
    "#D8EFEB",
    "#E6EAFE",
    "#FAE4E5",
    "#D3EEFC",
] as const; // Assert to be a readonly tuple
export type RowBarColors = (typeof ROW_BAR_COLOR_SEQUENCE)[number];
export const ROW_CELL_GAP = 2;
export const ROW_INTERVAL = 15;
export const MIN_INTERVAL_WIDTH = 21;
export const ROW_HEADER_WIDTH = 252;
export const ROW_HEIGHT = 68;
export const MIN_HOURLY_INTERVAL_WIDTH = 84;
