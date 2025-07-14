import { RowBarAlternateColors, RowBarMainColors } from "./const";
import { SchedulerRowCellData } from "./types";

export type InternalSchedulerRowCellData = SchedulerRowCellData & {
    roundedStartTime?: string;
    roundedEndTime?: string;
};

export interface RowBarColors {
    mainColor: RowBarMainColors;
    alternateColor: RowBarAlternateColors;
}
