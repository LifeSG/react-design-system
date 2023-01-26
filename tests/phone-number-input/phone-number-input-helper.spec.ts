import { PhoneNumberInputHelper } from "../../src/phone-number-input/phone-number-input-helper";

describe("PhoneNumberInputHelper", () => {
    describe("getCountries", () => {
        it("should return countries correctly", () => {
            const expected = {
                name: "Afghanistan",
                regions: ["asia"],
                iso2: "af",
                countryCode: "93",
                format: "+.. ... ... ... ... ..",
            };
            expect(PhoneNumberInputHelper.getCountries[0]).toEqual(expected);
        });

        it("should not return empty list", () => {
            const expected = [];
            expect(PhoneNumberInputHelper.getCountries).not.toEqual(expected);
        });
    });

    describe("formatNumber", () => {
        it("should return phone number format correctly", () => {
            const number = "95554314";
            const country = {
                countryCode: "65",
                format: "+.. .... ....",
                iso2: "sg",
                name: "Singapore",
                regions: ["asia"],
            };
            const expected = "9555 4314";
            expect(
                PhoneNumberInputHelper.formatNumber(number, country)
            ).toEqual(expected);

            expect(
                PhoneNumberInputHelper.formatNumber(number, country)
            ).not.toEqual(number);
        });

        it("should return phone number without format", () => {
            const number = "95554314";
            const expected = "9555 4314";

            expect(
                PhoneNumberInputHelper.formatNumber(number, undefined)
            ).not.toEqual(expected);

            expect(
                PhoneNumberInputHelper.formatNumber(number, undefined)
            ).toEqual(number);
        });
    });
});
