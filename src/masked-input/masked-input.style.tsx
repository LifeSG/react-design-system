import styled from "styled-components";
import { Color } from "../color";

interface IconProps {
    $isDisabled?: boolean;
    $inactiveColor: string;
    $activeColor: string;
}

export const IconContainer = styled.div<IconProps>`
    display: flex;
    width: 1.125rem;
    height: 1.125rem;
    align-items: center;
    cursor: ${({ $isDisabled }) => (!$isDisabled ? "pointer" : "initial")};
    color: ${({
        $isDisabled,
        $inactiveColor = Color.Neutral[3],
        $activeColor = Color.Primary,
    }) => ($isDisabled ? $inactiveColor : $activeColor)};
`;
