import { fireEvent, render, screen } from "@testing-library/react";
import dayjs from "dayjs";
import { TimeTable } from "../../src/timetable/timetable";
import { RowData, TimeTableProps } from "../../src/timetable/types";

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
        blockedCellHoverContent: "Outside operating hours",
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

    //FIXME: skip popover test for now as there will be changes to it
    // it("should have popover appear if mouse hovers on a disabled cell", () => {
    //     const onEmptyCellClick = jest.fn();
    //     const filledCellPopoverSize = {
    //         width: "500px",
    //         padding: "3rem",
    //     };
    //     const blockedCellPopoverSize = {
    //         width: "500px",
    //         padding: "2rem",
    //     };

    //     render(
    //         <TimeTable
    //             {timeTableMockData}
    //             height="650px"
    //             width="900px"
    //             rowData={mockMapper().rowData.slice(0, 8)}
    //             onEmptyCellClick={onEmptyCellClick}
    //             filledCellPopoverSize={filledCellPopoverSize}
    //             blockedCellPopoverSize={blockedCellPopoverSize}
    //         />
    //     );
    //     const rowBarElement = screen.getByTestId("9l4P1dOr16-row-bar");
    //     const disabledCell = rowBarElement.firstElementChild;

    //     fireEvent.mouseOver(disabledCell);
    //     expect(screen.getByTestId("popover")).toBeVisible();

    // });

    // it("should have popover appear if mouse clicks on a filled cell", () => {
    //     const onEmptyCellClick = jest.fn();

    //     render(
    //         <TimeTable

    //             height="650px"
    //             width="900px"
    //             rowData={mockMapper().rowData.slice(0, 8)}
    //             onEmptyCellClick={onEmptyCellClick}
    //         />
    //     );
    //     const rowBarElement = screen.getByTestId("9l4P1dOr16-row-bar");
    //     // just target the first element
    //     const filledCell = rowBarElement.querySelector(':nth-child(5)');
    //     console.log('filledCell', filledCell);
    //     fireEvent.click(filledCell);
    //     expect(screen.getByTestId("popover")).toBeVisible();

    // });
});
