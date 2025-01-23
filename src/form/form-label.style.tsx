import styled from "styled-components";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import { Colour, Font } from "../theme";
import { Typography } from "../typography";

// =============================================================================
// STYLING
// =============================================================================
export const Label = styled.label`
    color: ${Colour["text-subtle"]};
    margin-bottom: 0.5rem;
    display: inline-block;

    ${applyHtmlContentStyle({ textSize: "body-md" })}
    font-weight: ${Font.Spec["weight-semibold"]};
`;

// check input
export const ErrorMessage = styled(Typography.BodySM)`
    color: ${Colour["text-error"]};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;

export const Subtitle = styled(Typography.BodySM)`
    color: ${Colour["text-subtler"]};
`;
