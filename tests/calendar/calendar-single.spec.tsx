import { render, screen } from "@testing-library/react";
import userEvent, {
    PointerEventsCheckLevel,
} from "@testing-library/user-event";
import { useState } from "react";
import { Calendar } from "src/calendar";

const CALENDAR_ID = "calendar-container";

describe("Calendar - single variant", () => {
    beforeAll(() => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date("2024-02-01T12:00:00").getTime());
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it("renders without error", () => {
        render(<Calendar />);

        expect(screen.getByTestId("calendar-content")).toBeInTheDocument();
    });

    it("appends consumer className to the wrapper", () => {
        render(
            <Calendar
                className="consumer-calendar-class"
                data-testid="calendar-wrapper"
            />
        );

        expect(screen.getByTestId("calendar-wrapper").className).toContain(
            "consumer-calendar-class"
        );
    });

    it("renders the selected date when value prop is provided", () => {
        render(<Calendar value="2024-02-15" />);

        expect(
            screen.getByRole("gridcell", {
                name: /15 February 2024 Thursday, Available/i,
            })
        ).toHaveAttribute("aria-selected", "true");
    });

    it("updates rendered selection when controlled value prop changes", async () => {
        const user = userEvent.setup({
            advanceTimers: jest.advanceTimersByTime,
        });

        const TestComponent = () => {
            const [value, setValue] = useState<string | undefined>(undefined);

            return (
                <>
                    <button onClick={() => setValue("2024-02-15")}>
                        Set date
                    </button>
                    <Calendar value={value} />
                </>
            );
        };

        render(<TestComponent />);

        expect(
            screen.getByRole("gridcell", {
                name: /15 February 2024 Thursday, Available/i,
            })
        ).toHaveAttribute("aria-selected", "false");

        await user.click(screen.getByRole("button", { name: "Set date" }));

        expect(
            screen.getByRole("gridcell", {
                name: /15 February 2024 Thursday, Available/i,
            })
        ).toHaveAttribute("aria-selected", "true");
    });

    describe("onChange", () => {
        it("calls onChange with the selected date string when a date is clicked", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const onChange = jest.fn();

            render(<Calendar onChange={onChange} />);

            await user.click(
                screen.getByRole("gridcell", {
                    name: "15 February 2024 Thursday, Available",
                })
            );

            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith("2024-02-15");
        });

        it("calls onChange with the selected date string when a date is selected via keyboard", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const onChange = jest.fn();

            render(<Calendar onChange={onChange} />);

            screen
                .getByRole("gridcell", {
                    name: "15 February 2024 Thursday, Available",
                })
                .focus();

            await user.keyboard("{Enter}");

            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith("2024-02-15");
        });

        it("does not call onChange when disabled date is clicked", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
                pointerEventsCheck: PointerEventsCheckLevel.Never,
            });
            const onChange = jest.fn();

            render(
                <Calendar onChange={onChange} disabledDates={["2024-02-15"]} />
            );

            await user.click(
                screen.getByRole("gridcell", {
                    name: "15 February 2024 Thursday, Unavailable",
                })
            );

            expect(onChange).not.toHaveBeenCalled();
        });

        it("does not call onChange when disabled date is selected via keyboard", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const onChange = jest.fn();

            render(
                <Calendar onChange={onChange} disabledDates={["2024-02-15"]} />
            );

            screen
                .getByRole("gridcell", {
                    name: "15 February 2024 Thursday, Unavailable",
                })
                .focus();

            await user.keyboard("{Enter}");

            expect(onChange).not.toHaveBeenCalled();
        });

        it("calls onChange when disabled date is clicked when allowDisabledSelection=true", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
                pointerEventsCheck: PointerEventsCheckLevel.Never,
            });
            const onChange = jest.fn();

            render(
                <Calendar
                    onChange={onChange}
                    disabledDates={["2024-02-15"]}
                    allowDisabledSelection
                />
            );

            await user.click(
                screen.getByRole("gridcell", {
                    name: "15 February 2024 Thursday, Unavailable",
                })
            );

            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith("2024-02-15");
        });
    });

    describe("Mouse navigation", () => {
        it("navigates when next month is clicked", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const onYearMonthDisplayChange = jest.fn();

            render(
                <Calendar onYearMonthDisplayChange={onYearMonthDisplayChange} />
            );

            await user.click(
                screen.getByRole("button", { name: "Next month" })
            );

            expect(screen.getByTestId(CALENDAR_ID)).toHaveAccessibleName(
                "March, 2024"
            );
            expect(onYearMonthDisplayChange).toHaveBeenLastCalledWith({
                month: 3,
                year: 2024,
            });
        });

        it("navigates when date from next month is clicked", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const onYearMonthDisplayChange = jest.fn();

            render(
                <Calendar onYearMonthDisplayChange={onYearMonthDisplayChange} />
            );

            await user.click(
                screen.getByRole("gridcell", {
                    name: "4 March 2024 Monday, Available",
                })
            );

            expect(screen.getByTestId(CALENDAR_ID)).toHaveAccessibleName(
                "March, 2024"
            );
            expect(onYearMonthDisplayChange).toHaveBeenLastCalledWith({
                month: 3,
                year: 2024,
            });
        });

        it("navigates when previous month is clicked", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const onYearMonthDisplayChange = jest.fn();

            render(
                <Calendar onYearMonthDisplayChange={onYearMonthDisplayChange} />
            );

            await user.click(
                screen.getByRole("button", { name: "Previous month" })
            );

            expect(screen.getByTestId(CALENDAR_ID)).toHaveAccessibleName(
                "January, 2024"
            );
            expect(onYearMonthDisplayChange).toHaveBeenLastCalledWith({
                month: 1,
                year: 2024,
            });
        });

        it("navigates when date from previous month is clicked", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const onYearMonthDisplayChange = jest.fn();

            render(
                <Calendar onYearMonthDisplayChange={onYearMonthDisplayChange} />
            );

            await user.click(
                screen.getByRole("gridcell", {
                    name: "31 January 2024 Wednesday, Available",
                })
            );

            expect(screen.getByTestId(CALENDAR_ID)).toHaveAccessibleName(
                "January, 2024"
            );
            expect(onYearMonthDisplayChange).toHaveBeenLastCalledWith({
                month: 1,
                year: 2024,
            });
        });
    });

    describe("Keyboard navigation", () => {
        it("includes the current date in the tab sequence given no date is selected", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });

            render(
                <div>
                    <button data-testid="before-button">Before</button>
                    <Calendar />
                    <button data-testid="after-button">After</button>
                </div>
            );

            screen.getByTestId("before-button").focus();

            await user.tab();
            expect(
                screen.getByRole("button", {
                    name: "February, Select month",
                })
            ).toHaveFocus();

            await user.tab();
            expect(
                screen.getByRole("button", { name: "2024, Select year" })
            ).toHaveFocus();

            await user.tab();
            expect(
                screen.getByRole("button", { name: "Previous month" })
            ).toHaveFocus();

            await user.tab();
            expect(
                screen.getByRole("button", { name: "Next month" })
            ).toHaveFocus();

            await user.tab();
            expect(
                screen.getByRole("gridcell", {
                    name: "1 February 2024 Thursday, Available",
                })
            ).toHaveFocus();

            await user.tab();
            expect(screen.getByTestId("after-button")).toHaveFocus();
        });

        it("includes the selected date in the tab sequence if a date is selected", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });

            render(
                <div>
                    <button data-testid="before-button">Before</button>
                    <Calendar value="2024-02-15" />
                    <button data-testid="after-button">After</button>
                </div>
            );

            screen.getByRole("button", { name: "Next month" }).focus();

            await user.tab();
            expect(
                screen.getByRole("gridcell", {
                    name: "15 February 2024 Thursday, Available",
                })
            ).toHaveFocus();

            await user.tab();
            expect(screen.getByTestId("after-button")).toHaveFocus();
        });

        it("navigates within the current month with right arrow key", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });

            render(<Calendar value="2024-02-01" />);

            screen
                .getByRole("gridcell", {
                    name: "1 February 2024 Thursday, Available",
                })
                .focus();

            await user.keyboard("{ArrowRight}");
            expect(
                screen.getByRole("gridcell", {
                    name: "2 February 2024 Friday, Available",
                })
            ).toHaveFocus();

            await user.keyboard("{ArrowRight}{ArrowRight}");
            expect(
                screen.getByRole("gridcell", {
                    name: "4 February 2024 Sunday, Available",
                })
            ).toHaveFocus();
        });

        it("navigates within the current month with left arrow key", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });

            render(<Calendar value="2024-02-07" />);

            screen
                .getByRole("gridcell", {
                    name: "7 February 2024 Wednesday, Available",
                })
                .focus();

            await user.keyboard("{ArrowLeft}");
            expect(
                screen.getByRole("gridcell", {
                    name: "6 February 2024 Tuesday, Available",
                })
            ).toHaveFocus();

            await user.keyboard("{ArrowLeft}{ArrowLeft}{ArrowLeft}");
            expect(
                screen.getByRole("gridcell", {
                    name: "3 February 2024 Saturday, Available",
                })
            ).toHaveFocus();
        });

        it("navigates within the current month with up arrow key", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });

            render(<Calendar value="2024-02-08" />);

            screen
                .getByRole("gridcell", {
                    name: "8 February 2024 Thursday, Available",
                })
                .focus();

            await user.keyboard("{ArrowUp}");
            expect(
                screen.getByRole("gridcell", {
                    name: "1 February 2024 Thursday, Available",
                })
            ).toHaveFocus();
        });

        it("navigates within the current month with down arrow key", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });

            render(<Calendar value="2024-02-08" />);

            screen
                .getByRole("gridcell", {
                    name: "8 February 2024 Thursday, Available",
                })
                .focus();

            await user.keyboard("{ArrowDown}");
            expect(
                screen.getByRole("gridcell", {
                    name: "15 February 2024 Thursday, Available",
                })
            ).toHaveFocus();
        });

        it("navigates to the previous month with up arrow key", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const onYearMonthDisplayChange = jest.fn();

            render(
                <Calendar
                    value="2024-02-01"
                    onYearMonthDisplayChange={onYearMonthDisplayChange}
                />
            );

            screen
                .getByRole("gridcell", {
                    name: "1 February 2024 Thursday, Available",
                })
                .focus();

            await user.keyboard("{ArrowUp}");
            expect(
                screen.getByRole("gridcell", {
                    name: "25 January 2024 Thursday, Available",
                })
            ).toHaveFocus();

            expect(screen.getByTestId(CALENDAR_ID)).toHaveAccessibleName(
                "January, 2024"
            );
            expect(onYearMonthDisplayChange).toHaveBeenLastCalledWith({
                month: 1,
                year: 2024,
            });
        });

        it("navigates to a disabled date with arrow key", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });

            render(
                <Calendar value="2024-02-14" disabledDates={["2024-02-15"]} />
            );

            screen
                .getByRole("gridcell", {
                    name: "14 February 2024 Wednesday, Available",
                })
                .focus();

            await user.keyboard("{ArrowRight}");
            expect(
                screen.getByRole("gridcell", {
                    name: "15 February 2024 Thursday, Unavailable",
                })
            ).toHaveFocus();
        });

        it("navigates to the next month with down arrow key", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const onYearMonthDisplayChange = jest.fn();

            render(
                <Calendar
                    value="2024-02-28"
                    onYearMonthDisplayChange={onYearMonthDisplayChange}
                />
            );

            screen
                .getByRole("gridcell", {
                    name: "28 February 2024 Wednesday, Available",
                })
                .focus();

            await user.keyboard("{ArrowDown}");
            expect(
                screen.getByRole("gridcell", {
                    name: "6 March 2024 Wednesday, Available",
                })
            ).toHaveFocus();

            expect(screen.getByTestId(CALENDAR_ID)).toHaveAccessibleName(
                "March, 2024"
            );
            expect(onYearMonthDisplayChange).toHaveBeenLastCalledWith({
                month: 3,
                year: 2024,
            });
        });

        it("navigates to the start of the week with Home key", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });

            render(<Calendar value="2024-02-08" />);

            screen
                .getByRole("gridcell", {
                    name: "8 February 2024 Thursday, Available",
                })
                .focus();

            await user.keyboard("{Home}");
            expect(
                screen.getByRole("gridcell", {
                    name: "4 February 2024 Sunday, Available",
                })
            ).toHaveFocus();
        });

        it("navigates to the end of the week with End key", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });

            render(<Calendar value="2024-02-08" />);

            screen
                .getByRole("gridcell", {
                    name: "8 February 2024 Thursday, Available",
                })
                .focus();

            await user.keyboard("{End}");
            expect(
                screen.getByRole("gridcell", {
                    name: "10 February 2024 Saturday, Available",
                })
            ).toHaveFocus();
        });

        it("navigates to the previous month with PageUp key", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const onYearMonthDisplayChange = jest.fn();

            render(
                <Calendar
                    value="2024-02-15"
                    onYearMonthDisplayChange={onYearMonthDisplayChange}
                />
            );

            screen
                .getByRole("gridcell", {
                    name: "15 February 2024 Thursday, Available",
                })
                .focus();

            await user.keyboard("{PageUp}");
            expect(
                screen.getByRole("gridcell", {
                    name: "15 January 2024 Monday, Available",
                })
            ).toHaveFocus();

            expect(screen.getByTestId(CALENDAR_ID)).toHaveAccessibleName(
                "January, 2024"
            );
            expect(onYearMonthDisplayChange).toHaveBeenLastCalledWith({
                month: 1,
                year: 2024,
            });
        });

        it("navigates to the next month with PageDown key", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const onYearMonthDisplayChange = jest.fn();

            render(
                <Calendar
                    value="2024-02-15"
                    onYearMonthDisplayChange={onYearMonthDisplayChange}
                />
            );

            screen
                .getByRole("gridcell", {
                    name: "15 February 2024 Thursday, Available",
                })
                .focus();

            await user.keyboard("{PageDown}");
            expect(
                screen.getByRole("gridcell", {
                    name: "15 March 2024 Friday, Available",
                })
            ).toHaveFocus();

            expect(screen.getByTestId(CALENDAR_ID)).toHaveAccessibleName(
                "March, 2024"
            );
            expect(onYearMonthDisplayChange).toHaveBeenLastCalledWith({
                month: 3,
                year: 2024,
            });
        });

        it("navigates to the previous year with Shift+PageUp", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const onYearMonthDisplayChange = jest.fn();

            render(
                <Calendar
                    value="2024-02-15"
                    onYearMonthDisplayChange={onYearMonthDisplayChange}
                />
            );

            screen
                .getByRole("gridcell", {
                    name: "15 February 2024 Thursday, Available",
                })
                .focus();

            await user.keyboard("{Shift>}{PageUp}{/Shift}");
            expect(
                screen.getByRole("gridcell", {
                    name: "15 February 2023 Wednesday, Available",
                })
            ).toHaveFocus();

            expect(screen.getByTestId(CALENDAR_ID)).toHaveAccessibleName(
                "February, 2023"
            );
            expect(onYearMonthDisplayChange).toHaveBeenLastCalledWith({
                month: 2,
                year: 2023,
            });
        });

        it("navigates to the next year with Shift+PageDown", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const onYearMonthDisplayChange = jest.fn();

            render(
                <Calendar
                    value="2024-02-15"
                    onYearMonthDisplayChange={onYearMonthDisplayChange}
                />
            );

            screen
                .getByRole("gridcell", {
                    name: "15 February 2024 Thursday, Available",
                })
                .focus();

            await user.keyboard("{Shift>}{PageDown}{/Shift}");
            expect(
                screen.getByRole("gridcell", {
                    name: "15 February 2025 Saturday, Available",
                })
            ).toHaveFocus();

            expect(screen.getByTestId(CALENDAR_ID)).toHaveAccessibleName(
                "February, 2025"
            );
            expect(onYearMonthDisplayChange).toHaveBeenLastCalledWith({
                month: 2,
                year: 2025,
            });
        });
    });
});
