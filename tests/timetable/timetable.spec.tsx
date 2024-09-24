import {
    act,
    fireEvent,
    render,
    screen,
    waitFor,
} from "@testing-library/react";
import dayjs from "dayjs";
import { TimeTable } from "../../src/timetable/timetable";
import { RowData, TimeTableProps } from "../../src/timetable/types";
import { lazyLoad } from "../../stories/timetable/mock-data";
import { lazy } from "react";

describe("TimeTable", () => {
    const date = dayjs("2024-09-11");

    //REVIEW - is there a way to mock this const ? kiv for when we have time
    const timeTableMockData = {
        date: date.format("YYYY-MM-DD"),
        minTime: "06:20:00",
        maxTime: "22:00:00",
        maxDate: date.add(1, "month").format("YYYY-MM-DD"),
        minDate: date.add(-11, "month").format("YYYY-MM-DD"),
        totalRecords: 10,
        rowData: [],
        onNameClick: function (rowData: RowData): void {
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
                isLoading={false}
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
                isLoading={false}
                emptyContent={timeTableMockData.emptyContent}
                onRightArrowClick={onRightArrowClick}
                onLeftArrowClick={onLeftArrowClick}
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
                isLoading={false}
                emptyContent={timeTableMockData.emptyContent}
            />
        );
        const rowHeaderParent = screen.getByTestId("row-header-column-id");
        const firstRowHeader = rowHeaderParent.firstElementChild;

        const contentContainer = screen.getByTestId("content-container-id");
        const firstRowBar = contentContainer.firstElementChild;
        const disabledCell = firstRowBar.children[0];
        const filledCell = firstRowBar.children[1];

        fireEvent.mouseOver(firstRowHeader);
        fireEvent.mouseOver(disabledCell);
        fireEvent.mouseOver(filledCell);

        expect(screen.queryByTestId("popover")).not.toBeInTheDocument();
        expect(screen.queryByTestId("popover")).not.toBeInTheDocument();
        expect(screen.queryByTestId("popover")).not.toBeInTheDocument();
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
                                    content: "test",
                                    delay: 0,
                                },
                            },
                        ],
                        rowHeaderCustomPopover: {
                            trigger: "hover",
                            content: "test",
                            delay: 0,
                        },
                        outsideOpHoursCellCustomPopover: {
                            trigger: "hover",
                            content: "outside op hours",
                            delay: 0,
                        },
                    },
                ]}
                isLoading={false}
                emptyContent={timeTableMockData.emptyContent}
            />
        );
        const rowHeaderParent = screen.getByTestId("row-header-column-id");
        const firstRowHeader = rowHeaderParent.firstElementChild;

        const contentContainer = screen.getByTestId("content-container-id");
        const firstRowBar = contentContainer.firstElementChild;
        const disabledCell = firstRowBar.children[0];
        const filledCell = firstRowBar.children[1];

        fireEvent.mouseOver(firstRowHeader);
        expect(screen.queryByTestId("popover")).toBeVisible();

        fireEvent.mouseOver(disabledCell);
        expect(screen.queryByTestId("popover")).toBeVisible();

        fireEvent.mouseOver(filledCell);
        expect(screen.queryByTestId("popover")).toBeVisible();
    });

    it("should have show empty content display if no rowData is passed into TimeTable", () => {
        render(
            <TimeTable
                date={timeTableMockData.date}
                rowData={[]}
                isLoading={false}
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
                isLoading={false}
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
