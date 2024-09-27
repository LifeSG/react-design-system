import { css } from "styled-components";
import { TypographyProps, TypographyWeight } from "./types";
import { Colour, Typography } from "../theme";
import { StyledComponentProps } from "../theme/helpers";
import { TypographySizeType } from "../theme/typography/types";

export const getTypographyStyle = (
    type: TypographySizeType,
    weight: TypographyWeight | ((props: StyledComponentProps) => string),
    paragraph = false
) => {
    return (props: any) => {
        const resolvedWeight =
            typeof weight === "function" ? weight(props) : weight;

        // to make it eg: header-xxl-light
        const typographyKey = `${type}-${resolvedWeight.toLowerCase()}`;

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

// Helper func to refactor code
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
