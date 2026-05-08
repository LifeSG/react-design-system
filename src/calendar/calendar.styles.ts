import styled, { css } from "styled-components";

import * as calendarDropdownStyles from "../shared/internal-calendar/calendar-dropdown.styles";
import { V3_Border, V3_Colour, V3_Radius, V3_Spacing } from "../v3_theme";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    $hasBorder?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div<StyleProps>`
    ${calendarDropdownStyles.tokens.verticalInset}: ${V3_Spacing["spacing-24"]};
    ${calendarDropdownStyles.tokens.horizontalInset}: ${V3_Spacing[
        "spacing-32"
    ]};
    ${calendarDropdownStyles.tokens.headerBottomSpacing}: ${V3_Spacing[
        "spacing-8"
    ]};

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
