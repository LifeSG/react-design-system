import styled, { css } from "styled-components";
import { Text } from "../text";
import { Color } from "../color";
import { Button } from "../button";

interface TextStyleProps {
    $highlight: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    cursor: pointer;
`;

export const DefaultButton = styled(Button.Default)<TextStyleProps>`
    width: 3.25rem;
    height: 1.75rem;
    border-radius: 0.5rem;
    align-items: center;

    svg {
        width: 1.25rem;
        height: 1.25rem;
        margin-top: 0.375rem;
    }

    ${(props) => {
        switch (props.$highlight) {
            case true:
                return css`
                    background-color: ${Color.Accent.Light[5]};
                `;
            default:
                return css``;
        }
    }}
`;

export const TitleContainer = styled(Text.XSmall)<TextStyleProps>`
    padding: 0.25rem 1rem 0 1rem;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    ${(props) => {
        switch (props.$highlight) {
            case true:
                return css`
                    color: ${Color.Primary};
                    font-weight: 600 !important;
                `;
            default:
                return css`
                    color: ${Color.Neutral[1]};
                `;
        }
    }}
`;
