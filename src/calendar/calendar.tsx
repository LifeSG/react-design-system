import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Color } from "../color";
import { InternalCalendar } from "../shared/internal-calendar";
import { CalendarProps } from "./types";

export const Calendar = ({
    className,
    styleType = "bordered",
    value,
    onSelect,
    ...otherProps
}: CalendarProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [selectedDate, setSelectedDate] = useState<string>(value); // YYYY-MM-DD

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setSelectedDate(value);
    }, [value]);

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    return (
        <Wrapper className={className} $hasBorder={styleType === "bordered"}>
            <InternalCalendar
                type="standalone"
                value={selectedDate}
                initialCalendarDate={selectedDate}
                onSelect={(value) => {
                    setSelectedDate(value);
                    onSelect?.(value);
                }}
                {...otherProps}
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
    width: 41rem;

    ${(props) => {
        if (props.$hasBorder) {
            return css`
                border: 1px solid ${Color.Neutral[5](props)};
                border-radius: 12px;
                overflow: hidden;
            `;
        }
    }}
`;
