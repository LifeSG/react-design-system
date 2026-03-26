// AUTO-GENERATED — do not edit manually.
// Source: src/v2_layout/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const V2_ColDivPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "data-testid",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "mobileCols",
                description:
                    "Specifies the number of columns to be span across in mobile viewports. If an array is specified, the format is as such [startCol, endCol]. If `tabletCols` or `desktopCols` are not specified, this setting will be applied to tablet and desktop viewports. If all column props are not specified, the div will span across a single column.",
                propTypes: ["MobileCol", "[MobileColRange, MobileColRange]"],
            },
            {
                name: "tabletCols",
                description:
                    "Specifies the number of columns to be span across in tablet viewports. If an array is specified, the format is as such [startCol, endCol]. If `desktopCols` are not specified, this setting will be applied to desktop viewports as well. If all column props are not specified, the div will span across a single column.",
                propTypes: ["TabletCol", "[TabletColRange, TabletColRange]"],
            },
            {
                name: "desktopCols",
                description:
                    "Specifies the number of columns to be span across in desktop viewports. If an array is specified, the format is as such [startCol, endCol]. If all column props are not specified, the div will span across a single column.",
                propTypes: ["DesktopCol", "[DesktopColRange, DesktopColRange]"],
            },
        ],
    },
];

export const V2_CommonLayoutPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description: "",
                propTypes: ["React.ReactNode"],
                mandatory: true,
            },
            {
                name: "data-testid",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "stretch",
                description: "",
                propTypes: ["boolean"],
            },
        ],
    },
];

export const V2_SectionPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description: "",
                propTypes: ["React.ReactNode"],
                mandatory: true,
            },
            {
                name: "data-testid",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "stretch",
                description: "",
                propTypes: ["boolean"],
            },
        ],
    },
];

export const V2_ContainerPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "type",
                description:
                    'The type of display style. Values: "flex" | "flex-column" | "grid"',
                propTypes: ["V2_ContainerType"],
            },
            {
                name: "children",
                description: "",
                propTypes: ["React.ReactNode"],
                mandatory: true,
            },
            {
                name: "data-testid",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "stretch",
                description: "",
                propTypes: ["boolean"],
            },
        ],
    },
];

export const V2_ContentPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "type",
                description:
                    'The type of display style. Values: "flex" | "flex-column" | "grid"',
                propTypes: ["V2_ContainerType"],
            },
            {
                name: "children",
                description: "",
                propTypes: ["React.ReactNode"],
                mandatory: true,
            },
            {
                name: "data-testid",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "stretch",
                description: "",
                propTypes: ["boolean"],
            },
        ],
    },
];

export const V2_ColPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "mobileCols",
                description:
                    "Specifies the number of columns to be span across in mobile viewports. If an array is specified, the format is as such [startCol, endCol]. If `tabletCols` or `desktopCols` are not specified, this setting will be applied to tablet and desktop viewports. If all column props are not specified, the div will span across a single column.",
                propTypes: ["MobileCol", "[MobileColRange, MobileColRange]"],
            },
            {
                name: "tabletCols",
                description:
                    "Specifies the number of columns to be span across in tablet viewports. If an array is specified, the format is as such [startCol, endCol]. If `desktopCols` are not specified, this setting will be applied to desktop viewports as well. If all column props are not specified, the div will span across a single column.",
                propTypes: ["TabletCol", "[TabletColRange, TabletColRange]"],
            },
            {
                name: "desktopCols",
                description:
                    "Specifies the number of columns to be span across in desktop viewports. If an array is specified, the format is as such [startCol, endCol]. If all column props are not specified, the div will span across a single column.",
                propTypes: ["DesktopCol", "[DesktopColRange, DesktopColRange]"],
            },
        ],
    },
];
