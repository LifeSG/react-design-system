import { css } from "@linaria/core";
import clsx from "clsx";

import type { FontSize } from "../../theme";
import { Colour } from "../../theme/tokens/colour";
import { Font } from "../../theme/tokens/font";
import { generateFont } from "../../theme/utils/font";

export interface HtmlContentStyleOptions {
    textSize?: FontSize | undefined;
}

const baseHtmlContent = css`
    strong {
        font-weight: ${Font.Spec["weight-semibold"]};
    }

    p {
        margin: 0;
    }

    a {
        font-weight: ${Font.Spec["weight-semibold"]};
        color: ${Colour.hyperlink};
        text-decoration: underline;

        svg {
            color: ${Colour["icon-primary"]};
            height: 1lh;
            width: 1em;
            margin-left: 0.4rem;
            vertical-align: middle;
        }

        &:hover,
        &:active,
        &:visited,
        &:focus {
            color: ${Colour["hyperlink-hover"]};

            svg {
                color: ${Colour["icon-hover"]};
            }
        }
    }

    ul,
    ol {
        margin: 0;
        padding: 0;
        margin-left: 2.5rem;
    }

    ol {
        list-style: decimal;
    }

    ul {
        list-style: disc;
    }
`;

const getTextSizeStyles = (textSize: FontSize): string => `
    ${generateFont(textSize, "regular")}

    strong {
        ${generateFont(textSize, "semibold")}
    }

    a {
        ${generateFont(textSize, "semibold")}
    }
`;

const textSizeClassMap: Record<FontSize, string> = {
    "heading-xxl": css`
        ${getTextSizeStyles("heading-xxl")}
    `,
    "heading-xl": css`
        ${getTextSizeStyles("heading-xl")}
    `,
    "heading-lg": css`
        ${getTextSizeStyles("heading-lg")}
    `,
    "heading-md": css`
        ${getTextSizeStyles("heading-md")}
    `,
    "heading-sm": css`
        ${getTextSizeStyles("heading-sm")}
    `,
    "heading-xs": css`
        ${getTextSizeStyles("heading-xs")}
    `,
    "body-baseline": css`
        ${getTextSizeStyles("body-baseline")}
    `,
    "body-md": css`
        ${getTextSizeStyles("body-md")}
    `,
    "body-sm": css`
        ${getTextSizeStyles("body-sm")}
    `,
    "body-xs": css`
        ${getTextSizeStyles("body-xs")}
    `,
    "form-label": css`
        ${getTextSizeStyles("form-label")}
    `,
    "form-description": css`
        ${getTextSizeStyles("form-description")}
    `,
};

export const applyHtmlContentStyle = (
    options?: HtmlContentStyleOptions
): string => {
    const textSizeClass = options?.textSize
        ? textSizeClassMap[options.textSize]
        : "";

    return clsx(baseHtmlContent, textSizeClass);
};
