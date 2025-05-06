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
