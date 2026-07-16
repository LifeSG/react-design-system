/**
 * DateRangeInputV2 — React Native port consuming @lifesg/design-core store.
 *
 * Full parity with the React DateRangeInput:
 *   - 3 variants: range, week, fixed-range
 *   - dirty tracking (isStartDirty / isEndDirty)
 *   - unselectable validation (disabled dates, min/max)
 *   - hover preview in inputs (calendar hover → input overlay)
 *   - blur / dismiss / cancel distinction
 *   - withButton toggle
 *   - focus management
 */
import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useSyncExternalStore,
} from "react";
import { Pressable, Text, View } from "react-native";

import { DateRangeInputStore } from "../../design-core";
import type {
    DateRangeVariant,
    FocusType,
    InputRefActions,
    CalendarRefActions,
} from "../../design-core";
import dayjs from "dayjs";
import { dateRangeInputStyles as s } from "./styles";
import { StandaloneDateInput } from "./StandaloneDateInput";
import { CalendarManager } from "./CalendarManager";
import { CalendarBottomSheet } from "./CalendarBottomSheet";

// =============================================================================
// PROPS
// =============================================================================

export interface DateRangeInputV2Props {
    value?: string;
    valueEnd?: string;
    minDate?: string;
    maxDate?: string;
    disabledDates?: string[];
    disabled?: boolean;
    readOnly?: boolean;
    error?: boolean;
    variant?: DateRangeVariant;
    numberOfDays?: number;
    withButton?: boolean;
    allowDisabledSelection?: boolean;
    onChange?: (startDate: string, endDate: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

// =============================================================================
// HOOK — bridge design-core Store to React via useSyncExternalStore
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

export function DateRangeInputV2({
    value = "",
    valueEnd = "",
    minDate,
    maxDate,
    disabledDates,
    disabled = false,
    readOnly = false,
    error = false,
    variant = "range",
    numberOfDays = 7,
    withButton = true,
    allowDisabledSelection = false,
    onChange,
    onFocus,
    onBlur,
}: DateRangeInputV2Props) {
    // ---- store ----
    const storeRef = useRef<DateRangeInputStore | null>(null);
    if (!storeRef.current) {
        storeRef.current = new DateRangeInputStore(
            {
                variant,
                numberOfDays,
                withButton,
                readOnly,
                disabled,
                allowDisabledSelection,
                disabledDates,
                minDate,
                maxDate,
            },
            { onChange, onFocus, onBlur }
        );
    }
    const store = storeRef.current;
    const state = useStore(store);

    // ---- sync props → store ----
    useEffect(() => {
        store.syncValues(value, valueEnd);
    }, [value, valueEnd]);

    useEffect(() => {
        store.updateConfig({
            variant,
            numberOfDays,
            withButton,
            readOnly,
            disabled,
            allowDisabledSelection,
            disabledDates,
            minDate,
            maxDate,
        });
    }, [
        variant,
        numberOfDays,
        withButton,
        readOnly,
        disabled,
        allowDisabledSelection,
        disabledDates,
        minDate,
        maxDate,
    ]);

    useEffect(() => {
        store.updateCallbacks({ onChange, onFocus, onBlur });
    }, [onChange, onFocus, onBlur]);

    // ---- imperative refs ----
    const startInputRef = useRef<any>(null);
    const endInputRef = useRef<any>(null);
    const calendarManagerRef = useRef<any>(null);

    useEffect(() => {
        store.setStartInputRef({
            resetPlaceholder: () => startInputRef.current?.resetInput?.(),
            resetInput: () => startInputRef.current?.resetInput?.(),
            focusYearRef: () => startInputRef.current?.focusYear?.(),
        });
        store.setEndInputRef({
            resetPlaceholder: () => endInputRef.current?.resetInput?.(),
            resetInput: () => endInputRef.current?.resetInput?.(),
            focusYearRef: () => endInputRef.current?.focusYear?.(),
        });
        store.setCalendarRef({
            setCalendarDate: (val: string) =>
                calendarManagerRef.current?.setCalendarDate?.(val),
        });
    }, []);

    // ---- handlers ----
    const handleFocus = useCallback(
        (focus: FocusType) => {
            if (disabled || readOnly) return;
            store.handleInputFocus(focus);
        },
        [disabled, readOnly]
    );

    const handleStartChange = useCallback(
        (val: string) => {
            const handler = store.getStartInputHandler();
            handler(val);
        },
        [variant]
    );

    const handleEndChange = useCallback((val: string) => {
        store.handleEndDateChange(val);
    }, []);

    const handleDaySelect = useCallback((date: string) => {
        store.handleCalendarSelect(date);
    }, []);

    const handleDismiss = useCallback((action: "reset" | "confirmed") => {
        store.handleCalendarDismiss(action);
    }, []);

    const handleCalendarHover = useCallback((val: string) => {
        store.handleCalendarHover(val);
    }, []);

    // ---- derived ----
    const bothFilled =
        state.selectedStart &&
        state.selectedEnd &&
        dayjs(state.selectedStart, "YYYY-MM-DD", true).isValid() &&
        dayjs(state.selectedEnd, "YYYY-MM-DD", true).isValid();

    const doneDisabled = !bothFilled;

    const containerStyle = [
        s.container,
        state.calendarOpen && s.containerFocused,
        disabled && s.containerDisabled,
        error && s.containerError,
    ];

    const isWeek = variant === "week";
    const isFixed = variant === "fixed-range";

    return (
        <View>
            <Pressable
                style={containerStyle}
                onPress={() => {
                    if (!disabled && !readOnly) {
                        store.handleFocus();
                    }
                }}
            >
                <StandaloneDateInput
                    ref={startInputRef}
                    value={state.selectedStart}
                    label="Start date"
                    disabled={disabled || state.isStartDisabled}
                    focused={state.currentFocus === "start"}
                    onChange={handleStartChange}
                    onFocus={() => handleFocus("start")}
                />
                <Text style={s.separator}>–</Text>
                <StandaloneDateInput
                    ref={endInputRef}
                    value={state.selectedEnd}
                    label="End date"
                    disabled={disabled || state.isEndDisabled}
                    focused={state.currentFocus === "end"}
                    onChange={handleEndChange}
                    onFocus={() => handleFocus("end")}
                />
            </Pressable>

            <CalendarBottomSheet
                visible={state.calendarOpen && !disabled && !readOnly}
                onClose={() => store.handleCalendarDismiss("reset")}
            >
                <CalendarManager
                    calendarDate={
                        state.initialCalendarDate ||
                        state.selectedStart ||
                        dayjs().format("YYYY-MM-DD")
                    }
                    selectedStart={state.selectedStart}
                    selectedEnd={state.selectedEnd}
                    minDate={minDate}
                    maxDate={maxDate}
                    disabledDates={disabledDates}
                    withButton={withButton}
                    doneDisabled={doneDisabled}
                    variant={variant}
                    numberOfDays={numberOfDays}
                    currentFocus={state.currentFocus}
                    selectWithinRange={state.isStartDirty || state.isEndDirty}
                    allowDisabledSelection={allowDisabledSelection}
                    onSelect={handleDaySelect}
                    onDismiss={handleDismiss}
                    onHover={handleCalendarHover}
                />
            </CalendarBottomSheet>
        </View>
    );
}
