import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { InternalCalendar } from "../shared/internal-calendar";
import { Border, Colour, Radius, Spacing } from "../theme";
import { CalendarProps } from "./types";

export const Calendar = (props: CalendarProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const {
        className,
        styleType = "bordered",
        variant,
        id,
        minDate,
        maxDate,
        disabledDates,
        allowDisabledSelection,
        showActiveMonthDaysOnly,
        onHover,
        onYearMonthDisplayChange,
        "data-testid": dataTestId,
    } = props;

    const controlledValue =
        props.variant !== "multi" ? props.value : undefined;
    const controlledValues =
        props.variant === "multi" ? props.values : undefined;
    const minSelectable =
        props.variant === "multi" ? props.minSelectable : undefined;
    const maxSelectable =
        props.variant === "multi" ? props.maxSelectable : undefined;

    const resolveValues = (): string[] => {
        if (controlledValues !== undefined) return controlledValues;
        if (controlledValue !== undefined) return [controlledValue];
        return [];
    };

    const [selectedValues, setSelectedValues] =
        useState<string[]>(resolveValues);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (controlledValues !== undefined) {
            setSelectedValues(controlledValues);
        } else if (controlledValue !== undefined) {
            setSelectedValues([controlledValue]);
        } else {
            setSelectedValues([]);
        }
    }, [controlledValue, controlledValues]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleSelect = (date: string) => {
        setSelectedValues([date]);
        if (props.variant !== "multi") {
            props.onChange?.(date);
            props.onSelect?.(date);
        }
    };

    const handleMultiSelect = (nextValues: string[]) => {
        setSelectedValues(nextValues);
        if (props.variant === "multi") {
            props.onChange?.(nextValues);
        }
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    return (
        <Wrapper
            className={className}
            id={id}
            data-testid={dataTestId}
            $hasBorder={styleType === "bordered"}
        >
            <InternalCalendar
                value={selectedValues[0]}
                values={selectedValues}
                initialCalendarDate={selectedValues[0]}
                isFocusable={true}
                variant={variant}
                minDate={minDate}
                maxDate={maxDate}
                disabledDates={disabledDates}
                allowDisabledSelection={allowDisabledSelection}
                showActiveMonthDaysOnly={showActiveMonthDaysOnly}
                onHover={onHover}
                onYearMonthDisplayChange={onYearMonthDisplayChange}
                onSelect={handleSelect}
                onChange={handleMultiSelect}
                minSelectable={minSelectable}
                maxSelectable={maxSelectable}
            />
        </Wrapper>
    );
};

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    $hasBorder?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
const Wrapper = styled.div<StyleProps>`
    --vertical-inset: ${Spacing["spacing-24"]};
    --horizontal-inset: ${Spacing["spacing-32"]};
    --header-bottom-spacing: ${Spacing["spacing-8"]};

    width: 41rem;

    ${(props) => {
        if (props.$hasBorder) {
            return css`
                border: ${Border["width-010"]} ${Border.solid} ${Colour.border};
                border-radius: ${Radius["lg"]};
                overflow: hidden;
            `;
        }
    }}
`;
