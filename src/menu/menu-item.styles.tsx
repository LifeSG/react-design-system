import styled from "styled-components";
import { V3_Colour, V3_Spacing } from "../v3_theme";
import { Typography } from "../typography";

// =============================================================================
// MENU ITEM STYLES
// =============================================================================
export const MenuItemDiv = styled.li`
    display: flex;
    flex-direction: column;
    padding: ${V3_Spacing["spacing-8"]} ${V3_Spacing["spacing-16"]};
`;

export const SubLabel = styled(Typography.BodySM)`
    color: ${V3_Colour["text-subtler"]};
`;
