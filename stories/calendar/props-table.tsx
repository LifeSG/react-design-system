import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        name: "Calendar specific props",
        attributes: [
            {
                name: "between",
                description: (
                    <>
                        Restrict selection to this date range. To specify in the
                        format <code>[YYYY-MM-DD, YYYY-MM-DD]</code>
                    </>
                ),
                propTypes: ["[string, string]"],
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
                        The dates to be disabled. To specify each date in the
                        format <code>YYYY-MM-DD</code>
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
                        The value of the selected date in&nbsp;
                        <code>YYYY-MM-DD</code> format
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "onCalendarDate",
                description: (
                    <>
                        Called when trigger the prev/next arrow in day calendar
                        or selected a value in month/year calendar &nbsp;
                        <code>YYYY-MM-DD</code>&nbsp;format.
                    </>
                ),
                propTypes: ["(value: string) => void"],
            },
            {
                name: "onHover",
                description: (
                    <>
                        Called with the current hovered date or empty string if
                        the user leaves the calendar day view. Returns value
                        in&nbsp;
                        <code>YYYY-MM-DD</code>&nbsp;format.
                    </>
                ),
                propTypes: ["(value: string) => void"],
            },
            {
                name: "onSelect",
                description: (
                    <>
                        Called when the user selected a value from the calendar.
                        Returns value in&nbsp;
                        <code>YYYY-MM-DD</code>&nbsp;format. Should the value be
                        invalid, the&nbsp; &lsquo;Invalid Date&rsquo; value will
                        be returned
                    </>
                ),
                propTypes: ["(value: string) => void"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
