import { css } from "@linaria/core";

import * as calendarDropdownStyles from "../shared/internal-calendar/calendar-dropdown.styles";
import { MediaQuery, Spacing } from "../theme";

export const wrapper = css`
    ${calendarDropdownStyles.tokens.headerBottomSpacing}: ${Spacing[
        "spacing-8"
    ]};

    ${MediaQuery.MaxWidth.sm} {
        ${calendarDropdownStyles.tokens.horizontalInset}: ${Spacing[
            "spacing-20"
        ]};
    }

    min-width: 18.5rem;
`;
