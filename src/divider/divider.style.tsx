import styled, { css } from "styled-components";
import { Color } from "../color/color";
import { Layout } from "../layout";
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

const dashedLineStyle = (props: StyleProps) => {
    let color;

    if (props.$color && typeof props.$color === "function") {
        color = props.$color(props);
    } else {
        color = props.$color || Color.Neutral[5](props);
    }

    const encodedColor = encodeURIComponent(color);
    const thickness = props.$thickness || 1;
    const strokeWidth = thickness + 1; // best fit

    return css`
        display: block;
        width: 100%;
        background-color: transparent;
        margin: 0;
        height: ${thickness}px;
        border: none;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${thickness}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="8" y2="1" stroke="${encodedColor}" stroke-width="${strokeWidth}" stroke-dasharray="4 4" /></svg>');
    `;
};

export const DashedLineFlex = styled.div<StyleProps>`
    ${(props) => dashedLineStyle(props)}
`;

export const DashedLineGrid = styled(Layout.ColDiv)<StyleProps>`
    ${(props) => dashedLineStyle(props)}
`;
