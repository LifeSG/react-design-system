// AUTO-GENERATED — do not edit manually.
// Source: src/divider/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const DividerPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "thickness",
                description: "The thickness/height of the `Divider` in px.",
                propTypes: ["number"],
                defaultValue: "1",
            },
            {
                name: "lineStyle",
                description: "The style type for the `Divider` line.",
                propTypes: ["DividerLineStyleType"],
                defaultValue: '"solid"',
            },
            {
                name: "layoutType",
                description: "The layout type for the `Divider`.",
                propTypes: ["DividerLayoutType"],
                defaultValue: '"flex"',
            },
            {
                name: "color",
                description: "The color for the `Divider` line",
                propTypes: [
                    "string",
                    "((props: ThemeStyleProps) => string) | undefined",
                ],
            },
            {
                name: "xxlCols",
                description:
                    "Specifies the number of columns to be spanned across for any breakpoint. If an array is specified, the format is [startCol, endCol].",
                propTypes: [""],
            },
            {
                name: "xlCols",
                description: "",
                propTypes: [""],
            },
            {
                name: "lgCols",
                description: "",
                propTypes: [""],
            },
            {
                name: "mdCols",
                description: "",
                propTypes: [""],
            },
            {
                name: "smCols",
                description: "",
                propTypes: [""],
            },
            {
                name: "xsCols",
                description: "",
                propTypes: [""],
            },
            {
                name: "xxsCols",
                description: "",
                propTypes: [""],
            },
            {
                name: "mobileCols",
                description:
                    "Specifies the number of columns to be span across in mobile viewports. If an array is specified, the format is as such [startCol, endCol]. If `tabletCols` or `desktopCols` are not specified, this setting will be applied to tablet and desktop viewports. If all column props are not specified, the div will span across a single column.",
                propTypes: [""],
            },
            {
                name: "tabletCols",
                description:
                    "Specifies the number of columns to be span across in tablet viewports. If an array is specified, the format is as such [startCol, endCol]. If `desktopCols` are not specified, this setting will be applied to desktop viewports as well. If all column props are not specified, the div will span across a single column.",
                propTypes: [""],
            },
            {
                name: "desktopCols",
                description:
                    "Specifies the number of columns to be span across in desktop viewports. If an array is specified, the format is as such [startCol, endCol]. If all column props are not specified, the div will span across a single column.",
                propTypes: [""],
            },
        ],
    },
];
