import styled from "styled-components";
import { Border, Colour, Radius } from "../theme";

// =============================================================================
// STYLES INTERFACE
// =============================================================================
interface MenuPanelStyleProps {
    $maxHeight?: number | undefined;
}

// =============================================================================
// MENU STYLES
// =============================================================================
export const MenuPanel = styled.div<MenuPanelStyleProps>`
    border-radius: ${Radius["md"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    background: ${Colour["bg"]};
    box-shadow: 0 ${Border["width-020"]} ${Border["width-080"]} 0
        rgb(from ${Colour["border-stronger"]} r g b / 16%);
    min-width: 15rem;
    max-height: ${(props) =>
        props.$maxHeight !== undefined ? `${props.$maxHeight}px` : "none"};
    overflow-y: auto;

    &:focus {
        outline: none;
    }
`;
