import styled from "styled-components";
import { Button } from "../button";
import { ButtonWithIcon } from "../button-with-icon";
import { Colour, Font, Spacing } from "../theme";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
type FilterHeaderProps = {
    $insetTop?: number | undefined;
};

// =============================================================================
// CONTAINER STYLES
// =============================================================================

export const MobileContainer = styled.div`
    background-color: ${Colour["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const MobileOverlayContainer = styled.div`
    background-color: ${Colour["bg"]};
    height: 100%;
    width: 100%;
`;

export const FloatingWrapper = styled.div`
    height: 100%;
`;

// =============================================================================
// HEADER STYLES
// =============================================================================

export const FilterHeader = styled.div<FilterHeaderProps>`
    display: flex;
    align-items: center;
    background-color: ${Colour["bg"]};
    ${(props) => props.$insetTop && `padding-top: ${props.$insetTop}px;`}
`;

export const FilterTitle = styled.h2`
    ${Font["heading-xs-semibold"]}
    flex: 1;
    margin: ${Spacing["spacing-24"]} 0 ${Spacing["spacing-24"]}
        ${Spacing["spacing-20"]};
    text-align: center;
    margin: ${Spacing["spacing-24"]} 0;
`;

export const FilterClearButton = styled(Button.Small)`
    background-color: transparent;
    padding-right: ${Spacing["spacing-20"]};
    padding-left: ${Spacing["spacing-20"]};
    height: 100%;
    padding: ${Spacing["spacing-24"]} ${Spacing["spacing-20"]};
`;

// =============================================================================
// COMPONENT STYLES
// =============================================================================

export const FilterButton = styled(ButtonWithIcon.Default)`
    width: 100%;
`;
