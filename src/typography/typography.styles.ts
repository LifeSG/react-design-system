import { ExternalIcon } from "@lifesg/react-icons/external";
import styled from "styled-components";

import { lineClampDynamicCss } from "../shared/styles";
import { Colour } from "../theme";
import { tokens, typographyClassNames, typographyTextClasses } from "./helper";

export const TypographyBase = styled.div`
    ${tokens.typographyBase.maxLines}: initial;
    color: ${Colour.text};
    ${typographyTextClasses}

    &.${typographyClassNames.displayInline} {
        display: inline;
        margin-bottom: 0;
    }

    &.${typographyClassNames.displayBlock} {
        display: block;
        margin-bottom: 0;
    }

    &.${typographyClassNames.paragraph} {
        display: block;
        margin-bottom: 1.05em;
    }

    &.${typographyClassNames.lineClamp} {
        ${lineClampDynamicCss(tokens.typographyBase.maxLines)}
    }
`;

export const HyperlinkBase = styled.a`
    ${typographyTextClasses}
    color: ${Colour.hyperlink};

    &.${typographyClassNames.underline} {
        text-decoration: underline;
    }

    &.${typographyClassNames.noUnderline} {
        text-decoration: none;
    }

    &:hover,
    &:active,
    &:focus {
        color: ${Colour["text-hover"]};
    }
`;

export const StyledExternalIcon = styled(ExternalIcon)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;
