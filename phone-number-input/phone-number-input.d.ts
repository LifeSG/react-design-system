import type { PhoneNumberInputProps } from "./types";
/**
 * A phone number field composed of a country code selector and a number input.
 *
 * Use `PhoneNumberInput` when collecting an internationalised phone number.
 * The country code can be selected from a searchable dropdown or locked to a
 * fixed value via `fixedCountry`.
 * @keywords contact, country code, field, form, input, number, telephone
 */
export declare const PhoneNumberInput: ({ id, onChange, value, allowClear, onClear, onBlur, error, fixedCountry, optionPlaceholder, optionSearchPlaceholder, enableSearch, onHideOptions, onShowOptions, placeholder, autoComplete, noBorder, getAriaLabel, ...otherProps }: PhoneNumberInputProps) => import("react/jsx-runtime").JSX.Element;
