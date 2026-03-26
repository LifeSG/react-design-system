// AUTO-GENERATED — do not edit manually.
// Source: src/input-group/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const InputGroupPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "addon",
                description:
                    "The addon configuration to attach to the input field.",
                propTypes: ["AddonProps<T, V>"],
            },
            {
                name: "noBorder",
                description:
                    "Removes the outer border from the input group container.",
                propTypes: ["boolean"],
            },
            {
                name: "onBlur",
                description:
                    "Called when the input or its addon loses focus. The event argument is optional for list addons.",
                propTypes: [
                    "((event?: React.FocusEvent<HTMLInputElement>) => void) | undefined",
                ],
            },
            {
                name: "spacing",
                description:
                    "Sets the number of characters before a space is inserted automatically. Only applies to inputs of type `tel`.",
                propTypes: ["efined;\n}\n\n/** Conf"],
            },
            {
                name: "error",
                description:
                    "Applies error styling to indicate an invalid value.",
                propTypes: ["g to display as the label addon. */"],
            },
            {
                name: "allowClear",
                description:
                    "Shows a clear (×) button inside the field when the field has a value.",
                propTypes: ["ropdown list addon t"],
            },
            {
                name: "onClear",
                description: "Called when the clear button is clicked.",
                propTypes: ["ncy code or country dia"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["extends Dropdo"],
            },
            {
                name: "styleType",
                description: "Visual style variant for the field border.",
                propTypes: ["e dropdown trigger when no"],
                defaultValue: '"bordered"',
            },
        ],
    },
];

export const AddonPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "type",
                description: "The kind of addon to render.",
                propTypes: ["InputGroupAddonType"],
            },
            {
                name: "attributes",
                description:
                    "The configuration attributes specific to the chosen addon type.",
                propTypes: ["ListAddon<T, V>", "LabelAddon", "CustomAddon"],
                mandatory: true,
            },
            {
                name: "position",
                description:
                    "Which side of the input field the addon is attached to.",
                propTypes: ["InputGroupAddonPosition"],
            },
        ],
    },
];
