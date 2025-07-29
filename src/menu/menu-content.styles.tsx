import styled from "styled-components";
import { Border, Breakpoint, Colour, Radius } from "../theme";
import { PopoverOverflowType } from "../popover-v2/types";

// =============================================================================
// STYLES INTERFACE
// =============================================================================
interface MenuPanelStylesProps {
    $overflow?: PopoverOverflowType | undefined;
    $maxHeight?: number | undefined;
}

// =============================================================================
// MENU CONTENT STYLES
// =============================================================================
export const MenuPanel = styled.div<MenuPanelStylesProps>`
    border-radius: ${Radius["md"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    background: ${Colour["bg"]};
    box-shadow: 0 2px 8px 0
        rgb(from ${Colour.Primitive["neutral-50"]} r g b / 16%);
    min-width: 15rem;
    max-width: 24rem;
    width: calc(100vw - ${Breakpoint["sm-margin"]} * 2);

    ${({ $maxHeight }) =>
        $maxHeight !== undefined &&
        `
        max-height: ${$maxHeight}px;
    `}

    ${({ $overflow }) =>
        $overflow &&
        `
        overflow-y: ${$overflow};
    `}

    &:focus {
        outline: none;
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Colour["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${Radius["full"]};
        background-clip: padding-box;
    }
`;
