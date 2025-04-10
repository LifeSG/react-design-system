import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import {
    DropdownRenderProps,
    ElementWithDropdown,
} from "../shared/dropdown-wrapper";
import {
    CalendarAction,
    CalendarDropdown,
    FocusType,
    InternalCalendarRef,
} from "../shared/internal-calendar";
import { RangeInputInnerContainer } from "../shared/range-input-inner-container";
import {
    StandaloneDateInput,
    StandaloneDateInputRef,
} from "../shared/standalone-date-input/standalone-date-input";
import { DateHelper, DateInputHelper, useContainerQuery } from "../util";
import { useStateActions } from "../util/use-state-actions";
import {
    Container,
    InputContainer,
    MOBILE_WRAP_WIDTH,
} from "./date-range-input.style";
import { DateRangeInputProps } from "./types";

interface DateRangeInputState {
    initialStart: string;
    initialEnd: string;
    selectedStart: string;
    selectedEnd: string;
    currentFocus: FocusType;
    calendarOpen: boolean;
    isStartDirty: boolean;
    isEndDirty: boolean;
    focused: boolean;
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
};

export const DateRangeInput = ({
    minDate,
    maxDate,
    disabled,
    disabledDates,
    error,
    hideInputKeyboard,
    value,
    valueEnd,
    onChange,
    onFocus,
    onBlur,
    onYearMonthDisplayChange,
    withButton = true,
    variant = "range",
    numberOfDays = 7,
    readOnly,
    id,
    allowDisabledSelection,
    zIndex,
    ...otherProps
}: DateRangeInputProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [initialCalendarDate, setInitialCalendarDate] = useState<string>();
    const [hoverValue, setHoverValue] = useState<string>(undefined);
    const [isStartDisabled, setIsStartDisabled] = useState<boolean>(false);
    const [isEndDisabled, setIsEndDisabled] = useState<boolean>(false);
    const isWeekSelection = variant === "week";
    const isFixedRangeSelection = variant === "fixed-range";

    const [
        {
            selectedStart,
            selectedEnd,
            currentFocus,
            calendarOpen,
            isStartDirty,
            isEndDirty,
            focused,
        },
        actions,
    ] = useStateActions({
        name: "date-range-input",
        initialState: INITIAL_STATE,
        reducers: {
            blur: (state) => ({
                ...state,
                selectedStart: state.initialStart,
                selectedEnd: state.initialEnd,
                currentFocus: "none",
                calendarOpen: false,
                isStartDirty: false,
                isEndDirty: false,
                focused: false,
            }),
            dismiss: (state) => ({
                ...state,
                selectedStart: state.initialStart,
                selectedEnd: state.initialEnd,
                currentFocus: "none",
                calendarOpen: false,
                isStartDirty: false,
                isEndDirty: false,
            }),
            changeStart: (state, val: string) => ({
                ...state,
                selectedStart: val,
                isStartDirty: true,
            }),
            changeEnd: (state, val: string) => ({
                ...state,
                selectedEnd: val,
                isEndDirty: true,
            }),
            reselectStart: (state) => ({
                ...state,
                selectedStart: "",
                currentFocus: "start",
            }),
            reselectEnd: (state) => ({
                ...state,
                selectedEnd: "",
                currentFocus: "end",
            }),
            focus: (state, currentFocus: FocusType) => ({
                ...state,
                currentFocus: isWeekSelection
                    ? "none"
                    : isFixedRangeSelection
                    ? "start"
                    : currentFocus,
                calendarOpen: !readOnly,
                focused: true,
            }),
            cancel: (state) => ({
                ...state,
                selectedStart: state.initialStart,
                selectedEnd: state.initialEnd,
                currentFocus: "none",
                calendarOpen: false,
            }),
            done: (state, payload: { start: string; end: string }) => ({
                ...state,
                selectedStart: payload.start,
                selectedEnd: payload.end,
                initialStart: payload.start,
                initialEnd: payload.end,
                currentFocus: "none",
                calendarOpen: false,
                isStartDirty: false,
                isEndDirty: false,
            }),
            resetStart: (state) => ({
                ...state,
                selectedStart: state.initialStart,
            }),
            resetEnd: (state) => ({
                ...state,
                selectedEnd: state.initialEnd,
            }),
            resetRange: (state, payload: { start: string; end: string }) => ({
                ...state,
                initialStart: payload.start,
                selectedStart: payload.start,
                initialEnd: payload.end,
                selectedEnd: payload.end,
            }),
        },
    });

    // tracks if current value in focused input is allowed for selection
    const isUnselectable = useRef<boolean>(false);
    const nodeRef = useRef<HTMLDivElement>();
    const calendarRef = useRef<InternalCalendarRef>();
    const startInputRef = useRef<StandaloneDateInputRef>();
    const endInputRef = useRef<StandaloneDateInputRef>();
    const shouldWrap = useContainerQuery({
        maxWidth: MOBILE_WRAP_WIDTH,
        targetRef: nodeRef,
    });

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        actions.resetRange({
            start: DateInputHelper.sanitizeInput(value),
            end: DateInputHelper.sanitizeInput(valueEnd),
        });
    }, [value, valueEnd]);

    useEffect(() => {
        if (currentFocus === "start") {
            setInitialCalendarDate(selectedStart);
        } else if (currentFocus === "end") {
            setInitialCalendarDate(selectedEnd);
        }
    }, [currentFocus]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleNodeKeyDown = (event: React.KeyboardEvent) => {
        if (event.code === "Enter" && !withButton) {
            if (selectedStart && selectedEnd) {
                actions.done({
                    start: selectedStart,
                    end: selectedEnd,
                });
                onChange?.(selectedStart, selectedEnd);
            } else {
                actions.dismiss();
                nodeRef.current?.focus();
                startInputRef.current?.resetPlaceholder();
                endInputRef.current?.resetPlaceholder();
            }
        }
    };

    const handleClose = () => {
        actions.blur();

        setIsStartDisabled(false);
        setIsEndDisabled(false);
        startInputRef.current?.resetPlaceholder();
        endInputRef.current?.resetPlaceholder();

        onBlur?.();
    };

    const handleDismiss = () => {
        actions.dismiss();

        nodeRef.current?.focus();
        startInputRef.current?.resetPlaceholder();
        endInputRef.current?.resetPlaceholder();
    };

    const handleStartDateChange = (val: string) => {
        if (isDateUnselectable(val)) {
            // date is invalid, remain on this input
            isUnselectable.current = true;
            return;
        }

        actions.changeStart(val);
        calendarRef.current?.setCalendarDate(val);
        isUnselectable.current = false;

        if (!val) {
            // if both start and end were cleared, confirm the selection
            // and remain on this input
            if (!withButton && !selectedEnd && isEndDirty) {
                actions.resetRange({ start: "", end: "" });
                onChange?.("", "");
            }
            return;
        }

        /*
        - if next input is empty, focus it
        - else if date range is invalid, clear and focus the next input
        - else if date range is valid
            - if next input is still pristine, focus it
            - else if !withButton, confirm the selection and "blur" the field
        */

        if (!selectedEnd) {
            actions.focus("end");
            return;
        }

        const isInvalidRange = dayjs(val).isAfter(selectedEnd, "day");

        if (isInvalidRange) {
            actions.reselectEnd();
            return;
        }

        if (!isEndDirty) {
            actions.focus("end");
            return;
        }

        if (!withButton) {
            actions.done({ start: val, end: selectedEnd });
            onChange?.(val, selectedEnd);
            return;
        }
    };

    const handleEndDateChange = (val: string) => {
        if (isDateUnselectable(val)) {
            // date is invalid, remain on this input
            isUnselectable.current = true;
            return;
        }

        const isInvalidRange = dayjs(val).isBefore(selectedStart, "day");

        // if date range is invalid, set selected value as start and reselect end
        if (isInvalidRange) {
            actions.changeStart(val);
            calendarRef.current?.setCalendarDate(val);
            actions.reselectEnd();
            return;
        }

        actions.changeEnd(val);
        calendarRef.current?.setCalendarDate(val);

        if (!val) {
            // if both start and end were cleared, confirm the selection
            // and remain on this input
            if (!withButton && !selectedStart && isStartDirty) {
                actions.resetRange({ start: "", end: "" });
                onChange?.("", "");
            }
            return;
        }

        /*
        - if next input is empty, focus it
        - else if !withButton, confirm the selection and "blur" the field
        */

        if (!selectedStart) {
            actions.focus("start");
            return;
        }

        if (!withButton) {
            actions.done({ start: selectedStart, end: val });
            onChange?.(selectedStart, val);
            return;
        }
    };

    const handleWeekSelectionChange = (val: string) => {
        const start = dayjs(val).startOf("week").format("YYYY-MM-DD");
        const end = dayjs(val).endOf("week").format("YYYY-MM-DD");

        actions.changeStart(start);
        actions.changeEnd(end);
        isUnselectable.current = false;

        if (!withButton) {
            actions.done({ start, end });
            onChange?.(start, end);
            return;
        }
    };

    const handleFixedRangeSelectionChange = (val: string) => {
        if (isDateUnselectable(val)) {
            isUnselectable.current = true;
            return;
        }

        actions.changeStart(val);
        calendarRef.current?.setCalendarDate(val);
        isUnselectable.current = false;

        if (!val) {
            if (withButton) {
                actions.changeEnd("");
            } else {
                actions.resetRange({ start: "", end: "" });
                onChange?.("", "");
            }
            return;
        }

        const start = dayjs(val).format("YYYY-MM-DD");
        const end = dayjs(start)
            .add(numberOfDays - 1, "day")
            .format("YYYY-MM-DD");
        actions.changeStart(start);
        actions.changeEnd(end);
        isUnselectable.current = false;

        if (!withButton) {
            actions.done({ start, end });
            onChange?.(start, end);
            return;
        }
    };

    const handleFocus = () => {
        if (readOnly || disabled || focused) return;

        actions.focus("start");
        onFocus?.();
    };

    const handleBlur = (e: React.FocusEvent) => {
        if (
            focused &&
            !calendarOpen &&
            !nodeRef.current?.contains(e.relatedTarget as Node)
        ) {
            actions.blur();

            setIsStartDisabled(false);
            setIsEndDisabled(false);
            startInputRef.current?.resetPlaceholder();
            endInputRef.current?.resetPlaceholder();

            onBlur?.();
        }
    };

    const handleInputFocus =
        (focusType: FocusType) => (event: React.FocusEvent) => {
            event.stopPropagation();

            if (readOnly) return;

            actions.focus(focusType);

            handleWeekSelectionInputFocus();
            handleFixedRangeSelectionInputFocus();

            if (!focused) {
                onFocus?.();
            }
        };

    const handleWeekSelectionInputFocus = () => {
        if (isWeekSelection) {
            const firstDayOfWeek = DateHelper.toDayjs(selectedStart)
                .startOf("week")
                .format("YYYY-MM-DD");

            setIsStartDisabled(true);
            setIsEndDisabled(true);
            setInitialCalendarDate(firstDayOfWeek);
        }
    };

    const handleFixedRangeSelectionInputFocus = () => {
        if (isFixedRangeSelection) {
            setIsEndDisabled(true);
            setInitialCalendarDate(selectedStart);
        }
    };

    const handleStartInputBlur = (validFormat: boolean) => {
        if (!validFormat || isUnselectable.current) {
            actions.resetStart();
            startInputRef.current?.resetInput();
        }
    };

    const handleEndInputBlur = (validFormat: boolean) => {
        if (!validFormat || isUnselectable.current) {
            actions.resetEnd();
            endInputRef.current?.resetInput();
        }
    };

    const handleCalendarSelect = (val: string) => {
        switch (variant) {
            case "week":
                handleWeekSelectionChange(val);
                break;
            case "fixed-range":
                handleFixedRangeSelectionChange(val);
                break;
            default:
                if (currentFocus === "start") {
                    handleStartDateChange(val);
                } else if (currentFocus === "end") {
                    handleEndDateChange(val);
                }
                break;
        }
    };

    const handleCalendarDismiss = (action: CalendarAction) => {
        nodeRef.current?.focus();

        switch (action) {
            case "reset":
                actions.cancel();
                break;
            case "confirmed":
                actions.done({ start: selectedStart, end: selectedEnd });
                onChange?.(selectedStart, selectedEnd);
                break;
        }
    };

    const handleCalendarHover = (val: string) => {
        setHoverValue(val);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const isDateUnselectable = (val: string) => {
        return (
            !allowDisabledSelection &&
            val &&
            DateInputHelper.isDateDisabled(val, {
                disabledDates,
                minDate,
                maxDate,
            })
        );
    };

    const getHoverValue = (getValue: Exclude<FocusType, "none">) => {
        let values = {
            start: undefined,
            end: undefined,
        };

        switch (variant) {
            case "range":
                values = {
                    start: currentFocus === "start" ? hoverValue : undefined,
                    end: currentFocus === "end" ? hoverValue : undefined,
                };
                break;
            case "week":
                if (!hoverValue) return;

                values = {
                    start: dayjs(hoverValue)
                        .startOf("week")
                        .format("YYYY-MM-DD"),
                    end: dayjs(hoverValue).endOf("week").format("YYYY-MM-DD"),
                };
                break;
            case "fixed-range":
                if (!hoverValue) return;

                values = {
                    start: dayjs(hoverValue).format("YYYY-MM-DD"),
                    end: dayjs(hoverValue)
                        .add(numberOfDays - 1, "day")
                        .format("YYYY-MM-DD"),
                };
                break;
        }
        return values[getValue];
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderInput = () => {
        return (
            <Container
                ref={nodeRef}
                tabIndex={-1}
                onFocus={handleFocus}
                onBlur={handleBlur}
                $focused={focused}
                $disabled={disabled}
                $readOnly={readOnly}
                $error={error}
                $wrap={shouldWrap}
                id={id}
                data-testid={otherProps["data-testid"]}
                onKeyDown={handleNodeKeyDown}
                {...otherProps}
            >
                <RangeInputInnerContainer
                    currentActive={currentFocus}
                    wrap={shouldWrap}
                    error={error}
                >
                    <InputContainer $wrap={shouldWrap}>
                        <StandaloneDateInput
                            ref={startInputRef}
                            placeholder="From"
                            names={["start-day", "start-month", "start-year"]}
                            value={selectedStart}
                            disabled={disabled}
                            readOnly={isStartDisabled || readOnly}
                            focused={currentFocus === "start"}
                            hoverValue={getHoverValue("start")}
                            onChange={
                                isFixedRangeSelection
                                    ? handleFixedRangeSelectionChange
                                    : handleStartDateChange
                            }
                            onFocus={handleInputFocus("start")}
                            onBlur={handleStartInputBlur}
                            hideInputKeyboard={hideInputKeyboard}
                        />
                    </InputContainer>
                    <InputContainer $wrap={shouldWrap}>
                        <StandaloneDateInput
                            ref={endInputRef}
                            placeholder="To"
                            names={["end-day", "end-month", "end-year"]}
                            value={selectedEnd}
                            disabled={disabled}
                            readOnly={isEndDisabled || readOnly}
                            focused={currentFocus === "end"}
                            hoverValue={getHoverValue("end")}
                            onChange={handleEndDateChange}
                            onFocus={handleInputFocus("end")}
                            onBlur={handleEndInputBlur}
                            hideInputKeyboard={hideInputKeyboard}
                        />
                    </InputContainer>
                </RangeInputInnerContainer>
            </Container>
        );
    };

    const renderCalendar = ({ elementWidth }: DropdownRenderProps) => {
        return (
            <CalendarDropdown
                ref={calendarRef}
                type="input"
                variant={variant}
                initialCalendarDate={initialCalendarDate}
                withButton={withButton}
                value={selectedStart}
                endValue={selectedEnd}
                selectWithinRange={isStartDirty || isEndDirty}
                currentFocus={currentFocus}
                disabledDates={disabledDates}
                minDate={minDate}
                maxDate={maxDate}
                allowDisabledSelection={allowDisabledSelection}
                onSelect={handleCalendarSelect}
                onDismiss={handleCalendarDismiss}
                onHover={handleCalendarHover}
                onYearMonthDisplayChange={onYearMonthDisplayChange}
                numberOfDays={numberOfDays}
                width={elementWidth}
            />
        );
    };

    return (
        <ElementWithDropdown
            enabled={!readOnly && !disabled}
            isOpen={calendarOpen}
            onClose={handleClose}
            onDismiss={handleDismiss}
            renderElement={renderInput}
            renderDropdown={renderCalendar}
            customZIndex={zIndex}
            offset={16}
        />
    );
};
