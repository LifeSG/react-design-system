import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { InternalCalendar } from "../shared/internal-calendar";
import { Border, Colour, Radius, Spacing } from "@/theme";
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
    const [selectedDate, setSelectedDate] = useState<string | undefined>(value); // YYYY-MM-DD

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
    --vertical-inset: ${Spacing["spacing-24"]};
    --horizontal-inset: ${Spacing["spacing-32"]};
    --header-bottom-spacing: ${Spacing["spacing-8"]};

    width: 41rem;

    ${(props) => {
        if (props.$hasBorder) {
            return css`
                border: ${Border["width-010"]} ${Border.solid} ${Colour.border};
                border-radius: ${Radius.lg};
                overflow: hidden;
            `;
        }
    }}
`;
