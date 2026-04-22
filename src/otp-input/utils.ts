import { OtpInputProps } from "./types";

export const validateUserInput = (value: string, length = 1) =>
    !value ? false : RegExp(`^[0-9]{${length}}$`).test(value);

export const stripOtpFromAutofill = (
    autofillValue: string,
    validOtpLength: number,
    prefix?: OtpInputProps["prefix"]
) => {
    if (autofillValue.length === validOtpLength) {
        /* when there is no prefix, or on ios where it seems to strip the prefix for autofill */
        return autofillValue;
    }

    if (prefix) {
        const [autofillPrefixValue, autofillOtpValue] = autofillValue.split(
            prefix.separator
        );
        return autofillPrefixValue === prefix.value &&
            autofillOtpValue.length === validOtpLength
            ? autofillOtpValue
            : "";
    }

    /* if no prefix, it should be covered in condition 1 */
    return "";
};
