import styled from "styled-components";

import * as calendarDropdownStyles from "../shared/internal-calendar/calendar-dropdown.styles";
import { Border, Colour, Radius, Spacing } from "../theme";

export const Wrapper = styled.div`
    ${calendarDropdownStyles.tokens.verticalInset}: ${Spacing["spacing-24"]};
    ${calendarDropdownStyles.tokens.horizontalInset}: ${Spacing["spacing-32"]};
    ${calendarDropdownStyles.tokens.headerBottomSpacing}: ${Spacing[
        "spacing-8"
    ]};

    width: 41rem;

    &.calendarWrapperBordered {
        border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
        border-radius: ${Radius["lg"]};
        overflow: hidden;
    }
`;
