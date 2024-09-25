import { css } from "styled-components";
import { TypographyProps, TypographySizeType, TypographyWeight } from "./types";
import { Colour, Font, Typography } from "../theme";
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
        const resolvedWeight = getResolvedTypographyWeight(weight, props);

        // to make it eg: header-xxl-light
        const typographyKey = `${type}-${resolvedWeight.toLowerCase()}`;

        // to get the font size from Font token eg header-size-lg
        const retrieveSize = (type: string) => {
            const [firstPart, secondPart] = type.split("-");
            return `${firstPart}-size-${secondPart}`;
        };

        const fontValue = Font[retrieveSize(type)];

        // Check if function if so resolve with props
        const fontSize =
            typeof fontValue === "function" ? fontValue(props) : fontValue;

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
            ${Typography[typographyKey]}
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
    color: ${Colour.text};
    ${getDisplayStyle(props.inline, props.paragraph)}
`;
