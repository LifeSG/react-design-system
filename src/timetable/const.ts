export const ROW_BAR_COLOR_SEQUENCE = [
    "#FFE6BB",
    "#D8EFEB",
    "#E6EAFE",
    "#FAE4E5",
    "#D3EEFC",
] as const; // Assert to be a readonly tuple
export const ROW_CELL_GAP = 2;
export const ROW_INTERVAL = 15;
export type RowBarColors = (typeof ROW_BAR_COLOR_SEQUENCE)[number];
