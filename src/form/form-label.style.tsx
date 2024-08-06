import styled from "styled-components";
import { v2_Color } from "../v2_color";
import { Text, TextStyleHelper } from "../text";

// =============================================================================
// STYLING
// =============================================================================
export const Label = styled.label`
    ${TextStyleHelper.getTextStyle("H5", "semibold")}
    color: ${v2_Color.Neutral[2]};
    margin-bottom: 0.5rem;
    display: inline-block;

    a,
    span,
    p {
        ${TextStyleHelper.getTextStyle("H5", "semibold")}
    }

    a {
        color: ${v2_Color.Primary};
        text-decoration: none;

        :hover,
        :active,
        :focus {
            color: ${v2_Color.Secondary};

            svg {
                color: ${v2_Color.Secondary};
            }
        }
    }
`;

export const ErrorMessage = styled(Text.H6)`
    color: ${v2_Color.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;

export const Subtitle = styled(Text.BodySmall)`
    && {
        color: ${v2_Color.Neutral[3]};
        ${TextStyleHelper.getFontFamily("BodySmall", "regular")}
    }
`;
