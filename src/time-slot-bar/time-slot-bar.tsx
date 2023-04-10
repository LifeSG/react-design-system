import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useEffect, useRef, useState } from "react";
import {
    ArrowButton,
    ArrowIconLeft,
    ArrowIconRight,
    Border,
    CELL_WIDTH,
    CellText,
    Container,
    TimeLabel,
    TimeMarker,
    TimeMarkerWrapper,
    TimeSlot,
    TimeSlotBarContainer,
    TimeSlotWrapper,
} from "./time-slot-bar.styles";
import { TimeSlotBarProps } from "./types";
// Load plugins
dayjs.extend(customParseFormat);

export const TimeSlotBar = ({
    testId,
    startTime,
    endTime,
    slots,
    onClickSlot,
    defaultTimeSlot,
}: TimeSlotBarProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const barRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [clientWidth, setClientWidth] = useState<number>(0);

    const CELL_DURATION = 30; // In minutes
    const SCROLL_INCREMENT = CELL_WIDTH * 2.5; // In px. Each scroll increment corresponds to 75mins

    // =============================================================================
    // EFFECTS
    // =============================================================================

    useEffect(() => {
        const handleScroll = () => {
            if (barRef.current) {
                setScrollPosition(barRef.current.scrollLeft);
            }
        };

        const container = barRef.current;
        if (container) {
            window.addEventListener("resize", handleResize);
            container.addEventListener("scroll", handleScroll);
            // Load initial values
            handleResize();
        }

        return () => {
            if (container) {
                window.removeEventListener("resize", handleResize);
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    // =============================================================================
    // HANDLERS
    // =============================================================================

    const handleScroll = (direction: "left" | "right") => {
        if (barRef.current) {
            barRef.current.scrollBy({
                left:
                    direction === "left" ? -SCROLL_INCREMENT : SCROLL_INCREMENT,
                behavior: "smooth",
            });
        }
    };

    const handleResize = () => {
        if (barRef.current) {
            setClientWidth(barRef.current.clientWidth);
        }
    };

    // ===========================================================================
    // HELPER FUNCTIONS
    // ===========================================================================

    // Helper function to calculate the difference in minutes between two times
    const getTimeDiffInMinutes = (start: string, end: string) => {
        const startTime = dayjs(start, "HH:mm");
        const endTime = dayjs(end, "HH:mm");
        return endTime.diff(startTime, "minute");
    };

    // Helper function to convert minutes to a time string in HH:mm format
    const minutesToTimeString = (minutes: number) => {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${String(hours).padStart(2, "0")}:${String(
            remainingMinutes
        ).padStart(2, "0")}`;
    };

    // Helper function to format HH:mm to am/pm display
    const formatHourlyDisplay = (timeString: string) => {
        const parsedTime = dayjs(timeString, "HH:mm");
        return parsedTime.format("ha");
    };

    // Helper compute width in px base on the time range in respect the cell width
    const calculateWidth = (start: string, end: string) => {
        /**
         * Each CELL_WIDTH is 30min interval
         * Assuming 15 minutes corresponds to a fixed width of 20 pixels (1/2 of CELL_WIDTH)
         */
        return (getTimeDiffInMinutes(start, end) / 15) * (CELL_WIDTH / 2);
    };

    // Speical Condition: Show only Ellipsis if the slotWidth is smaller or equal to a 15min interval
    const showFullEllipsis = (slotWidth: number) => {
        return slotWidth <= CELL_WIDTH / 2;
    };

    const getDataTestId = (subStr: string) => {
        if (!testId) return undefined;
        return `${testId}-${subStr}`;
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    // Render time markers
    const renderTimeMarkers = () => {
        const timeMarkers = [];
        let currentTime = startTime;
        while (getTimeDiffInMinutes(currentTime, endTime) >= CELL_DURATION) {
            const isHour = currentTime.endsWith("00");
            timeMarkers.push(
                <TimeMarker key={currentTime} isHour={isHour}>
                    {isHour && (
                        <TimeLabel weight="semibold">
                            {formatHourlyDisplay(currentTime)}
                        </TimeLabel>
                    )}
                </TimeMarker>
            );
            const currentTimeInMinutes = getTimeDiffInMinutes(
                "00:00",
                currentTime
            );
            currentTime = minutesToTimeString(
                currentTimeInMinutes + CELL_DURATION
            );
        }
        return timeMarkers;
    };

    // Render default time slot (aka background)
    const renderDefaultTimeSlots = () => {
        if (!defaultTimeSlot) return;

        const {
            color,
            secondaryColor,
            styleType = "default",
            onClick,
        } = defaultTimeSlot;
        const slotWidth = calculateWidth(startTime, endTime);
        return (
            <>
                <Border />
                <TimeSlot
                    key={"default-timeslot"}
                    data-testid={getDataTestId("default-timeslot")}
                    width={slotWidth}
                    left={0}
                    color={color}
                    styleType={styleType}
                    secondaryColor={secondaryColor}
                    clickable={!!onClick}
                    onClick={onClick}
                />
                <Border
                    style={{
                        left: `${slotWidth}px`,
                    }}
                />
            </>
        );
    };

    // Render time slots
    const renderTimeSlots = () => {
        return slots.map((slot) => {
            const {
                id,
                startTime: slotStartTime,
                endTime: slotEndTime,
                color,
                styleType = "default",
                secondaryColor,
                text,
                clickable = true,
            } = slot;

            const slotWidth = calculateWidth(slotStartTime, slotEndTime);
            const slotOffset = calculateWidth(startTime, slotStartTime);

            return (
                <>
                    <Border
                        style={{
                            left: `${slotOffset}px`,
                        }}
                    />
                    <TimeSlot
                        key={id}
                        data-testid={getDataTestId(`${id}-timeslot`)}
                        width={slotWidth}
                        left={slotOffset}
                        color={color}
                        styleType={styleType}
                        secondaryColor={secondaryColor}
                        clickable={clickable}
                        onClick={() => clickable && onClickSlot(id)}
                    >
                        {text && (
                            <CellText slotWidth={slotWidth} weight={"semibold"}>
                                {showFullEllipsis(slotWidth) ? "..." : text}
                            </CellText>
                        )}
                    </TimeSlot>
                    <Border
                        style={{
                            left: `${slotOffset + slotWidth}px`,
                        }}
                    />
                </>
            );
        });
    };

    const renderArrowButtonLeft = () => {
        return (
            <>
                {/* Show the left ArrowButton when the scroll position is greater than 0 */}
                {scrollPosition > 0 && (
                    <ArrowButton
                        data-testid={getDataTestId("arrow-left")}
                        direction="left"
                        focusHighlight={false}
                        focusOutline="none"
                        onClick={() => {
                            handleScroll("left");
                        }}
                    >
                        <div>
                            <ArrowIconLeft />
                        </div>
                    </ArrowButton>
                )}
            </>
        );
    };

    const renderArrowButtonRight = () => {
        // Show the right ArrowButton when the scroll position is less than the maximum possible scroll value
        if (scrollPosition + clientWidth < calculateWidth(startTime, endTime)) {
            return (
                <ArrowButton
                    data-testid={getDataTestId("arrow-right")}
                    direction="right"
                    focusHighlight={false}
                    focusOutline="none"
                    onClick={() => {
                        handleScroll("right");
                    }}
                >
                    <div>
                        <ArrowIconRight />
                    </div>
                </ArrowButton>
            );
        }

        return <></>;
    };

    return (
        <Container>
            <TimeSlotBarContainer data-testid={testId} ref={barRef}>
                <TimeMarkerWrapper>{renderTimeMarkers()}</TimeMarkerWrapper>
                <TimeSlotWrapper>
                    {defaultTimeSlot && renderDefaultTimeSlots()}
                    {renderTimeSlots()}
                </TimeSlotWrapper>
            </TimeSlotBarContainer>
            {renderArrowButtonLeft()}
            {renderArrowButtonRight()}
        </Container>
    );
};
