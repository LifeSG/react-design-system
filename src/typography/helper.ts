import { css } from "styled-components";
import { lineClampCss } from "../shared/styles";
import { Colour, Font } from "@/theme";
import { FontSet, TypographySizeType } from "../theme/font/types";
import { TypographyProps, TypographyWeight } from "./types";

export const getTextStyle = (
    type: TypographySizeType,
    weight: TypographyWeight,
    paragraph = false
) => {
    const token: keyof FontSet = `${type}-${weight}`;

    return css`
        ${Font[token]}
        ${paragraph ? "margin-bottom: 1.05em;" : "margin-bottom: 0;"}
    `;
};

const getMaxLinesStyle = (maxLines: number | undefined) => {
    if (maxLines) {
        return css`
            ${lineClampCss(maxLines)}
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
    textStyle: TypographySizeType,
    props: TypographyProps
) => css`
    ${getTextStyle(textStyle, props.weight || "regular", props.paragraph)}
    ${getDisplayStyle(props.inline, props.paragraph, props.maxLines)}
    color: ${Colour.text};
`;
