import styled, { css } from "styled-components";
import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import { Button } from "../button";
import { Color } from "../color";
import { TextStyleHelper } from "../text";
import { animated } from "react-spring";

interface LinkButtonStyleProp {
    $highlight?: boolean | undefined;
    $noChildren?: boolean | undefined;
}

interface IconStyleProp {
    $expanded?: boolean | undefined;
}

export const Container = styled(animated.li)``;

export const LinkButton = styled(Button.Default)<LinkButtonStyleProp>`
    justify-content: flex-start;
    width: 14rem;
    height: unset;
    margin-left: 0.5rem;
    border-radius: 0.5rem;

    span {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        ${TextStyleHelper.getFontFamily("H5", "semibold")}
        font-size: 1rem !important;
        color: ${Color.Neutral[1]} !important;
    }

    :hover,
    :focus {
        background-color: ${Color.Accent.Light[4]};

        span {
            ${(props) =>
                props.$noChildren &&
                css`
                    color: ${Color.Primary} !important;
                `}
        }
    }

    ${(props) =>
        props.$highlight &&
        css`
            background-color: ${Color.Accent.Light[4]};
        `}
`;

export const DrawerSubitemContainer = styled(animated.ul)`
    margin: 0.125rem 0.5rem 0.125rem 1rem;
    overflow: hidden;
    transition: height 1000ms ease;
`;

export const IconElement = styled.div<IconStyleProp>`
    align-self: center;
    transform: rotate(${(props) => (props.$expanded ? 0 : 180)}deg);
    transition: transform 300ms ease-in-out;
`;

export const ChevronIcon = styled(ChevronUpIcon)`
    color: ${Color.Neutral[3]};
`;

export const TextElement = styled.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: initial;
`;

export const DrawerContent = styled(animated.div)``;
