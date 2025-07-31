import styled from "styled-components";
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

export const ErrorMessage = styled.p`
    ${Font["body-sm-semibold"]}
    color: ${Colour["text-error"]};
    margin-top: ${Spacing["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`;

export const Subtitle = styled.span`
    ${Font["form-description"]}
    color: ${Colour["text-subtler"]};
    display: block;
`;
