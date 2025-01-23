import styled from "styled-components";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import { Colour, Font, Spacing } from "../theme";
import { Typography } from "../typography";

// =============================================================================
// STYLING
// =============================================================================
export const Label = styled.label`
    color: ${Colour["text-subtle"]};
    margin-bottom: ${Spacing["spacing-8"]};
    display: inline-block;

    ${applyHtmlContentStyle({ textSize: "body-md" })}
    font-weight: ${Font.Spec["weight-semibold"]};
`;

// check input
export const ErrorMessage = styled(Typography.BodySM)`
    color: ${Colour["text-error"]};
    margin-top: ${Spacing["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`;

export const Subtitle = styled(Typography.BodySM)`
    color: ${Colour["text-subtler"]};
`;
