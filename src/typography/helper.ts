import { css } from "styled-components";
import { TypographyProps, TypographySizeType, TypographyWeight } from "./types";
import { TypographyStyle } from "./typography-style";
import { Colour, Font } from "../theme";
import { StyledComponentProps } from "../theme/helpers";

const getResolvedTypographyWeight = (
    weight: TypographyWeight,
    props: StyledComponentProps
): string => {
    const weightMap: Record<number, string> = {
        300: "light",
        400: "regular",
        600: "semibold",
        700: "bold",
    };

    // If resolvedWeight is a string that is a number for eg "400", convert it to a number
    const numericWeight =
        typeof weight === "string" && !isNaN(Number(weight))
            ? Number(weight)
            : weight;

    // Map it to its string equivalent
    const mappedWeight = weightMap[numericWeight as number] || numericWeight;
    const finalWeight = Font[`weight-${mappedWeight}`];

    // If final weight is a function, resolve it with props
    return typeof finalWeight === "function" ? finalWeight(props) : finalWeight;
};

export const getTypographyStyle = (
    type: TypographySizeType,
    weight: TypographyWeight,
    paragraph = false
) => {
    return (props: any) => {
        const attrs = TypographyStyle[type];

        const resolvedWeight = getResolvedTypographyWeight(weight, props);

        // Check if function if so resolve with props
        const fontSize =
            typeof attrs.fontSize === "function"
                ? attrs.fontSize(props)
                : attrs.fontSize;

        // Make it a int for calc
        const fontSizeValue = parseFloat(fontSize);
        const fontSizeUnit = fontSize.replace(fontSizeValue.toString(), "");

        // Add extra margin for paragraphs
        const getMarginBottomStyle = () => {
            const marginBottomScale = paragraph ? 1.05 : 0;
            return css`
                margin-bottom: ${fontSizeValue * marginBottomScale}${fontSizeUnit};
            `;
        };

        return css`
            font-size: ${fontSize};
            line-height: ${attrs.lineHeight};
            letter-spacing: ${attrs.letterSpacing || 0};
            font-weight: ${resolvedWeight};
            ${getMarginBottomStyle()}
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
    color: ${Colour.Primitive["neutral-20"]};
    ${getDisplayStyle(props.inline, props.paragraph)}
`;
