import reduce from "lodash/reduce";
import { CountryData } from "./data/country-code";
import { CountryValue } from "./types";

// Format stucture: prefix+countryCode+' '+defaultMask
const defaultMask = "... ... ... ... ..";
const prefix = "+";

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
const getMask = (
    prefix: string,
    countryCode: string,
    predefinedMask: string,
    defaultMask: string
) => {
    if (!predefinedMask) {
        return prefix + "".padEnd(countryCode.length, ".") + " " + defaultMask;
    } else {
        return (
            prefix + "".padEnd(countryCode.length, ".") + " " + predefinedMask
        );
    }
};

export namespace PhoneNumberInputHelper {
    export const getCountries = (): CountryValue[] => {
        const countries: CountryValue[] = [];
        return countries.concat(
            ...CountryData.map((country): CountryValue => {
                const countryItem = {
                    name: country[0] as string,
                    regions: country[1] as string[],
                    iso2: country[2] as string,
                    countryCode: country[3] as string,
                    format: getMask(
                        prefix,
                        country[3] as string,
                        country[4] as string,
                        defaultMask
                    ),
                };

                return countryItem;
            })
        );
    };

    export const formatNumber = (
        numberText = "",
        country?: CountryValue
    ): string => {
        if (!country) return numberText;

        const numberTextWithoutSpace = numberText.replace(/[\s()]+/g, "");

        const { format } = country;

        /**
         * Strip the prefix. The format usually contains
         * the prefix (e.g. +.. .... ....). And we are
         * only concerned about the actual number format
         */
        const removedPrefix = format.split(" ");
        removedPrefix.shift();

        const pattern = removedPrefix.join(" ");

        const formattedObject = reduce(
            pattern,
            (acc, character) => {
                if (acc.remainingText.length === 0) {
                    return acc;
                }

                if (character !== ".") {
                    return {
                        formattedText: acc.formattedText + character,
                        remainingText: acc.remainingText,
                    };
                }

                const head = acc.remainingText.slice(0, 1);
                const tail = acc.remainingText.slice(1);

                return {
                    formattedText: acc.formattedText + head,
                    remainingText: tail,
                };
            },
            {
                formattedText: "",
                remainingText: numberTextWithoutSpace,
            }
        );

        const formattedNumber = formattedObject.formattedText;
        return formattedNumber;
    };
}
