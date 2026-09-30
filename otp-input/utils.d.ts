import { OtpInputProps } from "./types";
export declare const validateUserInput: (value: string, length?: number) => boolean;
export declare const stripOtpFromAutofill: (autofillValue: string, validOtpLength: number, prefix?: OtpInputProps["prefix"]) => string;
