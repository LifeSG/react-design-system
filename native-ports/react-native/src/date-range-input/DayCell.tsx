import React from "react";
import { Pressable, Text, View } from "react-native";
import { dayCellStyles as s } from "./styles";

interface DayCellProps {
    date: string;
    day: number;
    isCurrentMonth: boolean;
    isToday: boolean;
    isDisabled: boolean;
    isSelectedStart: boolean;
    isSelectedEnd: boolean;
    isInRange: boolean;
    onSelect: (date: string) => void;
}

export function DayCell({
    date,
    day,
    isCurrentMonth,
    isToday,
    isDisabled,
    isSelectedStart,
    isSelectedEnd,
    isInRange,
    onSelect,
}: DayCellProps) {
    const isSelected = isSelectedStart || isSelectedEnd;

    const cellStyle = [
        s.cell,
        isInRange && !isSelected && s.cellInRange,
        isSelectedStart && s.cellSelectedStart,
        isSelectedEnd && s.cellSelectedEnd,
        isInRange && isSelectedStart && s.cellSelectedStart,
        isInRange && isSelectedEnd && s.cellSelectedEnd,
    ];

    const textStyle = [
        s.text,
        !isCurrentMonth && s.textOtherMonth,
        isToday && !isSelected && s.textToday,
        isDisabled && s.textDisabled,
        isSelected && s.textSelected,
    ];

    return (
        <Pressable
            style={cellStyle}
            disabled={isDisabled}
            onPress={() => onSelect(date)}
            accessibilityLabel={`${day}`}
        >
            <Text style={textStyle}>{day}</Text>
        </Pressable>
    );
}
