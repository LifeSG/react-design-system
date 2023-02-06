import { CountryValue } from "./types";
export declare namespace PhoneNumberInputHelper {
    const getCountries: CountryValue[];
    const formatNumber: (text: string, country: CountryValue | undefined) => string;
}
