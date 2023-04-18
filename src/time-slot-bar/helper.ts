import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DateHelper } from "src/util";
// Load plugins
dayjs.extend(customParseFormat);

// ===========================================================================
// HELPER FUNCTIONS
// ===========================================================================

export namespace TimeSlotBarHelper {
    /**
     * Format HH:mm to am/pm display
     * @param timeString input timeString string
     */
    export const formatHourlyDisplay = (timeString: string) => {
        const parsedTime = dayjs(timeString, "HH:mm");
        return parsedTime.format("ha");
    };

    /**
     * Calculate width in px base on the time range in respect the cell width
     * @param start input start string
     * @param end input end string
     * @param cellWidth input cellWidth number
     */
    export const calculateWidth = (
        start: string,
        end: string,
        cellWidth: number
    ) => {
        /**
         * Each CELL_WIDTH is 30min interval
         * Assuming 15 minutes corresponds to a fixed width of x cellWidth pixels (1/2 of CELL_WIDTH)
         */
        return (
            (DateHelper.getTimeDiffInMinutes(start, end) / 15) * (cellWidth / 2)
        );
    };
}
