import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { MediaWidths } from "../media";
import { CalendarRef, FocusType } from "../shared/internal-calendar";
import { AnimatedInternalCalendar } from "../shared/internal-calendar/animated-internal-calendar";
import { ArrowRight, Container, IndicateBar } from "./date-range-input.style";
import { StandaloneDateInput } from "./standalone-date-input";
import { DateRangeInputProps } from "./types";

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
    const [initialStart, setInitialStart] = useState<string>("");
    const [initialEnd, setInitialEnd] = useState<string>("");
    const [selectedStart, setSelectedStart] = useState<string>("");
    const [selectedEnd, setSelectedEnd] = useState<string>("");
    const [currentFocus, setCurrentFocus] = useState<FocusType>("none");
    const [isStartDirty, setIsStartDirty] = useState<boolean>(false);
    const [isEndDirty, setIsEndDirty] = useState<boolean>(false);
    const isMobile = useMediaQuery({
        maxWidth: MediaWidths.mobileL,
    });

    // show button if it is mobile view
    const withButton = _withButton || isMobile;

    useEffect(() => {
        setInitialStart(value);
        setSelectedStart(value);
    }, [value]);

    useEffect(() => {
        setInitialEnd(valueEnd);
        setSelectedEnd(valueEnd);
    }, [valueEnd]);

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
            onBlur={(e) => {
                if (!nodeRef.current.contains(e.relatedTarget)) {
                    setCurrentFocus("none");
                    setIsStartDirty(false);
                    setIsEndDirty(false);

                    // reset
                    if (withButton) {
                        setSelectedStart(initialStart);
                        setSelectedEnd(initialEnd);
                    }
                }
            }}
            {...otherProps}
        >
            <StandaloneDateInput
                placeholder="From"
                names={["start-day", "start-month", "start-year"]}
                value={selectedStart}
                disabled={disabled}
                readOnly={readOnly}
                focused={currentFocus === "start"}
                fromHover={false}
                onChange={(val) => {
                    setSelectedStart(val);
                    setIsStartDirty(true);

                    if (val && (!isEndDirty || !selectedEnd)) {
                        setCurrentFocus("end");
                    }

                    if (dayjs(val).isAfter(selectedEnd)) {
                        setSelectedEnd("");
                    } else if (!withButton) {
                        onChange?.(val, selectedEnd);
                    }
                }}
                onFocus={() => {
                    setCurrentFocus("start");
                }}
                onBlur={(valid) => {
                    if (!valid) {
                        setSelectedStart(selectedStart);
                    }
                }}
            />
            <ArrowRight />
            <StandaloneDateInput
                placeholder="To"
                names={["end-day", "end-month", "end-year"]}
                value={selectedEnd}
                disabled={disabled}
                readOnly={readOnly}
                focused={currentFocus === "end"}
                fromHover={false}
                onChange={(val) => {
                    setSelectedEnd(val);
                    setIsEndDirty(true);

                    if (val && (!isStartDirty || !selectedStart)) {
                        setCurrentFocus("start");
                    }

                    if (dayjs(val).isBefore(selectedStart)) {
                        setSelectedStart("");
                    } else if (!withButton) {
                        onChange?.(selectedStart, val);
                    }
                }}
                onFocus={() => {
                    setCurrentFocus("end");
                }}
                onBlur={(valid) => {
                    if (!valid) {
                        setSelectedEnd(selectedEnd);
                    }
                }}
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
                onSelect={(val) => {
                    if (currentFocus === "start") {
                        setSelectedStart(val);
                        setIsStartDirty(true);

                        if (!isEndDirty) {
                            setCurrentFocus("end");
                        }

                        if (dayjs(val).isAfter(selectedEnd)) {
                            setSelectedEnd("");
                        } else if (!withButton) {
                            onChange?.(val, selectedEnd);
                        }
                    } else if (currentFocus === "end") {
                        setSelectedEnd(val);
                        setIsEndDirty(true);

                        if (!isStartDirty) {
                            setCurrentFocus("start");
                        }

                        if (dayjs(val).isBefore(selectedStart)) {
                            setSelectedStart("");
                        } else if (!withButton) {
                            onChange?.(selectedStart, val);
                        }
                    }
                }}
                onDismiss={(action) => {
                    switch (action) {
                        case "reset":
                            setSelectedStart(initialStart);
                            setSelectedEnd(initialEnd);
                            setCurrentFocus("none");
                            setIsStartDirty(false);
                            setIsEndDirty(false);
                            break;
                        case "confirmed":
                            setInitialStart(selectedStart);
                            setInitialEnd(selectedEnd);
                            setCurrentFocus("none");
                            setIsStartDirty(false);
                            setIsEndDirty(false);
                            onChange?.(selectedStart, selectedEnd);
                            break;
                    }
                }}
            />
        </Container>
    );
};
