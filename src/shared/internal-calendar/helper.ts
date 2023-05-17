import dayjs from "dayjs";

// ===========================================================================
// HELPER FUNCTIONS
// ===========================================================================

export namespace InternalCalendarHelper {
    /**
     * logic to disable dates if it falls outside of either minDate and maxDate
     * @param day input day string
     * @param min input minDate string
     * @param max input maxDate string
     */
    export const isOutOfDateRange = (
        day: dayjs.Dayjs,
        minDate: dayjs.Dayjs,
        maxDate: dayjs.Dayjs,
        unit: dayjs.OpUnitType
    ) => {
        if (minDate && day.isBefore(minDate, unit)) {
            return true;
        }

        if (maxDate && day.isAfter(maxDate, unit)) {
            return true;
        }
        return false;
    };
}
