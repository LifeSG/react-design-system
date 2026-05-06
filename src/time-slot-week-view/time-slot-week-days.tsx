import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import type React from "react";
import { useMemo, useRef, useState } from "react";

import { concatIds, VisuallyHidden } from "../shared/accessibility";
import type { InternalCalendarProps } from "../shared/internal-calendar";
import type { CellStyleProps } from "../shared/internal-calendar/day-cell";
import { DayCell } from "../shared/internal-calendar/day-cell";
import type { TimeSlot } from "../time-slot-bar/types";
import { CalendarHelper } from "../util/calendar-helper";
import { TimeHelper } from "../util/time-helper";
import { V3_Colour } from "../v3_theme";
import {
    ColumnWeekCell,
    DayLabel,
    HeaderCellWeek,
    HeaderRow,
    TimeSlotComponent,
    TimeSlotText,
    TimeSlotWrapper,
    Wrapper,
} from "./time-slot-week-days.style";

dayjs.extend(isBetween);

interface FocusableSlotMeta {
    key: string;
    date: string;
    rowIndex: number;
}

interface TimeSlotWeekDaysProps
    extends Pick<
        InternalCalendarProps,
        "disabledDates" | "minDate" | "maxDate"
    > {
    selectedDate: string | undefined;
    calendarDate: Dayjs;
    onSelect: (value: Dayjs) => void;
    slots?: { [date: string]: TimeSlot[] } | undefined;
    enableSelection?: boolean | undefined;
    onSlotClick?: ((date: string, timeSlot: TimeSlot) => void) | undefined;
}

const dateFormat = "YYYY-MM-DD";

const fallbackSlot: TimeSlot = {
    id: "1",
    startTime: "",
    endTime: "",
    clickable: false,
    styleAttributes: {
        color: "",
        styleType: "stripes",
        backgroundColor: V3_Colour["bg-stronger"],
        backgroundColor2: V3_Colour["bg-strongest"],
    },
};

export const TimeSlotWeekDays = ({
    calendarDate,
    disabledDates,
    selectedDate,
    onSelect,
    minDate,
    maxDate,
    slots: daySlots,
    enableSelection = true,
    onSlotClick,
}: TimeSlotWeekDaysProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const currentCalendarWeek = useMemo((): Dayjs[] => {
        return CalendarHelper.generateDaysForCurrentWeek(calendarDate);
    }, [calendarDate]);
    const [hoverDay, setHoverDay] = useState<Dayjs>();
    const slotButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleDayClick = (value: Dayjs, isDisabled: boolean) => {
        if (isDisabled || !enableSelection) return;
        onSelect(value);
    };

    const handleSlotClick = (date: string, slot: TimeSlot) => {
        onSlotClick?.(date, slot);
    };

    const handleSlotButtonClick =
        (date: string, slot: TimeSlot) =>
        (event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation();

            if (slot.clickable ?? true) {
                handleSlotClick(date, slot);
            }
        };

    const handleDayHover = (value: Dayjs) => {
        setHoverDay(value);
    };

    const handleDayHoverClear = () => {
        setHoverDay(undefined);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const isDisabled = (day: Dayjs): boolean => {
        const isWithinRange = CalendarHelper.isWithinRange(
            day,
            minDate ? dayjs(minDate) : undefined,
            maxDate ? dayjs(maxDate) : undefined
        );

        const isDisabledDate =
            !!disabledDates && disabledDates.includes(day.format(dateFormat));

        return !isWithinRange || isDisabledDate;
    };

    const generateStyleProps = (day: Dayjs) => {
        const dateStartWithYear = day.format(dateFormat);
        const disabled = isDisabled(day);
        const isHoverEnabled = enableSelection && !disabled;
        const isHover =
            isHoverEnabled && hoverDay && day.isSame(hoverDay, "day");
        const isSelected = [selectedDate].includes(dateStartWithYear);

        const dayCellStyleProps: CellStyleProps = {
            labelType: "available",
            interactive: enableSelection ? isHoverEnabled : false,
        };

        if (disabled) {
            dayCellStyleProps.disabled = true;
            dayCellStyleProps.labelType = "unavailable";
        }

        if (isSelected && isHover) {
            dayCellStyleProps.labelType = "selected-hover";
            dayCellStyleProps.circleLeft = "selected-hover-outline";
            dayCellStyleProps.circleRight = "selected-hover-outline";
        } else if (isSelected) {
            dayCellStyleProps.labelType = "selected";
            dayCellStyleProps.circleLeft = "selected-outline";
            dayCellStyleProps.circleRight = "selected-outline";
        } else if (isHover) {
            dayCellStyleProps.labelType = "hover";
            dayCellStyleProps.circleLeft = "hover-subtle";
            dayCellStyleProps.circleRight = "hover-subtle";
        }

        return dayCellStyleProps;
    };

    const getFocusableSlotsForDate = (
        formattedDate: string
    ): FocusableSlotMeta[] => {
        return (daySlots?.[formattedDate] ?? []).map((slot, index) => ({
            key: `${formattedDate}-${slot.id}`,
            date: formattedDate,
            rowIndex: index,
        }));
    };

    const handleSlotKeyDown = (
        event: React.KeyboardEvent<HTMLButtonElement>,
        currentSlot: FocusableSlotMeta
    ) => {
        const sameColumnSlots = getFocusableSlotsForDate(currentSlot.date);

        const focusSlot = (slot?: FocusableSlotMeta) => {
            if (!slot) return;
            slotButtonRefs.current[slot.key]?.focus();
        };

        switch (event.key) {
            case "ArrowRight":
            case "ArrowDown": {
                event.preventDefault();
                const currentIndex = sameColumnSlots.findIndex(
                    (slot) => slot.key === currentSlot.key
                );
                focusSlot(sameColumnSlots[currentIndex + 1]);
                break;
            }
            case "ArrowLeft":
            case "ArrowUp": {
                event.preventDefault();
                const currentIndex = sameColumnSlots.findIndex(
                    (slot) => slot.key === currentSlot.key
                );
                focusSlot(sameColumnSlots[currentIndex - 1]);
                break;
            }
            case "Home":
            case "PageUp":
                event.preventDefault();
                focusSlot(sameColumnSlots[0]);
                break;
            case "End":
            case "PageDown":
                event.preventDefault();
                focusSlot(sameColumnSlots[sameColumnSlots.length - 1]);
                break;
            default:
                break;
        }
    };

    const getSlotAriaLabel = (date: string, slot: TimeSlot) => {
        const { startTime: slotStartTime, endTime: slotEndTime } = slot;

        return concatIds(
            dayjs(date).format("D MMMM YYYY dddd"),
            slotStartTime && slotEndTime
                ? TimeHelper.formatTimeRange(slotStartTime, slotEndTime)
                : undefined,
            slot.label,
            slot.clickable ?? true ? "Available" : "Unavailable"
        );
    };
    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderHeader = () => {
        return (
            <HeaderRow role="row" onBlur={handleDayHoverClear}>
                {currentCalendarWeek.map((day, index) => {
                    const dayCellStyleProps = generateStyleProps(day);

                    return (
                        <HeaderCellWeek
                            key={`week-day-${index}`}
                            role="presentation"
                        >
                            <DayCell
                                key={`day-${index}`}
                                date={day}
                                calendarDate={dayjs(selectedDate)}
                                onSelect={() => {
                                    handleDayClick(
                                        day,
                                        !dayCellStyleProps.interactive
                                    );
                                }}
                                onHover={handleDayHover}
                                onHoverEnd={handleDayHoverClear}
                                onFocus={handleDayHover}
                                role="columnheader"
                                tabIndex={
                                    dayCellStyleProps.interactive ? 0 : -1
                                }
                                {...dayCellStyleProps}
                            />
                            <DayLabel
                                aria-hidden
                                $disabled={dayCellStyleProps.disabled}
                            >
                                {dayjs(day).format("ddd")}
                            </DayLabel>
                        </HeaderCellWeek>
                    );
                })}
            </HeaderRow>
        );
    };

    const renderTimeSlotBarCells = () => {
        return (
            <ColumnWeekCell
                key={`week-cell-${calendarDate.format(dateFormat)}`}
                role="row"
            >
                {currentCalendarWeek.map((day, dayIndex) => {
                    const formattedDate = day.format(dateFormat);
                    const slots = daySlots?.[formattedDate] ?? [fallbackSlot];

                    return (
                        <TimeSlotWrapper
                            key={`wrapper-${dayIndex}`}
                            role="gridcell"
                        >
                            {slots &&
                                slots.map((slot, rowIndex) => {
                                    const {
                                        id,
                                        startTime: slotStartTime,
                                        endTime: slotEndTime,
                                        clickable = true,
                                        styleAttributes,
                                    } = slot;
                                    const {
                                        color,
                                        styleType = "default",
                                        backgroundColor,
                                        backgroundColor2,
                                    } = styleAttributes;
                                    const slotKey = `${formattedDate}-${id}`;
                                    const isActualSlot = slot !== fallbackSlot;

                                    return (
                                        <TimeSlotComponent
                                            $type="vertical"
                                            $variant="default"
                                            key={id}
                                            $styleType={styleType}
                                            $bgColor={backgroundColor}
                                            $bgColor2={backgroundColor2}
                                            $clickable={clickable}
                                            onClick={() =>
                                                clickable &&
                                                handleSlotClick(
                                                    formattedDate,
                                                    slot
                                                )
                                            }
                                        >
                                            <TimeSlotText
                                                style={{ color: color }}
                                            >
                                                <span>
                                                    {CalendarHelper.convertTo12HourFormat(
                                                        slotStartTime
                                                    )}
                                                </span>
                                                {slotEndTime &&
                                                    slotStartTime && (
                                                        <span>-</span>
                                                    )}
                                                <span>
                                                    {CalendarHelper.convertTo12HourFormat(
                                                        slotEndTime
                                                    )}
                                                </span>
                                            </TimeSlotText>
                                            {isActualSlot && (
                                                <VisuallyHidden>
                                                    <button
                                                        type="button"
                                                        ref={(element) => {
                                                            slotButtonRefs.current[
                                                                slotKey
                                                            ] = element;
                                                        }}
                                                        aria-disabled={
                                                            !clickable
                                                        }
                                                        aria-label={getSlotAriaLabel(
                                                            formattedDate,
                                                            slot
                                                        )}
                                                        onKeyDown={(event) =>
                                                            handleSlotKeyDown(
                                                                event,
                                                                {
                                                                    key: slotKey,
                                                                    date: formattedDate,
                                                                    rowIndex,
                                                                }
                                                            )
                                                        }
                                                        onClick={handleSlotButtonClick(
                                                            formattedDate,
                                                            slot
                                                        )}
                                                    />
                                                </VisuallyHidden>
                                            )}
                                        </TimeSlotComponent>
                                    );
                                })}
                        </TimeSlotWrapper>
                    );
                })}
            </ColumnWeekCell>
        );
    };

    return (
        <Wrapper role="grid">
            {renderHeader()}
            {renderTimeSlotBarCells()}
        </Wrapper>
    );
};
