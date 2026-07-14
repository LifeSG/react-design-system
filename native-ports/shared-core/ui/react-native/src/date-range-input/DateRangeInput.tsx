import React, {
    useCallback,
    useEffect,
    useRef,
    useSyncExternalStore,
} from "react";
import { View, Text, Pressable } from "react-native";
import dayjs from "dayjs";
import { DateRangeInputStore } from "@lifesg/design-core";
import type { FocusType } from "@lifesg/design-core";
import type { DateRangeInputProps, CalendarAction } from "./types";
import { dateRangeInputStyles as s } from "./styles";
import { StandaloneDateInput } from "./StandaloneDateInput";
import { CalendarManager } from "./CalendarManager";
import { CalendarBottomSheet } from "./CalendarBottomSheet";

// =============================================================================
// HOOK -- bridge design-core Store to React via useSyncExternalStore
// =============================================================================

function useStore(store: DateRangeInputStore) {
    return useSyncExternalStore(
        useCallback((cb) => store.subscribe(cb), [store]),
        useCallback(() => store.getState(), [store])
    );
}

// =============================================================================
// COMPONENT
// =============================================================================

export function DateRangeInput({
    value = "",
    valueEnd = "",
    minDate,
    maxDate,
    disabledDates,
    disabled = false,
    error = false,
    withButton = true,
    onChange,
}: DateRangeInputProps) {
    // ---- store ----
    const storeRef = useRef<DateRangeInputStore | null>(null);
    if (!storeRef.current) {
        storeRef.current = new DateRangeInputStore(
            {
                variant: "range",
                numberOfDays: 7,
                withButton,
                readOnly: false,
                disabled,
                allowDisabledSelection: false,
                disabledDates,
                minDate,
                maxDate,
            },
            { onChange }
        );
    }
    const store = storeRef.current;
    const state = useStore(store);

    // ---- sync props -> store ----
    useEffect(() => {
        store.syncValues(value, valueEnd);
    }, [value, valueEnd]);

    useEffect(() => {
        store.updateConfig({
            variant: "range",
            numberOfDays: 7,
            withButton,
            readOnly: false,
            disabled,
            allowDisabledSelection: false,
            disabledDates,
            minDate,
            maxDate,
        });
    }, [withButton, disabled, disabledDates, minDate, maxDate]);

    useEffect(() => {
        store.updateCallbacks({ onChange });
    }, [onChange]);

    // ---- handlers ----
    const handleFocus = useCallback(
        (focus: FocusType) => {
            if (disabled) return;
            store.handleInputFocus(focus);
        },
        [disabled]
    );

    const handleStartChange = useCallback((val: string) => {
        store.handleStartDateChange(val);
    }, []);

    const handleEndChange = useCallback((val: string) => {
        store.handleEndDateChange(val);
    }, []);

    const handleDaySelect = useCallback((date: string) => {
        store.handleCalendarSelect(date);
    }, []);

    const handleDismiss = useCallback((action: CalendarAction) => {
        store.handleCalendarDismiss(action);
    }, []);

    // ---- derived ----
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
                onPress={() => {
                    if (!disabled) {
                        store.handleFocus();
                    }
                }}
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
                onClose={() => store.handleCalendarDismiss("reset")}
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
