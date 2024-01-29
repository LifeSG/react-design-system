import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "items",
                mandatory: true,
                description: "The items to be displayed",
                propTypes: ["TimelineItemProps[]"],
            },
            {
                name: "title",
                description: (
                    <>
                        The text title of the <code>Timeline</code>
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "The class selector of the component",
                propTypes: ["string"],
            },
            {
                name: "startCol",
                description:
                    "The column at which the items should start at (Useful if component is wrapped in a css grid div)",
                propTypes: ["number"],
            },
            {
                name: "colSpan",
                description:
                    "The number of columns that the component should span (Useful if component is wrapped in a css grid div)",
                propTypes: ["number"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "data-base-indicator-testid",
                description:
                    "The test identifier of the component's indicators",
                propTypes: ["string"],
            },
        ],
    },
    {
        name: "TimelineItemProps",
        attributes: [
            {
                name: "title",
                mandatory: true,
                description: "The title of the item",
                propTypes: ["string"],
            },
            {
                name: "content",
                mandatory: true,
                description:
                    "The content of the item. Formatting within the content is to be handled",
                propTypes: ["JSX.Element"],
            },
            {
                name: "statuses",
                description: (
                    <>
                        The status pills to be rendered.&nbsp;
                        <strong>
                            Note that only a maximum of 2 pills will be rendered
                        </strong>
                        &nbsp; regardless how many statuses are specified
                    </>
                ),
                propTypes: ["TimelineStatusProps[]"],
            },
            {
                name: "variant",
                description: (
                    <>
                        The style variant of the item indicator
                        <br />
                        <b>Note:</b> the first item defaults to{" "}
                        <code>current</code>, and subsequent items default to{" "}
                        <code>upcoming-active</code>
                    </>
                ),
                propTypes: [
                    `"completed"`,
                    `"current"`,
                    `"upcoming-active`,
                    `"upcoming-inactive"`,
                    `"error"`,
                ],
            },
        ],
    },
    {
        name: "TimelineStatusProps",
        attributes: [
            {
                name: "type",
                mandatory: true,
                description: "The color style of the pill",
                propTypes: [`"dark"`, `"light"`],
            },
            {
                name: "label",
                mandatory: true,
                description: "The text to be rendered on the pill",
                propTypes: ["string"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
