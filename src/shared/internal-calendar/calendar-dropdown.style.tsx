import styled from "styled-components";
import { MediaQuery } from "../../theme";

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
    width: ${(props) => props.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${MediaQuery.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;
