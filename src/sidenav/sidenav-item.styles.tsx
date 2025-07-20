import styled, { css } from "styled-components";
import { BasicButton } from "../shared/input-wrapper";
import { lineClampCss } from "../shared/styles";
import { Border, Colour, Font, Motion, Radius } from "../theme";
import { Typography } from "../typography";

//=============================================================================
// STYLE INTERFACE
//=============================================================================
interface StyleProps {
    $highlight: boolean;
}

interface DrawerStyleProps {
    $showDrawer: boolean;
    $showShadow: boolean;
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

export const DesktopDrawer = styled.ul<DrawerStyleProps>`
    list-style: none;
    display: flex;
    flex-direction: column;
    overflow: auto;
    width: 15rem;
    height: 100%;
    padding: 1rem 0.5rem;
    background-color: ${Colour["bg-primary-subtlest"]};
    border-top-right-radius: ${Radius["md"]};
    border-bottom-right-radius: ${Radius["md"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour.border};
    ${(props) =>
        props.$showShadow &&
        css`
            box-shadow: 0 0 4px
                rgb(from ${Colour.Primitive["neutral-20"]} r g b / 25%);
        `}
`;
