import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

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
        name: "TimeTableProps",
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
                name: "date",
                mandatory: true,
                description: <>The current displayed date in {DATE_FORMAT}</>,
                propTypes: ["string"],
            },
            {
                name: "emptyContentMessage",
                description: (
                    <>
                        The props to determine what message this component should render
                        if there is no content. Note that it is determined as
                        empty when <code>totalRecords=0</code>or
                        <code>rowData=[]</code>.
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "rowData",
                mandatory: true,
                description: "The data used to render each unique rows",
                propTypes: ["TimeTableRowData[]"],
            },
            {
                name: "loading",
                mandatory: true,
                description:
                    "The loading toggle to render the loading animation.",
                propTypes: ["boolean"],
            },
            {
                name: "minTime",
                description: (
                    <>
                        The start time of this time table in {TIME_FORMAT}{" "}
                        format.
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "maxTime",
                description: (
                    <>
                        The end time of this time table in {TIME_FORMAT} format.
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
                name: "totalRecords",
                description: (
                    <>
                        To display the total number of records and also to let
                        this component know when it is fully loaded. <br />
                        <b>Note</b>: Total records section will not be rendered
                        if this prop is not passed in.
                    </>
                ),
                propTypes: ["number"],
            },
            {
                name: "showTodayAsToday",
                description: "Shows system's today's date as 'Today'",
                propTypes: ["boolean"],
            },
            {
                name: "showDateAsShortForm",
                description: "Shows the date text in short form",
                propTypes: ["boolean"],
            },
            {
                name: "onRefresh",
                description: (
                    <>
                        The callback function to trigger when the refresh button
                        is clicked. <br />
                        <b>Note</b>: Refresh button will not be rendered if this
                        prop is not passed in.
                    </>
                ),
                propTypes: ["() => void"],
            },
            {
                name: "onPage",
                description:
                    "The callback function to trigger when pagination happens.",
                propTypes: ["() => void"],
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
                        The callback function to trigger when a calendar date has been
                        picked in the dropdown calendar.
                    </>
                ),
                mandatory: true,
                propTypes: ["(currentDate: string) => void"],
            },
        ],
    },
    {
        name: "TimeTableRowData",
        attributes: [
            {
                name: "id",
                description: (
                    <>
                        The identifier for this row. This can be useful if you
                        intend to utilise the <code>onNameClick</code>callback,
                        as the <code>TimeTableRowData</code>will get passed to
                        the callback.
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "name",
                mandatory: true,
                description: "The row header name to be rendered.",
                propTypes: ["string"],
            },
            {
                name: "rowCells",
                mandatory: true,
                description:
                    "The array of row cells to be rendered in this row of data.",
                propTypes: ["TimeTableRowCellData[]"],
            },
            {
                name: "subtitle",
                description: "The row header subtitle to be rendered.",
                propTypes: ["string", "JSX.Element"],
            },
            {
                name: "rowHeaderPopover",
                description:
                    "The props for rendering any custom popover for this row header",
                propTypes: ["TimeTablePopoverProps"],
            },
            {
                name: "outOfRangeCellPopover",
                description: (
                    <>
                        The props for rendering any custom popover for the
                        automatically filled <code>blocked</code>cells.
                    </>
                ),
                propTypes: ["TimeTablePopoverProps"],
            },
            {
                name: "rowMinTime",
                description: (
                    <>
                        The starting time for this row in {TIME_FORMAT}. <br />
                        Defaults to <code>minTime</code>from
                        <code>TimeTableProps</code>.<br />
                        This component will automatically fill
                        <code>blocked</code>cells from<code>minTime</code>to
                        this time.
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "rowMaxTime",
                description: (
                    <>
                        The ending time in for this row in {TIME_FORMAT}. <br />
                        Defaults to <code>maxTime</code>from
                        <code>TimeTableProps</code>.<br />
                        This component will automatically fill
                        <code>blocked</code>cells till<code>maxTime</code>from
                        this time.
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "onRowNameClick",
                description:
                    "The callback function to trigger when the row header name has been clicked.",
                propTypes: [
                    "(rowData: TimeTableRowData, e: React.MouseEvent) => void",
                ],
            },
        ],
    },
    {
        name: "TimeTableRowCellData",
        attributes: [
            {
                name: "id",
                description: (
                    <>
                        The identifier for this cell. This can be useful if you
                        intend to utilise the <code>onClick</code>callback, as
                        the <code>TimeTableRowCellData</code>will get passed to
                        the callback.
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "startTime",
                mandatory: true,
                description: (
                    <>The starting time of this cell. In {TIME_FORMAT}.</>
                ),
                propTypes: ["string"],
            },
            {
                name: "endTime",
                mandatory: true,
                description: (
                    <>The ending time of this cell. In {TIME_FORMAT}.</>
                ),
                propTypes: ["string"],
            },
            {
                name: "status",
                description: (
                    <>
                        The status of this cell, which determines the style it
                        will be rendered in.
                    </>
                ),
                propTypes: [`"filled"`, `"blocked"`, `"default"`],
            },
            {
                name: "title",
                description: "The title to show for this cell.",
                propTypes: ["string"],
            },
            {
                name: "subtitle",
                description: "The subtitle to show for this cell.",
                propTypes: ["string"],
            },
            {
                name: "customPopover",
                description: (
                    <>
                        The props for rendering any custom popover for the cell.
                        <br />
                        <b>Warning</b>: Ensure that there is no conflict when
                        handling<code>onClick</code>callback and a popover
                        <code>trigger=click</code> for this cell.
                    </>
                ),
                propTypes: ["TimeTablePopoverProps"],
            },
            {
                name: "onClick",
                description:
                    "The callback function to trigger when a cell has been clicked.",
                propTypes: [
                    "(data: TimeTableRowCellData, e: React.MouseEvent) => void",
                ],
            },
        ],
    },
    {
        name: "TimeTablePopoverProps",
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
                propTypes: ["string", "JSX.Element", "(() => React.ReactNode"],
            },
            {
                name: "delay",
                description: (
                    <>
                        The delay for the popover to appear upon hover in
                        milliseconds. <br />
                        <b>Note</b>: This delay only applies for when the
                        trigger type is of type<code>hover</code>.
                    </>
                ),
                propTypes: ["{ open: number, close: number }"],
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
