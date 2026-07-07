import type { TimeSlot, TimeSlotBarVariant } from "src/time-slot-bar";
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

    describe("processSlots", () => {
        describe("when no slots are provided", () => {
            it("should create one unavailable slot covering the entire range", () => {
                const range = { start: "09:00", end: "17:00" };
                const slots: TimeSlot[] = [];
                const variant = "default";

                const result = TimeSlotBarHelper.processSlots(
                    range,
                    slots,
                    variant
                );

                expect(result.summary).toBe("Time slot bar");
                expect(result.computedSlots).toHaveLength(1);
                const slot = result.computedSlots[0];
                expect(slot.startTime).toBe("09:00");
                expect(slot.endTime).toBe("17:00");
                expect(slot.clickable).toBe(false);
                expect(slot.label).toBeUndefined();
                expect(slot.styleAttributes).toEqual({
                    backgroundColor: "transparent",
                });
                expect(slot.ariaLabel).toBe("9:00AM to 5:00PM, Unavailable");
            });
        });

        describe("gap handling", () => {
            const testCases = [
                {
                    testName:
                        "should add unavailable slot before first slot when there is a leading gap",
                    input: {
                        variant: "default",
                        range: { start: "08:00", end: "10:00" },
                        slots: [
                            {
                                id: "slot1",
                                startTime: "09:00",
                                endTime: "10:00",
                                clickable: true,
                                label: "Morning slot",
                                styleAttributes: { backgroundColor: "blue" },
                            },
                        ],
                    },
                    expected: {
                        summary: "Time slot bar",
                        computedSlot: [
                            {
                                id: expect.any(String),
                                startTime: "08:00",
                                endTime: "09:00",
                                clickable: false,
                                styleAttributes: {
                                    backgroundColor: "transparent",
                                },
                                ariaLabel: "8:00AM to 9:00AM, Unavailable",
                            },
                            {
                                id: "slot1",
                                startTime: "09:00",
                                endTime: "10:00",
                                clickable: true,
                                label: "Morning slot",
                                styleAttributes: { backgroundColor: "blue" },
                                ariaLabel:
                                    "9:00AM to 10:00AM, Available, Morning slot",
                            },
                        ],
                    },
                },
                {
                    testName:
                        "should add unavailable slot after last slot when there is a trailing gap",
                    input: {
                        variant: "default",
                        range: { start: "09:00", end: "17:00" },
                        slots: [
                            {
                                id: "slot1",
                                startTime: "09:00",
                                endTime: "10:00",
                                clickable: true,
                                label: "Morning slot",
                                styleAttributes: { backgroundColor: "blue" },
                            },
                        ],
                    },
                    expected: {
                        summary: "Time slot bar",
                        computedSlot: [
                            {
                                id: "slot1",
                                startTime: "09:00",
                                endTime: "10:00",
                                clickable: true,
                                label: "Morning slot",
                                styleAttributes: { backgroundColor: "blue" },
                                ariaLabel:
                                    "9:00AM to 10:00AM, Available, Morning slot",
                            },
                            {
                                id: expect.any(String),
                                startTime: "10:00",
                                endTime: "17:00",
                                clickable: false,
                                styleAttributes: {
                                    backgroundColor: "transparent",
                                },
                                ariaLabel: "10:00AM to 5:00PM, Unavailable",
                            },
                        ],
                    },
                },
                {
                    testName:
                        "should add unavailable slot between slots when there is a gap",
                    input: {
                        variant: "default",
                        range: { start: "09:00", end: "17:00" },
                        slots: [
                            {
                                id: "slot1",
                                startTime: "09:00",
                                endTime: "10:00",
                                clickable: true,
                                label: "Morning slot",
                                styleAttributes: { backgroundColor: "blue" },
                            },
                            {
                                id: "slot2",
                                startTime: "16:00",
                                endTime: "17:00",
                                clickable: true,
                                label: "Afternoon slot",
                                styleAttributes: { backgroundColor: "blue" },
                            },
                        ],
                    },
                    expected: {
                        summary: "Time slot bar",
                        computedSlot: [
                            {
                                id: "slot1",
                                startTime: "09:00",
                                endTime: "10:00",
                                clickable: true,
                                styleAttributes: {
                                    backgroundColor: "blue",
                                },
                                label: "Morning slot",
                                ariaLabel:
                                    "9:00AM to 10:00AM, Available, Morning slot",
                            },
                            {
                                id: expect.any(String),
                                startTime: "10:00",
                                endTime: "16:00",
                                clickable: false,
                                styleAttributes: {
                                    backgroundColor: "transparent",
                                },
                                label: undefined,
                                ariaLabel: "10:00AM to 4:00PM, Unavailable",
                            },
                            {
                                id: "slot2",
                                startTime: "16:00",
                                endTime: "17:00",
                                clickable: true,
                                styleAttributes: {
                                    backgroundColor: "blue",
                                },
                                label: "Afternoon slot",
                                ariaLabel:
                                    "4:00PM to 5:00PM, Available, Afternoon slot",
                            },
                        ],
                    },
                },
            ];

            it.each(testCases)("$testName", ({ input, expected }) => {
                const { variant, range, slots } = input;

                const result = TimeSlotBarHelper.processSlots(
                    range,
                    slots,
                    variant as TimeSlotBarVariant
                );

                expect(result.summary).toBe(expected.summary);
                expect(result.computedSlots).toHaveLength(
                    expected.computedSlot.length
                );

                result.computedSlots.forEach((computedSlot, i) => {
                    const expectedSlot = expected.computedSlot[i]; // expect same order
                    expect(computedSlot).toEqual(expectedSlot);
                });
            });
        });

        describe("variant behavior", () => {
            const testCases = [
                {
                    testName:
                        "should have defined ariaLabel on each slot, and summary value of 'Time slot bar', given variant is 'default'",
                    input: {
                        variant: "default",
                        range: { start: "08:00", end: "10:00" },
                        slots: [
                            {
                                id: "slot1",
                                startTime: "08:00",
                                endTime: "09:00",
                                clickable: true,
                                label: "Morning slot 1",
                                styleAttributes: { backgroundColor: "blue" },
                            },
                            {
                                id: "slot2",
                                startTime: "09:00",
                                endTime: "10:00",
                                clickable: true,
                                label: "Morning slot 2",
                                styleAttributes: { backgroundColor: "blue" },
                            },
                        ],
                    },
                    expected: {
                        summary: "Time slot bar",
                        computedSlot: [
                            {
                                id: "slot1",
                                startTime: "08:00",
                                endTime: "09:00",
                                clickable: true,
                                label: "Morning slot 1",
                                styleAttributes: { backgroundColor: "blue" },
                                ariaLabel:
                                    "8:00AM to 9:00AM, Available, Morning slot 1",
                            },
                            {
                                id: "slot2",
                                startTime: "09:00",
                                endTime: "10:00",
                                clickable: true,
                                label: "Morning slot 2",
                                styleAttributes: { backgroundColor: "blue" },
                                ariaLabel:
                                    "9:00AM to 10:00AM, Available, Morning slot 2",
                            },
                        ],
                    },
                },
                {
                    testName:
                        "should not have ariaLabel on each slot, and summary value with slot information, given variant is 'minified'",
                    input: {
                        variant: "minified",
                        range: { start: "08:00", end: "10:00" },
                        slots: [
                            {
                                id: "slot1",
                                startTime: "08:00",
                                endTime: "09:00",
                                clickable: true,
                                label: "Morning slot 1",
                                styleAttributes: { backgroundColor: "blue" },
                            },
                            {
                                id: "slot2",
                                startTime: "09:00",
                                endTime: "10:00",
                                clickable: true,
                                label: "Morning slot 2",
                                styleAttributes: { backgroundColor: "blue" },
                            },
                        ],
                    },
                    expected: {
                        summary:
                            "Time slot bar, 8:00AM to 9:00AM, Available, Morning slot 1, 9:00AM to 10:00AM, Available, Morning slot 2",
                        computedSlot: [
                            {
                                id: "slot1",
                                startTime: "08:00",
                                endTime: "09:00",
                                clickable: true,
                                label: "Morning slot 1",
                                styleAttributes: { backgroundColor: "blue" },
                                ariaLabel: undefined,
                            },
                            {
                                id: "slot2",
                                startTime: "09:00",
                                endTime: "10:00",
                                clickable: true,
                                label: "Morning slot 2",
                                styleAttributes: { backgroundColor: "blue" },
                                ariaLabel: undefined,
                            },
                        ],
                    },
                },
            ];

            it.each(testCases)("$testName", ({ input, expected }) => {
                const { variant, range, slots } = input;

                const result = TimeSlotBarHelper.processSlots(
                    range,
                    slots,
                    variant as TimeSlotBarVariant
                );

                expect(result.summary).toBe(expected.summary);
                expect(result.computedSlots).toHaveLength(
                    expected.computedSlot.length
                );

                result.computedSlots.forEach((computedSlot, i) => {
                    const expectedSlot = expected.computedSlot[i]; // expect same order
                    expect(computedSlot).toEqual(expectedSlot);
                });
            });
        });

        describe("slot sorting behavior", () => {
            const testCases = [
                {
                    testName:
                        "should return computedSlots that are sorted by startTime, given an unsorted slots input",
                    input: {
                        variant: "default",
                        range: { start: "08:00", end: "10:00" },
                        slots: [
                            {
                                id: "slot2",
                                startTime: "09:00",
                                endTime: "10:00",
                                clickable: true,
                                label: "Morning slot 2",
                                styleAttributes: { backgroundColor: "blue" },
                            },
                            {
                                id: "slot1",
                                startTime: "08:00",
                                endTime: "09:00",
                                clickable: true,
                                label: "Morning slot 1",
                                styleAttributes: { backgroundColor: "blue" },
                            },
                        ],
                    },
                    expected: {
                        summary: "Time slot bar",
                        computedSlot: [
                            {
                                id: "slot1",
                                startTime: "08:00",
                                endTime: "09:00",
                                clickable: true,
                                label: "Morning slot 1",
                                styleAttributes: { backgroundColor: "blue" },
                                ariaLabel:
                                    "8:00AM to 9:00AM, Available, Morning slot 1",
                            },
                            {
                                id: "slot2",
                                startTime: "09:00",
                                endTime: "10:00",
                                clickable: true,
                                label: "Morning slot 2",
                                styleAttributes: { backgroundColor: "blue" },
                                ariaLabel:
                                    "9:00AM to 10:00AM, Available, Morning slot 2",
                            },
                        ],
                    },
                },
            ];

            it.each(testCases)("$testName", ({ input, expected }) => {
                const { variant, range, slots } = input;

                const result = TimeSlotBarHelper.processSlots(
                    range,
                    slots,
                    variant as TimeSlotBarVariant
                );

                expect(result.summary).toBe(expected.summary);
                expect(result.computedSlots).toHaveLength(
                    expected.computedSlot.length
                );

                result.computedSlots.forEach((computedSlot, i) => {
                    const expectedSlot = expected.computedSlot[i]; // expect same order
                    expect(computedSlot).toEqual(expectedSlot);
                });
            });
        });
    });
});
