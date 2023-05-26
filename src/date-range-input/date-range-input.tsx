import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { MediaWidths } from "../media";
import {
    CalendarAction,
    CalendarRef,
    FocusType,
} from "../shared/internal-calendar";
import { AnimatedInternalCalendar } from "../shared/internal-calendar/animated-internal-calendar";
import {
    StandaloneDateInput,
    StandaloneDateInputRef,
} from "../shared/standalone-date-input/standalone-date-input";
import { DateInputHelper } from "../util/date-input-helper";
import { useStateActions } from "../util/use-state-actions";
import { ArrowRight, Container, IndicateBar } from "./date-range-input.style";
import { DateRangeInputProps } from "./types";

interface DateRangeInputState {
    initialStart: string;
    initialEnd: string;
    selectedStart: string;
    selectedEnd: string;
    currentFocus: FocusType;
    isStartDirty: boolean;
    isEndDirty: boolean;
}

const INITIAL_STATE: DateRangeInputState = {
    initialStart: "",
    initialEnd: "",
    selectedStart: "",
    selectedEnd: "",
    currentFocus: "none",
    isStartDirty: false,
    isEndDirty: false,
};

export const DateRangeInput = ({
    between,
    disabled,
    disabledDates,
    error,
    value,
    valueEnd,
    onChange,
    onBlur,
    withButton: _withButton = true,
    readOnly,
    id,
    ...otherProps
}: DateRangeInputProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [hoverValue, setHoverValue] = useState<string>(undefined);
    const [
        { selectedStart, selectedEnd, currentFocus, isStartDirty, isEndDirty },
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
                currentFocus,
            }),
            cancel: (state) => ({
                ...state,
                selectedStart: state.initialStart,
                selectedEnd: state.initialEnd,
                currentFocus: "none",
            }),
            done: (state, payload: { start: string; end: string }) => ({
                ...state,
                selectedStart: payload.start,
                selectedEnd: payload.end,
                initialStart: payload.start,
                initialEnd: payload.end,
                currentFocus: "none",
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

    const nodeRef = useRef<HTMLDivElement>();
    const calendarRef = useRef<CalendarRef>();
    const startInputRef = useRef<StandaloneDateInputRef>();
    const endInputRef = useRef<StandaloneDateInputRef>();
    const isMobile = useMediaQuery({
        maxWidth: MediaWidths.mobileL,
    });

    // show button if it is mobile view
    const withButton = _withButton || isMobile;

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        actions.resetRange({ start: value, end: valueEnd });
    }, [value, valueEnd]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleNodeBlur = (event: React.FocusEvent) => {
        if (!nodeRef.current.contains(event.relatedTarget)) {
            actions.blur();

            startInputRef.current.resetPlaceholder();
            endInputRef.current.resetPlaceholder();

            onBlur?.();
        }
    };

    const handleNodeKeyDown = (event: React.KeyboardEvent) => {
        if (event.code === "Escape") {
            actions.blur();
        }
        if (event.code === "Enter" && !withButton) {
            if (selectedStart && selectedEnd) {
                actions.done({
                    start: selectedStart,
                    end: selectedEnd,
                });
                onChange?.(selectedStart, selectedEnd);
            } else {
                actions.blur();
            }
        }
    };

    const handleStartDateChange = (val: string) => {
        actions.changeStart(val);

        if (
            !val ||
            DateInputHelper.isDateDisabled(val, { disabledDates, between })
        ) {
            // date was cleared or is invalid, remain on this input
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
        actions.changeEnd(val);

        if (
            !val ||
            DateInputHelper.isDateDisabled(val, { disabledDates, between })
        ) {
            // date was cleared or is invalid, remain on this input
            return;
        }

        /*
        - if next input is empty, focus it
        - else if date range is invalid, clear and focus the next input
        - else if date range is valid
            - if next input is still pristine, focus it
            - else if !withButton, confirm the selection and "blur" the field
        */

        if (!selectedStart) {
            actions.focus("start");
            return;
        }

        const isInvalidRange = dayjs(val).isBefore(selectedStart, "day");

        if (isInvalidRange) {
            actions.reselectStart();
            return;
        }

        if (!isStartDirty) {
            actions.focus("start");
            return;
        }

        if (!withButton) {
            actions.done({ start: selectedStart, end: val });
            onChange?.(selectedStart, val);
            return;
        }
    };

    const handleInputFocus = (focusType: FocusType) => () => {
        actions.focus(focusType);
    };

    const handleStartInputBlur = (validFormat: boolean) => {
        if (
            !validFormat ||
            DateInputHelper.isDateDisabled(selectedStart, {
                disabledDates,
                between,
            })
        ) {
            actions.resetStart();
            startInputRef.current.resetInput();
        }
    };

    const handleEndInputBlur = (validFormat: boolean) => {
        if (
            !validFormat ||
            DateInputHelper.isDateDisabled(selectedEnd, {
                disabledDates,
                between,
            })
        ) {
            actions.resetEnd();
            endInputRef.current.resetInput();
        }
    };

    const handleCalendarSelect = (val: string) => {
        if (currentFocus === "start") {
            handleStartDateChange(val);
        } else if (currentFocus === "end") {
            handleEndDateChange(val);
        }
    };

    const handleCalendarDismiss = (action: CalendarAction) => {
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
    // RENDER FUNCTION
    // =============================================================================
    const renderIndicateBar = () => {
        if (disabled || readOnly) return;

        return <IndicateBar $position={currentFocus} $error={error} />;
    };

    return (
        <Container
            ref={nodeRef}
            $disabled={disabled}
            $readOnly={readOnly}
            $error={error}
            id={id}
            data-testid={otherProps["data-testid"]}
            tabIndex={-1}
            onBlur={handleNodeBlur}
            onKeyDown={handleNodeKeyDown}
            {...otherProps}
        >
            <StandaloneDateInput
                ref={startInputRef}
                placeholder="From"
                names={["start-day", "start-month", "start-year"]}
                value={selectedStart}
                disabled={disabled}
                readOnly={readOnly}
                focused={currentFocus === "start"}
                hoverValue={currentFocus === "start" ? hoverValue : undefined}
                onChange={handleStartDateChange}
                onFocus={handleInputFocus("start")}
                onBlur={handleStartInputBlur}
            />
            <ArrowRight />
            <StandaloneDateInput
                ref={endInputRef}
                placeholder="To"
                names={["end-day", "end-month", "end-year"]}
                value={selectedEnd}
                disabled={disabled}
                readOnly={readOnly}
                focused={currentFocus === "end"}
                hoverValue={currentFocus === "end" ? hoverValue : undefined}
                onChange={handleEndDateChange}
                onFocus={handleInputFocus("end")}
                onBlur={handleEndInputBlur}
            />
            {renderIndicateBar()}
            <AnimatedInternalCalendar
                ref={calendarRef}
                type="input"
                variant="range"
                isOpen={currentFocus !== "none"}
                withButton={withButton}
                value={selectedStart}
                endValue={selectedEnd}
                selectWithinRange={isStartDirty || isEndDirty}
                currentFocus={currentFocus}
                disabledDates={disabledDates}
                minDate={between && between[0]} // FIXME: Handle refactoring of between prop to minDate and maxDate
                maxDate={between && between[1]} // FIXME: Same as above
                onSelect={handleCalendarSelect}
                onDismiss={handleCalendarDismiss}
                onHover={handleCalendarHover}
            />
        </Container>
    );
};
