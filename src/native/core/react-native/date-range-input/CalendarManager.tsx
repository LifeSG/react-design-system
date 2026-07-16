import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import dayjs from "dayjs";
import {
    generateMonths,
    generateDecadeOfYears,
    isWithinRange,
} from "../../design-core";
import type { View as CalView, CalendarAction } from "./types";
import { calendarManagerStyles as s, Colors } from "./styles";
import { Calendar } from "./Calendar";

interface CalendarManagerProps {
    calendarDate: string;
    selectedStart: string;
    selectedEnd: string;
    minDate?: string;
    maxDate?: string;
    disabledDates?: string[];
    withButton?: boolean;
    doneDisabled?: boolean;
    onSelect: (date: string) => void;
    onDismiss: (action: CalendarAction) => void;
}

export function CalendarManager({
    calendarDate,
    selectedStart,
    selectedEnd,
    minDate,
    maxDate,
    disabledDates,
    withButton = true,
    doneDisabled = false,
    onSelect,
    onDismiss,
}: CalendarManagerProps) {
    const [currentView, setCurrentView] = useState<CalView>("default");
    const [viewDate, setViewDate] = useState(
        calendarDate || dayjs().format("YYYY-MM-DD")
    );

    const vd = dayjs(viewDate);
    const minD = minDate ? dayjs(minDate) : undefined;
    const maxD = maxDate ? dayjs(maxDate) : undefined;

    let prevDisabled = false;
    let nextDisabled = false;

    if (currentView === "default") {
        if (minD)
            prevDisabled = !isWithinRange(
                vd.subtract(1, "month"),
                minD,
                undefined,
                "month"
            );
        if (maxD)
            nextDisabled = !isWithinRange(
                vd.add(1, "month"),
                undefined,
                maxD,
                "month"
            );
    } else if (currentView === "year-options") {
        const decade = Math.floor(vd.year() / 10) * 10;
        if (minD)
            prevDisabled = !isWithinRange(
                vd.year(decade - 1),
                minD,
                undefined,
                "year"
            );
        if (maxD)
            nextDisabled = !isWithinRange(
                vd.year(decade + 10),
                undefined,
                maxD,
                "year"
            );
    } else {
        if (minD)
            prevDisabled = !isWithinRange(
                vd.subtract(1, "year"),
                minD,
                undefined,
                "year"
            );
        if (maxD)
            nextDisabled = !isWithinRange(
                vd.add(1, "year"),
                undefined,
                maxD,
                "year"
            );
    }

    const handlePrev = () => {
        if (currentView === "default")
            setViewDate(vd.subtract(1, "month").format("YYYY-MM-DD"));
        else if (currentView === "year-options")
            setViewDate(vd.subtract(10, "year").format("YYYY-MM-DD"));
        else setViewDate(vd.subtract(1, "year").format("YYYY-MM-DD"));
    };

    const handleNext = () => {
        if (currentView === "default")
            setViewDate(vd.add(1, "month").format("YYYY-MM-DD"));
        else if (currentView === "year-options")
            setViewDate(vd.add(10, "year").format("YYYY-MM-DD"));
        else setViewDate(vd.add(1, "year").format("YYYY-MM-DD"));
    };

    const monthLabel = vd.format("MMM");
    const yearLabel =
        currentView === "year-options"
            ? `${Math.floor(vd.year() / 10) * 10} - ${
                  Math.floor(vd.year() / 10) * 10 + 9
              }`
            : vd.format("YYYY");

    const renderMonthPicker = () => {
        const months = generateMonths(vd);
        return (
            <View style={s.pickerGrid}>
                {months.map((m, i) => {
                    const disabled = !isWithinRange(m, minD, maxD, "month");
                    const selected = m.month() === vd.month();
                    return (
                        <Pressable
                            key={i}
                            style={[
                                s.pickerItem,
                                selected && s.pickerItemSelected,
                                disabled && s.pickerItemDisabled,
                            ]}
                            disabled={disabled}
                            onPress={() => {
                                setViewDate(
                                    vd.month(m.month()).format("YYYY-MM-DD")
                                );
                                setCurrentView("default");
                            }}
                        >
                            <Text
                                style={[
                                    s.pickerItemText,
                                    selected && s.pickerItemTextSelected,
                                ]}
                            >
                                {m.format("MMM")}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>
        );
    };

    const renderYearPicker = () => {
        const years = generateDecadeOfYears(vd);
        const decade = Math.floor(vd.year() / 10) * 10;
        return (
            <View style={s.pickerGrid}>
                {years.map((y, i) => {
                    const yr = y.year();
                    const disabled = !isWithinRange(y, minD, maxD, "year");
                    const outOfDecade = yr < decade || yr > decade + 9;
                    const selected = yr === vd.year();
                    return (
                        <Pressable
                            key={i}
                            style={[
                                s.pickerItem,
                                selected && s.pickerItemSelected,
                                disabled && s.pickerItemDisabled,
                                outOfDecade && { opacity: 0.4 },
                            ]}
                            disabled={disabled}
                            onPress={() => {
                                setViewDate(vd.year(yr).format("YYYY-MM-DD"));
                                setCurrentView("default");
                            }}
                        >
                            <Text
                                style={[
                                    s.pickerItemText,
                                    selected && s.pickerItemTextSelected,
                                ]}
                            >
                                {yr}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>
        );
    };

    return (
        <View style={s.container}>
            <View style={s.header}>
                <Pressable
                    style={[s.navBtn, prevDisabled && s.navBtnDisabled]}
                    disabled={prevDisabled}
                    onPress={handlePrev}
                    accessibilityLabel="Previous"
                >
                    <Text style={s.navBtnText}>‹</Text>
                </Pressable>

                <View style={s.headerLabels}>
                    <Pressable
                        style={s.headerLabel}
                        onPress={() =>
                            setCurrentView(
                                currentView === "month-options"
                                    ? "default"
                                    : "month-options"
                            )
                        }
                    >
                        <Text
                            style={[
                                s.headerLabelText,
                                currentView === "month-options" &&
                                    s.headerLabelActive,
                            ]}
                        >
                            {monthLabel}
                        </Text>
                    </Pressable>
                    <Pressable
                        style={s.headerLabel}
                        onPress={() =>
                            setCurrentView(
                                currentView === "year-options"
                                    ? "default"
                                    : "year-options"
                            )
                        }
                    >
                        <Text
                            style={[
                                s.headerLabelText,
                                currentView === "year-options" &&
                                    s.headerLabelActive,
                            ]}
                        >
                            {yearLabel}
                        </Text>
                    </Pressable>
                </View>

                <Pressable
                    style={[s.navBtn, nextDisabled && s.navBtnDisabled]}
                    disabled={nextDisabled}
                    onPress={handleNext}
                    accessibilityLabel="Next"
                >
                    <Text style={s.navBtnText}>›</Text>
                </Pressable>
            </View>

            {currentView === "default" ? (
                <Calendar
                    calendarDate={viewDate}
                    selectedStart={selectedStart}
                    selectedEnd={selectedEnd}
                    minDate={minDate}
                    maxDate={maxDate}
                    disabledDates={disabledDates}
                    onSelect={onSelect}
                />
            ) : currentView === "month-options" ? (
                renderMonthPicker()
            ) : (
                renderYearPicker()
            )}

            {withButton && (
                <View style={s.footer}>
                    <Pressable
                        style={s.cancelBtn}
                        onPress={() => onDismiss("reset")}
                    >
                        <Text style={s.cancelBtnText}>Cancel</Text>
                    </Pressable>
                    <Pressable
                        style={[s.doneBtn, doneDisabled && s.doneBtnDisabled]}
                        disabled={doneDisabled}
                        onPress={() => onDismiss("confirmed")}
                    >
                        <Text style={s.doneBtnText}>Done</Text>
                    </Pressable>
                </View>
            )}
        </View>
    );
}
