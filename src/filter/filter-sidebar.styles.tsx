import styled from "styled-components";
import { Button } from "../button";
import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_Radius,
    V3_Spacing,
} from "../v3_theme";

// =============================================================================
// CONTAINER STYLES
// =============================================================================

export const DesktopContainer = styled.div`
    background-color: ${V3_Colour["bg"]};
    border: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${V3_Colour["border"]};
    border-radius: ${V3_Radius["md"]};
    overflow: hidden;
    width: 100%;
`;

// =============================================================================
// HEADER STYLES
// =============================================================================

export const FilterHeader = styled.div`
    display: flex;
    align-items: center;

    background-color: ${V3_Colour["bg"]};
`;

export const FilterTitle = styled.h2`
    ${V3_Font["heading-xs-semibold"]}
    flex: 1;
    margin: ${V3_Spacing["spacing-24"]} 0 ${V3_Spacing["spacing-24"]}
        ${V3_Spacing["spacing-20"]};
`;

export const FilterClearButton = styled(Button.Small)`
    background-color: transparent;
    padding-right: ${V3_Spacing["spacing-20"]};
    padding-left: ${V3_Spacing["spacing-20"]};
    height: 100%;
`;
