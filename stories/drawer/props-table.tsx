import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description: "The contents of the drawer",
                propTypes: ["React.ReactNode"],
            },
            {
                name: "className",
                description: "The class selector of the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "heading",
                description: "The drawer header text",
                propTypes: ["React.ReactNode"],
            },
            {
                name: "id",
                description: "The unique identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "show",
                description: "Toggles the visibility of the drawer",
                propTypes: ["boolean"],
            },
            {
                name: "onClose",
                description: "Callback when the close button is clicked",
                propTypes: ["() => void"],
            },
            {
                name: "onOverlayClick",
                description: "Callback when the overlay is clicked",
                propTypes: ["() => void"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
