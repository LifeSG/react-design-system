import styled from "styled-components";
import { Colour, Font } from "../theme";
import { Typography } from "../typography";

// =============================================================================
// STYLING
// =============================================================================
export const Label = styled.label`
    ${Font["header-xs-semibold"]}
    color: ${Colour["text-subtle"]};
    margin-bottom: 0.5rem;
    display: inline-block;

    a,
    span,
    p {
        ${Font["header-xs-semibold"]}
    }

    a {
        color: ${Colour.hyperlink};
        text-decoration: none;

        :hover,
        :active,
        :focus {
            color: ${Colour["hyperlink-hover"]};

            svg {
                color: ${Colour["hyperlink-hover"]};
            }
        }
    }
`;

// check input
export const ErrorMessage = styled(Typography.BodySM)`
    color: ${Colour["text-error"]};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;

export const Subtitle = styled(Typography.BodyMD)`
    && {
        color: ${Colour.text};
        ${Font["body-sm-regular"]}
    }
`;
