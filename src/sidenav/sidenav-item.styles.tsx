import styled, { css } from "styled-components";
import { Colour, Font, Radius } from "../theme";
import { Typography } from "../typography";

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

export const IconContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;

    padding: 0.5rem;
    border-radius: ${Radius.md};

    svg {
        height: 1.25rem;
        width: 1.25rem;
        color: ${Colour["icon-primary"]};
    }
`;

export const TitleText = styled(Typography.BodyXS)`
    ${Font["body-xs-regular"]}
    font-size: 0.75rem !important;
    overflow: hidden;
    display: -webkit-box;
    margin-top: 0.5rem;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const DefaultButton = styled.button<StyleProps>`
    background: none;
    border: none;
    width: 100%;
    height: unset;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover,
    &:focus {
        ${IconContainer} {
            background-color: ${Colour["bg-hover"]};

            svg {
                color: ${Colour["icon-primary"]};
            }
        }

        ${TitleText} {
            ${Font["body-xs-semibold"]}
            color: ${Colour["text-hover"]};
        }
    }

    ${(props) =>
        props.$highlight &&
        css`
            ${IconContainer} {
                background-color: ${Colour["bg-hover"]};

                svg {
                    color: ${Colour["icon-primary"]};
                }
            }

            ${TitleText} {
                ${Font["body-xs-semibold"]}
                color: ${Colour["text-hover"]};
            }
        `}
`;
