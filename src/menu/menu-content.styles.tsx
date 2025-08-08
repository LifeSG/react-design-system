import styled from "styled-components";
import { PopoverOverflowType } from "../popover-v2/types";
import {
    Border,
    Breakpoint,
    Colour,
    MediaQuery,
    Radius,
    Shadow,
} from "../theme";

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
    box-shadow: ${Shadow["md-subtle"]};
    min-width: 15rem;
    max-width: 24rem;

    ${MediaQuery.MaxWidth.sm} {
        width: calc(100vw - ${Breakpoint["sm-margin"]} * 2);
    }

    ${MediaQuery.MaxWidth.xs} {
        width: calc(100vw - ${Breakpoint["xs-margin"]} * 2);
    }

    ${MediaQuery.MaxWidth.xxs} {
        width: calc(100vw - ${Breakpoint["xxs-margin"]} * 2);
    }

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
