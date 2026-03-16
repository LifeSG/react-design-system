import styled from "styled-components";

import { lineClampCss } from "../shared/styles";
import { Typography } from "../typography";
import { V3_Border, V3_Colour, V3_Radius, V3_Spacing } from "../v3_theme";

// =============================================================================
// MENU LINK STYLES
// =============================================================================
export const MenuLinkDiv = styled.li`
    display: flex;
    flex-direction: column;
`;

export const Link = styled(Typography.LinkMD)`
    color: ${V3_Colour["text"]};

    margin: 0 ${V3_Spacing["spacing-8"]};

    border: ${V3_Border["solid"]} transparent;
    border-width: ${V3_Spacing["spacing-8"]} ${V3_Spacing["spacing-8"]};

    border-radius: ${V3_Radius["md"]};

    ${lineClampCss(2)}
    white-space: pre-wrap;

    &:hover,
    &:active,
    &:focus {
        background-color: ${V3_Colour["bg-hover"]};
        color: ${V3_Colour["text"]};
    }

    &:focus-visible {
        outline: 2px solid ${V3_Colour["focus-ring"]};
        outline-offset: 0;
    }
`;
