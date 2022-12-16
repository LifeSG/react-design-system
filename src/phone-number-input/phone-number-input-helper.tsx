import { CountryData } from "./data/country-code";
import { reduce } from "lodash";

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
    export const getCountries = [].concat(
        ...CountryData.map((country) => {
            const countryItem = {
                name: country[0],
                regions: country[1],
                iso2: country[2],
                countryCode: country[3],
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

    export const formatNumber = (text, country) => {
        if (!country) return text;

        const { format } = country;

        // Remove Prefix
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

                const [head, ...tail] = acc.remainingText;

                return {
                    formattedText: acc.formattedText + head,
                    remainingText: tail,
                };
            },
            {
                formattedText: "",
                remainingText: text.split(""),
            }
        );

        const formattedNumber = formattedObject.formattedText;
        return formattedNumber;
    };
}
