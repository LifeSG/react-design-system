import { ExclamationTriangleIcon } from "@lifesg/react-icons/exclamation-triangle";
import styled from "styled-components";
import { InputGroup } from "../input-group";
import { ComponentLoadingSpinner } from "../shared/component-loading-spinner";
import { V3_Colour, V3_Font, V3_Spacing } from "../v3_theme";
import { Typography } from "../typography";
import { BasicButton } from "../shared/input-wrapper";

// =============================================================================
// STYLE INTERFACES
// =============================================================================

interface InputGroupWrapperProps {
    readOnly: boolean | undefined;
    $isDisabled: boolean | undefined;
}

interface IconProps {
    $isDisabled?: boolean;
    $inactiveColor: string | undefined;
    $activeColor: string | undefined;
}

// =============================================================================
// STYLING
// =============================================================================

export const InputGroupWrapper = styled(InputGroup)<InputGroupWrapperProps>`
    padding: 0 0 0
        ${({ readOnly }) => (readOnly ? "0" : V3_Spacing["spacing-16"])};
    input {
        cursor: ${({ readOnly, $isDisabled }) =>
            readOnly && !$isDisabled ? "pointer" : "initial"};
    }
`;

export const IconContainer = styled.div<IconProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({ $isDisabled }) => (!$isDisabled ? "pointer" : "initial")};
    color: ${({
        $isDisabled,
        $inactiveColor = V3_Colour.icon,
        $activeColor = V3_Colour["icon-primary"],
    }) => ($isDisabled ? $inactiveColor : $activeColor)};
    padding: ${V3_Spacing["spacing-12"]} ${V3_Spacing["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
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
    color: ${V3_Colour["text-subtler"]};
`;

export const Spinner = styled(ComponentLoadingSpinner)`
    margin-right: ${V3_Spacing["spacing-8"]};
    color: ${V3_Colour["icon"]};
`;

// -----------------------------------------------------------------------------
// ERROR DISPLAY
// -----------------------------------------------------------------------------

export const TryAgainLabel = styled.span`
    color: ${V3_Colour["text-primary"]};
    text-decoration: underline;
    font-weight: ${V3_Font.Spec["weight-semibold"]};
`;

export const ErrorTextContainer = styled.span`
    display: flex;
    align-items: center;
    margin-right: ${V3_Spacing["spacing-8"]};
`;

export const ErrorIcon = styled(ExclamationTriangleIcon)`
    color: ${V3_Colour["icon-warning"]};
    margin-right: ${V3_Spacing["spacing-8"]};
    height: 1em;
    width: 1em;
`;

export const ErrorLabel = styled.span`
    color: ${V3_Colour["text-warning"]};
`;

export const ClickableErrorWrapper = styled(BasicButton)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${V3_Font["body-baseline-regular"]}

    &:hover, &:active, &:focus {
        ${TryAgainLabel} {
            color: ${V3_Colour["text-hover"]};
        }
    }
`;
