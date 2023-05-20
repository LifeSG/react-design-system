import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
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
    const [selectedStart, setSelectedStart] = useState<string>("");
    const [selectedEnd, setSelectedEnd] = useState<string>("");
    const [currentFocus, setCurrentFocus] = useState<FocusType>("none");
    const [isStartDirty, setIsStartDirty] = useState<boolean>(false);
    const [isEndDirty, setIsEndDirty] = useState<boolean>(false);

    useEffect(() => {
        setSelectedStart(value);
    }, [value]);

    useEffect(() => {
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

                    if (!isEndDirty) {
                        setCurrentFocus("end");
                    }

                    if (dayjs(val).isAfter(selectedEnd)) {
                        setSelectedEnd("");
                    } else {
                        onChange?.(val, selectedEnd);
                    }
                }}
                onFocus={() => {
                    setCurrentFocus("start");
                }}
                onBlur={() => {
                    // TODO: reset invalid values
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

                    if (!isStartDirty) {
                        setCurrentFocus("start");
                    }

                    if (dayjs(val).isBefore(selectedStart)) {
                        setSelectedStart("");
                    } else {
                        onChange?.(selectedStart, val);
                    }
                }}
                onFocus={() => {
                    setCurrentFocus("end");
                }}
                onBlur={() => {
                    // TODO: reset invalid values
                }}
            />
            {renderIndicateBar()}
            <AnimatedInternalCalendar
                ref={calendarRef}
                type="input"
                isOpen={currentFocus !== "none"}
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
                        } else {
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
                        } else {
                            onChange?.(selectedStart, val);
                        }
                    }
                }}
            />
        </Container>
    );
};
