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
                description: "The main selector label ",
                propTypes: ["string"],
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
                propTypes: ["string", "() => JSX.Element", "JSX.Element"],
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
                name: "compositeSection",
                description: <>The section below the Toggle.</>,
                propTypes: ["compositeSectionProps"],
            },
        ],
    },

    {
        name: "Props",
        attributes: [
            {
                name: "compositeSectionProps",
                description: (
                    <>
                        The description label of the{" "}
                        <code>composite Option Section</code> displayed below
                        the main label.
                    </>
                ),
                propTypes: ["string", "JSX.Element"],
            },
            {
                name: "showCompositeOption",
                description: (
                    <>specifies if the CompositeOption have to be shown</>
                ),
                propTypes: ["boolean"],
            },
            {
                name: "collapsible",
                description: (
                    <>
                        specifies if <code>show More</code> Or{" "}
                        <code>show Less </code>Button is shown/hidden. if{" "}
                        <code>removable</code>
                        prop is true then this props doesnt affect.{" "}
                    </>
                ),
                propTypes: ["boolean"],
            },

            {
                name: "errorList",
                description:
                    "Specifies if the internal errors should be displayed inside the container error list has to be displayed inside the container.",
                propTypes: ["string[]", "JSX.Element"],
            },

            {
                name: "removable",
                description: (
                    <>
                        Specifies if the element has Remove button on top. if
                        removable is true then <code>collapsible</code> will not
                        have anyeffect. it will always be true(hidden). set{" "}
                        <code>showCompositeOption</code> to <code>true</code> if
                        the children have to be shown with{" "}
                        <code>removable</code> button.
                    </>
                ),
                propTypes: ["boolean"],
                defaultValue: `false`,
            },
            {
                name: "onRemove",
                description: (
                    <>
                        Called when the <code>Remove button</code> is clicked
                    </>
                ),
                propTypes: ["() => void"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
