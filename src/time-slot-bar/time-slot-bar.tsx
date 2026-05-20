import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";
import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import clsx from "clsx";
import dayjs, { type Dayjs } from "dayjs";
import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
} from "react";
import { useResizeDetector } from "react-resize-detector";

import { VisuallyHidden } from "../shared/accessibility";
import { ClickableIcon } from "../shared/clickable-icon";
import { TimeSlot } from "../shared/time-slot";
import { Typography } from "../typography";
import { TimeHelper } from "../util/time-helper";
import { getCellWidth, TimeSlotBarHelper } from "./helper";
import * as styles from "./time-slot-bar.styles";
import TimeSlotDivider from "./time-slot-divider";
import TimeSlotItem from "./time-slot-item";
import type {
    Direction,
    TimeSlot as TTimeSlot,
    TimeSlotBarProps,
    TimeSlotBarRef,
    TimeSlotBarVariant,
} from "./types";

const CELL_DURATION = 30; // In minutes

const Component = (props: TimeSlotBarProps, ref: React.Ref<TimeSlotBarRef>) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const {
        "data-testid": testId,
        className,
        variant = "default",
        startTime,
        endTime,
        slots,
        onSlotClick,
        onClick,
        styleAttributes,
        initialScrollTime,
        roundInitialScrollTime = true,
    } = props;
    const barRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [clientWidth, setClientWidth] = useState<number>(0);
    const cellWidth = getCellWidth(variant);

    const adjustedStartTime = TimeSlotBarHelper.adjustTimeForMarker(
        startTime,
        "start"
    );
    const adjustedEndTime = TimeSlotBarHelper.adjustTimeForMarker(
        endTime,
        "end"
    );

    const SCROLL_INCREMENT = cellWidth * 2.5; // In px. Each scroll increment corresponds to 75mins

    // Expose imperative handle
    useImperativeHandle(ref, () => ({
        resetScroll,
    }));

    const { summary: slotsSummary, computedSlots: allSlots } = useMemo(() => {
        return TimeSlotBarHelper.processSlots(
            { start: adjustedStartTime, end: adjustedEndTime },
            slots,
            variant
        );
    }, [adjustedStartTime, adjustedEndTime, slots, variant]);

    // =============================================================================
    // EFFECTS
    // =============================================================================

    useEffect(() => {
        const container = barRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            // Initialize clientWidth on mount
            setClientWidth(container.clientWidth);
        }

        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    // Initial scroll on mount and when dependencies change
    useEffect(() => {
        resetScroll();
    }, [initialScrollTime, cellWidth, startTime, endTime]);

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

    // Function to reset scroll to initialScrollTime
    const resetScroll = () => {
        if (initialScrollTime && barRef.current && cellWidth > 0) {
            const scrollPosition = TimeHelper.calculateScrollPosition({
                scrollTime: initialScrollTime,
                minTime: adjustedStartTime,
                maxTime: adjustedEndTime,
                interval: CELL_DURATION,
                intervalWidth: cellWidth,
                options: {
                    roundToInterval: roundInitialScrollTime,
                },
            });

            if (scrollPosition !== null) {
                barRef.current.scrollLeft = scrollPosition;
            }
        }
    };

    const isVariant = (v: TimeSlotBarVariant) => {
        if (variant === v) return true;
        return false;
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    // Render time markers
    const renderTimeMarkers = () => {
        const timeMarkers = [];
        const startTimeFormatted = dayjs(adjustedStartTime, "HH:mm");
        const endTimeFormatted = dayjs(adjustedEndTime, "HH:mm");

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
                <div
                    data-testid={`${currentTime.format("HH:mm")}-marker`}
                    key={currentTime.format("HH:mm")}
                    className={clsx(
                        styles.timeMarker,
                        variant === "default"
                            ? styles.timeMarkerDefault
                            : styles.timeMarkerMinified,
                        displayLongTimeMarker && styles.timeMarkerLong
                    )}
                >
                    {displayLongTimeMarker && (
                        <Typography.BodyXS
                            className={styles.timeLabel}
                            weight="semibold"
                        >
                            {TimeSlotBarHelper.formatHourlyDisplay(
                                currentTime.format("HH:mm")
                            )}
                        </Typography.BodyXS>
                    )}
                </div>
            );
        }
        return timeMarkers;
    };

    // Render default time slot (aka background)
    const renderDefaultTimeSlots = () => {
        if (!styleAttributes) return;

        const {
            backgroundColor,
            backgroundColor2,
            hoverBackgroundColor,
            hoverBackgroundColor2,
            styleType = "default",
        } = styleAttributes;

        const slotWidth = TimeSlotBarHelper.calculateWidth(
            adjustedStartTime,
            adjustedEndTime,
            cellWidth
        );

        const isClickable = !!onClick && isVariant("default");

        return (
            <>
                <TimeSlotDivider variant={variant} />
                <TimeSlotItem
                    key={"default-timeslot"}
                    variant={variant}
                    dataTestId={getDataTestId("default-timeslot")}
                    slotWidth={slotWidth}
                    slotOffset={0}
                    onClick={isClickable ? onClick : undefined}
                >
                    <TimeSlot
                        styleType={styleType}
                        bgColor={backgroundColor}
                        bgColor2={backgroundColor2}
                        hoverBgColor={hoverBackgroundColor}
                        hoverBgColor2={hoverBackgroundColor2}
                        clickable={isClickable}
                    />
                </TimeSlotItem>
            </>
        );
    };

    // Render time slots
    const renderTimeSlots = () => {
        return allSlots.map((slot) => {
            const {
                id,
                startTime: slotStartTime,
                endTime: slotEndTime,
                label,
                clickable = true,
                styleAttributes,
                ariaLabel,
            } = slot;

            const {
                color,
                styleType = "default",
                backgroundColor,
                backgroundColor2,
                hoverBackgroundColor,
                hoverBackgroundColor2,
            } = styleAttributes;

            const slotWidth = TimeSlotBarHelper.calculateWidth(
                slotStartTime,
                slotEndTime,
                cellWidth
            );
            const slotOffset = TimeSlotBarHelper.calculateWidth(
                adjustedStartTime,
                slotStartTime,
                cellWidth
            );

            const isClickable = clickable && variant === "default";
            const showLabel = isVariant("default") && label;

            const handleSlotClick =
                (clickedSlot: TTimeSlot & { ariaLabel?: string }) =>
                (evt: React.MouseEvent<HTMLElement>) => {
                    evt.stopPropagation();

                    const { ariaLabel: _, ...slot } = clickedSlot;
                    if (isClickable) onSlotClick(slot);
                };

            return (
                <div key={id} role="gridcell">
                    <TimeSlotDivider
                        variant={variant}
                        left={slotOffset}
                        dataTestId="start-border"
                    />
                    <TimeSlotItem
                        variant={variant}
                        dataTestId={getDataTestId(`${id}-timeslot`)}
                        slotWidth={slotWidth}
                        slotOffset={slotOffset}
                        color={color}
                        onClick={handleSlotClick(slot)}
                    >
                        <TimeSlot
                            styleType={styleType}
                            bgColor={backgroundColor}
                            bgColor2={backgroundColor2}
                            hoverBgColor={hoverBackgroundColor}
                            hoverBgColor2={hoverBackgroundColor2}
                            clickable={isClickable}
                        >
                            {!!ariaLabel && (
                                <VisuallyHidden>
                                    <button
                                        type="button" // overrides default type="submit" when used with <form>
                                        aria-disabled={!isClickable}
                                        aria-label={ariaLabel}
                                        onClick={handleSlotClick(slot)} // use `button` element native keyboard activation handling
                                    />
                                </VisuallyHidden>
                            )}

                            {showLabel && (
                                <Typography.BodyXS
                                    className={styles.cellText}
                                    weight={"semibold"}
                                    aria-hidden={!ariaLabel}
                                >
                                    {showFullEllipsis(slotWidth)
                                        ? "..."
                                        : label}
                                </Typography.BodyXS>
                            )}
                        </TimeSlot>
                    </TimeSlotItem>
                    {endTime !== slotEndTime && (
                        <TimeSlotDivider
                            variant={variant}
                            dataTestId="end-border"
                            left={slotOffset + slotWidth}
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
                    <ClickableIcon
                        data-testid={getDataTestId("arrow-left")}
                        aria-hidden
                        tabIndex={-1}
                        className={clsx(
                            styles.arrowButton,
                            styles.arrowButtonLeft,
                            variant === "default"
                                ? styles.arrowButtonDefault
                                : styles.arrowButtonMinified
                        )}
                        focusHighlight={false}
                        focusOutline="none"
                        onClick={() => {
                            handleArrowButtonClick("left");
                        }}
                    >
                        <ChevronLeftIcon className={styles.arrowIconLeft} />
                    </ClickableIcon>
                )}
            </>
        );
    };

    const renderArrowButtonRight = () => {
        // Show the right ArrowButton when the scroll position is less than the maximum possible scroll value
        if (
            scrollPosition + clientWidth <
            TimeSlotBarHelper.calculateWidth(
                adjustedStartTime,
                adjustedEndTime,
                cellWidth
            )
        ) {
            return (
                <ClickableIcon
                    data-testid={getDataTestId("arrow-right")}
                    aria-hidden
                    tabIndex={-1}
                    className={clsx(
                        styles.arrowButton,
                        styles.arrowButtonRight,
                        variant === "default"
                            ? styles.arrowButtonDefault
                            : styles.arrowButtonMinified
                    )}
                    focusHighlight={false}
                    focusOutline="none"
                    onClick={() => {
                        handleArrowButtonClick("right");
                    }}
                >
                    <ChevronRightIcon className={styles.arrowIconRight} />
                </ClickableIcon>
            );
        }

        return <></>;
    };

    return (
        <div className={clsx(styles.container, className)}>
            <div
                data-testid={testId}
                ref={barRef}
                className={clsx(
                    styles.timeSlotBarContainer,
                    variant === "default"
                        ? styles.containerDefault
                        : styles.containerMinified
                )}
            >
                <div
                    className={styles.timeMarkerWrapper}
                    data-testid={getDataTestId("time-marker-wrapper")}
                    data-id="marker-wrapper"
                >
                    {renderTimeMarkers()}
                </div>
                <div role="grid" aria-label={slotsSummary} tabIndex={0}>
                    <div
                        className={styles.timeSlotWrapper}
                        data-testid={getDataTestId("time-slot-wrapper")}
                        data-id="slot-wrapper"
                        role="row"
                    >
                        {renderDefaultTimeSlots()}
                        {renderTimeSlots()}
                    </div>
                </div>
            </div>
            {renderArrowButtonLeft()}
            {renderArrowButtonRight()}
        </div>
    );
};

export const TimeSlotBar = forwardRef<TimeSlotBarRef, TimeSlotBarProps>(
    Component
);
