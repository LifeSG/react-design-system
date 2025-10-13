import styled from "styled-components";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import { Colour, Font, Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const LabelContainer = styled.div`
    margin-bottom: ${Spacing["spacing-8"]};
`;
export const Label = styled.label`
    color: ${Colour["text-subtle"]};
    display: inline-block;

    ${Font["form-label"]}
    ${applyHtmlContentStyle()}
    font-weight: ${Font.Spec["weight-semibold"]};
`;

export const ErrorIcon = styled(ExclamationCircleFillIcon)`
    margin-top: 0.344rem;
    height: 1em;
    width: 1em;
    flex-shrink: 0;
    color: ${Colour["icon-error-strong"]};
`;

export const ErrorMessageContainer = styled.div`
    display: flex;
    gap: ${Spacing["spacing-4"]};
    margin-top: ${Spacing["spacing-8"]};
`;

export const ErrorMessage = styled.p`
    ${Font["body-sm-semibold"]}
    color: ${Colour["text-error"]};
    margin-bottom: 0;
    outline: none;
`;

export const Subtitle = styled.span`
    ${Font["form-description"]}
    color: ${Colour["text-subtler"]};
    display: block;
`;
