import styled, { css } from "styled-components";

import { Colour } from "../../theme";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================

export interface TimeSlotStyleProps {
    $styleType: "default" | "stripes";
    $bgColor: string;
    $bgColor2?: string;
    $hoverBgColor?: string;
    $hoverBgColor2?: string;
    $clickable?: boolean;
    $nonClickableCursor?: "default" | "not-allowed";
}

// =============================================================================
// STYLING
// =============================================================================

export const StyledTimeSlot = styled.div<TimeSlotStyleProps>`
    background-color: ${({ $bgColor }) => $bgColor};
    cursor: ${({ $clickable, $nonClickableCursor }) =>
        $clickable ? "pointer" : $nonClickableCursor || "default"};
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
                ${props.$bgColor2 || Colour["bg-strongest"]} 0px,
                ${props.$bgColor2 || Colour["bg-strongest"]} 6px,
                ${props.$bgColor || Colour["bg-stronger"]} 6px,
                ${props.$bgColor || Colour["bg-stronger"]} 12px
            );
            ${(props.$hoverBgColor || props.$hoverBgColor2) &&
            props.$clickable &&
            css`
                &:hover {
                    background: repeating-linear-gradient(
                        135deg,
                        ${props.$hoverBgColor2 ||
                            props.$bgColor2 ||
                            Colour["bg-strongest"]}
                            0px,
                        ${props.$hoverBgColor2 ||
                            props.$bgColor2 ||
                            Colour["bg-strongest"]}
                            10px,
                        ${props.$hoverBgColor ||
                            props.$bgColor ||
                            Colour["bg-stronger"]}
                            10px,
                        ${props.$hoverBgColor ||
                            props.$bgColor ||
                            Colour["bg-stronger"]}
                            20px
                    );
                }
            `}
        `}
`;
