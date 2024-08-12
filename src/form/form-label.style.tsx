import styled from "styled-components";
import { V2_Color } from "../v2_color";
import { V2_Text, V2_TextStyleHelper } from "../v2_text";

// =============================================================================
// STYLING
// =============================================================================
export const Label = styled.label`
    ${V2_TextStyleHelper.getTextStyle("H5", "semibold")}
    color: ${V2_Color.Neutral[2]};
    margin-bottom: 0.5rem;
    display: inline-block;

    a,
    span,
    p {
        ${V2_TextStyleHelper.getTextStyle("H5", "semibold")}
    }

    a {
        color: ${V2_Color.Primary};
        text-decoration: none;

        :hover,
        :active,
        :focus {
            color: ${V2_Color.Secondary};

            svg {
                color: ${V2_Color.Secondary};
            }
        }
    }
`;

export const ErrorMessage = styled(V2_Text.H6)`
    color: ${V2_Color.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;

export const Subtitle = styled(V2_Text.BodySmall)`
    && {
        color: ${V2_Color.Neutral[3]};
        ${V2_TextStyleHelper.getFontFamily("BodySmall", "regular")}
    }
`;
