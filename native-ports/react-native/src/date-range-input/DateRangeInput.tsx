import React, { useReducer } from "react";
import { View, Text, Pressable } from "react-native";
import { dayjs } from "./date-helpers";
import type {
    DateRangeInputProps,
    DateRangeInputState,
    FocusType,
    CalendarAction,
} from "./types";
import { dateRangeInputStyles as s } from "./styles";
import { StandaloneDateInput } from "./StandaloneDateInput";
import { CalendarManager } from "./CalendarManager";
import { CalendarBottomSheet } from "./CalendarBottomSheet";

type Action =
    | { type: "focus"; focus: FocusType }
    | { type: "blur" }
    | { type: "changeStart"; value: string }
    | { type: "changeEnd"; value: string }
    | { type: "cancel" }
    | { type: "done"; start: string; end: string }
    | { type: "resetRange"; start: string; end: string };

function reducer(
    state: DateRangeInputState,
    action: Action
): DateRangeInputState {
    switch (action.type) {
        case "focus":
            return {
                ...state,
                currentFocus: action.focus,
                calendarOpen: true,
            };
        case "blur":
            return {
                ...state,
                selectedStart: state.initialStart,
                selectedEnd: state.initialEnd,
                currentFocus: "none",
                calendarOpen: false,
            };
        case "changeStart":
            return { ...state, selectedStart: action.value };
        case "changeEnd":
            return { ...state, selectedEnd: action.value };
        case "cancel":
            return {
                ...state,
                selectedStart: state.initialStart,
                selectedEnd: state.initialEnd,
                currentFocus: "none",
                calendarOpen: false,
            };
        case "done":
            return {
                ...state,
                initialStart: action.start,
                initialEnd: action.end,
                selectedStart: action.start,
                selectedEnd: action.end,
                currentFocus: "none",
                calendarOpen: false,
            };
        case "resetRange":
            return {
                ...state,
                initialStart: action.start,
                selectedStart: action.start,
                initialEnd: action.end,
                selectedEnd: action.end,
            };
        default:
            return state;
    }
}

export function DateRangeInput({
    value = "",
    valueEnd = "",
    minDate,
    maxDate,
    disabledDates,
    disabled,
    error,
    withButton = true,
    onChange,
}: DateRangeInputProps) {
    const [state, dispatch] = useReducer(reducer, {
        initialStart: value,
        initialEnd: valueEnd,
        selectedStart: value,
        selectedEnd: valueEnd,
        currentFocus: "none",
        calendarOpen: false,
    });

    const handleFocus = (focus: FocusType) => {
        if (disabled) return;
        dispatch({ type: "focus", focus });
    };

    const handleStartChange = (val: string) => {
        dispatch({ type: "changeStart", value: val });
    };

    const handleEndChange = (val: string) => {
        dispatch({ type: "changeEnd", value: val });
    };

    const handleDaySelect = (date: string) => {
        if (state.currentFocus === "start" || state.currentFocus === "none") {
            dispatch({ type: "changeStart", value: date });
            dispatch({ type: "focus", focus: "end" });
        } else {
            const start = dayjs(state.selectedStart);
            const end = dayjs(date);

            if (end.isBefore(start, "day")) {
                dispatch({ type: "changeStart", value: date });
                dispatch({ type: "changeEnd", value: "" });
                dispatch({ type: "focus", focus: "end" });
            } else {
                dispatch({ type: "changeEnd", value: date });
                if (!withButton) {
                    confirmSelection(state.selectedStart, date);
                }
            }
        }
    };

    const handleDismiss = (action: CalendarAction) => {
        if (action === "confirmed") {
            confirmSelection(state.selectedStart, state.selectedEnd);
        } else {
            dispatch({ type: "cancel" });
        }
    };

    const confirmSelection = (start: string, end: string) => {
        dispatch({ type: "done", start, end });
        onChange?.(start, end);
    };

    const bothFilled =
        state.selectedStart &&
        state.selectedEnd &&
        dayjs(state.selectedStart, "YYYY-MM-DD", true).isValid() &&
        dayjs(state.selectedEnd, "YYYY-MM-DD", true).isValid();

    const containerStyle = [
        s.container,
        state.calendarOpen && s.containerFocused,
        disabled && s.containerDisabled,
        error && s.containerError,
    ];

    return (
        <View>
            <Pressable
                style={containerStyle}
                onPress={() => handleFocus("start")}
            >
                <StandaloneDateInput
                    value={state.selectedStart}
                    label="Start date"
                    disabled={disabled}
                    focused={state.currentFocus === "start"}
                    onChange={handleStartChange}
                    onFocus={() => handleFocus("start")}
                />
                <Text style={s.separator}>–</Text>
                <StandaloneDateInput
                    value={state.selectedEnd}
                    label="End date"
                    disabled={disabled}
                    focused={state.currentFocus === "end"}
                    onChange={handleEndChange}
                    onFocus={() => handleFocus("end")}
                />
            </Pressable>

            <CalendarBottomSheet
                visible={state.calendarOpen}
                onClose={() => dispatch({ type: "cancel" })}
            >
                <CalendarManager
                    calendarDate={
                        state.selectedStart || dayjs().format("YYYY-MM-DD")
                    }
                    selectedStart={state.selectedStart}
                    selectedEnd={state.selectedEnd}
                    minDate={minDate}
                    maxDate={maxDate}
                    disabledDates={disabledDates}
                    withButton={withButton}
                    doneDisabled={!bothFilled}
                    onSelect={handleDaySelect}
                    onDismiss={handleDismiss}
                />
            </CalendarBottomSheet>
        </View>
    );
}
