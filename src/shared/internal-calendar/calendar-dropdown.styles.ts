import styled from "styled-components";

import {
    V3_Border,
    V3_Colour,
    V3_MediaQuery,
    V3_Radius,
    V3_Spacing,
} from "../../v3_theme";

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
    --vertical-inset: ${V3_Spacing["spacing-24"]};
    --horizontal-inset: ${V3_Spacing["spacing-20"]};
    --header-bottom-spacing: ${V3_Spacing["spacing-4"]};

    border: ${V3_Border["width-010"]} ${V3_Border.solid} ${V3_Colour.border};
    border-radius: ${V3_Radius["sm"]};
    overflow: hidden;

    width: ${(props) => props.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${V3_MediaQuery.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;
