// AUTO-GENERATED — do not edit manually.
// Source: src/fullscreen-image-carousel/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

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
