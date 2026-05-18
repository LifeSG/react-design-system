import styled, { css } from "styled-components";

import { V3_Colour } from "../../v3_theme";
import type { V3_ThemeStyleProps } from "../../v3_theme/types";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================

export interface TimeSlotStyleProps {
    $styleType: "default" | "stripes";
    $bgColor: string | ((props: V3_ThemeStyleProps) => string);
    $bgColor2?: string | ((props: V3_ThemeStyleProps) => string);
    $hoverBgColor?: string | ((props: V3_ThemeStyleProps) => string);
    $hoverBgColor2?: string | ((props: V3_ThemeStyleProps) => string);
    $clickable?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================

export const StyledTimeSlot = styled.div<TimeSlotStyleProps>`
    background-color: ${({ $bgColor }) => $bgColor};
    cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};
    ${({ $hoverBgColor, $clickable }) =>
        $hoverBgColor &&
        $clickable &&
        css`
            &:hover {
                background-color: ${$hoverBgColor};
            }
        `}

    ${(props) =>
        props.$styleType === "stripes" &&
        css`
            background: repeating-linear-gradient(
                135deg,
                ${props.$bgColor2 || V3_Colour["bg-strongest"]} 0px,
                ${props.$bgColor2 || V3_Colour["bg-strongest"]} 10px,
                ${props.$bgColor || V3_Colour["bg-stronger"]} 10px,
                ${props.$bgColor || V3_Colour["bg-stronger"]} 20px
            );
            ${(props.$hoverBgColor || props.$hoverBgColor2) &&
            props.$clickable &&
            css`
                &:hover {
                    background: repeating-linear-gradient(
                        135deg,
                        ${props.$hoverBgColor2 ||
                            props.$bgColor2 ||
                            V3_Colour["bg-strongest"]}
                            0px,
                        ${props.$hoverBgColor2 ||
                            props.$bgColor2 ||
                            V3_Colour["bg-strongest"]}
                            10px,
                        ${props.$hoverBgColor ||
                            props.$bgColor ||
                            V3_Colour["bg-stronger"]}
                            10px,
                        ${props.$hoverBgColor ||
                            props.$bgColor ||
                            V3_Colour["bg-stronger"]}
                            20px
                    );
                }
            `}
        `}
`;
