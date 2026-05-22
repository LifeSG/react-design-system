import { ExclamationTriangleIcon } from "@lifesg/react-icons/exclamation-triangle";
import styled from "styled-components";

import { InputGroup } from "../input-group";
import { ComponentLoadingSpinner } from "../shared/component-loading-spinner";
import { BasicButton } from "../shared/input-wrapper";
import { Colour, Font, Spacing } from "../theme";
import { Typography } from "../typography";

export const tokens = {
    iconContainer: {
        inactiveColor: "--fds-internal-maskedInput-iconContainer-inactiveColor",
        activeColor: "--fds-internal-maskedInput-iconContainer-activeColor",
    },
};

export const InputGroupWrapper = styled(InputGroup)`
    padding: 0 0 0 ${Spacing["spacing-16"]};

    &.inputGroupWrapperReadOnly {
        padding: 0;
    }

    input {
        cursor: initial;
    }

    &.inputGroupWrapperReadOnly:not(.inputGroupWrapperDisabled) input {
        cursor: pointer;
    }
`;

export const IconContainer = styled.div`
    ${tokens.iconContainer.inactiveColor}: initial;
    ${tokens.iconContainer.activeColor}: initial;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(${tokens.iconContainer.activeColor}, ${Colour["icon-primary"]});
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-16"]};

    &.iconContainerDisabled {
        cursor: initial;
        color: var(${tokens.iconContainer.inactiveColor}, ${Colour.icon});
    }

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
    color: ${Colour["text-subtler"]};
`;

export const Spinner = styled(ComponentLoadingSpinner)`
    margin-right: ${Spacing["spacing-8"]};
    color: ${Colour["icon"]};
`;

// -----------------------------------------------------------------------------
// ERROR DISPLAY
// -----------------------------------------------------------------------------

export const TryAgainLabel = styled.span`
    color: ${Colour["text-primary"]};
    text-decoration: underline;
    font-weight: ${Font.Spec["weight-semibold"]};
`;

export const ErrorTextContainer = styled.span`
    display: flex;
    align-items: center;
    margin-right: ${Spacing["spacing-8"]};
`;

export const ErrorIcon = styled(ExclamationTriangleIcon)`
    color: ${Colour["icon-warning"]};
    margin-right: ${Spacing["spacing-8"]};
    height: 1em;
    width: 1em;
`;

export const ErrorLabel = styled.span`
    color: ${Colour["text-warning"]};
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

    ${Font["body-baseline-regular"]}

    &:hover, &:active, &:focus {
        ${TryAgainLabel} {
            color: ${Colour["text-hover"]};
        }
    }
`;

// -----------------------------------------------------------------------------
// READONLY MASKED DISPLAY
// -----------------------------------------------------------------------------

export const ReadOnlyClickable = styled.button`
    ${Font["body-baseline-regular"]}
    color: ${Colour["text"]};
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-align: left;
    width: 100%;
    justify-content: space-between;
    min-height: 3rem;
`;

export const ReadOnlyValueText = styled.span`
    overflow-wrap: anywhere;
`;

export const ReadOnlyIconContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Colour["icon-primary"]};
    padding: 0 1rem;
    flex-shrink: 0;

    svg {
        width: ${Font.Spec["body-size-baseline"]};
        height: ${Font.Spec["body-size-baseline"]};
    }
`;
