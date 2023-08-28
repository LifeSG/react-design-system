import styled from "styled-components";
import { Color } from "../color";
import { InputGroup } from "../input-group";

interface InputGroupWrapperProps {
    readOnly: boolean;
}

interface IconProps {
    $isDisabled?: boolean;
    $inactiveColor: string;
    $activeColor: string;
}

export const InputGroupWrapper = styled(InputGroup)<InputGroupWrapperProps>`
    padding: 0 0 0 ${({ readOnly }) => readOnly ? "0" : "1rem"};
`;

export const IconContainer = styled.div<IconProps>`
    display: flex;
    height: 3rem;
    width: 3.25rem;
    align-items: center;
    justify-content: center;
    cursor: ${({ $isDisabled }) => (!$isDisabled ? "pointer" : "initial")};
    color: ${({
        $isDisabled,
        $inactiveColor = Color.Neutral[3],
        $activeColor = Color.Primary,
    }) => ($isDisabled ? $inactiveColor : $activeColor)};
    
    svg {
        width: 1.125rem;
        height: 1.125rem;
    }
`;
