import React from "react";
import { ApiTable, code } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "InputSlider specific props",
        attributes: [
            {
                name: "value",
                description: "The input values",
                propTypes: ["number"],
            },
            {
                name: "min",
                description: "The start of the range",
                propTypes: ["number"],
                defaultValue: "0",
            },
            {
                name: "max",
                description: "The end of the range",
                propTypes: ["number"],
                defaultValue: "100",
            },
            {
                name: "step",
                description:
                    "The interval between the previous and next values",
                propTypes: ["number"],
                defaultValue: "1",
            },
            {
                name: "disabled",
                description: "the number of controls",
                propTypes: ["boolean"],
            },
            {
                name: "readOnly",
                description: "the number of controls",
                propTypes: ["boolean"],
            },
            {
                name: "colors",
                description: "List of custom colors for each track segment",
                propTypes: [
                    "(string | ((props: unknown) => string | undefined))[]",
                ],
            },
            {
                name: "showLabels",
                description: "Specifies if min and max labels are visible",
                propTypes: ["boolean"],
            },
            {
                name: "labelPrefix",
                description: "Text to be prepended to the min and max labels",
                propTypes: ["string"],
            },
            {
                name: "labelSuffix",
                description: "Text to be appended to the min and max labels",
                propTypes: ["string"],
            },
            {
                name: "renderLabel",
                description: "Function to render custom min or max labels",
                propTypes: ["(value: number) => React.ReactNode"],
            },
            {
                name: "onChange",
                description: "Called when a range selection is made",
                propTypes: ["(value: number) => React.ReactNode"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
