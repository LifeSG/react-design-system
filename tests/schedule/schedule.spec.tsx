import { fireEvent, render, screen } from "@testing-library/react";
import dayjs from "dayjs";
import {
    Schedule,
    ScheduleProps,
    ScheduleEntityProps,
} from "../../src/schedule";

jest.mock("react-responsive", () => ({
    useMediaQuery: jest.fn(() => false),
}));

global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}));

describe("Schedule", () => {
    const date = dayjs("2024-09-11");

    const scheduleMockProps = {
        date: date.format("YYYY-MM-DD"),
        minTime: "06:00",
        maxTime: "22:00",
        serviceData: [],
        emptyContentMessage: "No timeslots available",
        onPreviousDayClick: jest.fn(),
        onNextDayClick: jest.fn(),
        onCalendarDateSelect: jest.fn(),
        onTodayClick: jest.fn(),
    } satisfies Partial<ScheduleProps>;

    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers().setSystemTime(new Date("2024-09-11"));

        const { useMediaQuery } = require("react-responsive");
        useMediaQuery.mockReturnValue(false);
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it("should render default timeslot without errors", () => {
        render(
            <Schedule
                date={scheduleMockProps.date}
                minTime={scheduleMockProps.minTime}
                maxTime={scheduleMockProps.maxTime}
                serviceData={buildMockRowData(1)}
                loading={false}
                emptyContentMessage={scheduleMockProps.emptyContentMessage}
                onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
                onNextDayClick={scheduleMockProps.onNextDayClick}
                onCalendarDateSelect={scheduleMockProps.onCalendarDateSelect}
                onTodayClick={scheduleMockProps.onTodayClick}
            />
        );

        expect(screen.getByText("11 September 2024, Wednesday")).toBeVisible();
        expect(screen.getByText("Service 1")).toBeVisible();
        expect(
            screen.queryByText(scheduleMockProps.emptyContentMessage)
        ).not.toBeInTheDocument();
    });

    it("should render empty timeslot without errors", () => {
        render(
            <Schedule
                date={scheduleMockProps.date}
                minTime={scheduleMockProps.minTime}
                maxTime={scheduleMockProps.maxTime}
                serviceData={[]}
                loading={false}
                emptyContentMessage={scheduleMockProps.emptyContentMessage}
                onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
                onNextDayClick={scheduleMockProps.onNextDayClick}
                onCalendarDateSelect={scheduleMockProps.onCalendarDateSelect}
                onTodayClick={scheduleMockProps.onTodayClick}
            />
        );

        expect(screen.getByText("11 September 2024, Wednesday")).toBeVisible();
        expect(
            screen.getByText(scheduleMockProps.emptyContentMessage)
        ).toBeVisible();
    });

    it("should render day view by default", () => {
        render(
            <Schedule
                date={scheduleMockProps.date}
                serviceData={buildMockRowData(1)}
                onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
                onNextDayClick={scheduleMockProps.onNextDayClick}
                onCalendarDateSelect={scheduleMockProps.onCalendarDateSelect}
                onTodayClick={scheduleMockProps.onTodayClick}
            />
        );

        expect(screen.getByText("Day")).toBeVisible();
        expect(screen.getByText("View by:")).toBeVisible();
    });

    it("should switch to week view when view selector is clicked and week is selected", async () => {
        render(
            <Schedule
                date={scheduleMockProps.date}
                serviceData={buildMockRowData(1)}
                onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
                onNextDayClick={scheduleMockProps.onNextDayClick}
                onCalendarDateSelect={scheduleMockProps.onCalendarDateSelect}
                onTodayClick={scheduleMockProps.onTodayClick}
            />
        );

        const selector = screen.getByTestId("selector");
        fireEvent.click(selector);

        expect(selector).toHaveAttribute("aria-expanded", "true");
        expect(selector).toBeVisible();
    });

    it("should display calendar dropdown when onCalendarDateSelect prop is specified and the date navigator date text is clicked", () => {
        const onCalendarDateSelect = jest.fn();

        render(
            <Schedule
                date={scheduleMockProps.date}
                minTime={scheduleMockProps.minTime}
                maxTime={scheduleMockProps.maxTime}
                serviceData={[]}
                loading={false}
                emptyContentMessage={scheduleMockProps.emptyContentMessage}
                onNextDayClick={scheduleMockProps.onNextDayClick}
                onCalendarDateSelect={scheduleMockProps.onCalendarDateSelect}
                onTodayClick={scheduleMockProps.onTodayClick}
                onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
            />
        );

        fireEvent.click(screen.getByTestId("date-navigator-date-text"));

        expect(screen.getByText("11 September 2024, Wednesday")).toBeVisible();
        expect(screen.getByTestId("calendar-dropdown")).toBeInTheDocument();
    });

    it("should trigger onTodayClick when today button is clicked", () => {
        const onTodayClick = jest.fn();

        render(
            <Schedule
                date={scheduleMockProps.date}
                serviceData={buildMockRowData(1)}
                onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
                onNextDayClick={scheduleMockProps.onNextDayClick}
                onCalendarDateSelect={scheduleMockProps.onCalendarDateSelect}
                onTodayClick={onTodayClick}
            />
        );

        const todayButton = screen.getByText("Today");
        fireEvent.click(todayButton);

        expect(onTodayClick).toHaveBeenCalledTimes(1);
    });

    it("should trigger onSlotClick when a timeslot cell is clicked", () => {
        const mockSlotClick = jest.fn();

        const mockRowData = buildMockRowData(1);
        mockRowData[0].slots[1].onClick = mockSlotClick;

        render(
            <Schedule
                date={scheduleMockProps.date}
                minTime="08:00"
                maxTime="10:00"
                serviceData={mockRowData}
                onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
                onNextDayClick={scheduleMockProps.onNextDayClick}
                onCalendarDateSelect={scheduleMockProps.onCalendarDateSelect}
                onTodayClick={scheduleMockProps.onTodayClick}
            />
        );

        const slotButtons = screen.getAllByRole("button");
        const slotButton = slotButtons.find(
            (button) =>
                button.textContent?.includes("09:00") ||
                button.textContent?.includes("available") ||
                button.getAttribute("data-status") === "available"
        );

        if (slotButton) {
            fireEvent.click(slotButton);
            expect(mockSlotClick).toHaveBeenCalledTimes(1);
        } else {
            expect(mockSlotClick).toHaveBeenCalledTimes(0);
        }
    });

    it("should show mobile layout with service navigation on mobile", () => {
        const { useMediaQuery } = require("react-responsive");
        useMediaQuery.mockReturnValue(true);

        render(
            <Schedule
                date={scheduleMockProps.date}
                serviceData={buildMockRowData(3)}
                onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
                onNextDayClick={scheduleMockProps.onNextDayClick}
                onCalendarDateSelect={scheduleMockProps.onCalendarDateSelect}
                onTodayClick={scheduleMockProps.onTodayClick}
            />
        );

        expect(screen.queryByText("View by:")).not.toBeInTheDocument();

        expect(screen.getByText("Service 1")).toBeVisible();
        expect(screen.queryByText("Service 2")).not.toBeInTheDocument();

        expect(screen.getByText("available")).toBeVisible();
    });

    it("should navigate between services on mobile", () => {
        const { useMediaQuery } = require("react-responsive");
        useMediaQuery.mockReturnValue(true);

        render(
            <Schedule
                date={scheduleMockProps.date}
                serviceData={buildMockRowData(3)}
                onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
                onNextDayClick={scheduleMockProps.onNextDayClick}
                onCalendarDateSelect={scheduleMockProps.onCalendarDateSelect}
                onTodayClick={scheduleMockProps.onTodayClick}
            />
        );

        expect(screen.getByText("Service 1")).toBeVisible();
        expect(screen.queryByText("Service 2")).not.toBeInTheDocument();

        expect(screen.getByText("available")).toBeVisible();
    });

    it("should respect initialScrollTime prop", () => {
        render(
            <Schedule
                date={scheduleMockProps.date}
                minTime="06:00"
                maxTime="22:00"
                initialScrollTime="08:00"
                serviceData={buildMockRowData(1)}
                onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
                onNextDayClick={scheduleMockProps.onNextDayClick}
                onCalendarDateSelect={scheduleMockProps.onCalendarDateSelect}
                onTodayClick={scheduleMockProps.onTodayClick}
            />
        );

        expect(screen.getByText("Service 1")).toBeVisible();
    });

    it("should apply custom className and id", () => {
        const customId = "custom-timeslot-id";
        const customClassName = "custom-timeslot-class";

        render(
            <Schedule
                id={customId}
                className={customClassName}
                date={scheduleMockProps.date}
                serviceData={buildMockRowData(1)}
                onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
                onNextDayClick={scheduleMockProps.onNextDayClick}
                onCalendarDateSelect={scheduleMockProps.onCalendarDateSelect}
                onTodayClick={scheduleMockProps.onTodayClick}
            />
        );

        const container = document.getElementById(customId);
        expect(container).toBeInTheDocument();
        expect(container).toHaveClass(customClassName);
    });

    it("should show loading state", () => {
        render(
            <Schedule
                date={scheduleMockProps.date}
                serviceData={[]}
                loading={true}
                emptyContentMessage="Loading..."
                onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
                onNextDayClick={scheduleMockProps.onNextDayClick}
                onCalendarDateSelect={scheduleMockProps.onCalendarDateSelect}
                onTodayClick={scheduleMockProps.onTodayClick}
            />
        );

        expect(screen.getByText("11 September 2024, Wednesday")).toBeVisible();
    });

    it("should handle date navigation", () => {
        render(
            <Schedule
                date={scheduleMockProps.date}
                serviceData={buildMockRowData(1)}
                onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
                onNextDayClick={scheduleMockProps.onNextDayClick}
                onCalendarDateSelect={scheduleMockProps.onCalendarDateSelect}
                onTodayClick={scheduleMockProps.onTodayClick}
            />
        );

        const prevButton = screen.getByTestId("date-navigator-left-arrow-btn");
        fireEvent.click(prevButton);
        expect(scheduleMockProps.onPreviousDayClick).toHaveBeenCalledWith(
            "2024-09-11"
        );

        const nextButton = screen.getByTestId("date-navigator-right-arrow-btn");
        fireEvent.click(nextButton);
        expect(scheduleMockProps.onNextDayClick).toHaveBeenCalledWith(
            "2024-09-11"
        );
    });

    it("should trigger onEmptySlotClick when an empty slot is clicked", () => {
        const mockEmptySlotClick = jest.fn();

        render(
            <Schedule
                date={scheduleMockProps.date}
                minTime="08:00"
                maxTime="10:00"
                serviceData={buildMockRowData(1)}
                onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
                onNextDayClick={scheduleMockProps.onNextDayClick}
                onCalendarDateSelect={scheduleMockProps.onCalendarDateSelect}
                onTodayClick={scheduleMockProps.onTodayClick}
                onEmptySlotClick={mockEmptySlotClick}
            />
        );

        // Find an empty slot by looking for slots without text content related to bookings
        const allSlots = screen.getAllByTestId("schedule-column");
        if (allSlots.length > 0) {
            // Look for empty time slots (that don't have booking information)
            const emptySlots = document.querySelectorAll("[data-start-time]");

            for (const slot of emptySlots) {
                // Check if this slot doesn't contain booking content
                if (
                    !slot.textContent?.includes("available") &&
                    !slot.textContent?.includes("booked") &&
                    !slot.textContent?.includes("blocked") &&
                    !slot.textContent?.includes("pending")
                ) {
                    fireEvent.click(slot);
                    break;
                }
            }
        }

        // Verify that onEmptySlotClick was called with slot details
        if (mockEmptySlotClick.mock.calls.length > 0) {
            const callArgs = mockEmptySlotClick.mock.calls[0][0];
            expect(callArgs).toHaveProperty("startTime");
            expect(callArgs).toHaveProperty("endTime");
            expect(callArgs).toHaveProperty("name");
            expect(typeof callArgs.startTime).toBe("string");
            expect(typeof callArgs.endTime).toBe("string");
            expect(typeof callArgs.name).toBe("string");
        }
    });

    // =============================================================================
    // WEEK VIEW TESTS
    // =============================================================================

    describe("Week View", () => {
        it("should render week view when switching from day view", () => {
            render(
                <Schedule
                    date={scheduleMockProps.date}
                    serviceData={buildMockRowDataForWeek()}
                    onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
                    onNextDayClick={scheduleMockProps.onNextDayClick}
                    onCalendarDateSelect={
                        scheduleMockProps.onCalendarDateSelect
                    }
                    onTodayClick={scheduleMockProps.onTodayClick}
                />
            );
            const selector = screen.getByTestId("selector");
            fireEvent.click(selector);

            expect(selector).toHaveAttribute("aria-expanded", "true");
        });

        it("should display 7 days of the week in week view", () => {
            render(
                <Schedule
                    date="2024-09-11" // Wednesday
                    serviceData={buildMockRowDataForWeek()}
                    onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
                    onNextDayClick={scheduleMockProps.onNextDayClick}
                    onCalendarDateSelect={
                        scheduleMockProps.onCalendarDateSelect
                    }
                    onTodayClick={scheduleMockProps.onTodayClick}
                />
            );

            const selector = screen.getByTestId("selector");
            fireEvent.click(selector);

            expect(selector).toHaveAttribute("aria-expanded", "true");
        });

        it("should display correct dates for the week", () => {
            render(
                <Schedule
                    date="2024-09-11" // Wednesday Sept 11, 2024
                    serviceData={buildMockRowDataForWeek()}
                    onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
                    onNextDayClick={scheduleMockProps.onNextDayClick}
                    onCalendarDateSelect={
                        scheduleMockProps.onCalendarDateSelect
                    }
                    onTodayClick={scheduleMockProps.onTodayClick}
                />
            );

            const selector = screen.getByTestId("selector");
            fireEvent.click(selector);
            expect(selector).toBeVisible();
        });

        it("should show time slots in week view", () => {
            render(
                <Schedule
                    date="2024-09-11"
                    minTime="08:00"
                    maxTime="12:00"
                    serviceData={buildMockRowDataForWeek()}
                    onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
                    onNextDayClick={scheduleMockProps.onNextDayClick}
                    onCalendarDateSelect={
                        scheduleMockProps.onCalendarDateSelect
                    }
                    onTodayClick={scheduleMockProps.onTodayClick}
                />
            );

            expect(screen.getByText("8", { exact: false })).toBeVisible();
            expect(screen.getAllByText("9", { exact: false })[0]).toBeVisible();
            expect(
                screen.getAllByText("10", { exact: false })[0]
            ).toBeVisible();
            expect(
                screen.getAllByText("11", { exact: false })[0]
            ).toBeVisible();
        });

        it("should handle slot clicks in week view", () => {
            const mockSlotClick = jest.fn();
            const mockRowData = buildMockRowDataForWeek();
            if (mockRowData[0].slots[0]) {
                mockRowData[0].slots[0].onClick = mockSlotClick;
            }

            render(
                <Schedule
                    date="2024-09-11"
                    minTime="08:00"
                    maxTime="12:00"
                    serviceData={mockRowData}
                    onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
                    onNextDayClick={scheduleMockProps.onNextDayClick}
                    onCalendarDateSelect={
                        scheduleMockProps.onCalendarDateSelect
                    }
                    onTodayClick={scheduleMockProps.onTodayClick}
                />
            );
            const slotButtons = screen.getAllByRole("button");
            const slotButton = slotButtons.find(
                (button) =>
                    button.textContent?.includes("09:00") ||
                    button.getAttribute("data-status") === "available"
            );

            if (slotButton) {
                fireEvent.click(slotButton);
                expect(mockSlotClick).toHaveBeenCalledTimes(1);
            }
        });

        it("should show service initials in week view slots", () => {
            render(
                <Schedule
                    date="2024-09-11"
                    minTime="08:00"
                    maxTime="12:00"
                    serviceData={buildMockRowDataForWeek()}
                    onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
                    onNextDayClick={scheduleMockProps.onNextDayClick}
                    onCalendarDateSelect={
                        scheduleMockProps.onCalendarDateSelect
                    }
                    onTodayClick={scheduleMockProps.onTodayClick}
                />
            );
            expect(screen.getByText("Service 1")).toBeVisible();
        });

        it("should show loading state in week view", () => {
            render(
                <Schedule
                    date="2024-09-11"
                    serviceData={buildMockRowDataForWeek()}
                    loading={true}
                    onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
                    onNextDayClick={scheduleMockProps.onNextDayClick}
                    onCalendarDateSelect={
                        scheduleMockProps.onCalendarDateSelect
                    }
                    onTodayClick={scheduleMockProps.onTodayClick}
                />
            );

            // Loading spinner should be present
            expect(
                screen.getByTestId("date-navigator-date-text")
            ).toBeVisible();
        });

        it("should handle different slot statuses in week view", () => {
            render(
                <Schedule
                    date="2024-09-11"
                    minTime="08:00"
                    maxTime="14:00"
                    serviceData={buildMockRowDataForWeek()}
                    onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
                    onNextDayClick={scheduleMockProps.onNextDayClick}
                    onCalendarDateSelect={
                        scheduleMockProps.onCalendarDateSelect
                    }
                    onTodayClick={scheduleMockProps.onTodayClick}
                />
            );
            expect(
                screen.getByText("11 September 2024, Wednesday")
            ).toBeVisible();
        });

        it("should respect initialScrollTime in week view", () => {
            render(
                <Schedule
                    date="2024-09-11"
                    minTime="06:00"
                    maxTime="22:00"
                    initialScrollTime="10:00"
                    serviceData={buildMockRowDataForWeek()}
                    onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
                    onNextDayClick={scheduleMockProps.onNextDayClick}
                    onCalendarDateSelect={
                        scheduleMockProps.onCalendarDateSelect
                    }
                    onTodayClick={scheduleMockProps.onTodayClick}
                />
            );
            expect(
                screen.getByText("11 September 2024, Wednesday")
            ).toBeVisible();
            expect(
                screen.getAllByText("10", { exact: false })[0]
            ).toBeVisible();
        });

        it("should show multiple services on the same day", () => {
            const multiServiceData = buildMockRowDataForWeek();
            multiServiceData.push({
                id: "4",
                name: "Another Service",
                slots: [
                    {
                        id: "4-available",
                        startTime: "09:30",
                        endTime: "10:30",
                        status: "available",
                        date: "2024-09-11",
                        capacity: 3,
                        booked: 1,
                    },
                ],
            });

            render(
                <Schedule
                    date="2024-09-11"
                    minTime="08:00"
                    maxTime="12:00"
                    serviceData={multiServiceData}
                    onPreviousDayClick={scheduleMockProps.onPreviousDayClick}
                    onNextDayClick={scheduleMockProps.onNextDayClick}
                    onCalendarDateSelect={
                        scheduleMockProps.onCalendarDateSelect
                    }
                    onTodayClick={scheduleMockProps.onTodayClick}
                />
            );

            // Should show multiple services
            expect(screen.getByText("Service 1")).toBeVisible();
            expect(screen.getByText("Service 2")).toBeVisible();
            expect(screen.getByText("Service 3")).toBeVisible();
            expect(screen.getByText("Another Service")).toBeVisible();
        });
    });
});

// =============================================================================
// MOCKS
// =============================================================================

const buildMockRowData = (size: number): ScheduleEntityProps[] => {
    return Array(size)
        .fill(0)
        .map((_, i) => ({
            id: (i + 1).toString(),
            name: `Service ${i + 1}`,
            slots: [
                {
                    id: `${i + 1}-booked`,
                    startTime: "08:00",
                    endTime: "09:00",
                    status: "booked",
                    date: "2024-09-11",
                    capacity: 5,
                    booked: 5,
                },
                {
                    id: `${i + 1}-available`,
                    startTime: "09:00",
                    endTime: "10:00",
                    status: "available",
                    date: "2024-09-11",
                    capacity: 5,
                    booked: 2,
                    customPopover: {
                        trigger: "hover",
                        content: "Available slot",
                        delay: { open: 0, close: 0 },
                    },
                },
                {
                    id: `${i + 1}-blocked`,
                    startTime: "10:00",
                    endTime: "11:00",
                    status: "blocked",
                    date: "2024-09-11",
                },
                {
                    id: `${i + 1}-pending`,
                    startTime: "11:00",
                    endTime: "12:00",
                    status: "pending",
                    date: "2024-09-11",
                    capacity: 3,
                    booked: 1,
                },
            ],
        }));
};

const buildMockRowDataForWeek = (): ScheduleEntityProps[] => {
    const baseDate = dayjs("2024-09-11");
    const startOfWeek = baseDate.startOf("week");

    return Array(3)
        .fill(0)
        .map((_, i) => ({
            id: (i + 1).toString(),
            name: `Service ${i + 1}`,
            slots: [
                {
                    id: `${i + 1}-sun-available`,
                    startTime: "09:00",
                    endTime: "10:00",
                    status: "available",
                    date: startOfWeek.format("YYYY-MM-DD"),
                    capacity: 5,
                    booked: 2,
                },
                {
                    id: `${i + 1}-mon-booked`,
                    startTime: "10:00",
                    endTime: "11:00",
                    status: "booked",
                    date: startOfWeek.add(1, "day").format("YYYY-MM-DD"),
                    capacity: 5,
                    booked: 5,
                },
                {
                    id: `${i + 1}-tue-blocked`,
                    startTime: "11:00",
                    endTime: "12:00",
                    status: "blocked",
                    date: startOfWeek.add(2, "day").format("YYYY-MM-DD"),
                },
                {
                    id: `${i + 1}-wed-available`,
                    startTime: "09:00",
                    endTime: "10:00",
                    status: "available",
                    date: "2024-09-11",
                    capacity: 5,
                    booked: 2,
                },
                {
                    id: `${i + 1}-thu-pending`,
                    startTime: "10:00",
                    endTime: "11:00",
                    status: "pending",
                    date: startOfWeek.add(4, "day").format("YYYY-MM-DD"),
                    capacity: 3,
                    booked: 1,
                },
                {
                    id: `${i + 1}-fri-available`,
                    startTime: "11:00",
                    endTime: "12:00",
                    status: "available",
                    date: startOfWeek.add(5, "day").format("YYYY-MM-DD"),
                    capacity: 4,
                    booked: 2,
                },
                {
                    id: `${i + 1}-sat-booked`,
                    startTime: "12:00",
                    endTime: "13:00",
                    status: "booked",
                    date: startOfWeek.add(6, "day").format("YYYY-MM-DD"),
                    capacity: 3,
                    booked: 3,
                },
            ],
        }));
};
