import { StringHelper } from "../string-helper";

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
});
