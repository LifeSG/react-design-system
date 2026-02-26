import { ExternalIcon } from "@lifesg/react-icons/external";
import styled, { css } from "styled-components";
import { V3_Colour } from "../v3_theme";
import { V3_TypographySizeType } from "../v3_theme/font/types";
import { createTypographyStyles, getTextStyle } from "./helper";
import { TypographyWeight } from "./types";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyledProps {
    $textStyle: V3_TypographySizeType;
    $weight?: TypographyWeight | undefined;
    $inline?: boolean | undefined;
    $paragraph?: boolean | undefined;
    $maxLines?: number | undefined;
    $underlineStyle?: string | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const TypographyBase = styled.div<StyledProps>`
    ${(props) =>
        createTypographyStyles(
            props.$textStyle,
            props.$weight,
            props.$inline,
            props.$paragraph,
            props.$maxLines
        )}
`;

export const HyperlinkBase = styled.a<StyledProps>`
    ${(props) => css`
        ${getTextStyle(props.$textStyle, props.$weight || "regular")}
        color: ${V3_Colour.hyperlink};
        text-decoration: ${props.$underlineStyle ?? "underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${V3_Colour["text-hover"]};
        }
    `}
`;

export const StyledExternalIcon = styled(ExternalIcon)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;
