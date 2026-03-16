import styled, { css } from "styled-components";

import { BasicButton } from "../shared/input-wrapper";
import { lineClampCss } from "../shared/styles";
import { Typography } from "../typography";
import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_Motion,
    V3_Radius,
    V3_Shadow,
} from "../v3_theme";

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
    border-radius: ${V3_Radius["md"]};
    color: ${V3_Colour["icon-primary"]};
    transition: ${V3_Motion["duration-250"]} ${V3_Motion["ease-default"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`;

export const TitleText = styled(Typography.BodyXS)`
    ${lineClampCss(2)}
    margin-top: 0.25rem;
    transition: ${V3_Motion["duration-250"]} ${V3_Motion["ease-default"]};
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
            background-color: ${V3_Colour["bg-hover"]};
        }

        ${TitleText} {
            ${V3_Font["body-xs-semibold"]}
            color: ${V3_Colour["text-hover"]};
        }
    }

    ${(props) =>
        props.$highlight &&
        css`
            ${IconContainer} {
                background-color: ${V3_Colour["bg-hover"]};
            }

            ${TitleText} {
                ${V3_Font["body-xs-semibold"]}
                color: ${V3_Colour["text-selected"]};
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
    background-color: ${V3_Colour["bg-primary-subtlest"]};
    border-top-right-radius: ${V3_Radius["md"]};
    border-bottom-right-radius: ${V3_Radius["md"]};
    border: ${V3_Border["width-010"]} ${V3_Border["solid"]} ${V3_Colour.border};
    ${(props) =>
        props.$showShadow &&
        css`
            box-shadow: ${V3_Shadow["xs-subtle"]};
            clip-path: inset(0 -6px 0 0);
        `}
`;
