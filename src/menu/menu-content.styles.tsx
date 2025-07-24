import styled from "styled-components";
import { Border, Colour, Radius } from "../theme";

// =============================================================================
// MENU CONTENT STYLES
// =============================================================================
export const MenuPanel = styled.div`
    border-radius: ${Radius["md"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    background: ${Colour["bg"]};
    box-shadow: 0 2px 8px 0
        rgb(from ${Colour.Primitive["neutral-50"]} r g b / 16%);
    min-width: 15rem;

    &:focus {
        outline: none;
    }
`;
