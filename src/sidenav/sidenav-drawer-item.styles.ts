import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import { animated } from "@react-spring/web";
import styled, { css } from "styled-components";

import { BasicButton } from "../shared/input-wrapper";
import { lineClampCss } from "../shared/styles";
import { V3_Colour, V3_Font, V3_Motion, V3_Radius } from "../v3_theme";

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
export const Container = animated(styled.li``);

export const LinkButton = styled(BasicButton)<LinkButtonStyleProp>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${V3_Radius["md"]};

    ${V3_Font["body-md-semibold"]}
    color: ${V3_Colour.text};

    ${(props) =>
        props.$noChildren
            ? css`
                  &:hover,
                  &:focus {
                      background: ${V3_Colour["bg-hover"]};
                      color: ${V3_Colour["text-hover"]};
                  }
              `
            : css`
                  &:hover,
                  &:focus {
                      background: ${V3_Colour["bg-hover-strong"]};
                  }
              `}
`;

export const DrawerSubitemContainer = animated(styled.div`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`);

export const ChevronIcon = styled(ChevronUpIcon)<IconStyleProp>`
    flex-shrink: 0;
    color: ${V3_Colour.icon};
    transform: rotate(${(props) => (props.$expanded ? 0 : 180)}deg);
    transition: transform ${V3_Motion["duration-150"]}
        ${V3_Motion["ease-default"]};
`;

export const TextElement = styled.span`
    ${lineClampCss(2)}
    text-align: left;
`;

export const DrawerContent = animated(styled.ul``);
