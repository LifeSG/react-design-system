// AUTO-GENERATED — do not edit manually.
// Source: src/phone-number-input/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const PhoneNumberInputPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "value",
                description:
                    "The controlled value containing `countryCode` and `number`.",
                propTypes: ["PhoneNumberInputValue"],
            },
            {
                name: "error",
                description:
                    "Applies error styling to indicate an invalid phone number.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "allowClear",
                description:
                    "Shows a clear (×) button inside the number input when it has a value.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "data-testid",
                description:
                    "Sets the `data-testid` attribute for targeting the element in automated tests.",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "Additional CSS class name.",
                propTypes: ["string"],
            },
            {
                name: "noBorder",
                description: "",
                propTypes: ["boolean"],
            },
            {
                name: "fixedCountry",
                description:
                    "Locks the country code selector, preventing the user from changing the country. Use when the application only supports one country (e.g., Singapore-only service).",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "onChange",
                description:
                    "Called when the user changes the country code or the local number.",
                propTypes: [
                    "((value: PhoneNumberInputValue) => void) | undefined",
                ],
            },
            {
                name: "onClear",
                description:
                    "Called when the user clicks the clear button in the number input.",
                propTypes: ["() => void | undefined"],
            },
            {
                name: "onBlur",
                description: "Called when the input loses focus.",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "optionPlaceholder",
                description: "The placeholder value for the dropdown selector",
                propTypes: ["string"],
            },
            {
                name: "optionSearchPlaceholder",
                description: "The placeholder value for the dropdown search",
                propTypes: ["string"],
            },
            {
                name: "enableSearch",
                description: "Specifies if search is enabled in the dropdown",
                propTypes: ["boolean"],
            },
            {
                name: "onHideOptions",
                description: "Called when the dropdown is dismissed",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onShowOptions",
                description: "Called when the dropdown is visible",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "disabled",
                description: "",
                propTypes: ["boolean"],
            },
            {
                name: "name",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "pattern",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "placeholder",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "readOnly",
                description: "",
                propTypes: ["boolean"],
            },
            {
                name: "id",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "autoComplete",
                description: "",
                propTypes: ["string"],
            },
        ],
    },
];
