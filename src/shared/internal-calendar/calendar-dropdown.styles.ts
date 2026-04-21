import { css } from "@linaria/core";

import { Border, Colour, MediaQuery, Radius, Spacing } from "../../theme";

// =============================================================================
// STYLING
// =============================================================================
export const tokens = {
    calendarWrapper: {
        width: "--fds-internal-calendarDropdown-calendarWrapper-width",
    },
};

export const calendarWrapper = css`
    --vertical-inset: ${Spacing["spacing-24"]};
    --horizontal-inset: ${Spacing["spacing-20"]};
    --header-bottom-spacing: ${Spacing["spacing-4"]};

    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    overflow: hidden;

    ${tokens.calendarWrapper.width}: initial;
    width: var(${tokens.calendarWrapper.width});
    max-width: 41rem;
    min-width: 21rem;

    ${MediaQuery.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;
