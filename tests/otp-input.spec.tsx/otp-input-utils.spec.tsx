import {
    strippedOtpFromAutofill,
    validateUserInput,
} from "../../src/otp-input/utils";

describe("strippedOtpFromAutofill", () => {
    const EXPECTED_OTP_LENGTH = 4;

    describe("with no prefix", () => {
        const autofillValue = "1234";

        it("should return the autofill value when it matches the valid OTP length", () => {
            const result = strippedOtpFromAutofill(
                autofillValue,
                EXPECTED_OTP_LENGTH
            );
            expect(result).toBe(autofillValue);
        });

        it("should return the autofill value when it matches the valid OTP length even if a prefix is provided", () => {
            const result = strippedOtpFromAutofill(
                autofillValue,
                EXPECTED_OTP_LENGTH,
                { value: "SPF", separator: "-" }
            );
            expect(result).toBe(autofillValue);
        });

        it("should return an empty string when the autofill value length does not match", () => {
            const autofillValue = "123";
            const result = strippedOtpFromAutofill(
                autofillValue,
                EXPECTED_OTP_LENGTH
            );
            expect(result).toBe("");

            const autofillValue2 = "12345";
            const result2 = strippedOtpFromAutofill(
                autofillValue2,
                EXPECTED_OTP_LENGTH
            );
            expect(result2).toBe("");
        });
    });

    describe("with prefix", () => {
        it("should return the autofill value without prefix", () => {
            const autofillValue = "abc-1234";
            const prefix = { value: "abc", separator: "-" };
            const result = strippedOtpFromAutofill(
                autofillValue,
                EXPECTED_OTP_LENGTH,
                prefix
            );
            expect(result).toBe("1234");
        });

        it("should return an empty string when the prefix does not match", () => {
            const autofillValue = "abc-1234";
            const prefix = { value: "def", separator: "-" };
            const result = strippedOtpFromAutofill(
                autofillValue,
                EXPECTED_OTP_LENGTH,
                prefix
            );
            expect(result).toBe("");
        });

        it("should return an empty string when the separator does not match", () => {
            const autofillValue = "abc-1234";
            const prefix = { value: "abc", separator: "+" };
            const result = strippedOtpFromAutofill(
                autofillValue,
                EXPECTED_OTP_LENGTH,
                prefix
            );
            expect(result).toBe("");
        });
    });
});

describe("validateUserInput", () => {
    it("should return false for empty string", () => {
        expect(validateUserInput("")).toBe(false);
    });

    it("should return false for non-numeric string", () => {
        expect(validateUserInput("abc")).toBe(false);
    });

    it("should return false for string with non-numeric characters", () => {
        expect(validateUserInput("123abc")).toBe(false);
    });

    it("should return true for numeric string with default length", () => {
        expect(validateUserInput("1")).toBe(true);
    });

    it("should return true for numeric string with specified length", () => {
        expect(validateUserInput("123", 3)).toBe(true);
    });

    it("should return false for numeric string with incorrect length", () => {
        expect(validateUserInput("123", 4)).toBe(false);
    });

    it("should return false for numeric string with length 0", () => {
        expect(validateUserInput("123", 0)).toBe(false);
    });

    it("should return false for null or undefined input", () => {
        expect(validateUserInput(null as unknown as string)).toBe(false);
        expect(validateUserInput(undefined as unknown as string)).toBe(false);
    });
});
