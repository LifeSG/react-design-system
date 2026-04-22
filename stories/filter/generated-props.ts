// AUTO-GENERATED — do not edit manually.
// Source: src/filter/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const FilterPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "customLabels",
                description: "Specifies custom labels.",
                propTypes: [
                    "",
                    "FilterModalCustomLabelProps",
                    "FilterSidebarCustomLabelProps",
                ],
            },
            {
                name: "id",
                description: "Unique identifier for the component.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
            {
                name: "style",
                description: "Inline styles for the component.",
                propTypes: ["CSSProperties"],
            },
            {
                name: "clearButtonDisabled",
                description:
                    "Specifies if the feature to expand/collapse all child items is enabled.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "onClear",
                description: "Called when clear button is pressed",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "children",
                description: "The items in the Filter.",
                propTypes: ["ReactNode", "((mode: Mode) => ReactNode)"],
            },
            {
                name: "headerTitle",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "toggleFilterButtonLabel",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "doneButtonLabel",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "onDismiss",
                description:
                    "Called when dismiss button is pressed (mobile mode only)",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onDone",
                description:
                    "Called when done button is pressed (mobile mode only)",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onModalOpen",
                description:
                    "Called when filter modal is opened (mobile only).",
                propTypes: ["() => void"],
            },
            {
                name: "toggleFilterButtonStyle",
                description:
                    "The style type of the filter toggle button (in mobile).",
                propTypes: ["ButtonStyleType"],
                defaultValue: '"light"',
            },
            {
                name: "insets",
                description:
                    "The distance from the edge of the viewport, defining the safe area not covered by status bars, notches, or other navigation elements. The header and footer in mobile mode will be offset accordingly.",
                propTypes: ["Insets"],
            },
        ],
    },
];

export const FilterBasePropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "id",
                description: "Unique identifier for the component.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
            {
                name: "style",
                description: "Inline styles for the component.",
                propTypes: ["CSSProperties"],
            },
            {
                name: "clearButtonDisabled",
                description:
                    "Specifies if the feature to expand/collapse all child items is enabled.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "onClear",
                description: "Called when clear button is pressed",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "children",
                description: "The items in the Filter.",
                propTypes: ["ReactNode", "((mode: Mode) => ReactNode)"],
            },
            {
                name: "headerTitle",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "toggleFilterButtonLabel",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "doneButtonLabel",
                description: "",
                propTypes: ["string"],
            },
        ],
    },
];

export const FilterSidebarPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "customLabels",
                description: "Specifies custom labels for the sidebar.",
                propTypes: ["FilterSidebarCustomLabelProps"],
            },
            {
                name: "id",
                description: "Unique identifier for the component.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
            {
                name: "style",
                description: "Inline styles for the component.",
                propTypes: ["CSSProperties"],
            },
            {
                name: "clearButtonDisabled",
                description:
                    "Specifies if the feature to expand/collapse all child items is enabled.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "onClear",
                description: "Called when clear button is pressed",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "children",
                description: "The items in the Filter.",
                propTypes: ["ReactNode", "((mode: Mode) => ReactNode)"],
            },
            {
                name: "headerTitle",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "toggleFilterButtonLabel",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "doneButtonLabel",
                description: "",
                propTypes: ["string"],
            },
        ],
    },
];

export const FilterModalPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "onDismiss",
                description:
                    "Called when dismiss button is pressed (mobile mode only)",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onDone",
                description:
                    "Called when done button is pressed (mobile mode only)",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onModalOpen",
                description:
                    "Called when filter modal is opened (mobile only).",
                propTypes: ["() => void"],
            },
            {
                name: "toggleFilterButtonStyle",
                description:
                    "The style type of the filter toggle button (in mobile).",
                propTypes: ["ButtonStyleType"],
                defaultValue: '"light"',
            },
            {
                name: "customLabels",
                description: "Specifies custom labels for the modal.",
                propTypes: ["FilterModalCustomLabelProps"],
            },
            {
                name: "insets",
                description:
                    "The distance from the edge of the viewport, defining the safe area not covered by status bars, notches, or other navigation elements. The header and footer in mobile mode will be offset accordingly.",
                propTypes: ["Insets"],
            },
            {
                name: "id",
                description: "Unique identifier for the component.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
            {
                name: "style",
                description: "Inline styles for the component.",
                propTypes: ["CSSProperties"],
            },
            {
                name: "clearButtonDisabled",
                description:
                    "Specifies if the feature to expand/collapse all child items is enabled.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "onClear",
                description: "Called when clear button is pressed",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "children",
                description: "The items in the Filter.",
                propTypes: ["ReactNode", "((mode: Mode) => ReactNode)"],
            },
            {
                name: "headerTitle",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "toggleFilterButtonLabel",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "doneButtonLabel",
                description: "",
                propTypes: ["string"],
            },
        ],
    },
];

export const FilterItemPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description: "The contents of the filter item.",
                propTypes: [
                    "",
                    "React.ReactNode",
                    "((mode: Mode, state: { minimised: boolean }) => React.ReactNode)",
                ],
                mandatory: true,
            },
            {
                name: "showDivider",
                description:
                    "Specifies if header divider is visible in default mode",
                propTypes: ["boolean"],
            },
            {
                name: "showMobileDivider",
                description: "Specifies if divider is visible in mobile mode",
                propTypes: ["boolean"],
            },
            {
                name: "title",
                description: "The title of the filter item header.",
                propTypes: ["string"],
            },
            {
                name: "addon",
                description: "The addon element for the filter item label.",
                propTypes: ["FormLabelAddonProps"],
            },
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "Unique identifier for the component.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "collapsible",
                description: "Specifies if the filter item is collapsible.",
                propTypes: ["boolean"],
            },
            {
                name: "initialExpanded",
                description:
                    "Specifies the initial expand state for the uncontrolled component",
                propTypes: ["boolean"],
            },
            {
                name: "expanded",
                description:
                    "Specifies the expand state for the controlled component",
                propTypes: ["boolean"],
            },
            {
                name: "onExpandChange",
                description: "Called when the expand state changes",
                propTypes: ["((expanded: boolean) => void) | undefined"],
            },
            {
                name: "minimisable",
                description: "Specifies if the filter item can be minimised.",
                propTypes: ["boolean"],
            },
            {
                name: "minimisedHeight",
                description:
                    "The height of the filter item when minimised, in pixels.",
                propTypes: ["number"],
            },
            {
                name: "style",
                description: "Inline styles for the component.",
                propTypes: ["React.CSSProperties"],
            },
        ],
    },
];

export const FilterPagePropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description: "The contents of the filter page.",
                propTypes: ["React.ReactNode"],
                mandatory: true,
            },
            {
                name: "onDismiss",
                description: "Called when dismiss button is pressed",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onDone",
                description: "Called when done button is pressed",
                propTypes: ["(() => void) | undefined"],
            },
        ],
    },
];

export const FilterItemCheckboxOptionPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "value",
                description: "",
                propTypes: ["any"],
                mandatory: true,
            },
            {
                name: "label",
                description: "",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "options",
                description: "",
                propTypes: ["FilterItemCheckboxOptionProps[]"],
            },
        ],
    },
];

export const FilterItemCheckboxPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "options",
                description: "The list of available checkbox options.",
                propTypes: ["T[]"],
                mandatory: true,
            },
            {
                name: "selectedOptions",
                description: "The currently selected options.",
                propTypes: ["T[]"],
            },
            {
                name: "onSelect",
                description:
                    "Called when the selection changes. Returns the updated array of selected options.",
                propTypes: ["((options: T[]) => void) | undefined"],
            },
            {
                name: "labelExtractor",
                description:
                    "Function to derive display value from an item. If not set, checks `item.label`.",
                propTypes: ["((item: T) => React.ReactNode) | undefined"],
            },
            {
                name: "valueExtractor",
                description:
                    "Function to derive value from an item. If not set, checks `item.value`.",
                propTypes: ["((item: T) => string) | undefined"],
            },
            {
                name: "useToggleContentWidth",
                description:
                    "Changes min-width of toggle in mobile view to fit content",
                propTypes: ["boolean"],
            },
            {
                name: "showAsCheckboxInMobile",
                description: "Display checkbox list for mobile view",
                propTypes: ["boolean"],
            },
            {
                name: "minimisableOptions",
                description:
                    'Whether to allow minimising (show "View more" button)',
                propTypes: ["boolean"],
            },
            {
                name: "showDivider",
                description:
                    "Specifies if header divider is visible in default mode",
                propTypes: ["boolean"],
            },
            {
                name: "showMobileDivider",
                description: "Specifies if divider is visible in mobile mode",
                propTypes: ["boolean"],
            },
            {
                name: "title",
                description: "The title of the filter item header.",
                propTypes: ["string"],
            },
            {
                name: "addon",
                description: "The addon element for the filter item label.",
                propTypes: ["FormLabelAddonProps"],
            },
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "Unique identifier for the component.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "collapsible",
                description: "Specifies if the filter item is collapsible.",
                propTypes: ["boolean"],
            },
            {
                name: "initialExpanded",
                description:
                    "Specifies the initial expand state for the uncontrolled component",
                propTypes: ["boolean"],
            },
            {
                name: "expanded",
                description:
                    "Specifies the expand state for the controlled component",
                propTypes: ["boolean"],
            },
            {
                name: "onExpandChange",
                description: "Called when the expand state changes",
                propTypes: ["((expanded: boolean) => void) | undefined"],
            },
            {
                name: "minimisable",
                description: "Specifies if the filter item can be minimised.",
                propTypes: ["boolean"],
            },
            {
                name: "minimisedHeight",
                description:
                    "The height of the filter item when minimised, in pixels.",
                propTypes: ["number"],
            },
            {
                name: "style",
                description: "Inline styles for the component.",
                propTypes: ["React.CSSProperties"],
            },
        ],
    },
];
