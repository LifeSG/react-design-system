// AUTO-GENERATED — do not edit manually.
// Source: src/error-display/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const ErrorDisplayPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "type",
                description:
                    "The error type that determines the illustration and default copy.",
                propTypes: ["ErrorDisplayType"],
                mandatory: true,
            },
            {
                name: "data-testid",
                description: "The test identifier for the component.",
                propTypes: ["string"],
            },
            {
                name: "img",
                description:
                    "Custom `<img>` element attributes for the error illustration.",
                propTypes: ["React.ImgHTMLAttributes<HTMLImageElement>"],
            },
            {
                name: "title",
                description: "The title text or element for the ErrorDisplay.",
                propTypes: ["string", "JSX.Element"],
            },
            {
                name: "description",
                description:
                    "The description text or element for the ErrorDisplay.",
                propTypes: ["string", "JSX.Element"],
            },
            {
                name: "actionButton",
                description:
                    "The action button displayed at the bottom of the ErrorDisplay.",
                propTypes: ["ButtonProps"],
            },
            {
                name: "additionalProps",
                description:
                    "Additional props to control type-specific content (e.g., maintenance date or inactivity seconds countdown).",
                propTypes: [
                    "",
                    "MaintenanceAdditionalAttributes",
                    "InactivityAdditionalAttributes",
                ],
            },
            {
                name: "imageOnly",
                description:
                    "When `true`, renders only the illustration image without title or description.",
                propTypes: ["boolean"],
            },
            {
                name: "illustrationScheme",
                description:
                    "Overrides the theme resource scheme for the illustration.",
                propTypes: ["ResourceScheme"],
            },
        ],
    },
];
