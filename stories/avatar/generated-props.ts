// AUTO-GENERATED — do not edit manually.
// Source: src/avatar/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const AvatarPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description:
                    "Content to display in the avatar, typically an initial or a custom element.",
                propTypes: ["string", "JSX.Element"],
                mandatory: true,
            },
            {
                name: "sizeType",
                description: "Size of the avatar.",
                propTypes: ["AvatarSize"],
                defaultValue: '"default"',
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
                defaultValue: '"avatar"',
            },
        ],
    },
];
