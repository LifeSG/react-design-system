import React from "react";
import { ApiTable } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "InputSlider specific props",
        attributes: [
            {
                name: "className",
                description: "The class selector of the component",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "The unique identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "value",
                description: "The input value",
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
                description:
                    "Indicates if the component is disabled and selection is not allowed",
                propTypes: ["boolean"],
            },
            {
                name: "readOnly",
                description:
                    "Indicates if the component is in the readonly state",
                propTypes: ["boolean"],
            },
            {
                name: "colors",
                description: (
                    <>
                        Custom colors for each track segment. The format is as
                        such <code>[leftTrack, rightTrack]</code>
                    </>
                ),
                propTypes: [
                    "(string | ((props: unknown) => string | undefined))[]",
                ],
            },
            {
                name: "showSliderLabels",
                description: "Specifies if min and max labels are visible",
                propTypes: ["boolean"],
            },
            {
                name: "sliderLabelPrefix",
                description: "Text to be prepended to the min and max labels",
                propTypes: ["string"],
            },
            {
                name: "sliderLabelSuffix",
                description: "Text to be appended to the min and max labels",
                propTypes: ["string"],
            },
            {
                name: "renderSliderLabel",
                description: "Function to render custom min or max labels",
                propTypes: ["(value: number) => React.ReactNode"],
            },
            {
                name: "ariaLabel",
                description: "Describes the input to screen readers",
                propTypes: ["string"],
            },
            {
                name: "onChange",
                description: "Called when a selection is made",
                propTypes: ["(value: number) => React.ReactNode"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
