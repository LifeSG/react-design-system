import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { TimeSlotBarHelper } from "./helper";
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
import { Direction, TimeSlotBarProps } from "./types";

const CELL_DURATION = 30; // In minutes
const SCROLL_INCREMENT = CELL_WIDTH * 2.5; // In px. Each scroll increment corresponds to 75mins

export const TimeSlotBar = ({
    "data-testid": testId,
    className,
    startTime,
    endTime,
    slots,
    onSlotClick,
    onClick,
    styleAttributes,
}: TimeSlotBarProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const barRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [clientWidth, setClientWidth] = useState<number>(0);

    // =============================================================================
    // EFFECTS
    // =============================================================================

    useEffect(() => {
        const container = barRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const handleScroll = () => {
        if (barRef.current) {
            setScrollPosition(barRef.current.scrollLeft);
        }
    };

    const handleArrowButtonClick = (direction: Direction) => {
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

    useResizeDetector({
        onResize: handleResize,
        targetRef: barRef,
        refreshMode: "debounce",
        refreshRate: 50,
    });

    // ===========================================================================
    // HELPER FUNCTIONS
    // ===========================================================================
    /**
     * NOTE: Special condition
     * Show ellipsis only if the slotWidth is smaller or equal to
     * 15min interval
     */
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
        const startTimeFormatted = dayjs(startTime, "HH:mm");
        const endTimeFormatted = dayjs(endTime, "HH:mm");

        for (
            let currentTime = startTimeFormatted;
            currentTime.isBefore(endTimeFormatted);
            currentTime = currentTime.add(CELL_DURATION, "minute")
        ) {
            const isHour = currentTime.minute() === 0;
            timeMarkers.push(
                <TimeMarker key={currentTime.format("HH:mm")} isHour={isHour}>
                    {isHour && (
                        <TimeLabel weight="semibold">
                            {TimeSlotBarHelper.formatHourlyDisplay(
                                currentTime.format("HH:mm")
                            )}
                        </TimeLabel>
                    )}
                </TimeMarker>
            );
        }
        return timeMarkers;
    };

    // Render default time slot (aka background)
    const renderDefaultTimeSlots = () => {
        const {
            backgroundColor,
            backgroundColor2,
            styleType = "default",
        } = styleAttributes;

        const slotWidth = TimeSlotBarHelper.calculateWidth(
            startTime,
            endTime,
            CELL_WIDTH
        );
        return (
            <>
                <Border />
                <TimeSlot
                    key={"default-timeslot"}
                    data-testid={getDataTestId("default-timeslot")}
                    $width={slotWidth}
                    $left={0}
                    $styleType={styleType}
                    $bgColor={backgroundColor}
                    $bgColor2={backgroundColor2}
                    $clickable={!!onClick}
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
                label,
                clickable = true,
                styleAttributes,
            } = slot;

            const {
                color,
                styleType = "default",
                backgroundColor,
                backgroundColor2,
            } = styleAttributes;

            const slotWidth = TimeSlotBarHelper.calculateWidth(
                slotStartTime,
                slotEndTime,
                CELL_WIDTH
            );
            const slotOffset = TimeSlotBarHelper.calculateWidth(
                startTime,
                slotStartTime,
                CELL_WIDTH
            );

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
                        $width={slotWidth}
                        $left={slotOffset}
                        $styleType={styleType}
                        $bgColor={backgroundColor}
                        $bgColor2={backgroundColor2}
                        $clickable={clickable}
                        onClick={() => clickable && onSlotClick(slot)}
                    >
                        {label && (
                            <CellText
                                $slotWidth={slotWidth}
                                $color={color}
                                weight={"semibold"}
                            >
                                {showFullEllipsis(slotWidth) ? "..." : label}
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
                        $direction={"left"}
                        focusHighlight={false}
                        focusOutline="none"
                        onClick={() => {
                            handleArrowButtonClick("left");
                        }}
                    >
                        <ArrowIconLeft />
                    </ArrowButton>
                )}
            </>
        );
    };

    const renderArrowButtonRight = () => {
        // Show the right ArrowButton when the scroll position is less than the maximum possible scroll value
        if (
            scrollPosition + clientWidth <
            TimeSlotBarHelper.calculateWidth(startTime, endTime, CELL_WIDTH)
        ) {
            return (
                <ArrowButton
                    data-testid={getDataTestId("arrow-right")}
                    $direction={"right"}
                    focusHighlight={false}
                    focusOutline="none"
                    onClick={() => {
                        handleArrowButtonClick("right");
                    }}
                >
                    <ArrowIconRight />
                </ArrowButton>
            );
        }

        return <></>;
    };

    return (
        <Container className={className}>
            <TimeSlotBarContainer data-testid={testId} ref={barRef}>
                <TimeMarkerWrapper
                    data-testid={getDataTestId("time-marker-wrapper")}
                    data-id="marker-wrapper"
                >
                    {renderTimeMarkers()}
                </TimeMarkerWrapper>
                <TimeSlotWrapper
                    data-testid={getDataTestId("time-slot-wrapper")}
                    data-id="slot-wrapper"
                >
                    {styleAttributes && renderDefaultTimeSlots()}
                    {renderTimeSlots()}
                </TimeSlotWrapper>
            </TimeSlotBarContainer>
            {renderArrowButtonLeft()}
            {renderArrowButtonRight()}
        </Container>
    );
};
