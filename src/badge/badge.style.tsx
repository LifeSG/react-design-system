import styled, { css } from "styled-components";
import { Border, Colour, Font, Radius } from "../theme";
import { BadgeProps } from "./types";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyledBadgeProps {
    $variant: BadgeProps["variant"];
    $color: BadgeProps["color"];
}

// =============================================================================
// STYLING
// =============================================================================
export const BadgeWrapper = styled.div<{ $isOverlay?: boolean }>`
    position: absolute;

    ${(props) =>
        props.$isOverlay &&
        css`
            top: 0;
            right: 0;
            transform: translate(50%, -25%);
        `}
`;

const numberBadgeStyles = css`
    min-width: 1.25rem;
    padding: 0.25rem 0.375rem;
    font-size: ${Font.Spec["body-size-xs"]};
    font-weight: ${Font.Spec["weight-bold"]};
    line-height: 1;
    border-radius: ${Radius.full};
`;

const dotBadgeStyles = css`
    border-radius: 50%;
    width: 0.5rem;
    height: 0.5rem;
`;

export const StyledBadge = styled.div<StyledBadgeProps>`
    background-color: ${({ $color }) =>
        $color === "important" ? Colour["icon-error"] : Colour["bg-primary"]};
    color: ${Colour["text-inverse"]};
    font-weight: ${Font.Spec["weight-bold"]};
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
                    border: ${Border["width-020"]} solid ${Colour["bg"]};
                `;

            case "dot":
                return css`
                    ${dotBadgeStyles}
                `;

            case "dot-with-border":
                return css`
                    ${dotBadgeStyles}
                    border: ${Border["width-020"]} solid ${Colour["bg"]};
                `;

            default:
                return "";
        }
    }}
`;
