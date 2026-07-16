import React, { useRef, useEffect, useState } from "react";
import { View, TextInput, Text } from "react-native";
import { dayjs, sanitizeInput, padValue } from "./date-helpers";
import { standaloneInputStyles as s } from "./styles";

interface StandaloneDateInputProps {
    value: string;
    label: string;
    disabled?: boolean;
    focused?: boolean;
    onChange: (value: string) => void;
    onFocus?: () => void;
}

export function StandaloneDateInput({
    value,
    label,
    disabled,
    focused,
    onChange,
    onFocus,
}: StandaloneDateInputProps) {
    const dayRef = useRef<TextInput>(null);
    const monthRef = useRef<TextInput>(null);
    const yearRef = useRef<TextInput>(null);

    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    useEffect(() => {
        const sanitized = sanitizeInput(value);
        if (!sanitized) {
            setDay("");
            setMonth("");
            setYear("");
            return;
        }
        const d = dayjs(sanitized, "YYYY-MM-DD", true);
        setDay(padValue(d.date().toString()));
        setMonth(padValue((d.month() + 1).toString()));
        setYear(d.year().toString());
    }, [value]);

    useEffect(() => {
        if (focused) {
            dayRef.current?.focus();
        }
    }, [focused]);

    const emitChange = (d: string, m: string, y: string) => {
        if (!d && !m && !y) {
            onChange("");
            return;
        }
        const dateStr = `${y}-${m}-${d}`;
        if (dayjs(dateStr, "YYYY-MM-DD", true).isValid()) {
            onChange(dateStr);
        }
    };

    const handleDayChange = (text: string) => {
        const val = text.replace(/[^0-9]/g, "").slice(0, 2);
        setDay(val);
        if (val.length === 2) monthRef.current?.focus();
        emitChange(val, month, year);
    };

    const handleMonthChange = (text: string) => {
        const val = text.replace(/[^0-9]/g, "").slice(0, 2);
        setMonth(val);
        if (val.length === 2) yearRef.current?.focus();
        emitChange(day, val, year);
    };

    const handleYearChange = (text: string) => {
        const val = text.replace(/[^0-9]/g, "").slice(0, 4);
        setYear(val);
        emitChange(day, month, val);
    };

    const handleDayKeyPress = (e: { nativeEvent: { key: string } }) => {
        if (e.nativeEvent.key === "Backspace" && day.length === 0) {
            // can't go further back from day
        }
    };

    const handleMonthKeyPress = (e: { nativeEvent: { key: string } }) => {
        if (e.nativeEvent.key === "Backspace" && month.length === 0) {
            dayRef.current?.focus();
        }
    };

    const handleYearKeyPress = (e: { nativeEvent: { key: string } }) => {
        if (e.nativeEvent.key === "Backspace" && year.length === 0) {
            monthRef.current?.focus();
        }
    };

    return (
        <View
            style={s.container}
            accessibilityRole="none"
            accessibilityLabel={label}
        >
            <TextInput
                ref={dayRef}
                style={s.input}
                value={day}
                placeholder="DD"
                keyboardType="number-pad"
                maxLength={2}
                editable={!disabled}
                onChangeText={handleDayChange}
                onKeyPress={handleDayKeyPress}
                onFocus={onFocus}
                selectTextOnFocus
            />
            <Text style={[s.divider, day ? s.dividerActive : undefined]}>
                /
            </Text>
            <TextInput
                ref={monthRef}
                style={s.input}
                value={month}
                placeholder="MM"
                keyboardType="number-pad"
                maxLength={2}
                editable={!disabled}
                onChangeText={handleMonthChange}
                onKeyPress={handleMonthKeyPress}
                onFocus={onFocus}
                selectTextOnFocus
            />
            <Text style={[s.divider, month ? s.dividerActive : undefined]}>
                /
            </Text>
            <TextInput
                ref={yearRef}
                style={[s.input, s.yearInput]}
                value={year}
                placeholder="YYYY"
                keyboardType="number-pad"
                maxLength={4}
                editable={!disabled}
                onChangeText={handleYearChange}
                onKeyPress={handleYearKeyPress}
                onFocus={onFocus}
                selectTextOnFocus
            />
        </View>
    );
}
