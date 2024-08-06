import styled from "styled-components";
import { V2_Color } from "../v2_color";
import { InputGroup } from "../input-group";
import { V2_Text, V2_TextStyleHelper } from "../v2_text";
import { ComponentLoadingSpinner } from "../shared/component-loading-spinner/component-loading-spinner";
import { ExclamationTriangleIcon } from "@lifesg/react-icons/exclamation-triangle";

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
        $inactiveColor = V2_Color.Neutral[3],
        $activeColor = V2_Color.Primary,
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

export const LoadingLabel = styled(V2_Text.Body)`
    color: ${V2_Color.Neutral[3]};
`;

export const Spinner = styled(ComponentLoadingSpinner)`
    margin-right: 0.5rem;
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${V2_Color.Neutral[3]} transparent transparent transparent;
    }
`;

// -----------------------------------------------------------------------------
// ERROR DISPLAY
// -----------------------------------------------------------------------------

export const TryAgainLabel = styled(V2_Text.Body)`
    color: ${V2_Color.Primary};
    text-decoration: underline;
`;

export const ErrorTextContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
`;

export const ErrorIcon = styled(ExclamationTriangleIcon)`
    color: ${V2_Color.Validation.Orange.Icon};
    margin-right: 0.5rem;
    height: 1.125rem;
    width: 1.125rem;
`;

export const ErrorLabel = styled(V2_Text.Body)`
    color: ${V2_Color.Validation.Orange.Text};
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
            color: ${V2_Color.Secondary};
        }
    }
`;
