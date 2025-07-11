import styled from "styled-components";
import { Colour } from "../theme";

type BadgeColor = "default" | "important";

const getBackgroundColor = (color: BadgeColor) => {
    return color === "important" ? Colour["icon-error"] : Colour["bg-primary"]; // gray for default
};

export const BadgeWrapper = styled.div`
    position: absolute;
`;

export const NumberBadge = styled.div<{ color: BadgeColor }>`
    min-width: 20px;
    height: 20px;
    padding: 2px 6px;
    background-color: ${({ color }) => getBackgroundColor(color)};
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
    border: 2px solid ${({ color }) => getBackgroundColor(color)};
`;

export const DotBadge = styled.div<{ color: BadgeColor }>`
    width: 8px;
    height: 8px;
    background-color: ${({ color }) => getBackgroundColor(color)};
    border-radius: 50%;
`;

export const DotBadgeWithBorder = styled(DotBadge)`
    border: 2px solid ${({ color }) => getBackgroundColor(color)};
    width: 10px;
    height: 10px;
`;
