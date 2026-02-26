import styled from "styled-components";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import { V3_Colour, V3_Font, V3_Spacing } from "../v3_theme";

// =============================================================================
// STYLING
// =============================================================================
export const LabelContainer = styled.div`
    margin-bottom: ${V3_Spacing["spacing-8"]};
`;
export const Label = styled.label`
    color: ${V3_Colour["text-subtle"]};
    display: inline-block;

    ${V3_Font["form-label"]}
    ${applyHtmlContentStyle()}
    font-weight: ${V3_Font.Spec["weight-semibold"]};
`;

export const ErrorIcon = styled(ExclamationCircleFillIcon)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${V3_Colour["icon-error-strong"]};
`;

export const ErrorMessageContainer = styled.div`
    ${V3_Font["body-sm-semibold"]}
    display: flex;
    gap: ${V3_Spacing["spacing-4"]};
    margin-top: ${V3_Spacing["spacing-8"]};
`;

export const ErrorMessage = styled.p`
    color: ${V3_Colour["text-error"]};
    margin-bottom: 0;
    outline: none;
`;

export const Subtitle = styled.span`
    ${V3_Font["form-description"]}
    color: ${V3_Colour["text-subtler"]};
    display: block;
`;
