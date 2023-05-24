import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const STRING_FORMAT = (
    <>
        string based format <code>YYYY-MM-DD</code>
    </>
);

const DATA: ApiTableSectionProps[] = [
    {
        name: "Calendar specific props",
        attributes: [
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
                name: "className",
                description: "Class selector for the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier for the component",
                propTypes: ["string"],
            },
            {
                name: "disabledDates",
                description: (
                    <>
                        The dates to be disabled. To specify each date in
                        the&nbsp;
                        {STRING_FORMAT}
                    </>
                ),
                propTypes: ["string[]"],
            },
            {
                name: "id",
                description: "The unique identifier for the component",
                propTypes: ["string"],
            },
            {
                name: "value",
                description: (
                    <>
                        The value of the selected date in the&nbsp;
                        {STRING_FORMAT}
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "onYearMonthDisplayChange",
                description:
                    "Called when there is a change in the current visible month and year",
                propTypes: ["(value: YearMonthDisplay) => void"],
            },
            {
                name: "onHover",
                description: (
                    <>
                        Called with the current hovered date or empty string if
                        the user leaves the calendar day view. Returns value in
                        the&nbsp;{STRING_FORMAT}
                    </>
                ),
                propTypes: ["(value: string) => void"],
            },
            {
                name: "onSelect",
                description: (
                    <>
                        Called when the user selected a value from the calendar.
                        Returns value in the&nbsp;{STRING_FORMAT}. Should the
                        value be invalid, the&nbsp; &lsquo;Invalid Date&rsquo;
                        value will be returned
                    </>
                ),
                propTypes: ["(value: string) => void"],
            },
        ],
    },
    {
        name: "YearMonthDisplay",
        attributes: [
            {
                name: "year",
                description: (
                    <>
                        The current visible year in <code>YYYY</code> format
                    </>
                ),
                propTypes: ["number"],
            },
            {
                name: "month",
                description: "The current visible month, from 1 to 12",
                propTypes: ["number"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
