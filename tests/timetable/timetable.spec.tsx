import { act, fireEvent, render, screen } from "@testing-library/react";
import dayjs from "dayjs";
import { TimeTable } from "../../src/timetable/timetable";
import { TimeTableProps, TimeTableRowData } from "../../src/timetable/types";
import { lazyLoad } from "../../stories/timetable/mock-data";

describe("TimeTable", () => {
    const date = dayjs("2024-09-11");

    const timeTableMockData = {
        date: date.format("YYYY-MM-DD"),
        minTime: "06:20:00",
        maxTime: "22:00:00",
        maxDate: date.add(1, "month").format("YYYY-MM-DD"),
        minDate: date.add(-11, "month").format("YYYY-MM-DD"),
        totalRecords: 10,
        rowData: [],
        onNameClick: function (rowData: TimeTableRowData): void {
            alert(`Clicked on ${JSON.stringify(rowData)}`);
        },
        emptyContent: {
            illustrationScheme: "bookingsg",
            description:
                "There’s no data to show. You may need to adjust your search or filters. If you believe this is a mistake, try refreshing the page.",
        },
        isLoading: false,
    } as TimeTableProps;

    beforeEach(() => {
        jest.resetAllMocks();
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
                date={timeTableMockData.date}
                minDate={timeTableMockData.minTime}
                maxDate={timeTableMockData.maxDate}
                rowData={[]}
                loading={false}
                emptyContent={timeTableMockData.emptyContent}
            />
        );
        expect(screen.getByText("11 September 2024")).toBeVisible();
    });

    it("should have date navigator component visible if onRightArrowClick and onLeftArrowClick props are passed in", () => {
        const onRightArrowClick = jest.fn();
        const onLeftArrowClick = jest.fn();

        render(
            <TimeTable
                date={timeTableMockData.date}
                minDate={timeTableMockData.minTime}
                maxDate={timeTableMockData.maxDate}
                rowData={[]}
                loading={false}
                emptyContent={timeTableMockData.emptyContent}
                onNextDayClick={onRightArrowClick}
                onPreviousDayClick={onLeftArrowClick}
            />
        );
        const leftBtn = screen.getByTestId("date-navigator-left-arrow-btn");
        const rightBtn = screen.getByTestId("date-navigator-right-arrow-btn");
        expect(screen.getByText("11 September 2024")).toBeVisible();
        expect(leftBtn).toBeVisible();
        expect(rightBtn).toBeVisible();
    });

    it("should not have have popover appear if there's no popover content", () => {
        render(
            <TimeTable
                date={timeTableMockData.date}
                minTime="07:00:00"
                maxTime="09:00:00"
                rowData={[
                    {
                        id: "1",
                        name: "Test",
                        rowMinTime: "08:00:00",
                        rowMaxTime: "09:00:00",
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
                emptyContent={timeTableMockData.emptyContent}
            />
        );
        const rowHeaderParent = screen.getByTestId("row-header-column-id");
        const firstRowHeader = rowHeaderParent.firstElementChild;

        const contentContainer = screen.getByTestId("content-container-id");
        const firstRowBar = contentContainer.firstElementChild;
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
                date={timeTableMockData.date}
                minTime="07:00:00"
                maxTime="09:00:00"
                rowData={[
                    {
                        id: "1",
                        name: "Test",
                        rowMinTime: "08:00:00",
                        rowMaxTime: "09:00:00",
                        rowCells: [
                            {
                                id: "1",
                                startTime: "08:00:00",
                                endTime: "09:00:00",
                                status: "filled",
                                customPopover: {
                                    trigger: "hover",
                                    content: "beeeboobeebooo",
                                    delay: { open: 0, close: 0 },
                                },
                            },
                        ],
                        rowHeaderPopover: {
                            trigger: "hover",
                            content: "hello world123",
                            delay: { open: 0, close: 0 },
                        },
                        outOfRangeCellPopover: {
                            trigger: "hover",
                            content: "skibididiidi ohio",
                            delay: { open: 0, close: 0 },
                        },
                    },
                ]}
                loading={false}
                emptyContent={timeTableMockData.emptyContent}
            />
        );
        const rowHeaderParent = screen.getByTestId("row-header-column-id");
        const firstRowHeader = rowHeaderParent.firstElementChild;
        const contentContainer = screen.getByTestId("content-container-id");
        const firstRowBar = contentContainer.firstElementChild;
        const blockedCell = firstRowBar.children[0];
        const filledCell = firstRowBar.children[1];

        fireEvent.mouseEnter(firstRowHeader);
        expect(screen.queryByText("hello world123")).toBeVisible();
        expect(screen.queryByTestId("popover")).toBeInTheDocument();
        fireEvent.mouseLeave(firstRowHeader);

        fireEvent.mouseEnter(blockedCell);
        expect(screen.queryByText("skibididiidi ohio")).toBeVisible();
        expect(screen.queryByTestId("popover")).toBeInTheDocument();
        fireEvent.mouseLeave(blockedCell);

        fireEvent.mouseEnter(filledCell);
        expect(screen.queryByText("beeeboobeebooo")).toBeVisible();
        expect(screen.queryByTestId("popover")).toBeInTheDocument();
        fireEvent.mouseLeave(filledCell);
    });

    it("should trigger onNameClick if row header name are clicked", () => {
        const onRowNameClick = jest.fn();

        render(
            <TimeTable
                date={timeTableMockData.date}
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
                emptyContent={timeTableMockData.emptyContent}
            />
        );
        const rowHeaderName = screen.getByTestId("1-row-header-title");

        fireEvent.click(rowHeaderName);
        expect(onRowNameClick).toHaveBeenCalledTimes(1);
    });

    it("should have show empty content display if no rowData is passed into TimeTable", () => {
        render(
            <TimeTable
                date={timeTableMockData.date}
                rowData={[]}
                loading={false}
                emptyContent={timeTableMockData.emptyContent}
            />
        );
        const emptyContent = screen.getByTestId("error-display");
        expect(screen.getByText("No results found")).toBeVisible();
        expect(emptyContent).toBeVisible();
    });

    it("should have lazy load and a lazy loader should appear when user scrolls to the bottom of the TimeTable", async () => {
        render(
            <TimeTable
                date={timeTableMockData.date}
                minDate={timeTableMockData.minTime}
                maxDate={timeTableMockData.maxDate}
                rowData={lazyLoad(1)}
                totalRecords={20}
                loading={false}
                emptyContent={timeTableMockData.emptyContent}
                onPage={() => lazyLoad(2)}
            />
        );
        const container = screen.getByTestId("timetable-container-id");
        expect(screen.queryByTestId("lazy-loader")).toBeNull();

        // Scroll to the bottom of the container
        act(() => {
            container.scrollTop = container.scrollHeight;
            container.dispatchEvent(new Event("scroll")); // Trigger scroll event
        });

        expect(await screen.findByTestId("lazy-loader")).toBeInTheDocument();
    });
});