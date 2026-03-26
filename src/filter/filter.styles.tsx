import styled from "styled-components";
import { Button } from "../button";
import { ClickableIcon } from "../shared/clickable-icon";
import { Border, Colour, Spacing } from "../theme";

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

export const FilterFooter = styled.div<FilterFooterProps>`
    padding: ${Spacing["spacing-24"]} ${Spacing["spacing-20"]};
    background-color: ${Colour["bg"]};
    border-top: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    ${(props) =>
        props.$insetBottom && `padding-bottom: ${props.$insetBottom}px;`}
`;

export const FilterDoneButton = styled(Button.Default)`
    width: 100%;
`;
