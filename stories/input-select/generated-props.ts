// AUTO-GENERATED — do not edit manually.
// Source: src/input-select/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const InputSelectOptionsPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "options",
                description: "",
                propTypes: ["T[]"],
                mandatory: true,
            },
            {
                name: "optionsLoadState",
                description:
                    'Used when options are loaded from an api call. Values: "loading" | "fail" | "success"',
                propTypes: ["ItemsLoadStateType"],
            },
            {
                name: "optionTruncationType",
                description:
                    'Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end"',
                propTypes: ["TruncateType"],
            },
            {
                name: "onShowOptions",
                description:
                    "Callback fired when the dropdown options list is shown.",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onHideOptions",
                description:
                    "Callback fired when the dropdown options list is hidden.",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onRetry",
                description:
                    "Callback fired when the user retries loading options after a failure.",
                propTypes: ["(() => void) | undefined"],
            },
        ],
    },
];

export const InputSelectSharedPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "name",
                description:
                    "The name attribute for the underlying button element.",
                propTypes: ["string"],
            },
            {
                name: "options",
                description: "The list of options to display in the dropdown.",
                propTypes: ["T[]"],
                mandatory: true,
            },
            {
                name: "placeholder",
                description:
                    "Placeholder text displayed when no value is selected.",
                propTypes: ["string"],
            },
            {
                name: "disabled",
                description: "Disables user interaction with the component.",
                propTypes: ["boolean"],
            },
            {
                name: "error",
                description: "Displays the component in an error state.",
                propTypes: ["boolean"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
        ],
    },
];
