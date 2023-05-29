import { fireEvent, render, screen } from "@testing-library/react";
import dayjs from "dayjs";
import { TimeSlotWeekView } from "../../src";

describe("TimeSlotWeekCalendar", () => {
    const currentDay = dayjs();
    const dateFormat = "YYYY-MM-DD";
    beforeEach(() => {
        jest.resetAllMocks();

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });
    it("renders without errors", () => {
        render(<TimeSlotWeekView />);
        expect(
            screen.getByText(currentDay.endOf("week").format("MMM"))
        ).toBeVisible();
        expect(
            screen.getByText(currentDay.endOf("week").format("YYYY"))
        ).toBeVisible();
        expect(screen.getByText(currentDay.format("D"))).toBeVisible();
    });

    it("should render the given calendar date", () => {
        render(<TimeSlotWeekView currentCalendarDate={"2021-01-01"} />);
        expect(screen.getByText("Jan")).toBeVisible();
        expect(screen.getByText("2021")).toBeVisible();
        expect(screen.getByText("1")).toBeVisible();
    });

    describe("Arrow behaviour", () => {
        it("calls the left arrow click handler when the left arrow button is clicked", () => {
            const onWeekDisplayChange = jest.fn();
            render(
                <TimeSlotWeekView
                    onWeekDisplayChange={onWeekDisplayChange}
                    currentCalendarDate={"2021-01-01"}
                />
            );
            const leftArrowButton = screen.getByTestId("left-arrow-btn");
            fireEvent.click(leftArrowButton);
            expect(onWeekDisplayChange).toHaveBeenCalledTimes(1);
            expect(onWeekDisplayChange).toHaveBeenCalledWith({
                month: 12,
                week: {
                    firstDayOfWeek: "2020-12-20",
                    lastDayOfWeek: "2020-12-26",
                },
                year: 2020,
            });
        });

        it("calls the right arrow click handler when the right arrow button is clicked", () => {
            const onWeekDisplayChange = jest.fn();
            render(
                <TimeSlotWeekView
                    onWeekDisplayChange={onWeekDisplayChange}
                    currentCalendarDate={"2021-01-01"}
                />
            );
            const rightArrowButton = screen.getByTestId("right-arrow-btn");
            fireEvent.click(rightArrowButton);
            expect(onWeekDisplayChange).toHaveBeenCalledTimes(1);
            expect(onWeekDisplayChange).toHaveBeenCalledWith({
                month: 1,
                week: {
                    firstDayOfWeek: "2021-01-03",
                    lastDayOfWeek: "2021-01-09",
                },
                year: 2021,
            });
        });

        describe("with disabled minMax dates", () => {
            it("should not be able to navigate above given maxDate", () => {
                const onWeekDisplayChange = jest.fn();
                const maxDate = dayjs("2021-01-01").endOf("week");
                render(
                    <TimeSlotWeekView
                        onWeekDisplayChange={onWeekDisplayChange}
                        currentCalendarDate={"2021-01-01"}
                        maxDate={maxDate.format(dateFormat)}
                    />
                );
                const rightArrowButton = screen.getByTestId("right-arrow-btn");
                fireEvent.click(rightArrowButton);
                expect(onWeekDisplayChange).not.toHaveBeenCalled();
            });
            it("should not be able to navigate above given minDate", () => {
                const onWeekDisplayChange = jest.fn();
                const minDate = dayjs("2021-01-01").startOf("week");
                render(
                    <TimeSlotWeekView
                        onWeekDisplayChange={onWeekDisplayChange}
                        currentCalendarDate={"2021-01-01"}
                        minDate={minDate.format(dateFormat)}
                    />
                );
                const leftArrowButton = screen.getByTestId("left-arrow-btn");
                fireEvent.click(leftArrowButton);
                expect(onWeekDisplayChange).not.toHaveBeenCalled();
            });
        });
    });

    describe("Year/Month dropdown behaviour", () => {
        it("calls the month drop down click handler when month dropdown button is clicked and a month is selected", () => {
            const onWeekDisplayChange = jest.fn();
            render(
                <TimeSlotWeekView
                    onWeekDisplayChange={onWeekDisplayChange}
                    currentCalendarDate={"2021-01-01"}
                />
            );
            const monthDropDownButton = screen.getByText("Jan");
            fireEvent.click(monthDropDownButton);
            // select Feb month
            const FebMonthButton = screen.getByText("February");
            fireEvent.click(FebMonthButton);
            expect(onWeekDisplayChange).toHaveBeenCalledTimes(1);
            expect(onWeekDisplayChange).toHaveBeenCalledWith({
                month: 2,
                week: {
                    firstDayOfWeek: "2021-01-31",
                    lastDayOfWeek: "2021-02-06",
                },
                year: 2021,
            });
        });

        it("calls the year dropdown click handler when the year drop down button is clicked and year is selected", () => {
            const onWeekDisplayChange = jest.fn();
            render(
                <TimeSlotWeekView
                    onWeekDisplayChange={onWeekDisplayChange}
                    currentCalendarDate={"2021-01-01"}
                />
            );
            const yearDropDownBtn = screen.getByText("2021");
            fireEvent.click(yearDropDownBtn);
            // select different year
            const yearButton = screen.getByText("2023");
            fireEvent.click(yearButton);
            expect(onWeekDisplayChange).toHaveBeenCalledTimes(1);
            expect(onWeekDisplayChange).toHaveBeenCalledWith({
                month: 1,
                week: {
                    firstDayOfWeek: "2023-01-01",
                    lastDayOfWeek: "2023-01-07",
                },
                year: 2023,
            });
        });
    });

    // TODO : Add tests for slots behaviour
    it.skip("updates the calendarDate state when the value prop changes", () => {
        const { rerender } = render(<TimeSlotWeekView value="2023-05-26" />);
        rerender(<TimeSlotWeekView value="2023-06-01" />);
    });

    it.skip("calls the onSelect callback when a date is selected", () => {
        const onSelect = jest.fn();
        render(<TimeSlotWeekView onSelect={onSelect} />);
        const dateButton = screen.getByLabelText("Select Date");
        fireEvent.click(dateButton);
        expect(onSelect).toHaveBeenCalledTimes(1);
    });
});
