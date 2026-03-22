import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";
import { TabAttribute, Tabs } from "../storybook-common/tabs";

const MODAL_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "show",
                mandatory: true,
                description: "Toggles the visibility of the Modal",
                propTypes: ["boolean"],
            },
            {
                name: "animationFrom",
                description:
                    "The animation direction of which the Modal will appear",
                propTypes: ['"top"', '"bottom"', '"left"', '"right"'],
                defaultValue: '"bottom"',
            },
            {
                name: "dismissKeyboardOnShow",
                description: "Dismisses keyboard when modal is shown",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
            {
                name: "enableOverlayClick",
                description:
                    "Toggles whether Modal can be dismissed by clicking on the overlay",
                propTypes: ["boolean"],
            },
            {
                name: "onOverlayClick",
                description:
                    "The callback when the overlay is being clicked on. " +
                    "Will be triggered if enableOverlayClick is specified to true",
                propTypes: ["() => void"],
            },
            {
                name: "rootComponentId",
                description:
                    "The identifier of the element to inject the Modal into. " +
                    "Not specifying the root element will make body the root element.",
                propTypes: ["string"],
            },
            {
                name: "zIndex",
                description:
                    "Allows a custom z-index to be specified (useful for modal stacking)",
                propTypes: ["number"],
            },
        ],
    },
];

const MODAL_BOX_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "onClose",
                description:
                    "Callback when the close button is clicked. " +
                    "Will be triggered if the close button is visible",
                propTypes: ["() => void"],
            },
            {
                name: "showCloseButton",
                description: "This toggles the visibility of the close button",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
        ],
    },
];

const PROPS_TABLE_DATA: TabAttribute[] = [
    {
        title: "Modal",
        component: <ApiTable sections={MODAL_DATA} />,
    },
    {
        title: "Modal.Box",
        component: <ApiTable sections={MODAL_BOX_DATA} />,
    },
];

export const PropsTable = () => <Tabs tabs={PROPS_TABLE_DATA} />;
