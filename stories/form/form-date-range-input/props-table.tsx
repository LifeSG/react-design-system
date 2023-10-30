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
        name: "DateRangeInput specific props",
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
                        {STRING_FORMAT} or <code>YYYY-M-D</code>. In a ranged
                        selection, this serves as the start date.
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "valueEnd",
                description: (
                    <>
                        The value of end date in the {STRING_FORMAT} or&nbsp;
                        <code>YYYY-M-D</code>
                        <br />
                        <b>Note: Only relevant for ranged selection</b>
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "variant",
                description: (
                    <>
                        When the <code>week</code> is specified, the component
                        is a week selection.
                    </>
                ),
                propTypes: ["string"],
                defaultValue: `range`,
            },
            {
                name: "numberOfDays",
                description: (
                    <>
                        Specifies the number of days to be selected if
                        fixed-range is specified for variant
                        <b>Note: Only relevant for fixed-range selection</b>
                    </>
                ),
                propTypes: ["number"],
                defaultValue: `7`,
            },
            {
                name: "withButton",
                description: (
                    <>
                        Specifies if the {quote("Done")} and {quote("Cancel")}
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
                        Called when a selection is made. Returns the start and
                        end date in the {STRING_FORMAT}
                    </>
                ),
                propTypes: ["(startDate: string, endDate: string) => void"],
            },
            {
                name: "onBlur",
                description: "Called when a defocus on the field is made.",
                propTypes: ["() => void"],
            },
            {
                name: "onFocus",
                description: "Called when the field is focused",
                propTypes: ["() => void"],
            },
            {
                name: "onYearMonthDisplayChange",
                description:
                    "Called when the current displayed month and year changes",
                propTypes: ["(value: YearMonthDisplay) => void"],
            },
        ],
    },
    {
        name: "YearMonthDisplay",
        attributes: [
            {
                name: "year",
                description: (
                    <>The current displayed year in {code("YYYY")} format</>
                ),
                propTypes: ["number"],
            },
            {
                name: "month",
                description: "The current displayed month, from 1 to 12",
                propTypes: ["number"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
