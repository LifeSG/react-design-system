import styled, { css, keyframes } from "styled-components";

import { DateNavigator } from "../../date-navigator";
import { IconButton } from "../../icon-button";
import { Typography } from "../../typography";
import { V3_Colour, V3_Spacing } from "../../v3_theme";

const spin = keyframes`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`;

export const StyledRefreshButton = styled(IconButton)<{ $loading: boolean }>`
    color: ${V3_Colour["icon"]};
    svg {
        ${(props) => {
            if (props.$loading) {
                return css`
                    animation: ${spin} 4s linear infinite;
                `;
            }
        }}
    }
`;

export const NavigationHeaderWrapper = styled.div`
    display: flex;
    padding-bottom: ${V3_Spacing["spacing-16"]};
    justify-content: space-between;
    gap: ${V3_Spacing["spacing-8"]};
`;

export const NavigationHeaderSubtitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${V3_Spacing["spacing-8"]};
`;

export const StyledResultText = styled(Typography.BodySM)`
    color: ${V3_Colour["text-subtler"]};
`;

export const StyledDateNavigator = styled(DateNavigator)`
    width: 400px;
`;
