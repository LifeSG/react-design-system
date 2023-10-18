import styled, { css } from "styled-components";
import { Color } from "../color/color";
import { DividerLineStyleType } from "./types";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface StyleProps {
    $thickness: number;
    $color?: string | ((props: any) => string);
    $lineStyle?: DividerLineStyleType;
}

// =============================================================================
// STYLING
// =============================================================================
export const Line = styled.hr<StyleProps>`
    width: 100%;
    background-color: transparent;
    margin: 0;
    height: unset;
    border: none;
    ${(props) => {
        return css`
            border-top-width: ${props.$thickness}px;
            border-top-style: ${props.$lineStyle} !important; // Prevent modification easily
            border-top-color: ${props.$color || Color.Neutral[5]};
        `;
    }}
`;
