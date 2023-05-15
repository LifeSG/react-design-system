import React from "react";
import { ApiTable } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "TimeRangePicker specific props",
        attributes: [
            {
                name: "value",
                description: (
                    <>
                        The value of the time in string based format. 24 hour
                        will be <code>hh:mm</code>, while 12 hour will be{" "}
                        <code>hh:mma</code>
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "format",
                description: "The time input format",
                propTypes: [`"12hr"`],
                defaultValue: `"12hr"`,
            },
            {
                name: "disabled",
                description:
                    "Indicates if the component is disabled and entry is not allowed",
                propTypes: ["boolean"],
            },
            {
                name: "readOnly",
                description:
                    "Indicates if the component has a read only state and selection or input is not allowed",
                propTypes: ["boolean"],
            },
            {
                name: "error",
                description: (
                    <>
                        Indicates if an error display is to be set&nbsp; (Not
                        needed if you indicated <code>errorMessage</code>)
                    </>
                ),
                propTypes: ["boolean"],
            },
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
                name: "style",
                description: "Allows for inline styling of the component",
                propTypes: ["React.CSSProperties"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "onChange",
                description:
                    "Called when the user clicks on the 'Done' button in the time selection box. Returns the time value in the format specified",
                propTypes: ["(value: TimeRangeInputValue) => void"],
            },
            {
                name: "onBlur",
                description:
                    "Called when a defocus happens. Any changes in the time selection box will not be applied",
                propTypes: ["() => void"],
            },
        ],
    },
    {
        name: "TimeRangeInputValue",
        attributes: [
            {
                name: "startTime",
                description:
                    "The selected start time value in the format specified",
                propTypes: ["string"],
            },
            {
                name: "endTime",
                description:
                    "The selected end time value in the format specified",
                propTypes: ["string"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
