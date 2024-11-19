import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import { useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { TimeSlotBarHelper } from "./helper";
import {
    ArrowButton,
    ArrowIconLeft,
    ArrowIconRight,
    CellText,
    Container,
    TimeLabel,
    TimeMarker,
    TimeMarkerWrapper,
    TimeSlot,
    TimeSlotBarContainer,
    TimeSlotBorder,
    TimeSlotWrapper,
    getCellWidth,
} from "./time-slot-bar.styles";
import { Direction, TimeSlotBarProps, TimeSlotBarVariant } from "./types";

const CELL_DURATION = 30; // In minutes

export const TimeSlotBar = ({
    "data-testid": testId,
    className,
    variant = "default",
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
    const cellWidth = getCellWidth(variant);

    const SCROLL_INCREMENT = cellWidth * 2.5; // In px. Each scroll increment corresponds to 75mins

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
        return slotWidth <= cellWidth / 2;
    };

    const getDataTestId = (subStr: string) => {
        if (!testId) return undefined;
        return `${testId}-${subStr}`;
    };

    /**
     * Function to determine if a long time marker should be displayed
     * For minified variant the long time marker is displayed every alternate hour
     */
    const shouldDisplayLongTimeMarker = (
        currentTime: Dayjs,
        isStartHourEven: boolean, // To determine if the first hour is even or odd for minified
        variant: TimeSlotBarVariant
    ) => {
        const isHour = currentTime.minute() === 0;

        if (variant === "default") {
            return isHour;
        }

        const isAlternateHour =
            isHour &&
            (isStartHourEven
                ? currentTime.hour() % 2 === 0
                : currentTime.hour() % 2 === 1);

        return isAlternateHour;
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    // Render time markers
    const renderTimeMarkers = () => {
        const timeMarkers = [];
        const startTimeFormatted = dayjs(startTime, "HH:mm");
        const endTimeFormatted = dayjs(endTime, "HH:mm");

        const isStartHourEven = startTimeFormatted.hour() % 2 === 0;

        for (
            let currentTime = startTimeFormatted;
            currentTime.isBefore(endTimeFormatted);
            currentTime = currentTime.add(CELL_DURATION, "minute")
        ) {
            const displayLongTimeMarker = shouldDisplayLongTimeMarker(
                currentTime,
                isStartHourEven,
                variant
            );

            timeMarkers.push(
                <TimeMarker
                    key={currentTime.format("HH:mm")}
                    $isLongMarker={displayLongTimeMarker}
                    $variant={variant}
                >
                    {displayLongTimeMarker && (
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
            cellWidth
        );

        const isClickable = !!onClick && variant === "default";

        return (
            <>
                <TimeSlotBorder $variant={variant} />
                <TimeSlot
                    key={"default-timeslot"}
                    data-testid={getDataTestId("default-timeslot")}
                    $width={slotWidth}
                    $variant={variant}
                    $left={0}
                    $styleType={styleType}
                    $bgColor={backgroundColor}
                    $bgColor2={backgroundColor2}
                    $clickable={isClickable}
                    onClick={isClickable ? onClick : undefined}
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
                cellWidth
            );
            const slotOffset = TimeSlotBarHelper.calculateWidth(
                startTime,
                slotStartTime,
                cellWidth
            );

            const isClickable = clickable && variant === "default";

            return (
                <div key={id}>
                    <TimeSlotBorder
                        $variant={variant}
                        style={{
                            left: `${slotOffset}px`,
                        }}
                    />
                    <TimeSlot
                        data-testid={getDataTestId(`${id}-timeslot`)}
                        $width={slotWidth}
                        $left={slotOffset}
                        $styleType={styleType}
                        $variant={variant}
                        $bgColor={backgroundColor}
                        $bgColor2={backgroundColor2}
                        $clickable={isClickable}
                        onClick={() => isClickable && onSlotClick(slot)}
                    >
                        {label && variant === "default" && (
                            <CellText
                                $slotWidth={slotWidth}
                                $color={color}
                                weight={"semibold"}
                            >
                                {showFullEllipsis(slotWidth) ? "..." : label}
                            </CellText>
                        )}
                    </TimeSlot>
                    {endTime !== slotEndTime && (
                        <TimeSlotBorder
                            $variant={variant}
                            style={{
                                left: `${slotOffset + slotWidth}px`,
                            }}
                        />
                    )}
                </div>
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
                        $variant={variant}
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
            TimeSlotBarHelper.calculateWidth(startTime, endTime, cellWidth)
        ) {
            return (
                <ArrowButton
                    data-testid={getDataTestId("arrow-right")}
                    $direction={"right"}
                    $variant={variant}
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
            <TimeSlotBarContainer
                data-testid={testId}
                ref={barRef}
                $variant={variant}
            >
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
