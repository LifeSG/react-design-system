import {
    ApiTable,
    ApiTableSectionProps,
    StorybookLink,
} from "stories/storybook-common";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description: "The content of the list",
                mandatory: true,
                propTypes: ["JSX.Element", "JSX.Element[]"],
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
                name: "bottomMargin",
                description: (
                    <>
                        Specifies if the list is to have a margin below (in{" "}
                        <code>rem</code> with base pixel of <code>16</code>)
                    </>
                ),
                propTypes: ["number"],
            },
            {
                name: "size",
                description:
                    "Font size of the list. Inherited from the parent if not specified",
                propTypes: (
                    <StorybookLink path="/docs/core-typography--docs">
                        TypographySizeType
                    </StorybookLink>
                ),
            },
        ],
    },
    {
        name: "UnorderedList props",
        attributes: [
            {
                name: "bulletType",
                description: "The bullet type for the unordered list",
                propTypes: [`"disc"`, `"circle"`, `"square"`, `"none"`],
            },
        ],
    },
    {
        name: "OrderedList props",
        attributes: [
            {
                name: "counterSeparator",
                description:
                    "The separator between the button and the text. It can be any string value specified",
                propTypes: ["string"],
            },
            {
                name: "counterType",
                description: "The numbering system for the list",
                propTypes: [`"lower-alpha"`, `"decimal"`, `"lower-roman"`],
                defaultValue: "decimal",
            },
            {
                name: "start",
                description: "The start value of the list counter",
                propTypes: ["number"],
            },
            {
                name: "reversed",
                description:
                    "Specifies if list counting should be reversed (e.g. 5, 4, 3...)",
                propTypes: ["boolean"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
