import styled, { css } from "styled-components";
import { Colour } from "../theme";
import { BadgeProps } from "./types";

// =============================================================================
// STYLING
// =============================================================================
export const BadgeWrapper = styled.div<{ $isOverlay?: boolean }>`
    ${(props) =>
        props.$isOverlay &&
        css`
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(50%, -25%);
        `}
`;

const numberBadgeStyles = css`
    min-width: 20px;
    height: 20px;
    padding: 2px 6px;
    font-size: 12px;
    line-height: 1;
    border-radius: 999px;
`;

const dotBadgeStyles = css`
    border-radius: 50%;
    width: 8px;
    height: 8px;
`;

export const StyledBadge = styled.div<{
    $variant: BadgeProps["variant"];
    $color: BadgeProps["color"];
}>`
    background-color: ${({ $color }) =>
        $color === "important" ? Colour["icon-error"] : Colour["bg-primary"]};
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ $variant }) => {
        switch ($variant) {
            case "number":
                return numberBadgeStyles;

            case "number-with-border":
                return css`
                    ${numberBadgeStyles}
                    box-shadow: 0 0 0 2px ${Colour["bg"]};
                `;

            case "dot":
                return css`
                    ${dotBadgeStyles}
                `;

            case "dot-with-border":
                return css`
                    ${dotBadgeStyles}

                    box-shadow: 0 0 0 2px ${Colour["bg"]};
                `;

            default:
                return "";
        }
    }}
`;
