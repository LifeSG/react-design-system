import styled, { css } from "styled-components";
import { Color } from "../../color";
import { IconButton } from "../../icon-button";
import { Text } from "../../text";

export const StyledRefreshButton = styled(IconButton)<{ $isLoading: boolean }>`
    color: ${Color.Neutral[3]};
    @keyframes spin {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    svg {
        ${(props) => {
            if (props.$isLoading) {
                return css`
                    -webkit-animation: spin 4s linear infinite;
                    -moz-animation: spin 4s linear infinite;
                `;
            }
        }}
    }
`;

export const NavigationHeaderWrapper = styled.div`
    padding-bottom: 1rem;
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
