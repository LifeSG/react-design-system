import { css } from "@linaria/core";

import { lineClampCss } from "../shared/styles";
import {
    Border,
    Breakpoint,
    Colour,
    Font,
    MediaQuery,
    Radius,
    Spacing,
} from "../theme";

export const histogramSliderDropdownContainer = css`
    overflow: hidden;
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    background: ${Colour["bg"]};
    padding: ${Spacing["spacing-16"]};
    min-width: 23rem;

    ${MediaQuery.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Breakpoint["sm-margin"]} * 2);
    }

    ${MediaQuery.MaxWidth.xs} {
        width: calc(100vw - ${Breakpoint["xs-margin"]} * 2);
    }

    ${MediaQuery.MaxWidth.xxs} {
        width: calc(100vw - ${Breakpoint["xxs-margin"]} * 2);
    }
`;

export const label = css`
    display: flex;
    align-items: baseline;
`;

export const separator = css`
    margin: 0 0.5rem;
    color: ${Colour["text"]};
`;

export const placeholderLabel = css`
    ${Font["body-baseline-regular"]}
    text-align: left;
    overflow: hidden;
    color: ${Colour["text-subtler"]};
`;

export const placeholderLabelTruncateEnd = css`
    ${lineClampCss(1)}
`;
