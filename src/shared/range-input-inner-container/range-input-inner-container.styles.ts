import { css } from "@linaria/core";

import { Colour, Font, Motion, Spacing } from "../../theme";

export const wrapper = css`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;
`;

export const wrapperWrap = css`
    /* Parent container need to provide space */
    flex-wrap: wrap;

    [data-id="range-container-elem1-container"],
    [data-id="range-container-elem2-container"] {
        // 100% - Icon size - 2padding
        max-width: calc(
            100% - ${Font.Spec["body-size-baseline"]} - ${Spacing["spacing-16"]}
        );
        flex: unset;
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
    color: ${Colour["icon"]};
    width: ${Font.Spec["body-size-baseline"]};
    height: ${Font.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${Spacing["spacing-8"]};
    align-self: center;
`;

export const lineBreak = css`
    width: 100%; // Force next flex item to break to next line
`;

export const indicator = css`
    position: absolute;
    background: ${Colour["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${Spacing["spacing-8"]} - (${Font.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Motion["duration-350"]} ${Motion["ease-standard"]},
        opacity ${Motion["duration-350"]} ${Motion["ease-standard"]};
    left: 0;
    bottom: 0;
    opacity: 0;

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
