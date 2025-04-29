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
export const ROW_BAR_COLOR_ALTERNATE_COLOR = [
    "#FFF2DD",
    "#EBF7F5",
    "#F2F4FE",
    "#FCF1F2",
    "#E9F6FD",
] as const;
export type RowBarAlternateColors =
    (typeof ROW_BAR_COLOR_ALTERNATE_COLOR)[number];

export const ROW_BAR_COLOR_SEQUENCE_TO_STRIPE_MAP: {
    [key in RowBarColors]: RowBarAlternateColors;
} = {
    "#FFE6BB": "#FFF2DD",
    "#D8EFEB": "#EBF7F5",
    "#E6EAFE": "#F2F4FE",
    "#FAE4E5": "#FCF1F2",
    "#D3EEFC": "#E9F6FD",
};
