import { css } from "@linaria/core";

import { Spacing } from "../../theme";

// =============================================================================
// STYLING
// =============================================================================
export const timeFieldContainer = css`
    height: 3rem;
    gap: ${Spacing["spacing-8"]};
    /* space for clear icon */
    padding-right: calc(1.25rem + ${Spacing["spacing-20"]});
`;
