import styled from "styled-components";

import { Button } from "../button";
import { ClickableIcon } from "../shared/clickable-icon";
import { Border, Colour, Spacing } from "../theme";

export const tokens = {
    filterFooter: {
        insetBottom: "--fds-internal-filter-filterFooter-insetBottom",
    },
} as const;

// =============================================================================
// CONTAINER STYLES
// =============================================================================

export const FilterBody = styled.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`;

// =============================================================================
// HEADER STYLES
// =============================================================================

export const FilterHeaderButton = styled(ClickableIcon)`
    padding: ${Spacing["spacing-24"]} ${Spacing["spacing-20"]};
    margin-right: auto;
    color: ${Colour["icon"]};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${Colour["icon-hover"]};
    }
`;

// =============================================================================
// COMPONENT STYLES
// =============================================================================

export const FilterFooter = styled.div`
    padding: ${Spacing["spacing-24"]} ${Spacing["spacing-20"]};
    background-color: ${Colour["bg"]};
    border-top: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};

    &.filterFooterWithInsetBottom {
        padding-bottom: var(${tokens.filterFooter.insetBottom});
    }
`;

export const FilterDoneButton = styled(Button.Default)`
    width: 100%;
`;
