import React from "react";
import { ApiTable, code, quote } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "Timepicker specific props",
        attributes: [
            {
                name: "value",
                description: (
                    <>
                        The value of the time input in a string based format.
                        <br />
                        24 hour uses {quote("hh:mm")} e.g.{" "}
                        {code(quote("13:00"))}
                        <br />
                        12 hour uses {quote("hh:mmA")} e.g.{" "}
                        {code(quote("01:00PM"))}
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "placeholder",
                description: (
                    <>
                        The placeholder text in the <code>Timepicker</code>{" "}
                        field
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "format",
                description: "The time input format",
                propTypes: [`"12hr"`, `"24hr"`],
                defaultValue: `"24hr"`,
            },
            {
                name: "disabled",
                description:
                    "Indicates if the component is disabled and entry is not allowed",
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
                    "Called when the user clicks on the 'Confirm' button in the time selection box. Returns the time value in the format specified",
                propTypes: ["(value: string) => void"],
            },
            {
                name: "onBlur",
                description:
                    "Called when a defocus happens. Any changes in the time selection box will not be applied",
                propTypes: ["() => void"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
