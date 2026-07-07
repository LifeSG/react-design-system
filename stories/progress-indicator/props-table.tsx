import { ApiTable } from "stories/storybook-common/api-table";
import type { ApiTableSectionProps } from "stories/storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "steps",
                mandatory: true,
                description: (
                    <>
                        The items for the <code>ProgressIndicator</code>
                    </>
                ),
                propTypes: ["T[]"],
            },
            {
                name: "currentIndex",
                mandatory: true,
                description:
                    "The index to indicate the current step. (Starts from 0)",
                propTypes: ["number"],
                defaultValue: "0",
            },
            {
                name: "displayExtractor",
                description:
                    "The function to derive the display value of the step item",
                propTypes: ["(item: T) => string"],
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
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
