import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

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
                name: "fadeColor",
                description: (
                    <>
                        Has a fade effect when the steps are too long.&nbsp;
                        <strong>Note: Will only show up in mobile view</strong>
                    </>
                ),
                propTypes: ["string[]"],
            },
            {
                name: "fadePosition",
                description: (
                    <>
                        Specifies the position where the fade will be
                        applied.&nbsp;
                        <strong>Note: Will only show up in mobile view</strong>
                    </>
                ),
                propTypes: [`"left"`, `"right"`, `"both"`],
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
