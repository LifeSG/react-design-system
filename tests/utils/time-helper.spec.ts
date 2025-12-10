import { TimeHelper } from "../../src/util/time-helper";

describe("parseInput tests", () => {
    it("should parse regex matching strings", async () => {
        expect(TimeHelper.parseInput("0")).toBe("12:00am");
        expect(TimeHelper.parseInput("0:")).toBe("12:00am");
        expect(TimeHelper.parseInput("9.30")).toBe("9:30am");
        expect(TimeHelper.parseInput("24")).toBe("12:00am");
        expect(TimeHelper.parseInput("1a")).toBe("1:00am");
        expect(TimeHelper.parseInput("1am")).toBe("1:00am");
        expect(TimeHelper.parseInput("8p")).toBe("8:00pm");
        expect(TimeHelper.parseInput("20")).toBe("8:00pm");
        expect(TimeHelper.parseInput("20am")).toBe("8:00pm");
        expect(TimeHelper.parseInput("2359")).toBe("11:59pm");
    });

    it("should parse for 24hr format", async () => {
        expect(TimeHelper.parseInput("0", "24hr")).toBe("00:00");
        expect(TimeHelper.parseInput("24", "24hr")).toBe("00:00");
        expect(TimeHelper.parseInput("1am", "24hr")).toBe("01:00");
        expect(TimeHelper.parseInput("8p", "24hr")).toBe("20:00");
        expect(TimeHelper.parseInput("20", "24hr")).toBe("20:00");
        expect(TimeHelper.parseInput("20am", "24hr")).toBe("20:00");
    });

    it("should give am for 7 to 11", async () => {
        expect(TimeHelper.parseInput("7")).toBe("7:00am");
        expect(TimeHelper.parseInput("8")).toBe("8:00am");
        expect(TimeHelper.parseInput("9")).toBe("9:00am");
        expect(TimeHelper.parseInput("10")).toBe("10:00am");
        expect(TimeHelper.parseInput("11")).toBe("11:00am");
    });

    it("should give pm for 12 to 6", async () => {
        expect(TimeHelper.parseInput("12")).toBe("12:00pm");
        expect(TimeHelper.parseInput("1")).toBe("1:00pm");
        expect(TimeHelper.parseInput("2")).toBe("2:00pm");
        expect(TimeHelper.parseInput("3")).toBe("3:00pm");
        expect(TimeHelper.parseInput("4")).toBe("4:00pm");
        expect(TimeHelper.parseInput("5")).toBe("5:00pm");
        expect(TimeHelper.parseInput("6")).toBe("6:00pm");
    });

    it("should give undefined (error) for invalid input", async () => {
        expect(TimeHelper.parseInput("am")).toBeUndefined();
        expect(TimeHelper.parseInput("pm")).toBeUndefined();
        expect(TimeHelper.parseInput(":00")).toBeUndefined();
        expect(TimeHelper.parseInput("00::")).toBeUndefined();
        expect(TimeHelper.parseInput("1:1")).toBeUndefined();
        expect(TimeHelper.parseInput("1:60")).toBeUndefined();
        expect(TimeHelper.parseInput("25")).toBeUndefined();
        expect(TimeHelper.parseInput("1ama")).toBeUndefined();
        expect(TimeHelper.parseInput("11111")).toBeUndefined();
    });
});

describe("roundToNearestInterval tests", () => {
    it("should return the same time if already aligned with the interval", () => {
        expect(TimeHelper.roundToNearestInterval("08:00", 15, false)).toBe(
            "08:00"
        );
        expect(TimeHelper.roundToNearestInterval("08:15", 15, false)).toBe(
            "08:15"
        );
        expect(TimeHelper.roundToNearestInterval("08:00", 15, true)).toBe(
            "08:00"
        );
        expect(TimeHelper.roundToNearestInterval("08:15", 15, true)).toBe(
            "08:15"
        );
        expect(TimeHelper.roundToNearestInterval("00:45", 45, false)).toBe(
            "00:45"
        );
        expect(TimeHelper.roundToNearestInterval("01:30", 45, false)).toBe(
            "01:30"
        );
        expect(TimeHelper.roundToNearestInterval("08:00", 60, false)).toBe(
            "08:00"
        );
    });

    it("should round down to the previous interval when toNextInterval is false", () => {
        expect(TimeHelper.roundToNearestInterval("08:03", 15, false)).toBe(
            "08:00"
        );
        expect(TimeHelper.roundToNearestInterval("08:14", 15, false)).toBe(
            "08:00"
        );
        expect(TimeHelper.roundToNearestInterval("08:29", 15, false)).toBe(
            "08:15"
        );
        expect(TimeHelper.roundToNearestInterval("00:44", 45, false)).toBe(
            "00:00"
        );
        expect(TimeHelper.roundToNearestInterval("00:55", 45, false)).toBe(
            "00:45"
        );
        expect(TimeHelper.roundToNearestInterval("01:30", 45, false)).toBe(
            "01:30"
        );
    });

    it("should round up to the next interval when toNextInterval is true", () => {
        expect(TimeHelper.roundToNearestInterval("08:03", 15, true)).toBe(
            "08:15"
        );
        expect(TimeHelper.roundToNearestInterval("08:14", 15, true)).toBe(
            "08:15"
        );
        expect(TimeHelper.roundToNearestInterval("08:29", 15, true)).toBe(
            "08:30"
        );
    });

    it("should handle edge cases like 00:00 and 24:00", () => {
        expect(TimeHelper.roundToNearestInterval("00:00", 15, false)).toBe(
            "00:00"
        );
        expect(TimeHelper.roundToNearestInterval("00:14", 15, false)).toBe(
            "00:00"
        );
        expect(TimeHelper.roundToNearestInterval("00:14", 15, true)).toBe(
            "00:15"
        );
        expect(TimeHelper.roundToNearestInterval("23:59", 15, true)).toBe(
            "24:00"
        );
        expect(TimeHelper.roundToNearestInterval("23:59", 15, false)).toBe(
            "23:45"
        );
    });

    it("should handle times exceeding 24:00", () => {
        expect(TimeHelper.roundToNearestInterval("24:01", 15, false)).toBe(
            "24:00"
        );
        expect(TimeHelper.roundToNearestInterval("25:55", 15, true)).toBe(
            "26:00"
        );
        expect(TimeHelper.roundToNearestInterval("27:30", 30, true)).toBe(
            "27:30"
        );
        expect(TimeHelper.roundToNearestInterval("27:45", 30, false)).toBe(
            "27:30"
        );
    });

    it("should handle 1-hour intervals", () => {
        expect(TimeHelper.roundToNearestInterval("08:30", 60, false)).toBe(
            "08:00"
        );
        expect(TimeHelper.roundToNearestInterval("08:30", 60, true)).toBe(
            "09:00"
        );
        expect(TimeHelper.roundToNearestInterval("23:59", 60, true)).toBe(
            "24:00"
        );
    });

    it("should throw an error for invalid time formats", () => {
        expect(() =>
            TimeHelper.roundToNearestInterval("invalid", 15, true)
        ).toThrow("Invalid time format");
        expect(() =>
            TimeHelper.roundToNearestInterval("25:99", 15, true)
        ).toThrow("Invalid time format");
        expect(() =>
            TimeHelper.roundToNearestInterval("12:60", 15, true)
        ).toThrow("Invalid time format");
    });

    it("should handle large intervals (e.g., 120 minutes)", () => {
        expect(TimeHelper.roundToNearestInterval("08:30", 120, false)).toBe(
            "08:00"
        );
        expect(TimeHelper.roundToNearestInterval("08:30", 120, true)).toBe(
            "10:00"
        );
        expect(TimeHelper.roundToNearestInterval("23:59", 120, true)).toBe(
            "24:00"
        );
        expect(TimeHelper.roundToNearestInterval("00:15", 480, true)).toBe(
            "08:00"
        );
        expect(TimeHelper.roundToNearestInterval("08:00", 480, true)).toBe(
            "08:00"
        );
        expect(TimeHelper.roundToNearestInterval("08:15", 480, true)).toBe(
            "16:00"
        );
        expect(TimeHelper.roundToNearestInterval("00:15", 480, false)).toBe(
            "00:00"
        );
    });
});

describe("calculateScrollPosition tests", () => {
    describe("Valid scroll positions", () => {
        it("should calculate scroll position at the start time", () => {
            const result = TimeHelper.calculateScrollPosition({
                scrollTime: "08:00",
                minTime: "08:00",
                maxTime: "18:00",
                interval: 15,
                intervalWidth: 50,
            });

            expect(result).toBe(0);
        });

        it("should calculate scroll position for a time in the middle", () => {
            const result = TimeHelper.calculateScrollPosition({
                scrollTime: "09:00",
                minTime: "08:00",
                maxTime: "18:00",
                interval: 15,
                intervalWidth: 50,
            });

            // 09:00 is 60 minutes from 08:00
            // 60 / 15 = 4 intervals
            // 4 * 50 = 200px
            expect(result).toBe(200);
        });

        it("should calculate scroll position with 30-minute intervals", () => {
            const result = TimeHelper.calculateScrollPosition({
                scrollTime: "10:00",
                minTime: "08:00",
                maxTime: "18:00",
                interval: 30,
                intervalWidth: 100,
            });

            // 10:00 is 120 minutes from 08:00
            // 120 / 30 = 4 intervals
            // 4 * 100 = 400px
            expect(result).toBe(400);
        });

        it("should calculate scroll position with 60-minute intervals", () => {
            const result = TimeHelper.calculateScrollPosition({
                scrollTime: "11:00",
                minTime: "08:00",
                maxTime: "20:00",
                interval: 60,
                intervalWidth: 80,
            });

            // 11:00 is 180 minutes from 08:00
            // 180 / 60 = 3 intervals
            // 3 * 80 = 240px
            expect(result).toBe(240);
        });

        it("should calculate scroll position with fractional intervals", () => {
            const result = TimeHelper.calculateScrollPosition({
                scrollTime: "08:45",
                minTime: "08:00",
                maxTime: "18:00",
                interval: 15,
                intervalWidth: 50,
            });

            // 08:45 is 45 minutes from 08:00
            // 45 / 15 = 3 intervals
            // 3 * 50 = 150px
            expect(result).toBe(150);
        });

        it("should handle times starting from midnight", () => {
            const result = TimeHelper.calculateScrollPosition({
                scrollTime: "06:00",
                minTime: "00:00",
                maxTime: "24:00",
                interval: 30,
                intervalWidth: 40,
            });

            // 06:00 is 360 minutes from 00:00
            // 360 / 30 = 12 intervals
            // 12 * 40 = 480px
            expect(result).toBe(480);
        });
    });

    describe("Round to interval option", () => {
        it("should round scroll time to nearest interval when option is enabled", () => {
            const result = TimeHelper.calculateScrollPosition({
                scrollTime: "08:37",
                minTime: "08:00",
                maxTime: "18:00",
                interval: 15,
                intervalWidth: 50,
                options: {
                    roundToInterval: true,
                },
            });

            // 08:37 rounds to 08:30 (30 minutes from 08:00)
            // 30 / 15 = 2 intervals
            // 2 * 50 = 100px
            expect(result).toBe(100);
        });

        it("should not round when option is disabled", () => {
            const result = TimeHelper.calculateScrollPosition({
                scrollTime: "08:37",
                minTime: "08:00",
                maxTime: "18:00",
                interval: 15,
                intervalWidth: 50,
                options: {
                    roundToInterval: false,
                },
            });

            // 08:37 is 37 minutes from 08:00
            // 37 / 15 = 2.4666... intervals
            // 2.4666... * 50 = 123.333...px
            expect(result).toBeCloseTo(123.33, 1);
        });

        it("should not round by default when option is not specified", () => {
            const result = TimeHelper.calculateScrollPosition({
                scrollTime: "08:22",
                minTime: "08:00",
                maxTime: "18:00",
                interval: 15,
                intervalWidth: 50,
            });

            // 08:22 is 22 minutes from 08:00
            // 22 / 15 = 1.4666... intervals
            // 1.4666... * 50 = 73.333...px
            expect(result).toBeCloseTo(73.33, 1);
        });
    });

    describe("Out of range warnings", () => {
        let localConsoleWarnSpy: jest.SpyInstance;

        beforeEach(() => {
            localConsoleWarnSpy = jest
                .spyOn(console, "warn")
                .mockImplementation();
        });

        afterEach(() => {
            localConsoleWarnSpy.mockRestore();
        });

        it("should warn when scroll time is before min time", () => {
            const result = TimeHelper.calculateScrollPosition({
                scrollTime: "06:00",
                minTime: "08:00",
                maxTime: "18:00",
                interval: 15,
                intervalWidth: 50,
            });

            expect(localConsoleWarnSpy).toHaveBeenCalledWith(
                expect.stringContaining(
                    'scrollTime "06:00" is outside the range (08:00 - 18:00)'
                )
            );
            // Should still return a calculated position (negative)
            // 06:00 is 120 minutes before 08:00
            // -120 / 15 = -8 intervals
            // -8 * 50 = -400px
            expect(result).toBe(-400);
        });

        it("should warn when scroll time is after max time", () => {
            const result = TimeHelper.calculateScrollPosition({
                scrollTime: "20:00",
                minTime: "08:00",
                maxTime: "18:00",
                interval: 15,
                intervalWidth: 50,
            });

            expect(localConsoleWarnSpy).toHaveBeenCalledWith(
                expect.stringContaining(
                    'scrollTime "20:00" is outside the range (08:00 - 18:00)'
                )
            );
            // Should still return a calculated position
            // 20:00 is 720 minutes from 08:00
            // 720 / 15 = 48 intervals
            // 48 * 50 = 2400px
            expect(result).toBe(2400);
        });
    });

    describe("Invalid input handling", () => {
        it("should return null and warn for invalid time format", () => {
            const result = TimeHelper.calculateScrollPosition({
                scrollTime: "invalid",
                minTime: "08:00",
                maxTime: "18:00",
                interval: 15,
                intervalWidth: 50,
            });

            expect(result).toBeNull();
        });

        it("should return null for time with invalid hour", () => {
            const result = TimeHelper.calculateScrollPosition({
                scrollTime: "25:00",
                minTime: "08:00",
                maxTime: "18:00",
                interval: 15,
                intervalWidth: 50,
            });

            expect(result).toBeNull();
        });

        it("should return null for time with invalid minute", () => {
            const result = TimeHelper.calculateScrollPosition({
                scrollTime: "08:60",
                minTime: "08:00",
                maxTime: "18:00",
                interval: 15,
                intervalWidth: 50,
            });

            expect(result).toBeNull();
        });

        it("should return null for malformed time string", () => {
            const result = TimeHelper.calculateScrollPosition({
                scrollTime: "8:0",
                minTime: "08:00",
                maxTime: "18:00",
                interval: 15,
                intervalWidth: 50,
            });

            expect(result).toBeNull();
        });

        it("should return null for empty string", () => {
            const result = TimeHelper.calculateScrollPosition({
                scrollTime: "",
                minTime: "08:00",
                maxTime: "18:00",
                interval: 15,
                intervalWidth: 50,
            });

            expect(result).toBeNull();
        });
    });

    describe("Edge cases", () => {
        it("should handle midnight (00:00) correctly", () => {
            const result = TimeHelper.calculateScrollPosition({
                scrollTime: "00:00",
                minTime: "00:00",
                maxTime: "12:00",
                interval: 30,
                intervalWidth: 60,
            });

            expect(result).toBe(0);
        });

        it("should handle end of day (23:59) correctly", () => {
            const result = TimeHelper.calculateScrollPosition({
                scrollTime: "23:00",
                minTime: "00:00",
                maxTime: "24:00",
                interval: 60,
                intervalWidth: 50,
            });

            // 23:00 is 1380 minutes from 00:00
            // 1380 / 60 = 23 intervals
            // 23 * 50 = 1150px
            expect(result).toBe(1150);
        });

        it("should handle very small intervals", () => {
            const result = TimeHelper.calculateScrollPosition({
                scrollTime: "08:05",
                minTime: "08:00",
                maxTime: "09:00",
                interval: 5,
                intervalWidth: 10,
            });

            // 08:05 is 5 minutes from 08:00
            // 5 / 5 = 1 interval
            // 1 * 10 = 10px
            expect(result).toBe(10);
        });

        it("should handle very large intervals", () => {
            const result = TimeHelper.calculateScrollPosition({
                scrollTime: "12:00",
                minTime: "00:00",
                maxTime: "24:00",
                interval: 240,
                intervalWidth: 200,
            });

            // 12:00 is 720 minutes from 00:00
            // 720 / 240 = 3 intervals
            // 3 * 200 = 600px
            expect(result).toBe(600);
        });

        it("should handle fractional pixel widths", () => {
            const result = TimeHelper.calculateScrollPosition({
                scrollTime: "08:30",
                minTime: "08:00",
                maxTime: "18:00",
                interval: 15,
                intervalWidth: 33.5,
            });

            // 08:30 is 30 minutes from 08:00
            // 30 / 15 = 2 intervals
            // 2 * 33.5 = 67px
            expect(result).toBe(67);
        });
    });
});
