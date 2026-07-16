import React from "react";
import { View, Text } from "react-native";
import dayjs from "dayjs";
import { generateDays, isDisabledDay } from "../../design-core";
import { calendarStyles as s } from "./styles";
import { DayCell } from "./DayCell";

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

interface CalendarProps {
    calendarDate: string;
    selectedStart: string;
    selectedEnd: string;
    minDate?: string;
    maxDate?: string;
    disabledDates?: string[];
    onSelect: (date: string) => void;
}

export function Calendar({
    calendarDate,
    selectedStart,
    selectedEnd,
    minDate,
    maxDate,
    disabledDates,
    onSelect,
}: CalendarProps) {
    const date = calendarDate ? dayjs(calendarDate) : dayjs();
    const weeks = generateDays(date);
    const startDay = selectedStart ? dayjs(selectedStart) : null;
    const endDay = selectedEnd ? dayjs(selectedEnd) : null;

    return (
        <View style={s.container}>
            <View style={s.weekdayRow}>
                {WEEKDAYS.map((d) => (
                    <Text key={d} style={s.weekdayLabel}>
                        {d}
                    </Text>
                ))}
            </View>
            {weeks.map((week, wi) => (
                <View key={wi} style={s.weekRow}>
                    {week.map((day) => {
                        const dateStr = day.format("YYYY-MM-DD");
                        const isCurrentMonth = day.month() === date.month();
                        const isToday = day.isSame(dayjs(), "day");
                        const disabled = isDisabledDay(
                            day,
                            disabledDates,
                            minDate,
                            maxDate
                        );
                        const isSelectedStart = startDay
                            ? day.isSame(startDay, "day")
                            : false;
                        const isSelectedEnd = endDay
                            ? day.isSame(endDay, "day")
                            : false;
                        const isInRange =
                            startDay && endDay
                                ? (day.isAfter(startDay, "day") &&
                                      day.isBefore(endDay, "day")) ||
                                  isSelectedStart ||
                                  isSelectedEnd
                                : false;

                        return (
                            <DayCell
                                key={dateStr}
                                date={dateStr}
                                day={day.date()}
                                isCurrentMonth={isCurrentMonth}
                                isToday={isToday}
                                isDisabled={disabled}
                                isSelectedStart={isSelectedStart}
                                isSelectedEnd={isSelectedEnd}
                                isInRange={isInRange}
                                onSelect={onSelect}
                            />
                        );
                    })}
                </View>
            ))}
        </View>
    );
}
