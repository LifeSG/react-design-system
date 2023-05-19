import { useRef } from "react";
import { CalendarRef } from "../shared/internal-calendar";
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

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    const renderIndicateBar = () => {
        if (disabled || readOnly) return;

        return <IndicateBar $position={"none"} $error={error} />;
    };

    return (
        <Container
            ref={nodeRef}
            $disabled={disabled}
            $readOnly={readOnly}
            $error={error}
            id={id}
            data-testid={otherProps["data-testid"]}
            {...otherProps}
        >
            <StandaloneDateInput
                placeholder="From"
                names={["start-day", "start-month", "start-year"]}
                value={""}
                disabled={disabled}
                readOnly={readOnly}
                focused={false}
                fromHover={false}
                onChange={() => {}}
                onFocus={() => {}}
            />
            <ArrowRight />
            <StandaloneDateInput
                placeholder="To"
                names={["end-day", "end-month", "end-year"]}
                value={""}
                disabled={disabled}
                readOnly={readOnly}
                focused={false}
                fromHover={false}
                onChange={() => {}}
                onFocus={() => {}}
            />
            {renderIndicateBar()}
            <AnimatedInternalCalendar ref={calendarRef} type="input" />
        </Container>
    );
};
