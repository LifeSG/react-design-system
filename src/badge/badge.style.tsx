import styled, { css } from "styled-components";
import { V3_Border, V3_Colour, V3_Font, V3_Radius } from "../v3_theme";
import { BadgeProps } from "./types";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyledBadgeProps {
    $variant: BadgeProps["variant"];
    $color: BadgeProps["color"];
}
interface BadgeContainerProps {
    $isOverlay?: boolean;
}
interface BadgeWrapperProps extends BadgeContainerProps {
    $offset?: [string, string];
}

// =============================================================================
// STYLING
// =============================================================================
export const BadgeOverlay = styled.div<BadgeContainerProps>`
    ${(props) =>
        props.$isOverlay &&
        css`
            position: relative;
            width: fit-content;
            height: fit-content;
        `}
`;

export const BadgeWrapper = styled.div<BadgeWrapperProps>`
    ${(props) =>
        props.$isOverlay &&
        css`
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(50%, -25%)
                ${props.$offset
                    ? `translate(${props.$offset[0]},${props.$offset[1]})`
                    : ""};
        `}
`;

const numberBadgeStyles = css`
    min-width: 1.25rem;
    padding: 0.25rem 0.375rem;
    font-size: ${V3_Font.Spec["body-size-xs"]};
    font-weight: ${V3_Font.Spec["weight-bold"]};
    line-height: 1;
`;

const dotBadgeStyles = css`
    border-radius: 50%;
    width: 0.5rem;
    height: 0.5rem;
`;

export const StyledBadge = styled.div<StyledBadgeProps>`
    background-color: ${({ $color }) =>
        $color === "important"
            ? V3_Colour["icon-error"]
            : V3_Colour["bg-primary"]};
    color: ${V3_Colour["text-inverse"]};
    font-weight: ${V3_Font.Spec["weight-bold"]};
    display: flex;
    align-items: center;
    justify-content: center;

    width: fit-content;
    ${({ $variant, $color }) => {
        switch ($variant) {
            case "number":
                return css`
                    ${numberBadgeStyles}
                    border-radius: ${V3_Radius.full};
                `;

            case "number-with-border":
                return css`
                    ${numberBadgeStyles}
                    border-radius: ${V3_Radius.full};
                    box-shadow: 0 0 0 ${V3_Border["width-020"]}
                        ${V3_Colour["bg"]};
                `;

            case "dot":
                return css`
                    ${dotBadgeStyles}
                `;

            case "dot-with-border":
                return css`
                    ${dotBadgeStyles}
                    box-shadow: 0 0 0  ${V3_Border["width-020"]} ${V3_Colour[
                        "bg"
                    ]};
                `;

            case "square-number":
                return css`
                    ${numberBadgeStyles}
                    border-radius: ${V3_Radius.sm};
                    padding: 0.25rem 0.4375rem;
                    ${$color === "default" &&
                    css`
                        background-color: ${V3_Colour["bg-primary-subtler"]};
                        color: ${V3_Colour["text-primary"]};
                    `}
                `;

            default:
                return "";
        }
    }};
`;
