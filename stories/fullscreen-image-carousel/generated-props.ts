// AUTO-GENERATED — do not edit manually.
// Source: src/fullscreen-image-carousel/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const FullscreenImageCarouselPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "items",
                description: "List of carousel items.",
                propTypes: ["FullscreenCarouselItemProps[]"],
                mandatory: true,
            },
            {
                name: "initialActiveItemIndex",
                description: "The initial image that will be displayed.",
                propTypes: ["number"],
                defaultValue: "0",
            },
            {
                name: "hideThumbnail",
                description:
                    "Specifies if the bottom thumbnail row is visible.",
                propTypes: ["boolean"],
            },
            {
                name: "hideNavigation",
                description:
                    "Specifies if the left and right navigation buttons are visible.",
                propTypes: ["boolean"],
            },
            {
                name: "hideCounter",
                description:
                    "Specifies if the pagination counter pill is visible.",
                propTypes: ["boolean"],
            },
            {
                name: "hideMagnifier",
                description:
                    "Specifies if the magnifier button controlling zoom behaviour is visible.",
                propTypes: ["boolean"],
            },
            {
                name: "onClose",
                description:
                    "The callback when the carousel overlay is dismissed via the close button or Esc key.",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "insets",
                description:
                    "The distance from the edge of the viewport, defining the safe area not covered by status bars, notches, or other navigation elements. The close, magnifier, and arrow buttons will be offset accordingly.",
                propTypes: ["Insets"],
            },
            {
                name: "show",
                description: "Toggles the visibility of the Modal.",
                propTypes: ["to zoom"],
                mandatory: true,
            },
            {
                name: "rootComponentId",
                description:
                    "The identifier of the element to inject the Modal into",
                propTypes: ["if the bottom thum"],
            },
            {
                name: "animationFrom",
                description:
                    'Animation direction of appearance and dismissal. Values: "top" | "bottom" | "left" | "right"',
                propTypes: ['onentId"', '"animationFrom"', '"zIndex'],
            },
            {
                name: "zIndex",
                description:
                    "Allows a custom z-index to be specified (useful for modal stacking).",
                propTypes: ["t and right navigat"],
            },
        ],
    },
];

export const FullscreenCarouselItemPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "src",
                description: "The image src.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "alt",
                description:
                    "Descriptive text to be set on the image for screen readers.",
                propTypes: ["string"],
            },
            {
                name: "thumbnailSrc",
                description:
                    "The thumbnail image src. If not specified, the image `src` will be used.",
                propTypes: ["string"],
            },
        ],
    },
];
