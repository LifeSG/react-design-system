import { fireEvent, render, screen } from "@testing-library/react";
import { DateNavigator } from "../../src";

describe("DateNavigator", () => {
    const today = "2024-09-05";
    const onRightArrowClick = jest.fn();
    const onLeftArrowClick = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        jest.useFakeTimers().setSystemTime(new Date(today));

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it("should render current date", () => {
        render(
            <DateNavigator
                selectedDate={today}
                onRightArrowClick={onRightArrowClick}
                onLeftArrowClick={onLeftArrowClick}
            />
        );
        expect(screen.getByText("5 September 2024, Thursday")).toBeVisible();
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
        const dateNavigatorDateText = screen.getByTestId(
            "date-navigator-date-text"
        );
        fireEvent.click(dateNavigatorDateText);
        const calendarDropdown = screen.getByTestId("calendar-dropdown");
        expect(calendarDropdown).toBeInTheDocument();
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
        const leftArrowButton = screen.getByTestId(
            "date-navigator-left-arrow-btn"
        );
        const rightArrowButton = screen.getByTestId(
            "date-navigator-right-arrow-btn"
        );
        expect(leftArrowButton).toBeDisabled();
        expect(rightArrowButton).toBeDisabled();
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
        const leftArrowButton = screen.getByTestId(
            "date-navigator-left-arrow-btn"
        );
        expect(leftArrowButton).toBeDisabled();
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
        const rightArrowButton = screen.getByTestId(
            "date-navigator-right-arrow-btn"
        );
        expect(rightArrowButton).toBeDisabled();
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
            const leftArrowButton = screen.getByTestId(
                "date-navigator-left-arrow-btn"
            );
            const rightArrowButton = screen.getByTestId(
                "date-navigator-right-arrow-btn"
            );

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
            const leftArrowButton = screen.getByTestId(
                "date-navigator-left-arrow-btn"
            );

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
            const rightArrowButton = screen.getByTestId(
                "date-navigator-right-arrow-btn"
            );

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
            const dateNavigatorDateText = screen.getByTestId(
                "date-navigator-date-text"
            );
            fireEvent.click(dateNavigatorDateText);
            const calendarDropdown = screen.getByTestId("calendar-dropdown");
            expect(calendarDropdown).toBeInTheDocument();
        });
    });
});
