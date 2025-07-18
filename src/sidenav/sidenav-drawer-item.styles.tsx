import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import { animated } from "react-spring";
import styled, { css } from "styled-components";
import { BasicButton } from "../shared/input-wrapper";
import { lineClampCss } from "../shared/styles";
import { Colour, Font, Motion, Radius } from "../theme";

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

export const LinkButton = styled(BasicButton)<LinkButtonStyleProp>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${Radius["md"]};

    ${Font["body-md-semibold"]}
    color: ${Colour.text};

    ${(props) =>
        props.$noChildren
            ? css`
                  &:hover,
                  &:focus {
                      background: ${Colour["bg-hover"]};
                      color: ${Colour["text-hover"]};
                  }
              `
            : css`
                  &:hover,
                  &:focus {
                      background: ${Colour["bg-hover-strong"]};
                  }
              `}
`;

export const DrawerSubitemContainer = styled(animated.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`;

export const ChevronIcon = styled(ChevronUpIcon)<IconStyleProp>`
    flex-shrink: 0;
    color: ${Colour.icon};
    transform: rotate(${(props) => (props.$expanded ? 0 : 180)}deg);
    transition: transform ${Motion["duration-150"]} ${Motion["ease-default"]};
`;

export const TextElement = styled.span`
    ${lineClampCss(2)}
    text-align: left;
`;

export const DrawerContent = styled(animated.ul)``;
