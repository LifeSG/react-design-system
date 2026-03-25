// AUTO-GENERATED — do not edit manually.
// Source: src/input-group/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

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
