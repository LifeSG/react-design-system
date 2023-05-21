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
import { ArrowRight, Container, IndicateBar } from "./date-range-input.style";
import {
    StandaloneDateInput,
    StandaloneDateInputRef,
} from "./standalone-date-input";
import { DateRangeInputProps } from "./types";
import { DateInputHelper } from "../util/date-input-helper";

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
    const nodeRef = useRef<HTMLDivElement>();
    const calendarRef = useRef<CalendarRef>();
    const startInputRef = useRef<StandaloneDateInputRef>();
    const endInputRef = useRef<StandaloneDateInputRef>();
    const [initialStart, setInitialStart] = useState<string>("");
    const [initialEnd, setInitialEnd] = useState<string>("");
    const [selectedStart, setSelectedStart] = useState<string>("");
    const [selectedEnd, setSelectedEnd] = useState<string>("");
    const [currentFocus, setCurrentFocus] = useState<FocusType>("none");
    const [isStartDirty, setIsStartDirty] = useState<boolean>(false);
    const [isEndDirty, setIsEndDirty] = useState<boolean>(false);
    const [hoverValue, setHoverValue] = useState<string>(undefined);
    const isMobile = useMediaQuery({
        maxWidth: MediaWidths.mobileL,
    });

    // show button if it is mobile view
    const withButton = _withButton || isMobile;

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setInitialStart(value);
        setSelectedStart(value);
    }, [value]);

    useEffect(() => {
        setInitialEnd(valueEnd);
        setSelectedEnd(valueEnd);
    }, [valueEnd]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleNodeBlur = (event: React.FocusEvent) => {
        if (!nodeRef.current.contains(event.relatedTarget)) {
            collapseField();

            if (withButton) {
                resetField();
            }

            startInputRef.current.resetPlaceholder();
            endInputRef.current.resetPlaceholder();

            onBlur?.();
        }
    };

    const handleStartDateChange = (val: string) => {
        setSelectedStart(val);
        setIsStartDirty(true);

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
            setCurrentFocus("end");
            return;
        }

        const isInvalidRange = dayjs(val).isAfter(selectedEnd, "day");

        if (isInvalidRange) {
            setSelectedEnd("");
            setCurrentFocus("end");
            return;
        }

        if (!isEndDirty) {
            setCurrentFocus("end");
            return;
        }

        if (!withButton) {
            confirmFields(val, selectedEnd);
            onChange?.(val, selectedEnd);
            collapseField();
            return;
        }
    };

    const handleEndDateChange = (val: string) => {
        setSelectedEnd(val);
        setIsEndDirty(true);

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
            setCurrentFocus("start");
            return;
        }

        const isInvalidRange = dayjs(val).isBefore(selectedStart, "day");

        if (isInvalidRange) {
            setSelectedStart("");
            setCurrentFocus("start");
            return;
        }

        if (!isStartDirty) {
            setCurrentFocus("start");
            return;
        }

        if (!withButton) {
            confirmFields(selectedStart, val);
            onChange?.(selectedStart, val);
            collapseField();
            return;
        }
    };

    const handleInputFocus = (focusType: FocusType) => () => {
        setCurrentFocus(focusType);
    };

    const handleStartInputBlur = (validFormat: boolean) => {
        if (
            !validFormat ||
            DateInputHelper.isDateDisabled(selectedStart, {
                disabledDates,
                between,
            })
        ) {
            setSelectedStart(initialStart);
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
            setSelectedEnd(initialEnd);
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
                resetField();
                collapseField();
                break;
            case "confirmed":
                confirmFields(selectedStart, selectedEnd);
                collapseField();
                onChange?.(selectedStart, selectedEnd);
                break;
        }
    };

    const handleCalendarHover = (val: string) => {
        setHoverValue(val);
    };

    // =============================================================================
    // HELPERS
    // =============================================================================
    const collapseField = () => {
        setCurrentFocus("none");
        setIsStartDirty(false);
        setIsEndDirty(false);
    };

    const resetField = () => {
        setSelectedStart(initialStart);
        setSelectedEnd(initialEnd);
    };

    const confirmFields = (start: string, end: string) => {
        setInitialStart(start);
        setInitialEnd(end);
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
                between={between}
                onSelect={handleCalendarSelect}
                onDismiss={handleCalendarDismiss}
                onHover={handleCalendarHover}
            />
        </Container>
    );
};
