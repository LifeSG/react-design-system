// AUTO-GENERATED — do not edit manually.
// Source: src/button/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const ButtonPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "loading",
                description:
                    "Indicates if a loading spinner is to be displayed",
                propTypes: ["boolean"],
            },
            {
                name: "data-testid",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "styleType",
                description:
                    'The style type of the button. Values: "default" | "secondary" | "light" | "link"',
                propTypes: ["ButtonStyleType"],
            },
            {
                name: "danger",
                description:
                    "If specified, the component will have a red color scheme being applied",
                propTypes: ["boolean"],
            },
            {
                name: "focusableWhenDisabled",
                description:
                    "If true, the button remains focusable when disabled. Defaults to false.",
                propTypes: ["boolean"],
            },
        ],
    },
];

export const ButtonBasePropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "data-testid",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "styleType",
                description:
                    'The style type of the button. Values: "default" | "secondary" | "light" | "link"',
                propTypes: ["ButtonStyleType"],
            },
            {
                name: "danger",
                description:
                    "If specified, the component will have a red color scheme being applied",
                propTypes: ["boolean"],
            },
            {
                name: "focusableWhenDisabled",
                description:
                    "If true, the button remains focusable when disabled. Defaults to false.",
                propTypes: ["boolean"],
            },
        ],
    },
];
