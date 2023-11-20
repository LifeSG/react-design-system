import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import {
    ApiTableAttributeRowProps,
    ApiTableSectionProps,
} from "../storybook-common/api-table/types";

const MODAL_PROPS: ApiTableAttributeRowProps[] = [
    {
        name: "show",
        description: (
            <>
                Toggles the visibility of the <code>Modal</code>
            </>
        ),
        mandatory: true,
        propTypes: ["boolean"],
        defaultValue: "false",
    },
    {
        name: "zIndex",
        description: (
            <>
                Allows a custom <code>z-index</code> to be specified (useful for
                modal stacking)
            </>
        ),
        propTypes: ["number"],
    },
    {
        name: "animationFrom",
        description: (
            <>
                The animation direction of which the <code>Modal</code> will
                appear
            </>
        ),
        propTypes: [`"top"`, `"bottom"`, `"left"`, `"right"`],
        defaultValue: "bottom",
    },
];

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            ...MODAL_PROPS,
            {
                name: "images",
                description:
                    "List of images urls. An object can be provided for further customisation.",
                propTypes: ["(string | CarouselItemProps)[]"],
                mandatory: true,
            },
            {
                name: "initialIndex",
                description: "The initial image that will be displayed",
                propTypes: ["number"],
                defaultValue: "0",
            },
            {
                name: "hideThumbnail",
                description: "Specifies if the bottom thumbnail is visible",
                propTypes: ["boolean"],
            },
            {
                name: "onClose",
                description:
                    "The callback when the carousel overlay is dimissed via the close button or Esc key",
                propTypes: ["() => void"],
            },
        ],
    },
    {
        name: "CarouselItemProps",
        attributes: [
            {
                name: "src",
                description: "The image src",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "alt",
                description:
                    "Descriptive text to be set on the image for screen readers",
                propTypes: ["string"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
