import styled, { css } from "styled-components";
import { v2_Color } from "../v2_color/color";
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
const dashedLineStyle = () => (props: StyleProps) => {
    let color;

    if (props.$color && typeof props.$color === "function") {
        color = props.$color(props);
    } else {
        color = props.$color || v2_Color.Neutral[5](props);
    }

    const encodedColor = encodeURIComponent(color);
    const thickness = props.$thickness || 1;
    const strokeWidth = thickness + 1; // best fit

    return css`
        background-color: transparent;
        height: ${thickness}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${thickness}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${encodedColor}" stroke-width="${strokeWidth}" stroke-dasharray="4 4" /></svg>');
    `;
};

export const Line = styled.hr<StyleProps>`
    width: 100%;
    margin: 0;
    border: none;
    ${(props) => {
        switch (props.$lineStyle) {
            case "dashed":
                return css`
                    ${dashedLineStyle}
                `;
            case "solid":
                return css`
                    height: ${props.$thickness}px;
                    background-color: ${props.$color || v2_Color.Neutral[5]};
                `;
        }
    }}
`;
