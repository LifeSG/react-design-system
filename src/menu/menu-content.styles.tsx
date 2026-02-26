import styled from "styled-components";
import { PopoverOverflowType } from "../popover-v2/types";
import {
    V3_Border,
    V3_Breakpoint,
    V3_Colour,
    V3_MediaQuery,
    V3_Radius,
    V3_Shadow,
} from "../v3_theme";

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
    border-radius: ${V3_Radius["md"]};
    border: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${V3_Colour["border"]};
    background: ${V3_Colour["bg"]};
    box-shadow: ${V3_Shadow["md-subtle"]};

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${V3_MediaQuery.MaxWidth.sm} {
        --x-spacing: ${V3_Breakpoint["sm-margin"]}px;
    }

    ${V3_MediaQuery.MaxWidth.xs} {
        --x-spacing: ${V3_Breakpoint["xs-margin"]}px;
    }

    ${V3_MediaQuery.MaxWidth.xxs} {
        --x-spacing: ${V3_Breakpoint["xxs-margin"]}px;
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
        background: ${V3_Colour["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${V3_Radius["full"]};
        background-clip: padding-box;
    }
`;
