import dayjs from "dayjs";
import { createStore as zustandCreateStore } from "zustand/vanilla";

import { isDateDisabled, sanitizeInput } from "./date-input-helper";
import type { DisabledDateConfig } from "./date-input-helper";
import type {
    CalendarRefActions,
    DateRangeInputCallbacks,
    DateRangeInputConfig,
    DateRangeVariant,
    FocusType,
    InputRefActions,
} from "./store";

// =============================================================================
// TYPES
// =============================================================================

export interface DateRangeInputZustandState {
    initialStart: string;
    initialEnd: string;
    selectedStart: string;
    selectedEnd: string;
    currentFocus: FocusType;
    calendarOpen: boolean;
    isStartDirty: boolean;
    isEndDirty: boolean;
    focused: boolean;
    initialCalendarDate: string | undefined;
    hoverValue: string | undefined;
    isStartDisabled: boolean;
    isEndDisabled: boolean;
    isUnselectable: boolean;

    // actions
    syncValues: (
        value: string | undefined,
        valueEnd: string | undefined
    ) => void;
    handleFocus: () => void;
    handleClose: () => void;
    handleDismiss: () => void;
    handleNodeKeyDown: (code: string) => void;
    handleInputFocus: (focusType: FocusType) => void;
    handleStartDateChange: (val: string) => void;
    handleEndDateChange: (val: string) => void;
    handleWeekSelectionChange: (val: string) => void;
    handleFixedRangeSelectionChange: (val: string) => void;
    handleStartInputBlur: (validFormat: boolean) => void;
    handleEndInputBlur: (validFormat: boolean) => void;
    handleCalendarSelect: (val: string) => void;
    handleCalendarDismiss: (action: "reset" | "confirmed") => void;
    handleCalendarHover: (val: string) => void;
    handleBlur: (focusLeftComponent: boolean) => void;
    getHoverValue: (side: "start" | "end") => string | undefined;
    getSelectWithinRange: () => boolean;
    getStartInputHandler: () => (val: string) => void;
    setCalendarRef: (ref: CalendarRefActions | null) => void;
    setStartInputRef: (ref: InputRefActions | null) => void;
    setEndInputRef: (ref: InputRefActions | null) => void;
    updateConfig: (config: Partial<DateRangeInputConfig>) => void;
    updateCallbacks: (callbacks: Partial<DateRangeInputCallbacks>) => void;
}

// =============================================================================
// FACTORY
// =============================================================================

export function createDateRangeInputStore(
    config: DateRangeInputConfig,
    callbacks: DateRangeInputCallbacks = {}
) {
    let _config = { ...config };
    let _callbacks = { ...callbacks };
    let _calendarRef: CalendarRefActions | null = null;
    let _startInputRef: InputRefActions | null = null;
    let _endInputRef: InputRefActions | null = null;

    // ---- private helpers ----

    function isDateUnselectable(val: string): boolean {
        return (
            !_config.allowDisabledSelection &&
            !!val &&
            isDateDisabled(val, getDisabledDateConfig())
        );
    }

    function isValidRange(startDate: string, endDate: string): boolean {
        if (!startDate || !endDate) return false;
        return dayjs(startDate).isBefore(endDate, "day");
    }

    function getDisabledDateConfig(): DisabledDateConfig {
        return {
            disabledDates: _config.disabledDates,
            minDate: _config.minDate,
            maxDate: _config.maxDate,
        };
    }

    function resolveFocus(currentFocus: FocusType): FocusType {
        const isWeek = _config.variant === "week";
        const isFixed = _config.variant === "fixed-range";
        return isWeek ? "none" : isFixed ? "start" : currentFocus;
    }

    // ---- core state transitions (pure functions on state) ----

    function blurState(
        s: DateRangeInputZustandState
    ): Partial<DateRangeInputZustandState> {
        return {
            selectedStart: s.initialStart,
            selectedEnd: s.initialEnd,
            currentFocus: "none",
            calendarOpen: false,
            isStartDirty: false,
            isEndDirty: false,
            focused: false,
        };
    }

    function dismissState(
        s: DateRangeInputZustandState
    ): Partial<DateRangeInputZustandState> {
        return {
            selectedStart: s.initialStart,
            selectedEnd: s.initialEnd,
            currentFocus: "none",
            calendarOpen: false,
            isStartDirty: false,
            isEndDirty: false,
        };
    }

    function doneState(
        start: string,
        end: string
    ): Partial<DateRangeInputZustandState> {
        return {
            selectedStart: start,
            selectedEnd: end,
            initialStart: start,
            initialEnd: end,
            currentFocus: "none",
            calendarOpen: false,
            isStartDirty: false,
            isEndDirty: false,
        };
    }

    function focusState(
        s: DateRangeInputZustandState,
        currentFocus: FocusType
    ): Partial<DateRangeInputZustandState> {
        const resolved = resolveFocus(currentFocus);
        let initialCalendarDate = s.initialCalendarDate;
        if (resolved === "start") {
            initialCalendarDate = s.selectedStart || initialCalendarDate;
        } else if (resolved === "end" && s.selectedEnd) {
            initialCalendarDate = s.selectedEnd;
        }
        return {
            currentFocus: resolved,
            calendarOpen: !_config.readOnly,
            focused: true,
            initialCalendarDate,
        };
    }

    // ---- store ----

    return zustandCreateStore<DateRangeInputZustandState>((set, get) => ({
        initialStart: "",
        initialEnd: "",
        selectedStart: "",
        selectedEnd: "",
        currentFocus: "none",
        calendarOpen: false,
        isStartDirty: false,
        isEndDirty: false,
        focused: false,
        initialCalendarDate: undefined,
        hoverValue: undefined,
        isStartDisabled: false,
        isEndDisabled: false,
        isUnselectable: false,

        setCalendarRef: (ref) => {
            _calendarRef = ref;
        },
        setStartInputRef: (ref) => {
            _startInputRef = ref;
        },
        setEndInputRef: (ref) => {
            _endInputRef = ref;
        },
        updateConfig: (c) => {
            _config = { ..._config, ...c };
        },
        updateCallbacks: (cb) => {
            _callbacks = { ..._callbacks, ...cb };
        },

        syncValues: (value, valueEnd) => {
            const start = sanitizeInput(value);
            const end = sanitizeInput(valueEnd);
            set({
                initialStart: start,
                selectedStart: start,
                initialEnd: end,
                selectedEnd: end,
            });
        },

        handleFocus: () => {
            const s = get();
            const isWeek = _config.variant === "week";
            const isFixed = _config.variant === "fixed-range";

            if (isWeek || isFixed) set({ isEndDisabled: true });
            if (isWeek) set({ isStartDisabled: true });
            if (_config.readOnly || _config.disabled || s.focused) return;

            set(focusState(get(), "start"));
            _callbacks.onFocus?.();
        },

        handleClose: () => {
            set(blurState(get()));
            set({ isStartDisabled: false, isEndDisabled: false });
            _startInputRef?.resetPlaceholder();
            _endInputRef?.resetPlaceholder();
            _callbacks.onBlur?.();
        },

        handleDismiss: () => {
            set(dismissState(get()));
            _startInputRef?.resetPlaceholder();
            _endInputRef?.resetPlaceholder();
        },

        handleNodeKeyDown: (code) => {
            const s = get();
            if (code === "Enter" && !_config.withButton) {
                if (s.selectedStart && s.selectedEnd) {
                    set(doneState(s.selectedStart, s.selectedEnd));
                    _callbacks.onChange?.(s.selectedStart, s.selectedEnd);
                } else {
                    set(dismissState(get()));
                    _startInputRef?.resetPlaceholder();
                    _endInputRef?.resetPlaceholder();
                }
            }
        },

        handleInputFocus: (focusType) => {
            const s = get();
            if (_config.readOnly) return;
            set(focusState(get(), focusType));

            if (_config.variant === "week") {
                const firstDayOfWeek = s.selectedStart
                    ? dayjs(s.selectedStart)
                          .startOf("week")
                          .format("YYYY-MM-DD")
                    : undefined;
                set({
                    isStartDisabled: true,
                    isEndDisabled: true,
                    ...(firstDayOfWeek
                        ? { initialCalendarDate: firstDayOfWeek }
                        : {}),
                });
            }
            if (_config.variant === "fixed-range") {
                set({
                    isEndDisabled: true,
                    initialCalendarDate:
                        s.selectedStart || get().initialCalendarDate,
                });
            }

            if (!s.focused) {
                _callbacks.onFocus?.();
            }
        },

        handleStartDateChange: (val) => {
            if (isDateUnselectable(val)) {
                set({ isUnselectable: true });
                return;
            }

            set({
                selectedStart: val,
                isStartDirty: true,
                isUnselectable: false,
            });
            if (val) _calendarRef?.setCalendarDate(val);

            const s = get();
            if (!val) {
                if (!_config.withButton && !s.selectedEnd && s.isEndDirty) {
                    set({
                        initialStart: "",
                        selectedStart: "",
                        initialEnd: "",
                        selectedEnd: "",
                    });
                    _callbacks.onChange?.("", "");
                }
                return;
            }
            if (!s.selectedEnd) {
                set(focusState(get(), "end"));
                return;
            }
            if (dayjs(val).isAfter(s.selectedEnd, "day")) {
                set({ selectedEnd: "", currentFocus: "end" });
                return;
            }
            if (!s.isEndDirty) {
                set(focusState(get(), "end"));
                return;
            }
            if (!_config.withButton) {
                set(doneState(val, s.selectedEnd));
                _callbacks.onChange?.(val, s.selectedEnd);
            }
        },

        handleEndDateChange: (val) => {
            if (isDateUnselectable(val)) {
                set({ isUnselectable: true });
                return;
            }

            const s = get();
            if (dayjs(val).isBefore(s.selectedStart, "day")) {
                set({ selectedStart: val, isStartDirty: true });
                _calendarRef?.setCalendarDate(val);
                set({ selectedEnd: "", currentFocus: "end" });
                return;
            }

            set({ selectedEnd: val, isEndDirty: true });
            if (val) _calendarRef?.setCalendarDate(val);

            const afterChange = get();
            if (!val) {
                if (
                    !_config.withButton &&
                    !afterChange.selectedStart &&
                    afterChange.isStartDirty
                ) {
                    set({
                        initialStart: "",
                        selectedStart: "",
                        initialEnd: "",
                        selectedEnd: "",
                    });
                    _callbacks.onChange?.("", "");
                }
                return;
            }
            if (!afterChange.selectedStart) {
                set(focusState(get(), "start"));
                return;
            }
            if (!_config.withButton) {
                _endInputRef?.focusYearRef();
                set(doneState(afterChange.selectedStart, val));
                _callbacks.onChange?.(afterChange.selectedStart, val);
            }
        },

        handleWeekSelectionChange: (val) => {
            const start = dayjs(val).startOf("week").format("YYYY-MM-DD");
            const end = dayjs(val).endOf("week").format("YYYY-MM-DD");
            set({
                selectedStart: start,
                isStartDirty: true,
                selectedEnd: end,
                isEndDirty: true,
                isUnselectable: false,
            });

            if (!_config.withButton) {
                _endInputRef?.focusYearRef();
                set(doneState(start, end));
                _callbacks.onChange?.(start, end);
            }
        },

        handleFixedRangeSelectionChange: (val) => {
            if (isDateUnselectable(val)) {
                set({ isUnselectable: true });
                return;
            }

            set({
                selectedStart: val,
                isStartDirty: true,
                isUnselectable: false,
            });
            _calendarRef?.setCalendarDate(val);

            if (!val) {
                if (_config.withButton) {
                    set({ selectedEnd: "", isEndDirty: true });
                } else {
                    set({
                        initialStart: "",
                        selectedStart: "",
                        initialEnd: "",
                        selectedEnd: "",
                    });
                    _callbacks.onChange?.("", "");
                }
                return;
            }

            const start = dayjs(val).format("YYYY-MM-DD");
            const end = dayjs(start)
                .add(_config.numberOfDays - 1, "day")
                .format("YYYY-MM-DD");
            set({
                selectedStart: start,
                isStartDirty: true,
                selectedEnd: end,
                isEndDirty: true,
                isUnselectable: false,
            });

            if (!_config.withButton) {
                set(doneState(start, end));
                _startInputRef?.focusYearRef();
                _callbacks.onChange?.(start, end);
            }
        },

        handleStartInputBlur: (validFormat) => {
            const s = get();
            if (!validFormat || s.isUnselectable) {
                set({ selectedStart: s.initialStart });
                _startInputRef?.resetInput();
            }
        },

        handleEndInputBlur: (validFormat) => {
            const s = get();
            if (!validFormat || s.isUnselectable) {
                set({ selectedEnd: s.initialEnd });
                _endInputRef?.resetInput();
            }
        },

        handleCalendarSelect: (val) => {
            const s = get();
            switch (_config.variant) {
                case "week":
                    get().handleWeekSelectionChange(val);
                    break;
                case "fixed-range":
                    get().handleFixedRangeSelectionChange(val);
                    break;
                default:
                    if (s.currentFocus === "start") {
                        get().handleStartDateChange(val);
                    } else if (s.currentFocus === "end") {
                        get().handleEndDateChange(val);
                    }
                    break;
            }
        },

        handleCalendarDismiss: (action) => {
            const s = get();
            switch (action) {
                case "reset":
                    set({
                        selectedStart: s.initialStart,
                        selectedEnd: s.initialEnd,
                        currentFocus: "none",
                        calendarOpen: false,
                    });
                    break;
                case "confirmed":
                    set(doneState(s.selectedStart, s.selectedEnd));
                    _callbacks.onChange?.(s.selectedStart, s.selectedEnd);

                    if (_config.variant === "week") break;
                    if (isValidRange(s.selectedStart, s.selectedEnd)) {
                        if (_config.variant === "range") {
                            _endInputRef?.focusYearRef();
                        } else {
                            _startInputRef?.focusYearRef();
                        }
                    }
                    break;
            }
        },

        handleCalendarHover: (val) => {
            set({ hoverValue: val });
        },

        handleBlur: (focusLeftComponent) => {
            if (!focusLeftComponent) return;
            const s = get();
            if ((s.focused && !s.calendarOpen) || s.calendarOpen) {
                set(blurState(get()));
                set({ isEndDisabled: false, isStartDisabled: false });
                _startInputRef?.resetPlaceholder();
                _endInputRef?.resetPlaceholder();
                _callbacks.onBlur?.();
            }
        },

        getHoverValue: (side) => {
            const s = get();
            switch (_config.variant) {
                case "range":
                    return s.currentFocus === side ? s.hoverValue : undefined;
                case "week":
                    if (!s.hoverValue) return undefined;
                    return side === "start"
                        ? dayjs(s.hoverValue)
                              .startOf("week")
                              .format("YYYY-MM-DD")
                        : dayjs(s.hoverValue)
                              .endOf("week")
                              .format("YYYY-MM-DD");
                case "fixed-range":
                    if (!s.hoverValue) return undefined;
                    return side === "start"
                        ? dayjs(s.hoverValue).format("YYYY-MM-DD")
                        : dayjs(s.hoverValue)
                              .add(_config.numberOfDays - 1, "day")
                              .format("YYYY-MM-DD");
            }
        },

        getSelectWithinRange: () => {
            const s = get();
            return s.isStartDirty || s.isEndDirty;
        },

        getStartInputHandler: () => {
            return _config.variant === "fixed-range"
                ? (val: string) => get().handleFixedRangeSelectionChange(val)
                : (val: string) => get().handleStartDateChange(val);
        },
    }));
}
