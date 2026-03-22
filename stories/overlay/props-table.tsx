import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "show",
                mandatory: true,
                description: "Toggles the visibility of the Overlay",
                propTypes: ["boolean"],
            },
            {
                name: "id",
                description: "The unique identifier of the Overlay",
                propTypes: ["string"],
            },
            {
                name: "rootId",
                description:
                    "The identifier of the element to inject the Overlay into. " +
                    "Not specifying the root element will make body the root element.",
                propTypes: ["string"],
            },
            {
                name: "backgroundOpacity",
                description: "The opacity value of the Overlay",
                propTypes: ["number"],
                defaultValue: "0.8",
            },
            {
                name: "backgroundBlur",
                description: "Specifies if the background should be blurred",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
            {
                name: "disableTransition",
                description:
                    "Toggle the animation of the appearance and dismissal",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "zIndex",
                description:
                    "Allows a custom z-index to be specified (useful for overlay stacking)",
                propTypes: ["number"],
            },
            {
                name: "enableOverlayClick",
                description:
                    "Toggles whether child contents can be dismissed by clicking on the overlay",
                propTypes: ["boolean"],
            },
            {
                name: "onOverlayClick",
                description:
                    "The callback when the overlay is being clicked on. " +
                    "Will be triggered if enableOverlayClick is specified to true",
                propTypes: ["() => void"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
