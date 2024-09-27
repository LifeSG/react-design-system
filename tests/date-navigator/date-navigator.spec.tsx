import { fireEvent, render, screen } from "@testing-library/react";
import { DateNavigator } from "../../src";

describe("DateNavigator", () => {
    const today = "2024-09-05";

    beforeEach(() => {
        jest.resetAllMocks();
        jest.useFakeTimers().setSystemTime(new Date(today));
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it("should render current date as today", () => {
        render(<DateNavigator selectedDate={today} />);
        expect(screen.getByText("5 September 2024")).toBeVisible();
        expect(screen.getByText("Today")).toBeVisible();
        expect(
            screen.queryByTestId("date-navigator-left-arrow-btn")
        ).not.toBeInTheDocument();
        expect(
            screen.queryByTestId("date-navigator-right-arrow-btn")
        ).not.toBeInTheDocument();
    });

    it("should render other date in full", () => {
        const tomorrow = "2024-09-06";
        render(<DateNavigator selectedDate={tomorrow} />);
        expect(screen.getByText("6 September 2024")).toBeVisible();
        expect(screen.getByText("Friday")).toBeVisible();
        expect(
            screen.queryByTestId("date-navigator-left-arrow-btn")
        ).not.toBeInTheDocument();
        expect(
            screen.queryByTestId("date-navigator-right-arrow-btn")
        ).not.toBeInTheDocument();
    });

    it("should render a date navigator with navigation arrows", () => {
        const onRightArrowClick = jest.fn();
        const onLeftArrowClick = jest.fn();
        render(
            <DateNavigator
                selectedDate={today}
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
        fireEvent.click(leftArrowButton);
        fireEvent.click(rightArrowButton);
        expect(onRightArrowClick).toHaveBeenCalledTimes(1);
        expect(onRightArrowClick).toHaveBeenCalledWith(today);
        expect(onLeftArrowClick).toHaveBeenCalledTimes(1);
        expect(onLeftArrowClick).toHaveBeenCalledWith(today);
    });

    it("should disable the buttons when it is in a loading state", () => {
        const onRightArrowClick = jest.fn();
        const onLeftArrowClick = jest.fn();
        render(
            <DateNavigator
                selectedDate={today}
                isLoading
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
        const onRightArrowClick = jest.fn();
        const onLeftArrowClick = jest.fn();
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
        const onRightArrowClick = jest.fn();
        const onLeftArrowClick = jest.fn();
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
});
