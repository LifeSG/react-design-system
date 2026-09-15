import type { CountryValue } from "./types";
export declare class PhoneNumberInputHelper {
    static getCountries(): CountryValue[];
    static formatNumber(numberText?: string, country?: CountryValue): string;
}
