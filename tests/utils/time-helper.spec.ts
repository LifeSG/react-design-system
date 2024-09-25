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
