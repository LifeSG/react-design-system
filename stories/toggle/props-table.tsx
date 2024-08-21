import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "type",
                description: (
                    <>
                        The type of <code>Toggle</code>
                    </>
                ),
                propTypes: [`"checkbox"`, `"radio"`, `"yes"`, `"no"`],
                defaultValue: `"checkbox"`,
            },
            {
                name: "indicator",
                description:
                    "Specifies if the indicator icon should be displayed",
                propTypes: ["boolean"],
            },
            {
                name: "checked",
                description: "Specifies if the element is checked or selected",
                propTypes: ["boolean"],
            },
            {
                name: "styleType",
                description: (
                    <>
                        The style type of <code>Toggle</code>, whether there is
                        a border displayed or not
                    </>
                ),
                propTypes: [`"default"`, `"no-border"`],
                defaultValue: `"default"`,
            },
            {
                name: "children",
                mandatory: true,
                description: "The main selector label",
                propTypes: ["string"],
            },
            {
                name: "childrenMaxLines",
                description:
                    "The number of lines visible in the main label. Additional lines will be truncated",
                propTypes: ["{desktop: number, mobile: number}"],
            },
            {
                name: "disabled",
                description:
                    "Specifies if the element is disabled and non-interactable",
                propTypes: ["boolean"],
            },
            {
                name: "error",
                description:
                    "Specifies if the error display is to be displayed",
                propTypes: ["boolean"],
            },
            {
                name: "className",
                description: "The class selector of the element",
                propTypes: ["string"],
            },
            {
                name: "name",
                description: "The name of the element",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "The unique identifier of the element",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the element",
                propTypes: ["string"],
            },
            {
                name: "subLabel",
                description: (
                    <>
                        The description label of the <code>Toggle</code>{" "}
                        displayed below the main label.
                    </>
                ),
                propTypes: ["string", "JSX.Element", "() => JSX.Element"],
            },
            {
                name: "onChange",
                description: (
                    <>
                        Called when the <code>Toggle</code> is selected or
                        deselected
                    </>
                ),
                propTypes: [
                    "(event: React.ChangeEvent<HTMLInputElement>) => void",
                ],
            },
            {
                name: "removable",
                description: "Specifies if the remove button is displayed",
                propTypes: ["boolean"],
                defaultValue: `false`,
            },
            {
                name: "onRemove",
                description: "Called when the remove button is clicked",
                propTypes: ["() => void"],
            },
            {
                name: "compositeSection",
                description: (
                    <>
                        The subsection of the <code>Toggle</code>, displayed
                        below the main label and sublabel
                    </>
                ),
                propTypes: ["CompositeSectionProps"],
            },
            {
                name: "useContentWidth",
                description:
                    "Changes the minimum width of the container to fit its content",
                propTypes: ["boolean"],
            },
        ],
    },

    {
        name: "CompositeSectionProps",
        attributes: [
            {
                name: "children",
                description: "The contents of the subsection",
                propTypes: ["string", "JSX.Element"],
                mandatory: true,
            },
            {
                name: "collapsible",
                description: "Specifies if the subsection is collapsible",
                propTypes: ["boolean"],
                defaultValue: `true`,
            },
            {
                name: "initialExpanded",
                description:
                    "Specifies the initial expanded state. Only applicable if the subsection is collapsible",
                propTypes: ["boolean"],
            },
            {
                name: "errors",
                description: (
                    <>
                        Specifies errors to be displayed when the subsection is
                        collapsed
                        <br />
                        <br />
                        If a list of strings is provided, an error alert is
                        automatically constructed
                    </>
                ),
                propTypes: ["string[]", "JSX.Element"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
