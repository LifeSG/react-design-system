import { ApiTable } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";
import { COMMON_POPOVER_ATTRIBUTES } from "../props-table";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "className",
                description: "Class selector for the component",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "The unique identifier for the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
            },
            {
                name: "content",
                description: "The text content to display",
                propTypes: ["React.ReactNode"],
            },
            {
                name: "icon",
                description: "The icon to display",
                propTypes: ["React.ReactNode"],
            },
            {
                name: "underlineStyle",
                description: "The underline style of the text",
                propTypes: [`"default"`, `"underline"`, `"underline-dashed"`],
                defaultValue: `"default"`,
            },
            {
                name: "underlineHoverStyle",
                description: "The underline style of the text when hovered",
                propTypes: [`"default"`, `"underline"`, `"underline-dashed"`],
                defaultValue: `"default"`,
            },
            ...COMMON_POPOVER_ATTRIBUTES,
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
