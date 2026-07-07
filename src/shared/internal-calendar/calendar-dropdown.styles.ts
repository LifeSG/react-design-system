import { css } from "@linaria/core";

import { Border, Colour, MediaQuery, Radius, Spacing } from "../../theme";

// =============================================================================
// STYLING
// =============================================================================
export const tokens = {
    headerBottomSpacing: "--fds-internal-calendarDropdown-headerBottomSpacing",
    horizontalInset: "--fds-internal-calendarDropdown-horizontalInset",
    verticalInset: "--fds-internal-calendarDropdown-verticalInset",
    width: "--fds-internal-calendarDropdown-width",
};

export const calendarWrapper = css`
    ${tokens.verticalInset}: ${Spacing["spacing-24"]};
    ${tokens.horizontalInset}: ${Spacing["spacing-20"]};
    ${tokens.headerBottomSpacing}: ${Spacing["spacing-4"]};

    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    overflow: hidden;

    ${tokens.width}: initial;
    width: var(${tokens.width});
    max-width: 41rem;
    min-width: 21rem;

    ${MediaQuery.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;
