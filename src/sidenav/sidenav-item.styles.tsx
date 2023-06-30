import styled, { css } from "styled-components";
import { Text, TextStyleHelper } from "../text";
import { Color } from "../color";
import { Button } from "../button";

//=============================================================================
// STYLE INTERFACE
//=============================================================================
interface StyleProps {
    $highlight: boolean;
}

//=============================================================================
// STYLING
//=============================================================================
export const Container = styled.li`
    width: 100%;
`;

export const DefaultButton = styled(Button.Default)<StyleProps>`
    width: 100%;
    height: unset;

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
            ${TextStyleHelper.getFontFamily("XSmall", "regular")}
            font-size: 0.75rem !important;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }

    :hover,
    :focus {
        span {
            div {
                background-color: ${Color.Accent.Light[5]};
                color: ${Color.Primary} !important;
            }

            span {
                font-weight: 600 !important;
                color: ${Color.Primary} !important;
            }
        }
    }

    ${(props) =>
        props.$highlight &&
        css`
            span {
                div {
                    background-color: ${Color.Accent.Light[5]};
                }

                span {
                    font-weight: 600 !important;
                    color: ${Color.Primary};
                }
            }
        `}
`;

export const IconContainer = styled.div`
    height: 1.75rem;
    width: 3.25rem;
    border-radius: 0.5rem;
    margin-bottom: 0.25rem;
`;

export const TitleText = styled(Text.XSmall)``;
