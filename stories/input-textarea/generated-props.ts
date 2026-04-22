// AUTO-GENERATED — do not edit manually.
// Source: src/input-textarea/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const TextareaPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "error",
                description:
                    "Applies error styling to indicate an invalid value.",
                propTypes: ["boolean"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "transformValue",
                description:
                    "Optional function to transform the input value before it is applied.",
                propTypes: ["((value: string) => string) | undefined"],
            },
            {
                name: "prefix",
                description:
                    "Static prefix text displayed before the textarea content.",
                propTypes: ["string"],
            },
            {
                name: "renderCustomCounter",
                description:
                    "Renders a custom character counter element using the current max length and value length.",
                propTypes: [
                    "",
                    "((maxLength: number, currentValueLength: number) => JSX.Element)\n        | undefined",
                ],
            },
        ],
    },
];
