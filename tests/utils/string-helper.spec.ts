import { StringHelper } from "../../src/util/string-helper";

describe("StringHelper", () => {
    describe("padValue", () => {
        it("should pad single digits with a leading 0", () => {
            const testString = "4";
            const expected = "04";

            expect(StringHelper.padValue(testString)).toEqual(expected);
        });

        it("should not pad double digits with a leading 0", () => {
            const testString = "12";
            const expected = "12";

            expect(StringHelper.padValue(testString)).toEqual(expected);
        });

        it("should pad single 0 value with a leading 0", () => {
            const testString = "0";
            const expected = "00";

            expect(StringHelper.padValue(testString)).toEqual(expected);
        });

        it("should not pad single 0 value with a leading 0 if retainSingleZero is set to true", () => {
            const testString = "0";
            const expected = "0";

            expect(StringHelper.padValue(testString, true)).toEqual(expected);
        });

        it("should trim leading 0 from values with more than 2 characters", () => {
            const testString = "012";
            const expected = "12";

            expect(StringHelper.padValue(testString)).toEqual(expected);
        });

        it("should return empty values as is", () => {
            const testString = "";
            const expected = "";

            expect(StringHelper.padValue(testString, true)).toEqual(expected);
        });
    });

    describe("transformWithSpaces", () => {
        it("should transform with spaces correctly", () => {
            const testString = "91234567";
            const expected = "9123 4567";

            expect(StringHelper.transformWithSpaces(testString, 4)).toEqual(
                expected
            );
        });
    });

    describe("shouldTruncateToTwoLines", () => {
        it("should return false since there is enough width available", () => {
            const testString = "Hello world";
            const widthOfElement = 54;

            expect(
                StringHelper.shouldTruncateToTwoLines(
                    testString,
                    widthOfElement
                )
            ).toBeFalsy();
        });

        it("should return true since there is not enough width available", () => {
            const testString = "Hello world";
            const widthOfElement = 53;

            expect(
                StringHelper.shouldTruncateToTwoLines(
                    testString,
                    widthOfElement
                )
            ).toBeTruthy();
        });
    });

    describe("truncateOneLine", () => {
        it("should truncate if input text length > baseline char length, and there is no additional space", () => {
            const testString = "123456789012";
            const widthOfElement = 54;
            const minDivSize = 53;
            const initialCharLength = 8;

            expect(
                StringHelper.truncateOneLine(
                    testString,
                    widthOfElement,
                    minDivSize,
                    initialCharLength
                )
            ).toEqual("1234 ... 9012");
        });

        it("should not truncate if input text length = baseline char length, and there is no additional space ", () => {
            const testString = "12345678";
            const widthOfElement = 54;
            const minDivSize = 53;
            const initialCharLength = 8;

            expect(
                StringHelper.truncateOneLine(
                    testString,
                    widthOfElement,
                    minDivSize,
                    initialCharLength
                )
            ).toEqual("12345678");
        });

        it("should not truncate if input text length < baseline char length, and there is no additional space ", () => {
            const testString = "12345";
            const widthOfElement = 54;
            const minDivSize = 53;
            const initialCharLength = 8;

            expect(
                StringHelper.truncateOneLine(
                    testString,
                    widthOfElement,
                    minDivSize,
                    initialCharLength
                )
            ).toEqual("12345");
        });

        it("should not truncate if input text length > baseline char length, and there is additional space", () => {
            const testString = "123456789";
            const widthOfElement = 61;
            const minDivSize = 53;
            const initialCharLength = 8;

            expect(
                StringHelper.truncateOneLine(
                    testString,
                    widthOfElement,
                    minDivSize,
                    initialCharLength
                )
            ).toEqual("123456789");
        });
    });

    describe("maskValue", () => {
        it("should mask the value basked on the mask range and mask char", () => {
            const testString = "S1234567D";
            const options = {
                maskRange: [2, 5],
                maskChar: "•",
            };

            expect(StringHelper.maskValue(testString, options)).toEqual(
                "S1••••67D"
            );
        });

        it("should mask the value basked on the mask range", () => {
            const testString = "S1234567D";
            const options = {
                maskRange: [2, 5],
                maskChar: "-",
            };

            expect(StringHelper.maskValue(testString, options)).toEqual(
                "S1----67D"
            );
        });

        it("should mask the value basked on the unmask range", () => {
            const testString = "S1234567D";
            const options = {
                unmaskRange: [1, 4],
            };

            expect(StringHelper.maskValue(testString, options)).toEqual(
                "•1234••••"
            );
        });

        it("should render the correct masked value based on the mask transformer", () => {
            const testString = "S1234567D";
            const options = {
                maskTransformer: (value: string) => value.replace(/\D/g, "*"),
            };

            expect(StringHelper.maskValue(testString, options)).toEqual(
                "*1234567*"
            );
        });

        it("should render the correct masked value based on the mask regex", () => {
            const testString = "S1234567D";
            const options = {
                maskRegex: /\D/g,
            };

            expect(StringHelper.maskValue(testString, options)).toEqual(
                "•1234567•"
            );
        });
    });
});
