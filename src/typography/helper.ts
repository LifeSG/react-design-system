import { css } from "styled-components";
import { Colour, Font } from "../theme";
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

export const getDisplayStyle = (inline = false, paragraph = false) => {
    if (paragraph) {
        return css`
            display: block;
        `;
    } else if (inline) {
        return css`
            display: inline;
        `;
    } else {
        return css`
            display: block;
        `;
    }
};

export const createTypographyStyles = (
    textStyle: TypographySizeType,
    props: TypographyProps
) => css`
    ${getTextStyle(textStyle, props.weight || "regular", props.paragraph)}
    ${getDisplayStyle(props.inline, props.paragraph)}
    color: ${Colour.text};
`;
