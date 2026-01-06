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

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${MediaQuery.MaxWidth.sm} {
        --x-spacing: ${Breakpoint["sm-margin"]}px;
    }

    ${MediaQuery.MaxWidth.xs} {
        --x-spacing: ${Breakpoint["xs-margin"]}px;
    }

    ${MediaQuery.MaxWidth.xxs} {
        --x-spacing: ${Breakpoint["xxs-margin"]}px;
    }

    min-width: min(15rem, var(--available-width));
    max-width: min(24rem, var(--available-width));

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
