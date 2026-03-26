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

    describe("adjustTimeForMarker", () => {
        describe("start type", () => {
            it("should adjust xx:01 to xx:29 to xx:00", () => {
                expect(
                    TimeSlotBarHelper.adjustTimeForMarker("09:01", "start")
                ).toBe("09:00");
                expect(
                    TimeSlotBarHelper.adjustTimeForMarker("09:15", "start")
                ).toBe("09:00");
                expect(
                    TimeSlotBarHelper.adjustTimeForMarker("09:29", "start")
                ).toBe("09:00");
            });

            it("should adjust xx:31 to xx:59 to xx:30", () => {
                expect(
                    TimeSlotBarHelper.adjustTimeForMarker("09:31", "start")
                ).toBe("09:30");
                expect(
                    TimeSlotBarHelper.adjustTimeForMarker("09:45", "start")
                ).toBe("09:30");
                expect(
                    TimeSlotBarHelper.adjustTimeForMarker("09:59", "start")
                ).toBe("09:30");
            });

            it("should not adjust exact hour and half-hour times", () => {
                expect(
                    TimeSlotBarHelper.adjustTimeForMarker("09:00", "start")
                ).toBe("09:00");
                expect(
                    TimeSlotBarHelper.adjustTimeForMarker("09:30", "start")
                ).toBe("09:30");
            });
        });

        describe("end type", () => {
            it("should adjust xx:01 to xx:29 to xx:30", () => {
                expect(
                    TimeSlotBarHelper.adjustTimeForMarker("09:01", "end")
                ).toBe("09:30");
                expect(
                    TimeSlotBarHelper.adjustTimeForMarker("09:15", "end")
                ).toBe("09:30");
                expect(
                    TimeSlotBarHelper.adjustTimeForMarker("09:29", "end")
                ).toBe("09:30");
            });

            it("should adjust x1:31 to x1:59 to next hour x2:00", () => {
                expect(
                    TimeSlotBarHelper.adjustTimeForMarker("09:31", "end")
                ).toBe("10:00");
                expect(
                    TimeSlotBarHelper.adjustTimeForMarker("09:45", "end")
                ).toBe("10:00");
                expect(
                    TimeSlotBarHelper.adjustTimeForMarker("09:59", "end")
                ).toBe("10:00");
            });

            it("should not adjust exact hour and half-hour times", () => {
                expect(
                    TimeSlotBarHelper.adjustTimeForMarker("09:00", "end")
                ).toBe("09:00");
                expect(
                    TimeSlotBarHelper.adjustTimeForMarker("09:30", "end")
                ).toBe("09:30");
            });

            it("should handle hour overflow correctly", () => {
                expect(
                    TimeSlotBarHelper.adjustTimeForMarker("23:45", "end")
                ).toBe("24:00");
            });
        });

        it("should return original time for invalid type", () => {
            expect(
                TimeSlotBarHelper.adjustTimeForMarker("09:15", "invalid" as any)
            ).toBe("09:15");
        });
    });
});
