import { ApiTable, ApiTableSectionProps } from "stories/storybook-common";

const STRING_FORMAT = (
    <>
        string based format <code>YYYY-MM-DD</code>
    </>
);

const DATA: ApiTableSectionProps[] = [
    {
        name: "TimeSlotWeekView specific props",
        attributes: [
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
                        The dates to be disabled. To specify each date in the{" "}
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
                name: "maxDate",
                description: (
                    <>
                        Specifies the maximum date allowed for selection in the{" "}
                        {STRING_FORMAT} {`(Inclusive)`}
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "minDate",
                description: (
                    <>
                        Specifies the minimum date allowed for selection in the{" "}
                        {STRING_FORMAT} {`(Inclusive)`}
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "value",
                description: (
                    <>The value of the selected date in the {STRING_FORMAT}</>
                ),
                propTypes: ["string"],
            },
            {
                name: "onWeekDisplayChange",
                description:
                    "Called when there is a change in the current visible week",
                propTypes: ["(value: YearMonthWeekDisplay) => void"],
            },
            {
                name: "onChange",
                description: (
                    <>
                        Called when the user selected a day from the calendar.
                        Returns value in the {STRING_FORMAT}
                    </>
                ),
                propTypes: ["(value: string) => void"],
            },
            {
                name: "onSlotClick",
                description: (
                    <>
                        Called when the user clicks a timeslot in the calendar.
                        Returns value as a <code>TimeSlot</code> object.
                    </>
                ),
                propTypes: ["(date: string, timeSlot: TimeSlot) => void"],
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
                propTypes: ["{ [date: string]: TimeSlot[] }"],
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
                description: <>Specifies if date can be selected</>,
                defaultValue: "true",
                propTypes: ["boolean"],
            },
            {
                name: "currentCalendarDate",
                description: (
                    <>
                        The initial date to be visible in the week view in the{" "}
                        {STRING_FORMAT}
                    </>
                ),
                propTypes: ["string"],
            },
        ],
    },
    {
        name: "YearMonthWeekDisplay",
        attributes: [
            {
                name: "week",
                description: (
                    <>
                        The first and last days of the current visible week in
                        the {STRING_FORMAT}
                    </>
                ),
                propTypes: [
                    "{ firstDayOfWeek: string; lastDayOfWeek: string; }",
                ],
            },
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
