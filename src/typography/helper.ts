import { css } from "styled-components";

import { Font } from "../theme";
import type {
    TypographyFontToken,
    TypographySize,
    TypographyUnderlineStyle,
    TypographyWeight,
} from "./types";

const TYPOGRAPHY_SIZES: TypographySize[] = [
    "heading-xxl",
    "heading-xl",
    "heading-lg",
    "heading-md",
    "heading-sm",
    "heading-xs",
    "body-baseline",
    "body-md",
    "body-sm",
    "body-xs",
];

const TYPOGRAPHY_WEIGHTS: TypographyWeight[] = [
    "light",
    "regular",
    "semibold",
    "bold",
];

export const tokens = {
    typographyBase: {
        maxLines: "--fds-internal-typography-base-maxLines",
    },
} as const;

export const typographyClassNames = {
    displayInline: "typographyDisplayInline",
    displayBlock: "typographyDisplayBlock",
    paragraph: "typographyParagraph",
    lineClamp: "typographyLineClamp",
    underline: "typographyUnderline",
    noUnderline: "typographyNoUnderline",
} as const;

export const getTypographyTextClassName = (
    textStyle: TypographySize,
    weight: TypographyWeight
) => {
    return `typographyText-${textStyle}-${weight}`;
};

export const getTypographyUnderlineClassName = (
    underlineStyle: TypographyUnderlineStyle
) => {
    if (underlineStyle === "none") {
        return typographyClassNames.noUnderline;
    }

    return typographyClassNames.underline;
};

export const typographyTextClasses = css`
    ${TYPOGRAPHY_SIZES.map((size) =>
        TYPOGRAPHY_WEIGHTS.map((weight) => {
            const token: TypographyFontToken = `${size}-${weight}`;

            return css`
                &.${getTypographyTextClassName(size, weight)} {
                    ${Font[token]}
                }
            `;
        })
    )}
`;
