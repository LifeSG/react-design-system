import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "type",
                description: (
                    <>
                        The type of <code>composite option</code>
                    </>
                ),
                propTypes: [`"checkbox"`, `"radio"`],
                defaultValue: `"checkbox"`,
            },
            {
                name: "checked",
                description: "Specifies if the element is checked or selected",
                propTypes: ["boolean"],
            },
            {
                name: "disabled",
                description:
                    "Specifies if the element is disabled and non-interactable",
                propTypes: ["boolean"],
            },
            {
                name: "title",
                description: "The title of the element",
                propTypes: ["string", "JSX.Element"],
            },
            {
                name: "titleMaxLines",
                description: (
                    <>Maximum number of lines to be shown in the title</>
                ),
                propTypes: ["number"],
            },

            {
                name: "subtitle",
                description: (
                    <>
                        The description label of the{" "}
                        <code>composite Option</code> displayed below the main
                        label.
                    </>
                ),
                propTypes: ["string", "JSX.Element"],
            },
            {
                name: "children",
                description: (
                    <>
                        The description label of the{" "}
                        <code>Composite Option</code> displayed below the main
                        label.
                    </>
                ),
                propTypes: ["string", "JSX.Element"],
            },
            {
                name: "showChildren",
                description: <>specifies if the children have to be shown</>,
                propTypes: ["boolean"],
            },
            {
                name: "hideMoreOrLessButton",
                description: (
                    <>
                        specifies if <code>show More</code> Or{" "}
                        <code>show Less </code>Button is shown/hidden. if remove
                        prop is true then this props doesnt affect.{" "}
                    </>
                ),
                propTypes: ["boolean"],
            },
            {
                name: "onClick",
                description: (
                    <>
                        Called when the <code>Composite Option</code> is
                        selected or deselected
                    </>
                ),
                propTypes: [
                    "(event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void",
                ],
            },
            {
                name: "errorList",
                description:
                    "Specifies if the internal errors should be displayed inside the container error list has to be displayed inside the container.",
                propTypes: ["string[]", "JSX.Element"],
            },
            {
                name: "error",
                description:
                    "Specifies if the container should be displayed with error.",
                propTypes: ["boolean"],
            },
            {
                name: "errorMessage",
                description:
                    "specifies error message to be displayed in error Color.",
                propTypes: ["string"],
            },
            {
                name: "remove",
                description: (
                    <>
                        Specifies if the element has Remove button on top. if
                        remove is true then <code>hideMoreOrLessButton</code>{" "}
                        will not have anyeffect. it will always be true(hidden).
                        set <code>showChildren</code> to <code>true</code> if
                        the children have to be shown with <code>remove</code>{" "}
                        button.
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
            {
                name: "id",
                description: "The unique identifier of the element",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "The class selector of the element",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the element",
                propTypes: ["string"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
