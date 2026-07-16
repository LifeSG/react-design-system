import dayjs from "dayjs";

import { isDateDisabled, sanitizeInput } from "./date-input-helper";
import type { DisabledDateConfig } from "./date-input-helper";
import { Store } from "../shared/store";

// =============================================================================
// TYPES
// =============================================================================

export type FocusType = "start" | "end" | "none";

export type DateRangeVariant = "range" | "week" | "fixed-range";

export interface DateRangeInputState {
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
}

export interface DateRangeInputConfig {
    variant: DateRangeVariant;
    numberOfDays: number;
    withButton: boolean;
    readOnly: boolean;
    disabled: boolean;
    allowDisabledSelection: boolean;
    disabledDates?: string[];
    minDate?: string;
    maxDate?: string;
}

export interface DateRangeInputCallbacks {
    onChange?: (startDate: string, endDate: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

export interface CalendarRefActions {
    setCalendarDate: (val: string) => void;
}

export interface InputRefActions {
    resetPlaceholder: () => void;
    resetInput: () => void;
    focusYearRef: () => void;
}

const INITIAL_STATE: DateRangeInputState = {
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
};

// =============================================================================
// STORE
// =============================================================================

export class DateRangeInputStore extends Store<DateRangeInputState> {
    private config: DateRangeInputConfig;
    private callbacks: DateRangeInputCallbacks;
    private calendarRef: CalendarRefActions | null = null;
    private startInputRef: InputRefActions | null = null;
    private endInputRef: InputRefActions | null = null;

    constructor(
        config: DateRangeInputConfig,
        callbacks: DateRangeInputCallbacks = {}
    ) {
        super(INITIAL_STATE);
        this.config = config;
        this.callbacks = callbacks;
    }

    // =========================================================================
    // REF SETTERS — framework layer provides these
    // =========================================================================

    setCalendarRef(ref: CalendarRefActions | null): void {
        this.calendarRef = ref;
    }

    setStartInputRef(ref: InputRefActions | null): void {
        this.startInputRef = ref;
    }

    setEndInputRef(ref: InputRefActions | null): void {
        this.endInputRef = ref;
    }

    // =========================================================================
    // CONFIG / CALLBACK UPDATES — call when props change
    // =========================================================================

    updateConfig(config: Partial<DateRangeInputConfig>): void {
        this.config = { ...this.config, ...config };
    }

    updateCallbacks(callbacks: Partial<DateRangeInputCallbacks>): void {
        this.callbacks = { ...this.callbacks, ...callbacks };
    }

    // =========================================================================
    // PROP SYNC — equivalent to the useEffect on value/valueEnd
    // =========================================================================

    syncValues(value: string | undefined, valueEnd: string | undefined): void {
        const start = sanitizeInput(value);
        const end = sanitizeInput(valueEnd);
        this.setState((s) => ({
            ...s,
            initialStart: start,
            selectedStart: start,
            initialEnd: end,
            selectedEnd: end,
        }));
    }

    // =========================================================================
    // CORE ACTIONS — mirror the 11 reducers from useStateActions
    // =========================================================================

    private blur(): void {
        this.setState((s) => ({
            ...s,
            selectedStart: s.initialStart,
            selectedEnd: s.initialEnd,
            currentFocus: "none",
            calendarOpen: false,
            isStartDirty: false,
            isEndDirty: false,
            focused: false,
        }));
    }

    private dismiss(): void {
        this.setState((s) => ({
            ...s,
            selectedStart: s.initialStart,
            selectedEnd: s.initialEnd,
            currentFocus: "none",
            calendarOpen: false,
            isStartDirty: false,
            isEndDirty: false,
        }));
    }

    private changeStart(val: string): void {
        this.setState((s) => ({
            ...s,
            selectedStart: val,
            isStartDirty: true,
        }));
    }

    private changeEnd(val: string): void {
        this.setState((s) => ({
            ...s,
            selectedEnd: val,
            isEndDirty: true,
        }));
    }

    private reselectStart(): void {
        this.setState((s) => ({
            ...s,
            selectedStart: "",
            currentFocus: "start",
        }));
    }

    private reselectEnd(): void {
        this.setState((s) => ({
            ...s,
            selectedEnd: "",
            currentFocus: "end",
        }));
    }

    private focus(currentFocus: FocusType): void {
        const { variant, readOnly } = this.config;
        const isWeek = variant === "week";
        const isFixed = variant === "fixed-range";
        const resolvedFocus = isWeek
            ? "none"
            : isFixed
            ? "start"
            : currentFocus;

        this.setState((s) => {
            let initialCalendarDate = s.initialCalendarDate;
            if (resolvedFocus === "start") {
                initialCalendarDate = s.selectedStart || initialCalendarDate;
            } else if (resolvedFocus === "end" && s.selectedEnd) {
                initialCalendarDate = s.selectedEnd;
            }

            return {
                ...s,
                currentFocus: resolvedFocus,
                calendarOpen: !readOnly,
                focused: true,
                initialCalendarDate,
            };
        });
    }

    private cancel(): void {
        this.setState((s) => ({
            ...s,
            selectedStart: s.initialStart,
            selectedEnd: s.initialEnd,
            currentFocus: "none",
            calendarOpen: false,
        }));
    }

    private done(start: string, end: string): void {
        this.setState((s) => ({
            ...s,
            selectedStart: start,
            selectedEnd: end,
            initialStart: start,
            initialEnd: end,
            currentFocus: "none",
            calendarOpen: false,
            isStartDirty: false,
            isEndDirty: false,
        }));
    }

    private resetStart(): void {
        this.setState((s) => ({
            ...s,
            selectedStart: s.initialStart,
        }));
    }

    private resetEnd(): void {
        this.setState((s) => ({
            ...s,
            selectedEnd: s.initialEnd,
        }));
    }

    // =========================================================================
    // COMPOSITE HANDLERS — the event handlers from the React component
    // =========================================================================

    handleFocus(): void {
        const { variant, readOnly, disabled } = this.config;
        const s = this.getState();
        const isWeek = variant === "week";
        const isFixed = variant === "fixed-range";

        if (isWeek || isFixed) {
            this.setState((prev) => ({ ...prev, isEndDisabled: true }));
        }
        if (isWeek) {
            this.setState((prev) => ({ ...prev, isStartDisabled: true }));
        }
        if (readOnly || disabled || s.focused) return;

        this.focus("start");
        this.callbacks.onFocus?.();
    }

    handleClose(): void {
        this.blur();

        this.setState((s) => ({
            ...s,
            isStartDisabled: false,
            isEndDisabled: false,
        }));
        this.startInputRef?.resetPlaceholder();
        this.endInputRef?.resetPlaceholder();

        this.callbacks.onBlur?.();
    }

    handleDismiss(): void {
        this.dismiss();
        this.startInputRef?.resetPlaceholder();
        this.endInputRef?.resetPlaceholder();
    }

    handleNodeKeyDown(code: string): void {
        const { withButton } = this.config;
        const s = this.getState();

        if (code === "Enter" && !withButton) {
            if (s.selectedStart && s.selectedEnd) {
                this.done(s.selectedStart, s.selectedEnd);
                this.callbacks.onChange?.(s.selectedStart, s.selectedEnd);
            } else {
                this.dismiss();
                this.startInputRef?.resetPlaceholder();
                this.endInputRef?.resetPlaceholder();
            }
        }
    }

    handleInputFocus(focusType: FocusType): void {
        const { readOnly, variant } = this.config;
        const s = this.getState();

        if (readOnly) return;

        this.focus(focusType);
        this.handleWeekSelectionInputFocus();
        this.handleFixedRangeSelectionInputFocus();

        if (!s.focused) {
            this.callbacks.onFocus?.();
        }
    }

    handleStartDateChange(val: string): void {
        if (this.isDateUnselectable(val)) {
            this.setState((s) => ({ ...s, isUnselectable: true }));
            return;
        }

        this.changeStart(val);
        if (val) this.calendarRef?.setCalendarDate(val);
        this.setState((s) => ({ ...s, isUnselectable: false }));

        const s = this.getState();

        if (!val) {
            if (!this.config.withButton && !s.selectedEnd && s.isEndDirty) {
                this.setState((prev) => ({
                    ...prev,
                    initialStart: "",
                    selectedStart: "",
                    initialEnd: "",
                    selectedEnd: "",
                }));
                this.callbacks.onChange?.("", "");
            }
            return;
        }

        if (!s.selectedEnd) {
            this.focus("end");
            return;
        }

        const isInvalidRange = dayjs(val).isAfter(s.selectedEnd, "day");

        if (isInvalidRange) {
            this.reselectEnd();
            return;
        }

        if (!s.isEndDirty) {
            this.focus("end");
            return;
        }

        if (!this.config.withButton) {
            this.done(val, s.selectedEnd);
            this.callbacks.onChange?.(val, s.selectedEnd);
        }
    }

    handleEndDateChange(val: string): void {
        if (this.isDateUnselectable(val)) {
            this.setState((s) => ({ ...s, isUnselectable: true }));
            return;
        }

        const s = this.getState();
        const isBeforeStartDate = dayjs(val).isBefore(s.selectedStart, "day");

        if (isBeforeStartDate) {
            this.changeStart(val);
            this.calendarRef?.setCalendarDate(val);
            this.reselectEnd();
            return;
        }

        this.changeEnd(val);
        if (val) this.calendarRef?.setCalendarDate(val);

        const afterChange = this.getState();

        if (!val) {
            if (
                !this.config.withButton &&
                !afterChange.selectedStart &&
                afterChange.isStartDirty
            ) {
                this.setState((prev) => ({
                    ...prev,
                    initialStart: "",
                    selectedStart: "",
                    initialEnd: "",
                    selectedEnd: "",
                }));
                this.callbacks.onChange?.("", "");
            }
            return;
        }

        if (!afterChange.selectedStart) {
            this.focus("start");
            return;
        }

        if (!this.config.withButton) {
            this.endInputRef?.focusYearRef();
            this.done(afterChange.selectedStart, val);
            this.callbacks.onChange?.(afterChange.selectedStart, val);
        }
    }

    handleWeekSelectionChange(val: string): void {
        const start = dayjs(val).startOf("week").format("YYYY-MM-DD");
        const end = dayjs(val).endOf("week").format("YYYY-MM-DD");

        this.changeStart(start);
        this.changeEnd(end);
        this.setState((s) => ({ ...s, isUnselectable: false }));

        if (!this.config.withButton) {
            this.endInputRef?.focusYearRef();
            this.done(start, end);
            this.callbacks.onChange?.(start, end);
        }
    }

    handleFixedRangeSelectionChange(val: string): void {
        if (this.isDateUnselectable(val)) {
            this.setState((s) => ({ ...s, isUnselectable: true }));
            return;
        }

        this.changeStart(val);
        this.calendarRef?.setCalendarDate(val);
        this.setState((s) => ({ ...s, isUnselectable: false }));

        if (!val) {
            if (this.config.withButton) {
                this.changeEnd("");
            } else {
                this.setState((prev) => ({
                    ...prev,
                    initialStart: "",
                    selectedStart: "",
                    initialEnd: "",
                    selectedEnd: "",
                }));
                this.callbacks.onChange?.("", "");
            }
            return;
        }

        const start = dayjs(val).format("YYYY-MM-DD");
        const end = dayjs(start)
            .add(this.config.numberOfDays - 1, "day")
            .format("YYYY-MM-DD");

        this.changeStart(start);
        this.changeEnd(end);
        this.setState((s) => ({ ...s, isUnselectable: false }));

        if (!this.config.withButton) {
            this.done(start, end);
            this.startInputRef?.focusYearRef();
            this.callbacks.onChange?.(start, end);
        }
    }

    handleStartInputBlur(validFormat: boolean): void {
        const s = this.getState();
        if (!validFormat || s.isUnselectable) {
            this.resetStart();
            this.startInputRef?.resetInput();
        }
    }

    handleEndInputBlur(validFormat: boolean): void {
        const s = this.getState();
        if (!validFormat || s.isUnselectable) {
            this.resetEnd();
            this.endInputRef?.resetInput();
        }
    }

    handleCalendarSelect(val: string): void {
        const { variant } = this.config;
        const s = this.getState();

        switch (variant) {
            case "week":
                this.handleWeekSelectionChange(val);
                break;
            case "fixed-range":
                this.handleFixedRangeSelectionChange(val);
                break;
            default:
                if (s.currentFocus === "start") {
                    this.handleStartDateChange(val);
                } else if (s.currentFocus === "end") {
                    this.handleEndDateChange(val);
                }
                break;
        }
    }

    handleCalendarDismiss(action: "reset" | "confirmed"): void {
        const { variant } = this.config;
        const s = this.getState();

        switch (action) {
            case "reset":
                this.cancel();
                break;
            case "confirmed":
                this.done(s.selectedStart, s.selectedEnd);
                this.callbacks.onChange?.(s.selectedStart, s.selectedEnd);

                if (variant === "week") break;

                if (this.isValidRange(s.selectedStart, s.selectedEnd)) {
                    if (variant === "range") {
                        this.endInputRef?.focusYearRef();
                    } else {
                        this.startInputRef?.focusYearRef();
                    }
                }
                break;
        }
    }

    handleCalendarHover(val: string): void {
        this.setState((s) => ({ ...s, hoverValue: val }));
    }

    /**
     * Called when the component's blur event fires (framework-specific).
     * The framework layer must determine whether focus left the component
     * by checking relatedTarget against the node, calendar, and floating-ui.
     *
     * @param focusLeftComponent true if focus moved outside both the input
     *   wrapper and the calendar dropdown
     */
    handleBlur(focusLeftComponent: boolean): void {
        if (!focusLeftComponent) return;

        const s = this.getState();
        const shouldBlurWhenClosed = s.focused && !s.calendarOpen;
        const shouldBlurWhenOpen = s.calendarOpen;

        if (shouldBlurWhenClosed || shouldBlurWhenOpen) {
            this.blur();
            this.setState((prev) => ({
                ...prev,
                isEndDisabled: false,
                isStartDisabled: false,
            }));
            this.startInputRef?.resetPlaceholder();
            this.endInputRef?.resetPlaceholder();
            this.callbacks.onBlur?.();
        }
    }

    // =========================================================================
    // COMPUTED / DERIVED — equivalent to inline computations in React render
    // =========================================================================

    getHoverValue(side: "start" | "end"): string | undefined {
        const s = this.getState();
        const { variant, numberOfDays } = this.config;

        switch (variant) {
            case "range":
                return s.currentFocus === side ? s.hoverValue : undefined;

            case "week":
                if (!s.hoverValue) return undefined;
                return side === "start"
                    ? dayjs(s.hoverValue).startOf("week").format("YYYY-MM-DD")
                    : dayjs(s.hoverValue).endOf("week").format("YYYY-MM-DD");

            case "fixed-range":
                if (!s.hoverValue) return undefined;
                return side === "start"
                    ? dayjs(s.hoverValue).format("YYYY-MM-DD")
                    : dayjs(s.hoverValue)
                          .add(numberOfDays - 1, "day")
                          .format("YYYY-MM-DD");
        }
    }

    getSelectWithinRange(): boolean {
        const s = this.getState();
        return s.isStartDirty || s.isEndDirty;
    }

    getStartInputHandler(): (val: string) => void {
        const { variant } = this.config;
        return variant === "fixed-range"
            ? (val: string) => this.handleFixedRangeSelectionChange(val)
            : (val: string) => this.handleStartDateChange(val);
    }

    // =========================================================================
    // PRIVATE HELPERS
    // =========================================================================

    private isDateUnselectable(val: string): boolean {
        return (
            !this.config.allowDisabledSelection &&
            !!val &&
            isDateDisabled(val, this.getDisabledDateConfig())
        );
    }

    private isValidRange(startDate: string, endDate: string): boolean {
        if (!startDate || !endDate) return false;
        return dayjs(startDate).isBefore(endDate, "day");
    }

    private getDisabledDateConfig(): DisabledDateConfig {
        return {
            disabledDates: this.config.disabledDates,
            minDate: this.config.minDate,
            maxDate: this.config.maxDate,
        };
    }

    private handleWeekSelectionInputFocus(): void {
        const { variant } = this.config;
        if (variant !== "week") return;

        const s = this.getState();
        const firstDayOfWeek = s.selectedStart
            ? dayjs(s.selectedStart).startOf("week").format("YYYY-MM-DD")
            : undefined;

        this.setState((prev) => ({
            ...prev,
            isStartDisabled: true,
            isEndDisabled: true,
            initialCalendarDate: firstDayOfWeek ?? prev.initialCalendarDate,
        }));
    }

    private handleFixedRangeSelectionInputFocus(): void {
        const { variant } = this.config;
        if (variant !== "fixed-range") return;

        const s = this.getState();
        this.setState((prev) => ({
            ...prev,
            isEndDisabled: true,
            initialCalendarDate: s.selectedStart || prev.initialCalendarDate,
        }));
    }
}
