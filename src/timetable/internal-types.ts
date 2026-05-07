import type { RowBarAlternateColors, RowBarMainColors } from "./const";
import type { TimeTableRowCellData } from "./types";

export type InternalTimeTableRowCellData = TimeTableRowCellData & {
    roundedStartTime?: string;
    roundedEndTime?: string;
    isFocusable?: boolean;
};

export interface RowBarColors {
    mainColor: RowBarMainColors;
    alternateColor: RowBarAlternateColors;
}
