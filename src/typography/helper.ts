import { css } from "styled-components";
import { TypographyProps, TypographyWeight } from "./types";
import { Colour, Typography } from "../theme";
import { StyledComponentProps } from "../theme/helpers";
import { TypographySizeType } from "../theme/typography/types";

export const getTypographyStyle = (
    type: TypographySizeType,
    weight: TypographyWeight,
    paragraph = false
) => {
    return (props: any) => {
        /** Define the typography Key eg: header-xxl-light.*/
        const typographyKey = `${type}-${weight.toLowerCase()}`;

        return css`
            ${Typography[typographyKey]}
            ${paragraph ? "margin-bottom: 1.05em;" : "margin-bottom: 0;"}
        `;
    };
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

/** Helper Function to create the Base Styling for the Components*/
export const createTypographyStyles = (
    textStyle: TypographySizeType,
    props: TypographyProps
) => css`
    ${getTypographyStyle(
        textStyle,
        props.weight || "regular",
        props.paragraph
    )(props)}
    color: ${Colour.text};
    ${getDisplayStyle(props.inline, props.paragraph)}
`;
