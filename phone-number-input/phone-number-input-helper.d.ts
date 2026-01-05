import { CountryValue } from "./types";
export declare namespace PhoneNumberInputHelper {
    const getCountries: () => CountryValue[];
    const formatNumber: (numberText?: string, country?: CountryValue) => string;
}
