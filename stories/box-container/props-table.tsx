import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "title",
                mandatory: true,
                description: "The label text for the header",
                propTypes: ["string"],
            },
            {
                name: "children",
                mandatory: true,
                description: "The content of the component",
                propTypes: ["JSX.Element", "JSX.Element[]"],
            },
            {
                name: "collapsible",
                description:
                    "Specifies if the contents can be collapsed or expanded",
                propTypes: ["boolean"],
                defaultValue: "true",
            },
            {
                name: "expanded",
                description: (
                    <>
                        Specifies if contents are expanded. Only valid if
                        <code>collapsible</code> is set to <code>true</code>
                    </>
                ),
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "callToActionComponent",
                description: "A custom call to action component for the header",
                propTypes: ["JSX.Element"],
            },
            {
                name: "displayState",
                description:
                    "Specifies the display state which renders an icon",
                propTypes: [`"default"`, `"error"`, `"warning"`],
                defaultValue: `"default"`,
            },
            {
                name: "subComponentTestIds",
                description:
                    "The id used for testing the label and handle button",
                propTypes: ["BoxContainerSubComponentTestIds"],
            },
            {
                name: "id",
                description: "The unique id of the component",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "The class selector of the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
            },
            {
                name: "isHeaderContainerClickable",
                description:
                    "Specify if the entire header container should clickable, to expand or close the box container",
                propTypes: ["string"],
            },
        ],
    },
    {
        name: "BoxContainerSubComponentTestIds",
        attributes: [
            {
                name: "title",
                description: "The id used for the header title",
                propTypes: ["string"],
            },
            {
                name: "displayStateIcon",
                description:
                    "The id used for the display state icon in the header",
                propTypes: ["string"],
            },
            {
                name: "handle",
                description: "The id used for the expand and collapse handle",
                propTypes: ["string"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
