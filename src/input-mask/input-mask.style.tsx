import styled from "styled-components";
import { Color } from "../color";

interface IconProps {
    $isDisabled?: boolean;
    $inactiveColor: string;
    $activeColor: string;
}

export const IconContainer = styled.div<IconProps>`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${({
        $isDisabled,
        $inactiveColor = Color.Neutral[3],
        $activeColor = Color.Primary,
    }) => ($isDisabled ? $inactiveColor : $activeColor)};
`;
