import styled, { css } from "styled-components";
import { Colour } from "../theme";
import { BadgeColor } from "./types";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
export interface BadgeWrapperProps {
    $isOverlay?: boolean | undefined;
}

export interface BadgeProps {
    $color?: BadgeColor | undefined;
}

const getBackgroundColor = (props: BadgeProps) => {
    return props.$color === "important"
        ? Colour["icon-error"]
        : Colour["bg-primary"];
};

export const BadgeWrapper = styled.div<BadgeWrapperProps>`
    ${(props) =>
        props.$isOverlay
            ? css`
                  top: 0;
                  right: 0;
                  transform: translate(50%, -25%);
                  position: absolute;
              `
            : ``};
`;

export const NumberBadge = styled.div<BadgeProps>`
    min-width: 20px;
    height: 20px;
    padding: 2px 6px;
    background-color: ${(props) => getBackgroundColor(props)};
    color: white;
    font-weight: bold;
    font-size: 12px;
    line-height: 1;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NumberBadgeWithBorder = styled(NumberBadge)`
    box-shadow: 0 0 0 2px ${Colour["bg"]};
`;

export const DotBadge = styled.div<BadgeProps>`
    width: 8px;
    height: 8px;
    background-color: ${(props) => getBackgroundColor(props)};
    border-radius: 50%;
`;

export const DotBadgeWithBorder = styled(DotBadge)`
    box-shadow: 0 0 0 2px ${Colour["bg"]};
    width: 10px;
    height: 10px;
`;
