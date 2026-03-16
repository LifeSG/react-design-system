import styled from "styled-components";

import { Button } from "../button";
import { ButtonWithIcon } from "../button-with-icon";
import { V3_Colour, V3_Font, V3_Spacing } from "../v3_theme";

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
    background-color: ${V3_Colour["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const MobileOverlayContainer = styled.div`
    background-color: ${V3_Colour["bg"]};
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
    background-color: ${V3_Colour["bg"]};
    ${(props) => props.$insetTop && `padding-top: ${props.$insetTop}px;`}
`;

export const FilterTitle = styled.h2`
    ${V3_Font["heading-xs-semibold"]}
    flex: 1;
    text-align: center;
    margin: ${V3_Spacing["spacing-24"]} 0;
`;

export const FilterClearButton = styled(Button.Small)`
    background-color: transparent;
    height: 100%;
    padding: ${V3_Spacing["spacing-24"]} ${V3_Spacing["spacing-20"]};
`;

// =============================================================================
// COMPONENT STYLES
// =============================================================================

export const FilterButton = styled(ButtonWithIcon.Default)`
    width: 100%;
`;
