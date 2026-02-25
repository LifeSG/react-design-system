import styled, { css } from "styled-components";
import { Border, Colour, Spacing } from "../v3_theme";
import { Typography } from "../typography";

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
            border-top: ${Border["width-010"]} ${Border["solid"]}
                ${Colour["border"]};
        `}
    padding: ${Spacing["spacing-8"]} 0;
    margin: 0;
    list-style: none;
`;

export const Label = styled(Typography.BodyXS)`
    margin: 0 ${Spacing["spacing-16"]} ${Spacing["spacing-8"]};
    color: ${Colour["text-subtler"]};
`;
