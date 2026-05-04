import styled from "styled-components";

import { Button } from "../button";
import { ClickableIcon } from "../shared/clickable-icon";
import { V3_Border, V3_Colour, V3_Spacing } from "../v3_theme";

// =============================================================================
// STYLE INTERFACES
// =============================================================================

type FilterFooterProps = {
    $insetBottom?: number | undefined;
};

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
    padding: ${V3_Spacing["spacing-24"]} ${V3_Spacing["spacing-20"]};
    margin-right: auto;
    color: ${V3_Colour["icon"]};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${V3_Colour["icon-hover"]};
    }
`;

// =============================================================================
// COMPONENT STYLES
// =============================================================================

export const FilterFooter = styled.div<FilterFooterProps>`
    padding: ${V3_Spacing["spacing-24"]} ${V3_Spacing["spacing-20"]};
    background-color: ${V3_Colour["bg"]};
    border-top: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${V3_Colour["border"]};
    ${(props) =>
        props.$insetBottom && `padding-bottom: ${props.$insetBottom}px;`}
`;

export const FilterDoneButton = styled(Button.Default)`
    width: 100%;
`;
