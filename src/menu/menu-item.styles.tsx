import styled from "styled-components";
import { Colour, Spacing } from "../v3_theme";
import { Typography } from "../typography";

// =============================================================================
// MENU ITEM STYLES
// =============================================================================
export const MenuItemDiv = styled.li`
    display: flex;
    flex-direction: column;
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
`;

export const SubLabel = styled(Typography.BodySM)`
    color: ${Colour["text-subtler"]};
`;
