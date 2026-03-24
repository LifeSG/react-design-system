import styled, { css } from "styled-components";
import { Colour } from "../theme";
import { Typography } from "../typography";
import { AvatarSize } from "./types";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
export interface AvatarDisplayProps {
    $sizeType?: AvatarSize;
}

// =============================================================================
// STYLING
// =============================================================================
export const AvatarDisplay = styled.div<AvatarDisplayProps>`
    border-radius: 50%;
    background-color: ${Colour["bg-primary-subtler"]};
    ${(props) => {
        return props.$sizeType === "small"
            ? css`
                  width: 1.5rem;
                  height: 1.5rem;
              `
            : css`
                  width: 2.5rem;
                  height: 2.5rem;
              `;
    }}

    align-items: center;
    justify-content: center;
    display: flex;
`;

export const AvatarBaselineText = styled(Typography.BodyBL)`
    color: ${Colour["text-primary"]};
`;

export const AvatarBodySmallText = styled(Typography.BodySM)`
    color: ${Colour["text-primary"]};
`;
