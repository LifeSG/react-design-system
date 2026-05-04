import { RowBarAlternateColors, RowBarMainColors } from "./const";
import { TimeTableRowCellData } from "./types";

export type InternalTimeTableRowCellData = TimeTableRowCellData & {
    roundedStartTime?: string;
    roundedEndTime?: string;
    isFocusable?: boolean;
};

export interface RowBarColors {
    mainColor: RowBarMainColors;
    alternateColor: RowBarAlternateColors;
}
