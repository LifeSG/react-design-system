import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import dayjs from "dayjs";
import type { TimeSlot } from "src";
import { TimeSlotWeekView } from "src";
import { Colour } from "src/theme";

describe("TimeSlotWeekCalendar", () => {
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
        render(<TimeSlotWeekView onWeekDisplayChange={onWeekDisplayChange} />);

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
            <TimeSlotWeekView
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
            <TimeSlotWeekView
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
                <TimeSlotWeekView
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
                <TimeSlotWeekView
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
                    <TimeSlotWeekView
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
                    <TimeSlotWeekView
                        onWeekDisplayChange={onWeekDisplayChange}
                        currentCalendarDate={"2021-01-01"}
                        minDate={minDate.format(DATE_FORMAT)}
                    />
                );
                const leftArrowButton = screen.getByTestId("left-arrow-btn");
                fireEvent.click(leftArrowButton);
                expect(onWeekDisplayChange).toHaveBeenCalledTimes(1);
            });

            it("should not disable arrows when boundaries extend beyond current week", () => {
                const minDate = dayjs("2021-01-01")
                    .startOf("week")
                    .subtract(1, "day");
                const maxDate = dayjs("2021-01-01").endOf("week").add(1, "day");
                render(
                    <TimeSlotWeekView
                        currentCalendarDate={"2021-01-01"}
                        minDate={minDate.format(DATE_FORMAT)}
                        maxDate={maxDate.format(DATE_FORMAT)}
                    />
                );
                expect(screen.getByTestId("left-arrow-btn")).toBeEnabled();
                expect(screen.getByTestId("right-arrow-btn")).toBeEnabled();
            });

            it("should disable both arrows when current week is at both boundaries", () => {
                const minDate = dayjs("2021-01-01").startOf("week");
                const maxDate = dayjs("2021-01-01").endOf("week");
                render(
                    <TimeSlotWeekView
                        currentCalendarDate={"2021-01-01"}
                        minDate={minDate.format(DATE_FORMAT)}
                        maxDate={maxDate.format(DATE_FORMAT)}
                    />
                );
                expect(screen.getByTestId("left-arrow-btn")).toBeDisabled();
                expect(screen.getByTestId("right-arrow-btn")).toBeDisabled();
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

    describe("Slots behaviour", () => {
        // should render the given slots with correct start and end time
        const slots: { [date: string]: TimeSlot[] } = {
            "2021-01-01": [
                {
                    id: "1",
                    startTime: "09:00",
                    endTime: "14:30",
                    clickable: true,
                    styleAttributes: {
                        styleType: "stripes",
                        backgroundColor: "#ECEFEF",
                        backgroundColor2: "#E0E4E5",
                    },
                },
            ],
        };

        it("should render the given slots with correct start and end time", () => {
            const onSlotClick = jest.fn();
            const minDate = dayjs("2021-01-01").startOf("week");
            render(
                <TimeSlotWeekView
                    onWeekDisplayChange={onSlotClick}
                    onSlotClick={onSlotClick}
                    currentCalendarDate={"2021-01-01"}
                    slots={slots}
                    minDate={minDate.format(DATE_FORMAT)}
                />
            );
            expect(screen.getByText("9:00 am")).toBeVisible();
            expect(screen.getByText("2:30 pm")).toBeVisible();
        });

        it("should fire onSlotClick with relevant data when slot is clickable", () => {
            const onSlotClick = jest.fn();
            const minDate = dayjs("2021-01-01").startOf("week");
            render(
                <TimeSlotWeekView
                    onSlotClick={onSlotClick}
                    currentCalendarDate={"2021-01-01"}
                    slots={slots}
                    minDate={minDate.format(DATE_FORMAT)}
                />
            );
            const slot = screen.getByText("9:00 am");
            fireEvent.click(slot);
            expect(onSlotClick).toHaveBeenCalledTimes(1);
            expect(onSlotClick).toHaveBeenCalledWith("2021-01-01", {
                clickable: true,
                endTime: "14:30",
                id: "1",
                startTime: "09:00",
                styleAttributes: {
                    backgroundColor: "#ECEFEF",
                    backgroundColor2: "#E0E4E5",
                    styleType: "stripes",
                },
            });
        });

        it("should not fire onSlotClick when slot is not clickable", () => {
            const disabledSlots: { [date: string]: TimeSlot[] } = {
                "2021-01-01": [
                    {
                        id: "1",
                        startTime: "09:00",
                        endTime: "14:30",
                        clickable: false,
                        styleAttributes: {
                            styleType: "stripes",
                            backgroundColor: "#ECEFEF",
                            backgroundColor2: "#E0E4E5",
                        },
                    },
                ],
            };
            const onSlotClick = jest.fn();
            const minDate = dayjs("2021-01-01").startOf("week");
            render(
                <TimeSlotWeekView
                    onSlotClick={onSlotClick}
                    currentCalendarDate={"2021-01-01"}
                    slots={disabledSlots}
                    minDate={minDate.format(DATE_FORMAT)}
                />
            );
            const slot = screen.getByText("9:00 am");
            fireEvent.click(slot);
            expect(onSlotClick).toHaveBeenCalledTimes(0);
        });
    });

    it("updates the visible week when the value prop changes", () => {
        const { rerender } = render(<TimeSlotWeekView value="2022-05-26" />);
        expect(screen.getByText("May")).toBeVisible();
        expect(screen.getByText("2022")).toBeVisible();
        expect(screen.getByText("26")).toBeVisible();

        rerender(<TimeSlotWeekView value="2023-06-01" />);
        expect(screen.getByText("Jun")).toBeVisible();
        expect(screen.getByText("2023")).toBeVisible();
        expect(screen.getByText("1")).toBeVisible();
    });

    it("calls the onChange callback with formatted date when a date is selected", () => {
        const onChange = jest.fn();
        render(
            <TimeSlotWeekView
                onChange={onChange}
                currentCalendarDate={"2021-01-29"}
            />
        );
        const dateButton = screen.getByText("29");
        fireEvent.click(dateButton);
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith("2021-01-29");
    });

    it("does not call onChange when a disabled date is clicked", () => {
        const onChange = jest.fn();
        render(
            <TimeSlotWeekView
                onChange={onChange}
                currentCalendarDate={"2021-01-29"}
                minDate={"2021-01-28"}
                maxDate={"2021-01-30"}
            />
        );
        const disabledDate = screen.getByText("27");
        fireEvent.click(disabledDate);
        expect(onChange).not.toHaveBeenCalled();
    });

    describe("Keyboard navigation", () => {
        const navigationSlots: { [date: string]: TimeSlot[] } = {
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

        const tabToFirstSlot = async (
            user: ReturnType<typeof userEvent.setup>
        ) => {
            for (let index = 0; index < 8; index++) {
                await user.tab();
            }
        };

        it("should allow keyboard tabbing to the header dates", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            render(
                <TimeSlotWeekView
                    slots={{}}
                    currentCalendarDate={"2021-01-29"}
                    showNavigationHeader={false}
                />
            );

            await user.tab();

            expect(
                screen.getByRole("columnheader", {
                    name: "24 January 2021 Sunday, Available",
                })
            ).toHaveFocus();
        });

        it("should allow keyboard tabbing to time slots", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            render(
                <TimeSlotWeekView
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

            await tabToFirstSlot(user);

            expect(
                screen.getByRole("button", {
                    name: "29 January 2021 Friday 9:00AM to 9:30AM Morning slot Available",
                })
            ).toHaveFocus();
        });

        it("should move focus within the column on arrow keys", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            render(
                <TimeSlotWeekView
                    slots={navigationSlots}
                    currentCalendarDate={"2021-01-24"}
                    showNavigationHeader={false}
                />
            );

            await tabToFirstSlot(user);
            const firstSlot = screen.getByRole("button", {
                name: "24 January 2021 Sunday 9:00AM to 9:30AM Sun 9am Available",
            });
            const secondSlot = screen.getByRole("button", {
                name: "24 January 2021 Sunday 9:30AM to 10:00AM Sun 930am Available",
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
                <TimeSlotWeekView
                    slots={navigationSlots}
                    currentCalendarDate={"2021-01-24"}
                    showNavigationHeader={false}
                />
            );

            await tabToFirstSlot(user);
            const firstSlot = screen.getByRole("button", {
                name: "24 January 2021 Sunday 9:00AM to 9:30AM Sun 9am Available",
            });
            const lastSlot = screen.getByRole("button", {
                name: "24 January 2021 Sunday 9:30AM to 10:00AM Sun 930am Available",
            });

            fireEvent.keyDown(firstSlot, { key: "End" });
            expect(lastSlot).toHaveFocus();

            fireEvent.keyDown(lastSlot, { key: "Home" });
            expect(firstSlot).toHaveFocus();
        });

        it("should move focus to first and last slot in the column for page up and page down", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            render(
                <TimeSlotWeekView
                    slots={navigationSlots}
                    currentCalendarDate={"2021-01-24"}
                    showNavigationHeader={false}
                />
            );

            await tabToFirstSlot(user);
            const firstSlot = screen.getByRole("button", {
                name: "24 January 2021 Sunday 9:00AM to 9:30AM Sun 9am Available",
            });
            const lastSlot = screen.getByRole("button", {
                name: "24 January 2021 Sunday 9:30AM to 10:00AM Sun 930am Available",
            });

            fireEvent.keyDown(firstSlot, { key: "PageDown" });
            expect(lastSlot).toHaveFocus();

            fireEvent.keyDown(lastSlot, { key: "PageUp" });
            expect(firstSlot).toHaveFocus();
        });
    });
});
