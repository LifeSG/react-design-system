import styled from "styled-components";
import { Color } from "../color";
import { Text, TextStyleHelper } from "../text";

// =============================================================================
// STYLING
// =============================================================================
export const Label = styled.label`
    ${TextStyleHelper.getTextStyle("H5", "semibold")}
    color: ${Color.Neutral[3]};
    margin-bottom: 0.5rem;
    display: inline-block;

    #popover-hoc-wrapper {
        display: inline;
    }

    #popover-hoc-button {
        vertical-align: bottom;
    }

    a,
    span,
    p {
        ${TextStyleHelper.getTextStyle("H5", "semibold")}
    }

    a {
        color: ${Color.Primary};
        text-decoration: none;

        :hover,
        :active,
        :focus {
            color: ${Color.Secondary};

            svg {
                color: ${Color.Secondary};
            }
        }
    }
`;

export const ErrorMessage = styled(Text.H6)`
    color: ${Color.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;

export const Subtitle = styled(Text.BodySmall)`
    color: ${Color.Neutral[3]};
`;
