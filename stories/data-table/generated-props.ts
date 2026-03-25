// AUTO-GENERATED — do not edit manually.
// Source: src/data-table/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const SortIndicatorsPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "[string]",
                description: "",
                propTypes: ["SortIndicatorType"],
            },
        ],
    },
];

export const HeaderPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "toString",
                description: "Returns a string representation of a string.",
                propTypes: ["(() => string) | (() => string)"],
            },
            {
                name: "valueOf",
                description:
                    "Returns the primitive value of the specified object.",
                propTypes: ["(() => string) | (() => Object)"],
            },
        ],
    },
];

export const HeaderItemPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "fieldKey",
                description:
                    "Identifies the row field rendered in this column. This value must match a key on each row object.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "label",
                description:
                    "Sets the visible header content for the column. Use a string for standard text headers or a custom node for advanced formatting.",
                propTypes: ["string", "ReactNode"],
                mandatory: true,
            },
            {
                name: "clickable",
                description:
                    "Makes the header cell interactive and clickable. When enabled, clicking the header calls `onHeaderClick` with this column's `fieldKey`.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "style",
                description:
                    "Applies inline styles to header and corresponding body cells. Use this mainly for sizing and layout adjustments such as fixed widths.",
                propTypes: ["CSSProperties"],
            },
        ],
    },
];

export const RowPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "id",
                description: "Uniquely identifies the row.",
                propTypes: ["string", "number"],
                mandatory: true,
            },
            {
                name: "[string]",
                description:
                    "Provides column values by `fieldKey`. Values can be primitives, React nodes, or a render function for dynamic cell content.",
                propTypes: [
                    "ReactNode | ((row: RowProps, renderProps: RowRenderProps) => ReactNode)",
                ],
            },
        ],
    },
];
