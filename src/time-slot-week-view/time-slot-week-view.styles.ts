import { css } from "@linaria/core";

import * as calendarDropdownStyles from "../shared/internal-calendar/calendar-dropdown.styles";
import { Spacing } from "../theme";

export const wrapper = css`
    ${calendarDropdownStyles.tokens.headerBottomSpacing}: ${Spacing[
        "spacing-8"
    ]};
    min-width: 18.5rem;
`;
