import styled, { css, keyframes } from "styled-components";
import { DateNavigator } from "../../date-navigator";
import { IconButton } from "../../icon-button";
import { Colour, Spacing } from "../../theme";
import { Typography } from "../../typography";

const spin = keyframes`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`;

export const StyledRefreshButton = styled(IconButton)<{ $loading: boolean }>`
    color: ${Colour["icon"]};
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
    padding-bottom: ${Spacing["spacing-16"]};
    justify-content: space-between;
    gap: ${Spacing["spacing-8"]};
`;

export const NavigationHeaderSubtitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${Spacing["spacing-8"]};
`;

export const StyledResultText = styled(Typography.BodySM)`
    color: ${Colour["text-subtler"]};
`;

export const StyledDateNavigator = styled(DateNavigator)`
    width: 400px;
`;
