import styled, { css, keyframes } from "styled-components";
import { Color } from "../../color";
import { IconButton } from "../../icon-button";
import { Text } from "../../text";
import { DateNavigator } from "../../date-navigator";

const spin = keyframes`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`;

export const StyledRefreshButton = styled(IconButton) <{ $loading: boolean }>`
    color: ${Color.Neutral[3]};
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
    padding-bottom: 1rem;
    justify-content: space-between;
`;

export const NavigationHeaderSubtitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
`;

export const StyledResultText = styled(Text.H6)`
    color: ${Color.Neutral[3]};
`;

export const StyledDateNavigator = styled(DateNavigator)`
    width: 400px;
    height: 56px;
`;