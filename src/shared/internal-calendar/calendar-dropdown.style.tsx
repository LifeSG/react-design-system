import styled from "styled-components";
import { Border, Colour, MediaQuery, Radius } from "../../theme";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    $width: number;
}

// =============================================================================
// STYLING
// =============================================================================
export const CalendarWrapper = styled.div<StyleProps>`
    --vertical-inset: 1.5rem;
    --horizontal-inset: 1.25rem;
    --header-bottom-spacing: 0.25rem;

    border: ${Border["width-010"]} ${Border.solid} ${Colour.border};
    border-radius: ${Radius["sm"]};
    overflow: hidden;

    width: ${(props) => props.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${MediaQuery.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;
