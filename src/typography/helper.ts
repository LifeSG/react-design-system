import { css } from "styled-components";

import { lineClampDynamicCss } from "../shared/styles";
import { V3_Colour, V3_Font } from "../v3_theme";
import type { V3_FontSet, V3_TypographySizeType } from "../v3_theme/font/types";
import type { TypographyWeight } from "./types";

const tokens = {
    maxLines: "--fds-typography-maxLines",
};

export const getTextStyle = (
    type: V3_TypographySizeType,
    weight: TypographyWeight,
    paragraph = false
) => {
    const token: keyof V3_FontSet = `${type}-${weight}`;

    return css`
        ${V3_Font[token]}
        ${paragraph ? "margin-bottom: 1.05em;" : "margin-bottom: 0;"}
    `;
};

const getMaxLinesStyle = (maxLines: number | undefined) => {
    if (maxLines) {
        return css`
            ${lineClampDynamicCss(tokens.maxLines)}
            ${tokens.maxLines}: ${maxLines};
        `;
    }
};

export const getDisplayStyle = (
    inline = false,
    paragraph = false,
    maxLines: number | undefined = undefined
) => {
    if (paragraph) {
        return css`
            display: block;
            ${getMaxLinesStyle(maxLines)}
        `;
    } else if (inline) {
        return css`
            display: inline;
        `;
    } else {
        return css`
            display: block;
            ${getMaxLinesStyle(maxLines)}
        `;
    }
};

export const createTypographyStyles = (
    textStyle: V3_TypographySizeType,
    weight: TypographyWeight | undefined,
    inline: boolean | undefined,
    paragraph: boolean | undefined,
    maxLines: number | undefined
) => css`
    ${getTextStyle(textStyle, weight || "regular", paragraph)}
    ${getDisplayStyle(inline, paragraph, maxLines)}
    color: ${V3_Colour.text};
`;
