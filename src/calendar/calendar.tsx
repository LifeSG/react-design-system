import clsx from "clsx";
import { useEffect, useState } from "react";

import { InternalCalendar } from "../shared/internal-calendar";
import * as styles from "./calendar.styles";
import type { CalendarProps } from "./types";

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

    const isMultiVariant = props.variant === "multi";
    const controlledValue = isMultiVariant ? undefined : props.value;
    const controlledValues = isMultiVariant ? props.values : undefined;
    const minSelectable = isMultiVariant ? props.minSelectable : undefined;
    const maxSelectable = isMultiVariant ? props.maxSelectable : undefined;

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
            return;
        }

        if (controlledValue !== undefined) {
            setSelectedValues([controlledValue]);
            return;
        }

        setSelectedValues([]);
    }, [controlledValue, controlledValues]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleSelect = (date: string) => {
        setSelectedValues([date]);
        if (props.variant === "multi") {
            return;
        }

        props.onChange?.(date);
        props.onSelect?.(date);
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
        <styles.Wrapper
            className={clsx(
                styleType === "bordered" && "calendarWrapperBordered",
                className
            )}
            id={id}
            data-testid={dataTestId}
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
        </styles.Wrapper>
    );
};
