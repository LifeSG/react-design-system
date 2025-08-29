import { ApiTable, ApiTableSectionProps } from "stories/storybook-common";

const TIME_FORMAT = (
    <>
        string-based <code>HH:mm</code> format
    </>
);
const DATE_FORMAT = (
    <>
        string-based <code>YYYY-MM-DD</code> format
    </>
);

const DATA: ApiTableSectionProps[] = [
    {
        name: "ScheduleProps",
        attributes: [
            {
                name: "id",
                description: "The identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "The class selector of the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "view",
                description: "The view mode for the schedule component",
                defaultValue: "day",
                propTypes: [`"day"`, `"week"`],
            },
            {
                name: "date",
                mandatory: true,
                description: <>The current displayed date in {DATE_FORMAT}</>,
                propTypes: ["string"],
            },
            {
                name: "emptyContentMessage",
                description: (
                    <>
                        The props to determine what message this component
                        should render if there is no content. Note that it is
                        determined as empty when <code>rowData=[]</code>.
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "serviceData",
                mandatory: true,
                description:
                    "The data used to render each service with their time slots",
                propTypes: ["ScheduleEntityProps[]"],
            },
            {
                name: "loading",
                description:
                    "The loading toggle to render the loading animation.",
                defaultValue: "false",
                propTypes: ["boolean"],
            },
            {
                name: "minTime",
                description: (
                    <>
                        The start time of this schedule in {TIME_FORMAT} format.
                    </>
                ),
                defaultValue: "00:00",
                propTypes: ["string"],
            },
            {
                name: "maxTime",
                description: (
                    <>The end time of this schedule in {TIME_FORMAT} format.</>
                ),
                defaultValue: "23:59",
                propTypes: ["string"],
            },
            {
                name: "initialScrollTime",
                description: (
                    <>
                        The initial scroll position time in {TIME_FORMAT}{" "}
                        format. Defaults to minTime if not provided.
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "minDate",
                description: (
                    <>
                        The minimum date allowed for navigation in {DATE_FORMAT}{" "}
                        (inclusive)
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "maxDate",
                description: (
                    <>
                        The maximum date allowed for navigation in {DATE_FORMAT}{" "}
                        (inclusive)
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "onPreviousDayClick",
                description: (
                    <>
                        The callback function to trigger when the left arrow has
                        been clicked on the date navigator component.
                    </>
                ),
                mandatory: true,
                propTypes: ["(currentDate: string) => void"],
            },
            {
                name: "onNextDayClick",
                description: (
                    <>
                        The callback function to trigger when the right arrow
                        has been clicked on the date navigator component.
                    </>
                ),
                mandatory: true,
                propTypes: ["(currentDate: string) => void"],
            },
            {
                name: "onCalendarDateSelect",
                description: (
                    <>
                        The callback function to trigger when a calendar date
                        has been picked in the dropdown calendar.
                    </>
                ),
                propTypes: ["(currentDate: string) => void"],
            },
            {
                name: "onTodayClick",
                description: (
                    <>
                        The callback function to trigger when the today button
                        is clicked.
                    </>
                ),
                propTypes: ["() => void"],
            },
            {
                name: "onSlotClick",
                description: (
                    <>
                        The callback function to trigger when a timeslot cell
                        has been clicked.
                    </>
                ),
                propTypes: [
                    "(data: ScheduleSlotProps, e: React.MouseEvent) => void",
                ],
            },
            {
                name: "blockedMessage",
                description: (
                    <>
                        Custom message to display for blocked slots instead of
                        the default "Unavailable" text. The message will be
                        truncated with ellipsis if the slot width is too small.
                    </>
                ),
                defaultValue: "Unavailable",
                propTypes: ["string"],
            },
            {
                name: "onClickHiddenSlots",
                description: (
                    <>
                        The callback function to trigger when hidden slots
                        button is clicked in week view. Provides the list of
                        hidden service names for the clicked interval.
                    </>
                ),
                propTypes: ["(hiddenServices: string[]) => void"],
            },
        ],
    },
    {
        name: "ScheduleEntityProps",
        attributes: [
            {
                name: "id",
                description: (
                    <>
                        The identifier for this service entity. This can be
                        useful for tracking and managing services.
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "name",
                mandatory: true,
                description: "The name of the service or resource.",
                propTypes: ["string"],
            },
            {
                name: "slots",
                mandatory: true,
                description: (
                    <>
                        The array of time slots for this service. Each slot
                        represents a bookable time period with its availability
                        status.
                    </>
                ),
                propTypes: ["ScheduleSlotProps[]"],
            },
        ],
    },
    {
        name: "ScheduleSlotProps",
        attributes: [
            {
                name: "id",
                description: (
                    <>
                        The identifier for this cell. This can be useful if you
                        intend to utilise the <code>onClick</code> callback, as
                        the <code>ScheduleSlotProps</code> will get passed to
                        the callback.
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "startTime",
                mandatory: true,
                description: (
                    <>The starting time of this cell in {TIME_FORMAT}.</>
                ),
                propTypes: ["string"],
            },
            {
                name: "endTime",
                mandatory: true,
                description: (
                    <>The ending time of this cell in {TIME_FORMAT}.</>
                ),
                propTypes: ["string"],
            },
            {
                name: "status",
                mandatory: true,
                description: (
                    <>
                        The status of this cell, which determines the style it
                        will be rendered in.
                    </>
                ),
                propTypes: [
                    `"booked"`,
                    `"available"`,
                    `"blocked"`,
                    `"pending"`,
                ],
            },
            {
                name: "capacity",
                description: "The maximum capacity for this timeslot.",
                propTypes: ["number"],
            },
            {
                name: "date",
                mandatory: true,
                description: <>The date for this timeslot in {DATE_FORMAT}.</>,
                propTypes: ["string"],
            },
            {
                name: "booked",
                description:
                    "The number of current bookings for this timeslot.",
                propTypes: ["number"],
            },
            {
                name: "customPopover",
                description: (
                    <>
                        The props for rendering any custom popover for the cell.
                        <br />
                        <b>Warning</b>: Ensure that there is no conflict when
                        handling <code>onClick</code> callback and a popover
                        <code>trigger=click</code> for this cell.
                    </>
                ),
                propTypes: ["SchedulePopoverProps"],
            },
            {
                name: "onClick",
                description:
                    "The callback function to trigger when a cell has been clicked.",
                propTypes: [
                    "(data: ScheduleSlotProps, e: React.MouseEvent) => void",
                ],
            },
        ],
    },
    {
        name: "SchedulePopoverProps",
        attributes: [
            {
                name: "trigger",
                mandatory: true,
                description: "The interaction to trigger the popover.",
                propTypes: [`"click"`, `"hover"`],
            },
            {
                name: "content",
                mandatory: true,
                description: "The content to be rendered within the popover.",
                propTypes: ["string", "JSX.Element", "(() => React.ReactNode)"],
            },
            {
                name: "delay",
                description: (
                    <>
                        The delay for the popover to appear upon hover in
                        milliseconds. <br />
                        <b>Note</b>: This delay only applies for when the
                        trigger type is of type <code>hover</code>.
                    </>
                ),
                propTypes: ["{ open?: number, close?: number }"],
            },
            {
                name: "offset",
                description:
                    "How much offset (in px) to apply for the popover.",
                propTypes: ["number"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
