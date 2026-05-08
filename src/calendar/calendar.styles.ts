import styled, { css } from "styled-components";

import * as calendarDropdownStyles from "../shared/internal-calendar/calendar-dropdown.styles";
import { Border, Colour, Radius, Spacing } from "../theme";

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
    ${calendarDropdownStyles.tokens.verticalInset}: ${Spacing["spacing-24"]};
    ${calendarDropdownStyles.tokens.horizontalInset}: ${Spacing["spacing-32"]};
    ${calendarDropdownStyles.tokens.headerBottomSpacing}: ${Spacing[
        "spacing-8"
    ]};

    width: 41rem;

    ${(props) => {
        if (props.$hasBorder) {
            return css`
                border: ${Border["width-010"]} ${Border["solid"]}
                    ${Colour["border"]};
                border-radius: ${Radius["lg"]};
                overflow: hidden;
            `;
        }
    }}
`;
