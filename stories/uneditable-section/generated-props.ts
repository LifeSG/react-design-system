// AUTO-GENERATED — do not edit manually.
// Source: src/uneditable-section/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const UneditableSectionPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "items",
                description:
                    "The uneditable items to be displayed in a label and value format.",
                propTypes: ["UneditableSectionItemProps[]"],
            },
            {
                name: "title",
                description: "The title of the section, rendered as Text.H3.",
                propTypes: ["string"],
            },
            {
                name: "description",
                description:
                    "The description of the section, rendered as Text.Body.",
                propTypes: ["string"],
            },
            {
                name: "topSection",
                description:
                    "A custom section at the top of the main uneditable items section",
                propTypes: ["JSX.Element"],
            },
            {
                name: "bottomSection",
                description:
                    "A custom section at the bottom of the main uneditable items section",
                propTypes: ["JSX.Element"],
            },
            {
                name: "children",
                description: "The body of the entire section",
                propTypes: ["JSX.Element", "JSX.Element[]"],
            },
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "Unique identifier for the component.",
                propTypes: ["string"],
            },
            {
                name: "background",
                description:
                    "If specified false, the background will be transparent. Else it is grey by default",
                propTypes: ["boolean"],
            },
            {
                name: "stretch",
                description:
                    "Specifies if contents should take up the full width of the section",
                propTypes: ["boolean"],
            },
            {
                name: "fullWidth",
                description:
                    "If true, removes the default spacing and grid alignment based on `Layout.Content`",
                propTypes: ["boolean"],
            },
            {
                name: "onMask",
                description:
                    "The callback function when the mask icon is clicked",
                propTypes: [
                    "((item: UneditableSectionItemProps) => void) | undefined",
                ],
            },
            {
                name: "onUnmask",
                description:
                    "The callback function when the unmask icon is clicked",
                propTypes: [
                    "((item: UneditableSectionItemProps) => void) | undefined",
                ],
            },
            {
                name: "onTryAgain",
                description:
                    'The callback function when the "Try again" button is clicked in error state',
                propTypes: [
                    "((item: UneditableSectionItemProps) => void) | undefined",
                ],
            },
        ],
    },
];

export const UneditableSectionItemPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "id",
                description: "Unique identifier for the component.",
                propTypes: ["string"],
            },
            {
                name: "label",
                description: "The label of the uneditable item.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "value",
                description:
                    "Note: masking is only available for string values",
                propTypes: ["string", "React.ReactNode"],
                mandatory: true,
            },
            {
                name: "displayWidth",
                description:
                    'The width that the item can span across. Values: "half", "full"',
                propTypes: ["UneditableSectionItemDisplayWidth"],
            },
            {
                name: "maskState",
                description:
                    'Specifies if value is masked or unmasked. If undefined, no masking or unmasking controls will be rendered. Values: "masked" | "unmasked"',
                propTypes: ["UneditableSectionItemMaskState"],
            },
            {
                name: "maskLoadingState",
                description:
                    'Specifies the state of the component when there is a loading behaviour from a mask/unmask action. If undefined the value will be rendered out. Values: "loading" | "fail"',
                propTypes: ["UneditableSectionItemMaskLoadingState"],
            },
            {
                name: "disableMaskUnmask",
                description:
                    "If specified, one is unable to mask or unmask the value",
                propTypes: ["boolean"],
            },
            {
                name: "alert",
                description:
                    "If specified, an Alert will be rendered below the item",
                propTypes: ["AlertProps"],
            },
            {
                name: "maskRange",
                description:
                    "Index range [start, end] of characters to mask. Takes precedence over `unmaskRange` when both are set.",
                propTypes: ["e-section, item, labe"],
            },
            {
                name: "unmaskRange",
                description:
                    "Index range [start, end] of characters to leave unmasked.",
                propTypes: ["s {\n    /** Unique id"],
            },
            {
                name: "maskRegex",
                description:
                    "Regular expression used to determine which characters to mask.",
                propTypes: ["able item. */\n    l"],
            },
            {
                name: "maskTransformer",
                description:
                    "Custom function to transform and produce the displayed masked string.",
                propTypes: ["ctNode;\n    /** The width that the item"],
            },
            {
                name: "maskChar",
                description: "Character substituted for each masked character.",
                propTypes: ["yWidth", "undefined;"],
                defaultValue: '"•"',
            },
        ],
    },
];

export const UneditableSectionItemSectionPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "stretch",
                description:
                    "Specifies if contents should take up the full width of the section",
                propTypes: ["boolean"],
            },
        ],
    },
];
