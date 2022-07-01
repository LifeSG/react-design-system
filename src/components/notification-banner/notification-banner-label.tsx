import styled, { css } from "styled-components";
import { Color } from "../styles/theme";
import { Text, TextStyleHelper } from "../text";

const commonLinkStyle = css`
    color: ${Color.Validation.Orange.Icon};
    :hover,
    :active,
    :visited,
    :focus {
        color: ${Color.Validation.Orange.Icon};
    }
`;

export const Label = styled(Text.Body)`
    color: ${Color.Neutral[8]};

    strong {
        ${TextStyleHelper.getFontFamily("default", "semibold")}
        color: ${Color.Neutral[8]};
    }

    a {
        ${TextStyleHelper.getTextStyle("Body", "regular")}
        ${commonLinkStyle}
    }
`;

export const Link = styled(Text.Hyperlink.Default)`
    position: relative;

    ${commonLinkStyle}
`;
