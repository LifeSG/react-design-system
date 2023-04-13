import { TimeSlotBarHelper } from "src/time-slot-bar/helper";

describe("TimeSlotBarHelper", () => {
    describe("formatHourlyDisplay", () => {
        it("should format the time in am/pm display", () => {
            expect(TimeSlotBarHelper.formatHourlyDisplay("13:00")).toBe("1pm");
            expect(TimeSlotBarHelper.formatHourlyDisplay("02:00")).toBe("2am");
        });
    });

    describe("calculateWidth", () => {
        it("should calculate the width based on the time range and cell width", () => {
            const cellWidth = 30;
            const start = "10:00";
            const end = "10:30";

            const result = TimeSlotBarHelper.calculateWidth(
                start,
                end,
                cellWidth
            );
            expect(result).toBe(30);
        });
    });
});
