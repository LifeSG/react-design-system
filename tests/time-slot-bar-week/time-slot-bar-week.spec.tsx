import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import dayjs from "dayjs";
import { TimeSlotBarWeek } from "../../src";
import { Colour } from "../../src/theme";

describe("TimeSlotBarWeekCalendar", () => {
    const DATE_FORMAT = "YYYY-MM-DD";

    beforeEach(() => {
        jest.resetAllMocks();
        jest.useFakeTimers().setSystemTime(new Date("2023-03-01").getTime());

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it("should render without errors", () => {
        const onWeekDisplayChange = jest.fn();
        render(
            <TimeSlotBarWeek
                slots={{}}
                onWeekDisplayChange={onWeekDisplayChange}
            />
        );

        expect(screen.getByText("Mar")).toBeVisible();
        expect(screen.getByText("2023")).toBeVisible();
        expect(screen.getByText("1")).toBeVisible();

        expect(onWeekDisplayChange).toHaveBeenCalledTimes(1);
        expect(onWeekDisplayChange).toHaveBeenCalledWith({
            week: {
                firstDayOfWeek: "2023-02-26",
                lastDayOfWeek: "2023-03-04",
            },
            month: 3,
            year: 2023,
        });
    });

    it("should render the visible week based on currentCalendarDate", () => {
        const onWeekDisplayChange = jest.fn();
        render(
            <TimeSlotBarWeek
                slots={{}}
                onWeekDisplayChange={onWeekDisplayChange}
                currentCalendarDate="2021-01-01"
            />
        );

        expect(screen.getByText("Jan")).toBeVisible();
        expect(screen.getByText("2021")).toBeVisible();
        expect(screen.getByText("1")).toBeVisible();
        expect(onWeekDisplayChange).toHaveBeenCalledTimes(1);
        expect(onWeekDisplayChange).toHaveBeenCalledWith({
            week: {
                firstDayOfWeek: "2020-12-27",
                lastDayOfWeek: "2021-01-02",
            },
            month: 1,
            year: 2021,
        });
    });

    it("should render visible week based on value", () => {
        const onWeekDisplayChange = jest.fn();
        render(
            <TimeSlotBarWeek
                slots={{}}
                onWeekDisplayChange={onWeekDisplayChange}
                currentCalendarDate="2021-01-01"
                value="2021-05-14"
            />
        );

        expect(screen.getByText("May")).toBeVisible();
        expect(screen.getByText("2021")).toBeVisible();
        expect(screen.getByText("14")).toBeVisible();
        expect(onWeekDisplayChange).toHaveBeenCalledTimes(1);
        expect(onWeekDisplayChange).toHaveBeenCalledWith({
            month: 5,
            week: {
                firstDayOfWeek: "2021-05-09",
                lastDayOfWeek: "2021-05-15",
            },
            year: 2021,
        });
    });

    describe("Arrow behaviour", () => {
        it("calls the left arrow click handler when the left arrow button is clicked", () => {
            const onWeekDisplayChange = jest.fn();
            render(
                <TimeSlotBarWeek
                    slots={{}}
                    onWeekDisplayChange={onWeekDisplayChange}
                    currentCalendarDate={"2021-01-01"}
                />
            );
            const leftArrowButton = screen.getByTestId("left-arrow-btn");
            fireEvent.click(leftArrowButton);
            expect(onWeekDisplayChange).toHaveBeenCalledTimes(2);
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
                <TimeSlotBarWeek
                    slots={{}}
                    onWeekDisplayChange={onWeekDisplayChange}
                    currentCalendarDate={"2021-01-01"}
                />
            );
            const rightArrowButton = screen.getByTestId("right-arrow-btn");
            fireEvent.click(rightArrowButton);
            expect(onWeekDisplayChange).toHaveBeenCalledTimes(2);
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
                    <TimeSlotBarWeek
                        slots={{}}
                        onWeekDisplayChange={onWeekDisplayChange}
                        currentCalendarDate={"2021-01-01"}
                        maxDate={maxDate.format(DATE_FORMAT)}
                    />
                );
                const rightArrowButton = screen.getByTestId("right-arrow-btn");
                fireEvent.click(rightArrowButton);
                expect(onWeekDisplayChange).toHaveBeenCalledTimes(1);
            });

            it("should not be able to navigate above given minDate", () => {
                const onWeekDisplayChange = jest.fn();
                const minDate = dayjs("2021-01-01").startOf("week");
                render(
                    <TimeSlotBarWeek
                        slots={{}}
                        onWeekDisplayChange={onWeekDisplayChange}
                        currentCalendarDate={"2021-01-01"}
                        minDate={minDate.format(DATE_FORMAT)}
                    />
                );
                const leftArrowButton = screen.getByTestId("left-arrow-btn");
                fireEvent.click(leftArrowButton);
                expect(onWeekDisplayChange).toHaveBeenCalledTimes(1);
            });
        });
    });

    describe("Year/Month dropdown behaviour", () => {
        it("calls the month drop down click handler when month dropdown button is clicked and a month is selected", () => {
            const onWeekDisplayChange = jest.fn();
            render(
                <TimeSlotBarWeek
                    slots={{}}
                    onWeekDisplayChange={onWeekDisplayChange}
                    currentCalendarDate={"2021-01-01"}
                />
            );
            const monthDropDownButton = screen.getByText("Jan");
            fireEvent.click(monthDropDownButton);
            // select Feb month
            const FebMonthButton = screen.getByText("February");
            fireEvent.click(FebMonthButton);
            expect(onWeekDisplayChange).toHaveBeenCalledTimes(2);
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
                <TimeSlotBarWeek
                    slots={{}}
                    onWeekDisplayChange={onWeekDisplayChange}
                    currentCalendarDate={"2021-01-01"}
                />
            );
            const yearDropDownBtn = screen.getByText("2021");
            fireEvent.click(yearDropDownBtn);
            // select different year
            const yearButton = screen.getByText("2023");
            fireEvent.click(yearButton);
            expect(onWeekDisplayChange).toHaveBeenCalledTimes(2);
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

    describe("Time column", () => {
        it("should render the time column with correct timings", () => {
            render(
                <TimeSlotBarWeek
                    startTime="08:00"
                    endTime="18:00"
                    currentCalendarDate={"2021-01-01"}
                    slots={{}}
                />
            );
            expect(screen.getByText("8")).toBeVisible();
            expect(screen.getByText("12 pm")).toBeVisible();
            expect(screen.getByText("4")).toBeVisible();
        });
    });

    it("updates the visible week when the value prop changes", () => {
        const { rerender } = render(
            <TimeSlotBarWeek slots={{}} value="2022-05-26" />
        );
        expect(screen.getByText("May")).toBeVisible();
        expect(screen.getByText("2022")).toBeVisible();
        expect(screen.getByText("26")).toBeVisible();

        rerender(<TimeSlotBarWeek slots={{}} value="2023-06-01" />);
        expect(screen.getByText("Jun")).toBeVisible();
        expect(screen.getByText("2023")).toBeVisible();
        expect(screen.getByText("1")).toBeVisible();
    });

    it("calls the onChange callback when a date is selected", () => {
        const onChange = jest.fn();
        render(
            <TimeSlotBarWeek
                slots={{}}
                onChange={onChange}
                currentCalendarDate={"2021-01-29"}
            />
        );
        const dateButton = screen.getByText("29");
        fireEvent.click(dateButton);
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    describe("Keyboard navigation", () => {
        const navigationSlots = {
            "2021-01-24": [
                {
                    id: "sun-0900",
                    startTime: "09:00",
                    endTime: "09:30",
                    label: "Sun 9am",
                    clickable: true,
                    styleAttributes: {
                        backgroundColor: Colour["bg-available"],
                    },
                },
                {
                    id: "sun-0930",
                    startTime: "09:30",
                    endTime: "10:00",
                    label: "Sun 930am",
                    clickable: true,
                    styleAttributes: {
                        backgroundColor: Colour["bg-available"],
                    },
                },
            ],
            "2021-01-25": [
                {
                    id: "mon-0900",
                    startTime: "09:00",
                    endTime: "09:30",
                    label: "Mon 9am",
                    clickable: true,
                    styleAttributes: {
                        backgroundColor: Colour["bg-available"],
                    },
                },
            ],
            "2021-01-26": [
                {
                    id: "tue-0900",
                    startTime: "09:00",
                    endTime: "09:30",
                    label: "Tue 9am",
                    clickable: true,
                    styleAttributes: {
                        backgroundColor: Colour["bg-available"],
                    },
                },
            ],
        };

        it("should allow keyboard tabbing to time slots", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            render(
                <TimeSlotBarWeek
                    slots={{
                        "2021-01-29": [
                            {
                                id: "slot-1",
                                startTime: "09:00",
                                endTime: "09:30",
                                label: "Morning slot",
                                clickable: true,
                                styleAttributes: {
                                    backgroundColor: Colour["bg-available"],
                                },
                            },
                        ],
                    }}
                    currentCalendarDate={"2021-01-29"}
                    showNavigationHeader={false}
                />
            );

            await user.tab();

            expect(
                screen.getByRole("button", {
                    name: "29 January 2021 Friday, 9:00AM to 9:30AM, Morning slot, Available",
                })
            ).toHaveFocus();
        });

        it("should move focus within the column on arrow keys", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            render(
                <TimeSlotBarWeek
                    slots={navigationSlots}
                    currentCalendarDate={"2021-01-24"}
                    showNavigationHeader={false}
                />
            );

            await user.tab();
            const firstSlot = screen.getByRole("button", {
                name: "24 January 2021 Sunday, 9:00AM to 9:30AM, Sun 9am, Available",
            });
            const secondSlot = screen.getByRole("button", {
                name: "24 January 2021 Sunday, 9:30AM to 10:00AM, Sun 930am, Available",
            });

            expect(firstSlot).toHaveFocus();

            fireEvent.keyDown(firstSlot, { key: "ArrowDown" });
            expect(secondSlot).toHaveFocus();

            fireEvent.keyDown(secondSlot, { key: "ArrowUp" });
            expect(firstSlot).toHaveFocus();

            fireEvent.keyDown(firstSlot, { key: "ArrowRight" });
            expect(secondSlot).toHaveFocus();

            fireEvent.keyDown(secondSlot, { key: "ArrowLeft" });
            expect(firstSlot).toHaveFocus();
        });

        it("should move focus to first and last slot in the column for home and end", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            render(
                <TimeSlotBarWeek
                    slots={navigationSlots}
                    currentCalendarDate={"2021-01-24"}
                    showNavigationHeader={false}
                />
            );

            await user.tab();
            const firstRowSlot = screen.getByRole("button", {
                name: "24 January 2021 Sunday, 9:00AM to 9:30AM, Sun 9am, Available",
            });
            const lastColumnSlot = screen.getByRole("button", {
                name: "24 January 2021 Sunday, 9:30AM to 10:00AM, Sun 930am, Available",
            });

            fireEvent.keyDown(firstRowSlot, { key: "End" });
            expect(lastColumnSlot).toHaveFocus();

            fireEvent.keyDown(lastColumnSlot, { key: "Home" });
            expect(firstRowSlot).toHaveFocus();
        });

        it("should move focus to first and last slot in the column for page up and page down", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            render(
                <TimeSlotBarWeek
                    slots={navigationSlots}
                    currentCalendarDate={"2021-01-24"}
                    showNavigationHeader={false}
                />
            );

            await user.tab();
            const firstSlot = screen.getByRole("button", {
                name: "24 January 2021 Sunday, 9:00AM to 9:30AM, Sun 9am, Available",
            });
            const lastColumnSlot = screen.getByRole("button", {
                name: "24 January 2021 Sunday, 9:30AM to 10:00AM, Sun 930am, Available",
            });

            fireEvent.keyDown(firstSlot, { key: "PageDown" });
            expect(lastColumnSlot).toHaveFocus();

            fireEvent.keyDown(lastColumnSlot, { key: "PageUp" });
            expect(firstSlot).toHaveFocus();
        });
    });
});
