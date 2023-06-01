import React from "react";
import { ApiTable, code, quote } from "../../storybook-common/api-table";
import { ApiTableSectionProps } from "../../storybook-common/api-table/types";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const STRING_FORMAT = (
    <>
        string based format <code>YYYY-MM-DD</code>
    </>
);

const DATA: ApiTableSectionProps[] = [
    {
        name: "DateInput specific props",
        attributes: [
            {
                name: "allowDisabledSelection",
                description: (
                    <>
                        Specifies if dates normally disabled by{" "}
                        {code("minDate")}, {code("maxDate")} and{" "}
                        {code("disabledDates")}
                        are still selectable
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
                name: "disabledDates",
                description: (
                    <>
                        The dates to be disabled. To specify each date in
                        the&nbsp;
                        {STRING_FORMAT}.
                        <br />
                        E.g.{" "}
                        <code>
                            [{quote("2023-01-01")}, {quote("2023-01-03")}]
                        </code>
                    </>
                ),
                propTypes: ["string[]"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
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
                name: "id",
                description: "The unique identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "maxDate",
                description: (
                    <>
                        Specifies the maximum date allowed for selection in
                        the&nbsp;{STRING_FORMAT}&nbsp;{`(Inclusive)`}
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "minDate",
                description: (
                    <>
                        Specifies the minimum date allowed for selection in
                        the&nbsp;{STRING_FORMAT}&nbsp;{`(Inclusive)`}
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "readOnly",
                description:
                    "Indicates if the component has a read only state and selection or input is not allowed",
                propTypes: ["boolean"],
            },
            {
                name: "value",
                description: (
                    <>
                        The value of the <code>DateInput</code> in the&nbsp;
                        {STRING_FORMAT} or <code>YYYY-M-D</code>.
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "withButton",
                description: (
                    <>
                        Specifies if the {quote("Done")} and {quote("Cancel")}{" "}
                        action buttons should be rendered
                        <br />
                        <b>Note: It appears by default in mobile viewports</b>
                    </>
                ),
                propTypes: ["boolean"],
                defaultValue: `true`,
            },
            {
                name: "onChange",
                description: (
                    <>
                        Called when a selection is made. Returns the date in the{" "}
                        {STRING_FORMAT}
                    </>
                ),
                propTypes: ["(date: string) => void"],
            },
            {
                name: "onBlur",
                description: "Called when a defocus on the field is made.",
                propTypes: ["() => void"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
