import styled, { css } from "styled-components";
import { BasicButton } from "../shared/input-wrapper";
import { lineClampCss } from "../shared/styles";
import { Colour, Font, Motion, Radius } from "../theme";
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

    padding: 0.25rem 1rem;
    border-radius: ${Radius["md"]};
    color: ${Colour["icon-primary"]};
    transition: ${Motion["duration-250"]} ${Motion["ease-default"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`;

export const TitleText = styled(Typography.BodyXS)`
    ${lineClampCss(2)}
    margin-top: 0.25rem;
    transition: ${Motion["duration-250"]} ${Motion["ease-default"]};
`;

export const DefaultButton = styled(BasicButton)<StyleProps>`
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {
        ${IconContainer} {
            background-color: ${Colour["bg-hover"]};
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
            }

            ${TitleText} {
                ${Font["body-xs-semibold"]}
                color: ${Colour["text-selected"]};
            }
        `}
`;
