import styled, { css } from "styled-components";
import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import { Button } from "../button";
import { v2_Color } from "../v2_color";
import { v2_TextStyleHelper } from "../v2_text";
import { animated } from "react-spring";

//=============================================================================
// STYLE INTERFACE
//=============================================================================
interface LinkButtonStyleProp {
    $highlight?: boolean | undefined;
    $noChildren?: boolean | undefined;
}

interface IconStyleProp {
    $expanded?: boolean | undefined;
}

//=============================================================================
// STYLING
//=============================================================================
export const Container = styled(animated.li)``;

export const LinkButton = styled(Button.Default)<LinkButtonStyleProp>`
    justify-content: flex-start;
    width: 100%;
    height: unset;
    padding: 0.75rem 1rem;
    border-radius: 8px;

    span {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        ${v2_TextStyleHelper.getFontFamily("H5", "semibold")}
        font-size: 1rem !important;
        color: ${v2_Color.Neutral[1]} !important;
    }

    :hover,
    :focus {
        background-color: ${v2_Color.Accent.Light[4]};

        span {
            ${(props) =>
                props.$noChildren &&
                css`
                    color: ${v2_Color.Primary} !important;
                `}
        }
    }

    ${(props) =>
        props.$highlight &&
        css`
            background-color: ${v2_Color.Accent.Light[4]};
        `}
`;

export const DrawerSubitemContainer = styled(animated.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`;

export const IconElement = styled.div`
    align-self: center;
    padding-left: 0.5rem;
`;

export const ChevronIcon = styled(ChevronUpIcon)<IconStyleProp>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${v2_Color.Neutral[3]};
    transform: rotate(${(props) => (props.$expanded ? 0 : 180)}deg);
    transition: transform 300ms ease-in-out;
`;

export const TextElement = styled.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: initial;
`;

export const DrawerContent = styled(animated.ul)``;
