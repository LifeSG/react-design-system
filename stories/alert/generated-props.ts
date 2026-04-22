// AUTO-GENERATED — do not edit manually.
// Source: src/alert/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const AlertPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "type",
                description: "Indicates the style type of the component",
                propTypes: ["AlertType"],
                mandatory: true,
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "actionLink",
                description:
                    "The attributes of an action link that performs an action on click",
                propTypes: ["React.AnchorHTMLAttributes<HTMLAnchorElement>"],
            },
            {
                name: "showIcon",
                description: "Specifies if the icon will be displayed.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "actionLinkIcon",
                description: "Specifies a custom icon for the action link.",
                propTypes: ["JSX.Element"],
                defaultValue: "<ArrowRightIcon />",
            },
            {
                name: "sizeType",
                description: "Specifies the size of the component.",
                propTypes: ["AlertSizeType"],
                defaultValue: '"default"',
            },
            {
                name: "customIcon",
                description:
                    "Specifies a custom replacement icon for the alert",
                propTypes: ["JSX.Element"],
            },
            {
                name: "maxCollapsedHeight",
                description:
                    "Specifies the maximum visible height of the content in px",
                propTypes: ["number"],
            },
        ],
    },
];
