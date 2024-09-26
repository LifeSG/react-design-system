import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        name: "TimeTableProps",
        attributes: [
            {
                name: "date",
                mandatory: true,
                description: (
                    <>
                        The date string to display, any format that is
                        acceptable by <code>Dayjs</code>will work.
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "emptyContent",
                mandatory: true,
                description: (
                    <>
                        The props to determine what this component should render
                        if there is no content. Note that it is determined as
                        empty when <code>totalRecords=0</code>or
                        <code>rowData=[]</code>.
                    </>
                ),
                propTypes: ["EmptyContentProps"],
            },
            {
                name: "rowData",
                mandatory: true,
                description: "The data used to render each unique rows",
                propTypes: ["RowData[]"],
            },
            {
                name: "isLoading",
                mandatory: true,
                description:
                    "The loading toggle to render the loading animation.",
                propTypes: ["boolean"],
            },
            {
                name: "minTime",
                description:
                    "The start time of this time table in HH:mm format.",
                propTypes: ["string"],
            },
            {
                name: "maxTime",
                description: "The end time of this time table in HH:mm format.",
                propTypes: ["string"],
            },
            {
                name: "minDate",
                description: "The minimum date allowed for date navigation.",
                propTypes: ["string"],
            },
            {
                name: "maxDate",
                description: "The maximum date allowed for date navigation,",
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
                name: "width",
                description: "The width of this time table component.",
                propTypes: ["string"],
            },
            {
                name: "height",
                description: "The height of this time table component.",
                propTypes: ["string"],
            },
            {
                name: "outsideOpHoursCellCustomPopover",
                description: (
                    <>
                        The props for rendering any custom popover for the
                        automatically filled <code>blocked</code>cells.
                    </>
                ),
                propTypes: ["CustomPopoverProps"],
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
                name: "onLeftArrowClick",
                description: (
                    <>
                        The callback function to trigger when the left arrow has
                        been clicked on the date navigator component.
                        <br />
                        <b>Note</b>: Arrow button will not be rendered if this
                        prop is not passed in.
                    </>
                ),
                propTypes: ["(currentDate: string) => void"],
            },
            {
                name: "onRightArrowClick",
                description: (
                    <>
                        The callback function to trigger when the right arrow
                        has been clicked on the date navigator component.
                        <br />
                        <b>Note</b>: Arrow button will not be rendered if this
                        prop is not passed in.
                    </>
                ),
                propTypes: ["(currentDate: string) => void"],
            },
            {
                name: "onNameClick",
                description:
                    "The callback function to trigger when the row header name has been clicked.",
                propTypes: ["(rowData: RowData, e: React.MouseEvent) => void"],
            },
            {
                name: "onCellClick",
                description:
                    "The callback function to trigger when a cell has been clicked.",
                propTypes: ["(data: RowCellData, e: React.MouseEvent) => void"],
            },
        ],
    },
    {
        name: "EmptyContentProps",
        attributes: [
            {
                name: "description",
                mandatory: true,
                description:
                    "The description text to show when there is no content to display",
                propTypes: ["string"],
            },
            {
                name: "illustrationScheme",
                mandatory: true,
                description:
                    "The scheme to use, which decides what image to display for empty content",
                propTypes: [
                    `"base"`,
                    `"bookingsg"`,
                    `"ccube"`,
                    `"rbs"`,
                    `"mylegacy"`,
                ],
            },
        ],
    },
    {
        name: "RowData",
        attributes: [
            {
                name: "id",
                mandatory: true,
                description: (
                    <>
                        The identifier for this row. This can be useful if you
                        intend to utilise the <code>onNameClick</code>callback,
                        as the <code>RowData</code>will get passed to the
                        callback.
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
                propTypes: ["RowCellData[]"],
            },
            {
                name: "subtitle",
                description: "The row header subtitle to be rendered.",
                propTypes: ["string", "JSX.Element"],
            },
            {
                name: "rowHeaderCustomPopover",
                description:
                    "The props for rendering any custom popover for this row header",
                propTypes: ["CustomPopoverProps"],
            },
            {
                name: "rowMinTime",
                description: (
                    <>
                        The starting time for this row in HH:mm format. <br />
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
                        The ending time for this row in HH:mm format. <br />
                        Defaults to <code>maxTime</code>from
                        <code>TimeTableProps</code>.<br />
                        This component will automatically fill
                        <code>blocked</code>cells till<code>maxTime</code>from
                        this time.
                    </>
                ),
                propTypes: ["string"],
            },
        ],
    },
    {
        name: "RowCellData",
        attributes: [
            {
                name: "id",
                mandatory: true,
                description: (
                    <>
                        The identifier for this cell. This can be useful if you
                        intend to utilise the <code>onCellClick</code>callback,
                        as the <code>RowCellData</code>will get passed to the
                        callback.
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "startTime",
                mandatory: true,
                description: "The starting time of this cell. In HH:mm format.",
                propTypes: ["string"],
            },
            {
                name: "endTime",
                mandatory: true,
                description: "The ending time of this cell. In HH:mm format.",
                propTypes: ["string"],
            },
            {
                name: "status",
                description: (
                    <>
                        The status of this cell, which determines the style it
                        will be rendered in.
                        <br />
                        <b>NOTE</b>: undefined or blocked cells will have mouse
                        disabled hover interaction and will not trigger the
                        <code>onCellClick</code>callback.
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
                propTypes: ["CustomPopoverProps"],
            },
        ],
    },
    {
        name: "CustomPopoverProps",
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
                propTypes: ["string", "JSX.Element"],
            },
            {
                name: "width",
                description:
                    "The custom width for this popover, can be in any units (px/rem..)",
                propTypes: ["string"],
            },
            {
                name: "padding",
                description:
                    "The custom padding for this popover, can be in any units (px/rem..)",
                propTypes: ["string"],
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
