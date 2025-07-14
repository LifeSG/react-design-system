import styled, { css } from "styled-components";
import { Colour } from "../theme";
import { Typography } from "../typography";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
export interface AvatarButtonProps {
    $mobile?: boolean | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
`;

export const AvatarWrapper = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;
`;

export const AvatarButton = styled.div<AvatarButtonProps>`
    border-radius: 50%;
    background-color: ${Colour["bg-hover-subtle"]};
    ${(props) => {
        return props.$mobile
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
