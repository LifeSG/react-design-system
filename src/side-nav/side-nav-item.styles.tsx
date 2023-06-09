import styled, { css } from "styled-components";
import { Text } from "../text";
import { Color } from "../color";
import { Button } from "../button";

interface ButtonStyleProps {
    $highlight: boolean;
}

export const DefaultButton = styled(Button.Default)<ButtonStyleProps>`
    margin: 0.5rem 0;
    span {
        display: flex;
        flex-direction: column;
        align-items: center;

        svg {
            height: 1.25rem;
            width: 1.25rem;
            margin-top: 0.25rem;
        }

        span {
            font-family: Open sans;
            font-size: 0.75rem !important;
            line-height: 1rem !important;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }

    :hover {
        span {
            div {
                background-color: ${Color.Accent.Light[5]};
            }

            span {
                font-weight: 600 !important;
            }
        }
    }

    ${(props) => {
        switch (props.$highlight) {
            case true:
                return css`
                    span {
                        div {
                            background-color: ${Color.Accent.Light[5]};
                        }

                        span {
                            font-weight: 600 !important;
                            color: ${Color.Primary};
                        }
                    }
                `;
            default:
                return css``;
        }
    }}
`;

export const IconContainer = styled.div`
    height: 1.75rem;
    width: 3.25rem;
    border-radius: 0.5rem;
    margin-bottom: 0.25rem;
`;

export const TitleText = styled(Text.XSmall)``;
