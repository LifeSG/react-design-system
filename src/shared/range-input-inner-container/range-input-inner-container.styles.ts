import { css } from "@linaria/core";

import { Colour, Font, Motion, Spacing } from "../../theme";

export const wrapper = css`
    position: relative;
    display: flex;
    flex: 1;
    height: 100%;
`;

export const wrapperWrap = css`
    /* Parent container need to provide space */
    flex-wrap: wrap;

    [data-id="range-container-elem1-container"],
    [data-id="range-container-elem2-container"] {
        flex: unset;

        /* 100% - Icon size - 2padding */
        max-width: calc(100% - ${Font.Spec["body-size-baseline"]} calc(${Spacing["spacing-16"]} * -1));
    }

    [data-id="range-container-elem2-container"] {
        margin-top: ${Spacing["spacing-8"]};
    }
`;

export const elementContainer = css`
    display: flex;
    flex: 1;
    align-items: center;
`;

export const arrowRight = css`
    flex-shrink: 0;
    align-self: center;
    width: ${Font.Spec["body-size-baseline"]};
    height: ${Font.Spec["body-size-baseline"]};
    margin: 0 ${Spacing["spacing-8"]};
    color: ${Colour["icon"]};
`;

export const lineBreak = css`
    /* Force next flex item to break to next line */
    width: 100%;
`;

export const indicator = css`
    position: absolute;
    bottom: 0;
    left: 0;

    /* half - half padding - half icon width */
    width: calc(50% - ${Spacing["spacing-8"]} - (${Font.Spec["body-size-baseline"]} / 2));
    height: 2px;
    background: ${Colour["border-focus-strong"]};
    opacity: 0;
    transition-timing-function: ${Motion["ease-standard"]}, ${Motion["ease-standard"]};
    transition-duration: ${Motion["duration-350"]}, ${Motion["duration-350"]};
    transition-property: left, opacity;

    &[data-position="start"] {
        opacity: 1;
    }

    &[data-position="end"] {
        left: calc(50% + ${Spacing["spacing-16"]});
        opacity: 1;
    }
`;

export const indicatorError = css`
    background: ${Colour["border-error-focus-strong"]};
`;

export const indicatorWrap = css`
    display: none;
`;
