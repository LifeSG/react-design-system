import styled from "styled-components";
import { InputGroup } from "../input-group";
import { ComponentLoadingSpinner } from "../shared/component-loading-spinner/component-loading-spinner";
import { ExclamationTriangleIcon } from "@lifesg/react-icons/exclamation-triangle";
import { Colour } from "../theme";
import { Typography } from "../typography/typography";

interface InputGroupWrapperProps {
    readOnly: boolean;
    $isDisabled: boolean;
}

interface IconProps {
    $isDisabled?: boolean;
    $inactiveColor: string;
    $activeColor: string;
}

export const InputGroupWrapper = styled(InputGroup)<InputGroupWrapperProps>`
    padding: 0 0 0 ${({ readOnly }) => (readOnly ? "0" : "1rem")};
    input {
        cursor: ${({ readOnly, $isDisabled }) =>
            readOnly && !$isDisabled ? "pointer" : "initial"};
    }
`;

export const IconContainer = styled.div<IconProps>`
    display: flex;
    height: calc(3rem - 2px);
    width: 3.25rem;
    align-items: center;
    justify-content: center;
    cursor: ${({ $isDisabled }) => (!$isDisabled ? "pointer" : "initial")};
    color: ${({
        $isDisabled,
        $inactiveColor = Colour.icon,
        $activeColor = Colour["icon-primary"],
    }) => ($isDisabled ? $inactiveColor : $activeColor)};

    svg {
        width: 1.125rem;
        height: 1.125rem;
    }
`;

// -----------------------------------------------------------------------------
// LOADING DISPLAY
// -----------------------------------------------------------------------------
export const LoadingWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 3rem;
`;

export const LoadingLabel = styled(Typography.BodyBL)`
    color: ${Colour["text-subtler"]};
`;

export const Spinner = styled(ComponentLoadingSpinner)`
    margin-right: 0.5rem;
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${Colour.icon} transparent transparent transparent;
    }
`;

// -----------------------------------------------------------------------------
// ERROR DISPLAY
// -----------------------------------------------------------------------------

export const TryAgainLabel = styled(Typography.BodyBL)`
    color: ${Colour["text-primary"]};
    text-decoration: underline;
`;

export const ErrorTextContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
`;

export const ErrorIcon = styled(ExclamationTriangleIcon)`
    color: ${Colour["icon-warning"]};
    margin-right: 0.5rem;
    height: 1.125rem;
    width: 1.125rem;
`;

export const ErrorLabel = styled(Typography.BodyBL)`
    color: ${Colour["text-warning"]};
`;

export const ClickableErrorWrapper = styled.button`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    :hover,
    :active,
    :focus {
        ${TryAgainLabel} {
            color: ${Colour["text-primary"]};
        }
    }
`;
