// AUTO-GENERATED — do not edit manually.
// Source: src/masked-input/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const MaskedInputPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "value",
                description: "Controlled value of the input.",
                propTypes: ["string"],
            },
            {
                name: "iconMask",
                description:
                    "Icon element shown when the field is in the masked (hidden) state.",
                propTypes: ["JSX.Element"],
            },
            {
                name: "iconUnmask",
                description:
                    "Icon element shown when the field is in the unmasked (visible) state.",
                propTypes: ["JSX.Element"],
            },
            {
                name: "iconActiveColor",
                description:
                    "Colour applied to the mask/unmask icon when in the active state.",
                propTypes: ["string"],
            },
            {
                name: "iconInactiveColor",
                description:
                    "Colour applied to the mask/unmask icon when in the inactive state.",
                propTypes: ["string"],
            },
            {
                name: "disableMask",
                description:
                    "When `true`, masking is disabled and the value is always displayed as plain text.",
                propTypes: ["boolean"],
            },
            {
                name: "transformInput",
                description:
                    "Transforms the raw input value to uppercase or lowercase before storing.",
                propTypes: ['"uppercase"', '"lowercase"'],
            },
            {
                name: "loadState",
                description:
                    'Specifies the state of the component when there is a loading behaviour. Note that this only applies if the component is in `readOnly` mode. Values: "loading" | "fail" | "success"',
                propTypes: ["MaskedInputLoadState"],
            },
            {
                name: "onMask",
                description:
                    "Called when the field is switched to the masked (hidden) state.",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onUnmask",
                description:
                    "Called when the field is switched to the unmasked (visible) state.",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onTryAgain",
                description:
                    'The callback function when the "Try again" button is clicked in error state',
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "spacing",
                description:
                    "Sets the number of characters before a space is inserted automatically. Only applies to inputs of type `tel`.",
                propTypes: ["defined;\n    /** Cu"],
            },
            {
                name: "error",
                description:
                    "Applies error styling to indicate an invalid value.",
                propTypes: ["askTransformer?: ((v"],
            },
            {
                name: "allowClear",
                description:
                    "Shows a clear (×) button inside the field when the field has a value.",
                propTypes: ['ault "•" */\n    mask'],
            },
            {
                name: "onClear",
                description: "Called when the clear button is clicked.",
                propTypes: ["onent, a single-line in"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["ends `InputProps` a"],
            },
            {
                name: "styleType",
                description: "Visual style variant for the field border.",
                propTypes: [", unmask\n */\nexport interfa"],
                defaultValue: '"bordered"',
            },
            {
                name: "maskRange",
                description:
                    "Index range [start, end] of characters to mask. Takes precedence over `unmaskRange` when both are set.",
                propTypes: ["number[]"],
            },
            {
                name: "unmaskRange",
                description:
                    "Index range [start, end] of characters to leave unmasked.",
                propTypes: ["number[]"],
            },
            {
                name: "maskRegex",
                description:
                    "Regular expression used to determine which characters to mask.",
                propTypes: ["RegExp"],
            },
            {
                name: "maskTransformer",
                description:
                    "Custom function to transform and produce the displayed masked string.",
                propTypes: ["((value: string) => string) | undefined"],
            },
            {
                name: "maskChar",
                description: "Character substituted for each masked character.",
                propTypes: ["string"],
                defaultValue: '"•"',
            },
        ],
    },
];

export const MaskAttributePropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "maskRange",
                description:
                    "Index range [start, end] of characters to mask. Takes precedence over `unmaskRange` when both are set.",
                propTypes: ["number[]"],
            },
            {
                name: "unmaskRange",
                description:
                    "Index range [start, end] of characters to leave unmasked.",
                propTypes: ["number[]"],
            },
            {
                name: "maskRegex",
                description:
                    "Regular expression used to determine which characters to mask.",
                propTypes: ["RegExp"],
            },
            {
                name: "maskTransformer",
                description:
                    "Custom function to transform and produce the displayed masked string.",
                propTypes: ["((value: string) => string) | undefined"],
            },
            {
                name: "maskChar",
                description: "Character substituted for each masked character.",
                propTypes: ["string"],
                defaultValue: '"•"',
            },
        ],
    },
];
