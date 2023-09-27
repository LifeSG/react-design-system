import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "imgSrc",
                mandatory: false,
                description:
                    "Img src of banner to be displayed. Leave an empty string to not display a banner",
                propTypes: ["string"],
                defaultValue: `Default banner image`,
            },
            {
                name: "description",
                mandatory: false,
                description: "Feedback rating description to be displayed",
                propTypes: ["string"],
                defaultValue: `"Rate your experience"`,
            },
            {
                name: "buttonLabel",
                mandatory: false,
                description: "The button text",
                propTypes: ["string"],
                defaultValue: `"Submit"`,
            },
            {
                name: "rating",
                mandatory: true,
                description: "Current selected rating state",
                propTypes: ["number"],
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
                name: "onRatingChange",
                mandatory: true,
                description: (
                    <>
                        The callback when a star radio button is clicked on to
                        set <code>ratings</code>
                    </>
                ),
                propTypes: ["(value: number) => void"],
            },
            {
                name: "onSubmit",
                mandatory: true,
                description:
                    "The callback when the submit button is clicked on",
                propTypes: ["() => void"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
