import styled from "styled-components";

import { Colour } from "../theme";
import { Typography } from "../typography";

// =============================================================================
// STYLING
// =============================================================================
export const AvatarDisplay = styled.div`
    border-radius: 50%;
    background-color: ${Colour["bg-primary-subtler"]};
    align-items: center;
    justify-content: center;
    display: flex;

    &.avatarDisplayDefault {
        width: 2.5rem;
        height: 2.5rem;
    }

    &.avatarDisplaySmall {
        width: 1.5rem;
        height: 1.5rem;
    }
`;

export const AvatarBaselineText = styled(Typography.BodyBL)`
    color: ${Colour["text-primary"]};
`;

export const AvatarBodySmallText = styled(Typography.BodySM)`
    color: ${Colour["text-primary"]};
`;
