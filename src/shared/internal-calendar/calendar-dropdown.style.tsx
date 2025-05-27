import styled from "styled-components";
import { Border, Colour, MediaQuery, Radius, Spacing } from "@/theme";

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
    --vertical-inset: ${Spacing["spacing-24"]};
    --horizontal-inset: ${Spacing["spacing-20"]};
    --header-bottom-spacing: ${Spacing["spacing-4"]};

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
