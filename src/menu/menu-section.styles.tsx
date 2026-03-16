import styled, { css } from "styled-components";

import { Typography } from "../typography";
import { V3_Border, V3_Colour, V3_Spacing } from "../v3_theme";

// =============================================================================
// STYLES INTERFACE
// =============================================================================
interface MenuSectionStyleProps {
    $showDivider?: boolean;
}

// =============================================================================
// MENU SECTION STYLES
// =============================================================================
export const Section = styled.ul<MenuSectionStyleProps>`
    ${(props) =>
        props.$showDivider &&
        css`
            border-top: ${V3_Border["width-010"]} ${V3_Border["solid"]}
                ${V3_Colour["border"]};
        `}
    padding: ${V3_Spacing["spacing-8"]} 0;
    margin: 0;
    list-style: none;
`;

export const Label = styled(Typography.BodyXS)`
    margin: 0 ${V3_Spacing["spacing-16"]} ${V3_Spacing["spacing-8"]};
    color: ${V3_Colour["text-subtler"]};
`;
