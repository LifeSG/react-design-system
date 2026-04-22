import { fireEvent, render, screen } from "@testing-library/react";
import { TimeSlotBar } from "../../src/time-slot-bar/time-slot-bar";
import { TimeSlot } from "../../src/time-slot-bar/types";
import { Colour } from "../../src";

describe("TimeSlotBar", () => {
    const mockSlots: TimeSlot[] = [
        {
            id: "slot1",
            startTime: "09:00",
            endTime: "10:30",
            label: "Meeting 1",
            clickable: true,
            styleAttributes: {
                backgroundColor: "#EF413D",
                color: "#FFFFFF",
            },
        },
        {
            id: "slot2",
            startTime: "11:00",
            endTime: "12:00",
            label: "Meeting 2",
            clickable: false,
            styleAttributes: {
                backgroundColor: Colour["bg-available"],
            },
        },
    ];

    const defaultProps = {
        startTime: "08:00",
        endTime: "18:00",
        slots: mockSlots,
        onSlotClick: jest.fn(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    it("should render time slots with basic props correctly", () => {
        render(<TimeSlotBar {...defaultProps} data-testid="time-slot-bar" />);

        expect(screen.getByTestId("time-slot-bar")).toBeInTheDocument();
        expect(
            screen.getByTestId("time-slot-bar-time-marker-wrapper")
        ).toBeInTheDocument();
        expect(
            screen.getByTestId("time-slot-bar-time-slot-wrapper")
        ).toBeInTheDocument();
        expect(screen.getByText("Meeting 1")).toBeInTheDocument();
        expect(screen.getByText("Meeting 2")).toBeInTheDocument();
    });

    it("should call onSlotClick when clickable slot is clicked", () => {
        const mockOnSlotClick = jest.fn();
        render(
            <TimeSlotBar
                {...defaultProps}
                onSlotClick={mockOnSlotClick}
                data-testid="time-slot-bar"
            />
        );

        fireEvent.click(screen.getByTestId("time-slot-bar-slot1-timeslot"));
        expect(mockOnSlotClick).toHaveBeenCalledWith(mockSlots[0]);
    });

    it("should not call onSlotClick when non-clickable slot is clicked", () => {
        const mockOnSlotClick = jest.fn();
        render(
            <TimeSlotBar
                {...defaultProps}
                onSlotClick={mockOnSlotClick}
                data-testid="time-slot-bar"
            />
        );

        fireEvent.click(screen.getByTestId("time-slot-bar-slot2-timeslot"));
        expect(mockOnSlotClick).not.toHaveBeenCalled();
    });

    it("should render with minified variant", () => {
        render(
            <TimeSlotBar
                {...defaultProps}
                variant="minified"
                data-testid="time-slot-bar"
            />
        );

        expect(screen.getByTestId("time-slot-bar")).toBeInTheDocument();
    });

    it("should render default time slot when styleAttributes provided", () => {
        const styleAttributes = {
            backgroundColor: "#CCCCCC",
            styleType: "default" as const,
        };

        render(
            <TimeSlotBar
                {...defaultProps}
                styleAttributes={styleAttributes}
                data-testid="time-slot-bar"
            />
        );

        expect(
            screen.getByTestId("time-slot-bar-default-timeslot")
        ).toBeInTheDocument();
    });

    it("should show ellipsis for narrow slots", () => {
        const narrowSlots: TimeSlot[] = [
            {
                id: "narrow",
                startTime: "09:00",
                endTime: "09:15",
                label: "Very Long Meeting Name",
                styleAttributes: {
                    backgroundColor: "#FF0000",
                },
            },
        ];

        render(
            <TimeSlotBar
                {...defaultProps}
                slots={narrowSlots}
                data-testid="time-slot-bar"
            />
        );

        expect(screen.getByText("...")).toBeInTheDocument();
    });

    it("should render without slots", () => {
        render(
            <TimeSlotBar
                {...defaultProps}
                slots={[]}
                data-testid="time-slot-bar"
            />
        );

        expect(screen.getByTestId("time-slot-bar")).toBeInTheDocument();
        expect(
            screen.getByTestId("time-slot-bar-time-slot-wrapper")
        ).toBeInTheDocument();
    });

    describe("time slot markers", () => {
        it("should render time markers correctly", () => {
            render(
                <TimeSlotBar {...defaultProps} data-testid="time-slot-bar" />
            );

            const markerWrapper = screen.getByTestId(
                "time-slot-bar-time-marker-wrapper"
            );
            expect(markerWrapper).toBeInTheDocument();
            expect(markerWrapper.children.length).toEqual(20); // From 08:00 to 18:00, every 30 minutes
            expect(
                screen.getByTestId(`${defaultProps.startTime}-marker`)
            ).toBeInTheDocument();
            expect(screen.getByTestId(`17:30-marker`)).toBeInTheDocument();
        });

        it("should render time markers for 00:00 to 24:00", () => {
            render(
                <TimeSlotBar
                    {...defaultProps}
                    data-testid="time-slot-bar"
                    startTime="00:00"
                    endTime="24:00"
                />
            );

            const markerWrapper = screen.getByTestId(
                "time-slot-bar-time-marker-wrapper"
            );
            expect(markerWrapper).toBeInTheDocument();
            expect(markerWrapper.children.length).toEqual(48); // From 00:00 to 24:00, every 30 minutes
            expect(screen.getByTestId(`00:00-marker`)).toBeInTheDocument();
            expect(screen.getByTestId(`23:30-marker`)).toBeInTheDocument();
        });

        it("should render time markers for 00:15 to 23:45", () => {
            render(
                <TimeSlotBar
                    {...defaultProps}
                    data-testid="time-slot-bar"
                    startTime="00:15"
                    endTime="23:45"
                />
            );

            const markerWrapper = screen.getByTestId(
                "time-slot-bar-time-marker-wrapper"
            );
            expect(markerWrapper).toBeInTheDocument();
            expect(markerWrapper.children.length).toEqual(48); // From 00:00 to 24:00, every 30 minutes
            expect(screen.getByTestId(`00:00-marker`)).toBeInTheDocument();
            expect(screen.getByTestId(`23:30-marker`)).toBeInTheDocument();
        });

        it("should render time markers for 00:30 to 23:30", () => {
            render(
                <TimeSlotBar
                    {...defaultProps}
                    data-testid="time-slot-bar"
                    startTime="00:30"
                    endTime="23:30"
                />
            );

            const markerWrapper = screen.getByTestId(
                "time-slot-bar-time-marker-wrapper"
            );
            expect(markerWrapper).toBeInTheDocument();
            expect(markerWrapper.children.length).toEqual(46); // From 00:30 to 23:30, every 30 minutes
            expect(screen.getByTestId(`00:30-marker`)).toBeInTheDocument();
            expect(screen.getByTestId(`23:00-marker`)).toBeInTheDocument();
        });

        it("should render time markers for 00:45 to 23:15", () => {
            render(
                <TimeSlotBar
                    {...defaultProps}
                    data-testid="time-slot-bar"
                    startTime="00:45"
                    endTime="23:15"
                />
            );

            const markerWrapper = screen.getByTestId(
                "time-slot-bar-time-marker-wrapper"
            );
            expect(markerWrapper).toBeInTheDocument();
            expect(markerWrapper.children.length).toEqual(46); // From 00:30 to 23:30, every 30 minutes
            expect(screen.getByTestId(`00:30-marker`)).toBeInTheDocument();
            expect(screen.getByTestId(`23:00-marker`)).toBeInTheDocument();
        });
    });
});
