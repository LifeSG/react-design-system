import styled from "styled-components";
import { MediaQuery } from "../../media";

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

    ${MediaQuery.MaxWidth.mobileL} {
        min-width: 17.5rem;
    }
`;
