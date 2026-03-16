import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import { InternalCalendar } from "../shared/internal-calendar";
import { V3_Border, V3_Colour, V3_Radius, V3_Spacing } from "../v3_theme";
import type { CalendarProps } from "./types";

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
                isFocusable={true}
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
    --vertical-inset: ${V3_Spacing["spacing-24"]};
    --horizontal-inset: ${V3_Spacing["spacing-32"]};
    --header-bottom-spacing: ${V3_Spacing["spacing-8"]};

    width: 41rem;

    ${(props) => {
        if (props.$hasBorder) {
            return css`
                border: ${V3_Border["width-010"]} ${V3_Border.solid}
                    ${V3_Colour.border};
                border-radius: ${V3_Radius["lg"]};
                overflow: hidden;
            `;
        }
    }}
`;
