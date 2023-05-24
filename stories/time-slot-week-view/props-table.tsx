import React from "react";
import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        name: "TimeSlotWeekView specific props",
        attributes: [
            {
                name: "minDate",
                description: (
                    <>
                        Restrict selection to this above this date. To specify
                        in the format <code>YYYY-MM-DD</code>
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "maxDate",
                description: (
                    <>
                        Restrict selection to this above this date. To specify
                        in the format <code>YYYY-MM-DD</code>
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
                name: "onYearMonthDisplayChange",
                description:
                    "Called when there is a change in the current visible month and year",
                propTypes: ["(value: YearMonthDisplay) => void"],
            },
            {
                name: "onChange",
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
            {
                name: "onSlotClick",
                description: (
                    <>
                        Called when the user click a timeslot in calendar.
                        Returns value in&nbsp;
                        <code>TimeSlotBar</code>&nbsp;format.
                    </>
                ),
                propTypes: ["(timeSlot: TimeSlot) => void | undefined"],
            },
            {
                name: "slots",
                mandatory: true,
                description: (
                    <>
                        The time slots for a given set of days. If not provided
                        will fallback to disabled slot pattern.
                    </>
                ),
                propTypes: ["{[date:string]:[TimeSlot[]}"],
            },
            {
                name: "showNavigationHeader",
                description: (
                    <>
                        Specifies if the month/year dropdown and navigation
                        arrows should be displayed.
                    </>
                ),
                defaultValue: "true",
                propTypes: ["boolean"],
            },
            {
                name: "enableSelection",
                description: (
                    <>
                        Specifies if the month/year dropdown and navigation
                        arrows should be displayed.
                    </>
                ),
                defaultValue: "true",
                propTypes: ["boolean"],
            },
            {
                name: "currentCalendarDate",
                description: (
                    <>
                        The current date to be displayed in calendar. calendar
                        will render the week including this date.&nbsp;
                        <code>YYYY-MM-DD</code> format
                    </>
                ),
                propTypes: ["string"],
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
    {
        name: "TimeSlot",
        attributes: [
            {
                name: "id",
                mandatory: true,
                description: "The unique identifier of the slot",
                propTypes: ["string"],
            },
            {
                name: "startTime",
                mandatory: true,
                description: (
                    <>
                        The start time of time slot bar. Format in&nbsp;
                        <code>HH:mm</code>&nbsp;
                        <br />(<strong>Note</strong>: Minutes to be specified in
                        15 minute blocks. E.g. 00, 15, 30, 45)
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "endTime",
                mandatory: true,
                description: (
                    <>
                        The end time of time slot bar. Format in&nbsp;
                        <code>HH:mm</code>&nbsp;
                        <br />(<strong>Note</strong>: Minutes to be specified in
                        15 minute blocks. E.g. 00, 15, 30, 45)
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "styleAttributes",
                description: <>The styling attributes for the time slot</>,
                propTypes: ["TimeSlotBarStyleAttributes"],
            },
            {
                name: "label",
                description: <>The text content within the slot cell</>,
                propTypes: ["string"],
            },
            {
                name: "clickable",
                description: <>Specifies if the time slot cell is clickable</>,
                propTypes: ["boolean"],
            },
        ],
    },
    {
        name: "TimeSlotBarStyleAttributes",
        attributes: [
            {
                name: "color",
                mandatory: true,
                description: <>The color of the slot</>,
                propTypes: ["string"],
            },
            {
                name: "styleType",
                description: <>The style type of the slot</>,
                propTypes: [`"default"`, `"stripes"`],
                defaultValue: "default",
            },
            {
                name: "secondaryColor",
                description: (
                    <>
                        The secondary color of the slot. Used in conjuction
                        with&nbsp;
                        <code>styleType</code> of <code>{`"stripes"`}</code>
                    </>
                ),
                propTypes: ["string"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
