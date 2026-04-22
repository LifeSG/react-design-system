import { act, fireEvent, render, screen } from "@testing-library/react";
import dayjs from "dayjs";
import {
    TimeTable,
    TimeTableProps,
    TimeTableRowData,
} from "../../src/timetable";

describe("TimeTable", () => {
    const date = dayjs("2024-09-11");

    const timeTableMockProps = {
        date: date.format("YYYY-MM-DD"),
        minTime: "06:20:00",
        maxTime: "22:00:00",
        maxDate: date.add(1, "month").format("YYYY-MM-DD"),
        minDate: date.add(-11, "month").format("YYYY-MM-DD"),
        totalRecords: 10,
        rowData: [],
        emptyContentMessage: "empty content message",
        onPreviousDayClick: jest.fn(),
        onNextDayClick: jest.fn(),
    } satisfies TimeTableProps;

    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers().setSystemTime(new Date("2024-09-11"));

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it("should render default timetable without errors", () => {
        render(
            <TimeTable
                date={timeTableMockProps.date}
                minDate={timeTableMockProps.minTime}
                maxDate={timeTableMockProps.maxDate}
                rowData={buildMockRowData(1)}
                loading={false}
                emptyContentMessage={timeTableMockProps.emptyContentMessage}
                onPreviousDayClick={timeTableMockProps.onPreviousDayClick}
                onNextDayClick={timeTableMockProps.onNextDayClick}
            />
        );

        expect(screen.getByText("11 September 2024, Wednesday")).toBeVisible();
        expect(screen.getByText("Row name")).toBeVisible();
        expect(screen.getByText("Cell title")).toBeVisible();
        expect(screen.getByText("Cell subtitle")).toBeVisible();
        expect(
            screen.queryByText(timeTableMockProps.emptyContentMessage)
        ).not.toBeInTheDocument();
    });

    it("should render empty timetable without errors", () => {
        render(
            <TimeTable
                date={timeTableMockProps.date}
                minDate={timeTableMockProps.minTime}
                maxDate={timeTableMockProps.maxDate}
                rowData={[]}
                loading={false}
                emptyContentMessage={timeTableMockProps.emptyContentMessage}
                onPreviousDayClick={timeTableMockProps.onPreviousDayClick}
                onNextDayClick={timeTableMockProps.onNextDayClick}
            />
        );

        expect(screen.getByText("11 September 2024, Wednesday")).toBeVisible();
        expect(
            screen.getByText(timeTableMockProps.emptyContentMessage)
        ).toBeVisible();
    });

    it("should display calendar dropdown when onCalendarDateSelect prop is specified and the date navigator date text is clicked", () => {
        const onCalendarDateSelect = jest.fn();

        render(
            <TimeTable
                date={timeTableMockProps.date}
                minDate={timeTableMockProps.minTime}
                maxDate={timeTableMockProps.maxDate}
                rowData={[]}
                loading={false}
                emptyContentMessage={timeTableMockProps.emptyContentMessage}
                onNextDayClick={timeTableMockProps.onNextDayClick}
                onPreviousDayClick={timeTableMockProps.onPreviousDayClick}
                onCalendarDateSelect={onCalendarDateSelect}
            />
        );

        fireEvent.click(screen.getByTestId("date-navigator-date-text"));

        expect(screen.getByText("11 September 2024, Wednesday")).toBeVisible();
        expect(screen.getByTestId("calendar-dropdown")).toBeInTheDocument();
    });

    it("should not have have popover appear if there's no popover content", () => {
        render(
            <TimeTable
                date={timeTableMockProps.date}
                minTime="07:00:00"
                maxTime="09:00:00"
                rowData={buildMockRowData(1)}
                loading={false}
                onNextDayClick={timeTableMockProps.onNextDayClick}
                onPreviousDayClick={timeTableMockProps.onPreviousDayClick}
                emptyContentMessage={timeTableMockProps.emptyContentMessage}
            />
        );

        const rowHeaderParent = screen.getByTestId("row-header-column-id");
        const firstRowHeader = rowHeaderParent.firstElementChild!;

        const contentContainer = screen.getByTestId("content-container-id");
        const firstRowBar = contentContainer.firstElementChild!;
        const blockedCell = firstRowBar.children[0];
        const filledCell = firstRowBar.children[1];

        fireEvent.mouseOver(firstRowHeader);
        expect(
            screen.queryByTestId("row-header-popover-card")
        ).not.toBeInTheDocument();

        fireEvent.mouseOver(blockedCell);
        expect(
            screen.queryByTestId("blocked-popover-card")
        ).not.toBeInTheDocument();

        fireEvent.mouseOver(filledCell);
        expect(
            screen.queryByTestId("filled-popover-card")
        ).not.toBeInTheDocument();
    });

    it("should have popover appear if there's popover content", () => {
        render(
            <TimeTable
                date={timeTableMockProps.date}
                minTime="07:00:00"
                maxTime="09:00:00"
                rowData={buildMockRowData(1)}
                loading={false}
                onNextDayClick={timeTableMockProps.onNextDayClick}
                onPreviousDayClick={timeTableMockProps.onPreviousDayClick}
                emptyContentMessage={timeTableMockProps.emptyContentMessage}
            />
        );

        const rowHeaderParent = screen.getByTestId("row-header-column-id");
        const firstRowHeader = rowHeaderParent.firstElementChild!;
        const contentContainer = screen.getByTestId("content-container-id");
        const firstRowBar = contentContainer.firstElementChild!;
        const blockedCell = firstRowBar.children[0];
        const filledCell = firstRowBar.children[1];

        fireEvent.mouseEnter(firstRowHeader);
        expect(screen.queryByText("row header popover")).toBeVisible();
        expect(screen.queryByTestId("popover")).toBeInTheDocument();
        fireEvent.mouseLeave(firstRowHeader);

        fireEvent.mouseEnter(blockedCell);
        expect(screen.queryByText("out of range cell popover")).toBeVisible();
        expect(screen.queryByTestId("popover")).toBeInTheDocument();
        fireEvent.mouseLeave(blockedCell);

        fireEvent.mouseEnter(filledCell);
        expect(screen.queryByText("row cell popover")).toBeVisible();
        expect(screen.queryByTestId("popover")).toBeInTheDocument();
        fireEvent.mouseLeave(filledCell);
    });

    it("should trigger onRowNameClick if row header name are clicked", () => {
        const onRowNameClick = jest.fn();

        render(
            <TimeTable
                date={timeTableMockProps.date}
                rowData={[
                    {
                        id: "1",
                        name: "Test",
                        rowMinTime: "08:00:00",
                        rowMaxTime: "09:00:00",
                        onRowNameClick: onRowNameClick,
                        rowCells: [
                            {
                                id: "1",
                                startTime: "08:00:00",
                                endTime: "09:00:00",
                                status: "filled",
                            },
                        ],
                    },
                ]}
                loading={false}
                onNextDayClick={timeTableMockProps.onNextDayClick}
                onPreviousDayClick={timeTableMockProps.onPreviousDayClick}
                emptyContentMessage={timeTableMockProps.emptyContentMessage}
            />
        );
        const rowHeaderName = screen.getByTestId("1-row-header-title");

        fireEvent.click(rowHeaderName);
        expect(onRowNameClick).toHaveBeenCalledTimes(1);
    });

    it("should have show empty content display if no rowData is passed into TimeTable", () => {
        render(
            <TimeTable
                date={timeTableMockProps.date}
                rowData={[]}
                loading={false}
                onNextDayClick={timeTableMockProps.onNextDayClick}
                onPreviousDayClick={timeTableMockProps.onPreviousDayClick}
                emptyContentMessage={timeTableMockProps.emptyContentMessage}
            />
        );
        const emptyContent = screen.getByTestId("error-display");
        expect(screen.getByText("No results found")).toBeVisible();
        expect(emptyContent).toBeVisible();
    });

    it("should have lazy load and a lazy loader should appear when user scrolls to the bottom of the TimeTable", async () => {
        render(
            <TimeTable
                date={timeTableMockProps.date}
                minDate={timeTableMockProps.minTime}
                maxDate={timeTableMockProps.maxDate}
                rowData={buildMockRowData(1)}
                totalRecords={20}
                loading={false}
                onNextDayClick={timeTableMockProps.onNextDayClick}
                onPreviousDayClick={timeTableMockProps.onPreviousDayClick}
                emptyContentMessage={timeTableMockProps.emptyContentMessage}
                onPage={() => buildMockRowData(1)}
            />
        );
        const container = screen.getByTestId("timetable-container");
        expect(screen.queryByTestId("lazy-loader")).toBeNull();

        // Scroll to the bottom of the container
        act(() => {
            container.scrollTop = container.scrollHeight;
            container.dispatchEvent(new Event("scroll")); // Trigger scroll event
        });

        expect(await screen.findByTestId("lazy-loader")).toBeInTheDocument();
    });

    it("should render a full bar of blocked slot when row cells are empty and rowMinTime and rowMaxTime are omitted for that row", async () => {
        render(
            <TimeTable
                date={timeTableMockProps.date}
                rowData={[
                    {
                        name: "blocked row",
                        rowCells: [],
                    },
                ]}
                minTime={"00:00"}
                maxTime={"23:59"}
                loading={false}
                emptyContentMessage={timeTableMockProps.emptyContentMessage}
                onPreviousDayClick={timeTableMockProps.onPreviousDayClick}
                onNextDayClick={timeTableMockProps.onNextDayClick}
            />
        );
        const timetableRow = screen.findByTestId("timetable-row");
        expect(
            (await timetableRow).querySelectorAll(
                '[data-testid="block-container"]'
            ).length
        ).toBe(1);
    });
});

// =============================================================================
// MOCKS
// =============================================================================

const buildMockRowData = (size: number): TimeTableRowData[] => {
    return Array(size)
        .fill(0)
        .map((_, i) => ({
            id: i.toString(),
            name: "Row name",
            rowMinTime: "08:00:00",
            rowMaxTime: "09:00:00",
            rowCells: [
                {
                    id: i.toString(),
                    title: "Cell title",
                    subtitle: "Cell subtitle",
                    startTime: "08:00:00",
                    endTime: "09:00:00",
                    status: "filled",
                    customPopover: {
                        trigger: "hover",
                        content: "row cell popover",
                        delay: { open: 0, close: 0 },
                    },
                },
            ],
            rowHeaderPopover: {
                trigger: "hover",
                content: "row header popover",
                delay: { open: 0, close: 0 },
            },
            outOfRangeCellPopover: {
                trigger: "hover",
                content: "out of range cell popover",
                delay: { open: 0, close: 0 },
            },
        }));
};
