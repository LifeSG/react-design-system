import styled from "styled-components";
import { Button } from "../button";
import { Border, Colour, Font, Radius, Spacing } from "../theme";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
type FilterHeaderProps = {
    $insetTop?: number | undefined;
};

// =============================================================================
// CONTAINER STYLES
// =============================================================================

export const DesktopContainer = styled.div`
    background-color: ${Colour["bg"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["md"]};
    overflow: hidden;
    width: 100%;
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
`;

export const FilterClearButton = styled(Button.Small)`
    background-color: transparent;
    padding-right: ${Spacing["spacing-20"]};
    padding-left: ${Spacing["spacing-20"]};
    height: 100%;
`;
