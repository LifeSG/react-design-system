import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DateNavigator } from "src";

describe("DateNavigator", () => {
    const today = "2024-09-05";
    const onRightArrowClick = jest.fn();
    const onLeftArrowClick = jest.fn();

    beforeAll(() => {
        jest.useFakeTimers().setSystemTime(new Date(today).getTime());
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    beforeEach(() => {
        jest.resetAllMocks();

        global.requestAnimationFrame = (cb: FrameRequestCallback) => {
            cb(0);
            return 0;
        };

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    describe("Day view", () => {
        it("should have correct aria labels for day navigation", () => {
            render(
                <DateNavigator
                    selectedDate={today}
                    onRightArrowClick={onRightArrowClick}
                    onLeftArrowClick={onLeftArrowClick}
                />
            );

            expect(screen.getByTestId(LEFT_BUTTON_TESTID)).toHaveAccessibleName(
                "Previous day"
            );
            expect(
                screen.getByTestId(RIGHT_BUTTON_TESTID)
            ).toHaveAccessibleName("Next day");
        });

        it("should render current date in full", () => {
            render(
                <DateNavigator
                    selectedDate={today}
                    onRightArrowClick={onRightArrowClick}
                    onLeftArrowClick={onLeftArrowClick}
                />
            );
            expect(
                screen.getByText("5 September 2024, Thursday")
            ).toBeVisible();
        });

        it("should render current date in short form if showDateAsShortForm is true", () => {
            render(
                <DateNavigator
                    selectedDate={today}
                    onRightArrowClick={onRightArrowClick}
                    onLeftArrowClick={onLeftArrowClick}
                    showDateAsShortForm
                />
            );
            expect(screen.getByText("5 Sep 2024, Thu")).toBeVisible();
        });

        it("should render current date in short form if showDateAsShortForm is true, and as today if showCurrentDateAsToday is true", () => {
            render(
                <DateNavigator
                    selectedDate={today}
                    onRightArrowClick={onRightArrowClick}
                    onLeftArrowClick={onLeftArrowClick}
                    showDateAsShortForm
                    showCurrentDateAsToday
                />
            );
            expect(screen.getByText("5 Sep 2024, Today")).toBeVisible();
        });

        it("should render other date in full", () => {
            const tomorrow = "2024-09-06";
            render(
                <DateNavigator
                    selectedDate={tomorrow}
                    onRightArrowClick={onRightArrowClick}
                    onLeftArrowClick={onLeftArrowClick}
                />
            );
            expect(screen.getByText("6 September 2024, Friday")).toBeVisible();
        });

        it("should render other date in short form if showDateAsShortForm is true", () => {
            const tomorrow = "2024-09-06";
            render(
                <DateNavigator
                    selectedDate={tomorrow}
                    onRightArrowClick={onRightArrowClick}
                    onLeftArrowClick={onLeftArrowClick}
                    showDateAsShortForm
                />
            );
            expect(screen.getByText("6 Sep 2024, Fri")).toBeVisible();
        });
    });

    it("should disable the buttons when it is in a loading state", () => {
        render(
            <DateNavigator
                selectedDate={today}
                loading
                onRightArrowClick={onRightArrowClick}
                onLeftArrowClick={onLeftArrowClick}
            />
        );

        expect(screen.getByTestId(LEFT_BUTTON_TESTID)).toBeDisabled();
        expect(screen.getByTestId(RIGHT_BUTTON_TESTID)).toBeDisabled();
    });

    it("should disable the left arrow button when the current date is at minDate", () => {
        const minDate = "2024-08-05";
        render(
            <DateNavigator
                selectedDate={minDate}
                onRightArrowClick={onRightArrowClick}
                onLeftArrowClick={onLeftArrowClick}
                minDate={minDate}
            />
        );

        expect(screen.getByTestId(LEFT_BUTTON_TESTID)).toBeDisabled();
    });

    it("should disable the right arrow button when the current date is at maxDate", () => {
        const maxDate = "2024-10-05";
        render(
            <DateNavigator
                selectedDate={maxDate}
                onRightArrowClick={onRightArrowClick}
                onLeftArrowClick={onLeftArrowClick}
                maxDate={maxDate}
            />
        );

        expect(screen.getByTestId(RIGHT_BUTTON_TESTID)).toBeDisabled();
    });

    it("should render a date navigator with calendar dropdown", () => {
        const onCalendarDateSelect = jest.fn();
        render(
            <DateNavigator
                selectedDate={today}
                onRightArrowClick={onRightArrowClick}
                onLeftArrowClick={onLeftArrowClick}
                onCalendarDateSelect={onCalendarDateSelect}
            />
        );

        const dateNavigatorDateText = screen.getByTestId(DATE_TEXT_TESTID);

        expect(dateNavigatorDateText).toBeEnabled();
        expect(dateNavigatorDateText).toHaveAccessibleName(
            "5 September 2024, Thursday"
        );

        fireEvent.click(dateNavigatorDateText);

        expect(
            screen.getByTestId(CALENDAR_DROPDOWN_TESTID)
        ).toBeInTheDocument();
    });

    it("should disable the calendar when it is in a loading state", () => {
        const onCalendarDateSelect = jest.fn();
        render(
            <DateNavigator
                selectedDate={today}
                loading
                onRightArrowClick={onRightArrowClick}
                onLeftArrowClick={onLeftArrowClick}
                onCalendarDateSelect={onCalendarDateSelect}
            />
        );

        expect(screen.getByTestId(LEFT_BUTTON_TESTID)).toBeDisabled();
        expect(screen.getByTestId(RIGHT_BUTTON_TESTID)).toBeDisabled();
        expect(screen.getByTestId(DATE_TEXT_TESTID)).toBeDisabled();
    });

    describe("Week View", () => {
        it("should render week range when view is set to week", () => {
            render(
                <DateNavigator
                    selectedDate={today}
                    view="week"
                    onRightArrowClick={onRightArrowClick}
                    onLeftArrowClick={onLeftArrowClick}
                />
            );

            expect(screen.getByText("1 Sep - 7 Sep, 2024")).toBeVisible();
        });

        it("should render week range across months", () => {
            const endOfMonth = "2024-08-31"; // Saturday
            render(
                <DateNavigator
                    selectedDate={endOfMonth}
                    view="week"
                    onRightArrowClick={onRightArrowClick}
                    onLeftArrowClick={onLeftArrowClick}
                />
            );

            expect(screen.getByText("25 Aug - 31 Aug, 2024")).toBeVisible();
        });

        it("should render week range across years", () => {
            const endOfYear = "2024-12-30"; // Monday
            render(
                <DateNavigator
                    selectedDate={endOfYear}
                    view="week"
                    onRightArrowClick={onRightArrowClick}
                    onLeftArrowClick={onLeftArrowClick}
                />
            );
            expect(screen.getByText("29 Dec - 4 Jan, 2025")).toBeVisible();
        });

        it("should have correct aria labels for week navigation", () => {
            render(
                <DateNavigator
                    selectedDate={today}
                    view="week"
                    onRightArrowClick={onRightArrowClick}
                    onLeftArrowClick={onLeftArrowClick}
                />
            );
            const leftArrowButton = screen.getByTestId(LEFT_BUTTON_TESTID);
            const rightArrowButton = screen.getByTestId(RIGHT_BUTTON_TESTID);

            expect(leftArrowButton).toHaveAttribute(
                "aria-label",
                "Previous week"
            );
            expect(rightArrowButton).toHaveAttribute("aria-label", "Next week");
        });

        it("should call onLeftArrowClick with current date when left arrow is clicked in week view", () => {
            render(
                <DateNavigator
                    selectedDate={today}
                    view="week"
                    onRightArrowClick={onRightArrowClick}
                    onLeftArrowClick={onLeftArrowClick}
                />
            );
            const leftArrowButton = screen.getByTestId(LEFT_BUTTON_TESTID);

            fireEvent.click(leftArrowButton);
            expect(onLeftArrowClick).toHaveBeenCalledWith(today);
        });

        it("should call onRightArrowClick with current date when right arrow is clicked in week view", () => {
            render(
                <DateNavigator
                    selectedDate={today}
                    view="week"
                    onRightArrowClick={onRightArrowClick}
                    onLeftArrowClick={onLeftArrowClick}
                />
            );
            const rightArrowButton = screen.getByTestId(RIGHT_BUTTON_TESTID);

            fireEvent.click(rightArrowButton);
            expect(onRightArrowClick).toHaveBeenCalledWith(today);
        });

        it("should render week view with calendar dropdown", () => {
            const onCalendarDateSelect = jest.fn();

            render(
                <DateNavigator
                    selectedDate={today}
                    view="week"
                    onRightArrowClick={onRightArrowClick}
                    onLeftArrowClick={onLeftArrowClick}
                    onCalendarDateSelect={onCalendarDateSelect}
                />
            );
            const dateNavigatorDateText = screen.getByTestId(DATE_TEXT_TESTID);
            fireEvent.click(dateNavigatorDateText);
            const calendarDropdown = screen.getByTestId(
                CALENDAR_DROPDOWN_TESTID
            );
            expect(calendarDropdown).toBeInTheDocument();
        });
    });

    describe("Keyboard navigation", () => {
        it("should have correct tab order for date navigator elements", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });

            render(
                <>
                    <button data-testid="before" />
                    <DateNavigator
                        selectedDate={today}
                        onRightArrowClick={onRightArrowClick}
                        onLeftArrowClick={onLeftArrowClick}
                    />
                    <button data-testid="after" />
                </>
            );

            screen.getByTestId("before").focus();

            await user.keyboard("{Tab}");

            expect(screen.getByTestId(LEFT_BUTTON_TESTID)).toHaveFocus();

            await user.keyboard("{Tab}");

            expect(screen.getByTestId(RIGHT_BUTTON_TESTID)).toHaveFocus();

            await user.keyboard("{Tab}");

            expect(screen.getByTestId("after")).toHaveFocus();
        });

        it("should cycle through tab sequence with calendar dropdown", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const onCalendarDateSelect = jest.fn();

            render(
                <>
                    <button data-testid="before" />
                    <DateNavigator
                        selectedDate={today}
                        onRightArrowClick={onRightArrowClick}
                        onLeftArrowClick={onLeftArrowClick}
                        onCalendarDateSelect={onCalendarDateSelect}
                    />
                    <button data-testid="after" />
                </>
            );

            screen.getByTestId("before").focus();

            await user.keyboard("{Tab}");

            expect(screen.getByTestId(LEFT_BUTTON_TESTID)).toHaveFocus();

            await user.keyboard("{Tab}");

            expect(screen.getByTestId(DATE_TEXT_TESTID)).toHaveFocus();

            await user.keyboard("{Enter}");

            await waitFor(() =>
                expect(
                    screen.getByTestId(CALENDAR_DROPDOWN_TESTID)
                ).toBeInTheDocument()
            );

            await user.keyboard("{Tab}");

            expect(screen.getByTestId(RIGHT_BUTTON_TESTID)).toHaveFocus();

            await user.keyboard("{Tab}");

            expect(
                screen.getByRole("gridcell", {
                    name: "5 September 2024 Thursday, Available",
                })
            ).toHaveFocus();

            await user.keyboard("{Tab}");

            expect(screen.getByTestId("after")).toHaveFocus();

            await waitFor(() =>
                expect(
                    screen.queryByTestId(CALENDAR_DROPDOWN_TESTID)
                ).not.toBeInTheDocument()
            );
        });

        it("should close calendar dropdown when Escape is pressed", async () => {
            const user = userEvent.setup({
                advanceTimers: jest.advanceTimersByTime,
            });
            const onCalendarDateSelect = jest.fn();

            render(
                <DateNavigator
                    selectedDate={today}
                    onRightArrowClick={onRightArrowClick}
                    onLeftArrowClick={onLeftArrowClick}
                    onCalendarDateSelect={onCalendarDateSelect}
                />
            );

            await user.click(screen.getByTestId(DATE_TEXT_TESTID));

            await waitFor(() =>
                expect(
                    screen.getByTestId(CALENDAR_DROPDOWN_TESTID)
                ).toBeInTheDocument()
            );

            await user.keyboard("{Escape}");

            await waitFor(() =>
                expect(
                    screen.queryByTestId(CALENDAR_DROPDOWN_TESTID)
                ).not.toBeInTheDocument()
            );

            expect(screen.queryByTestId(DATE_TEXT_TESTID)).toHaveFocus();
        });
    });
});

// =============================================================================
// CONSTANTS
// =============================================================================
const LEFT_BUTTON_TESTID = "date-navigator-left-arrow-btn";
const RIGHT_BUTTON_TESTID = "date-navigator-right-arrow-btn";
const DATE_TEXT_TESTID = "date-navigator-date-text";
const CALENDAR_DROPDOWN_TESTID = "calendar-dropdown";
