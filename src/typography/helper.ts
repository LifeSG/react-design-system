import { css } from "styled-components";

import { lineClampDynamicCss } from "../shared/styles";
import { Colour, Font } from "../theme";
import type {
    TypographyFontToken,
    TypographySize,
    TypographyWeight,
} from "./types";

const tokens = {
    maxLines: "--fds-typography-maxLines",
};

export const getTextStyle = (
    type: TypographySize,
    weight: TypographyWeight,
    paragraph = false
) => {
    const token: TypographyFontToken = `${type}-${weight}`;

    return css`
        ${Font[token]}
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
    textStyle: TypographySize,
    weight: TypographyWeight | undefined,
    inline: boolean | undefined,
    paragraph: boolean | undefined,
    maxLines: number | undefined
) => css`
    ${getTextStyle(textStyle, weight || "regular", paragraph)}
    ${getDisplayStyle(inline, paragraph, maxLines)}
    color: ${Colour.text};
`;
