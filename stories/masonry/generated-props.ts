// AUTO-GENERATED — do not edit manually.
// Source: src/masonry/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const MasonryTilePropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description: "",
                propTypes: ["JSX.Element"],
                mandatory: true,
            },
            {
                name: "startLg",
                description: "the column to start on desktop resolutions",
                propTypes: ["number"],
            },
            {
                name: "colsLg",
                description:
                    "the number of columns to span on desktop resolutions",
                propTypes: ["number"],
            },
            {
                name: "startMd",
                description: "the column to start on tablet resolutions",
                propTypes: ["number"],
            },
            {
                name: "colsMd",
                description:
                    "the number of columns to span on tablet resolutions",
                propTypes: ["number"],
            },
            {
                name: "startSm",
                description: "the column to start on mobile resolutions",
                propTypes: ["number"],
            },
            {
                name: "colsSm",
                description:
                    "the number of columns to span on mobile resolutions",
                propTypes: ["number"],
            },
        ],
    },
];

export const MasonryGridPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "numOfCols",
                description: "",
                propTypes: ["ColumnCountAttribute"],
                mandatory: true,
            },
            {
                name: "children",
                description: "",
                propTypes: ["JSX.Element", "JSX.Element[]"],
                mandatory: true,
            },
            {
                name: "data-testid",
                description: "",
                propTypes: ["string"],
            },
        ],
    },
];
