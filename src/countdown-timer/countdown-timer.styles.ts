import { css } from "@linaria/core";

import {
    Border,
    Colour,
    Font,
    MediaQuery,
    Radius,
    Shadow,
    Spacing,
} from "../theme";

export const tokens = {
    fixedCountdown: {
        top: "--fds-internal-countdownTimer-fixedCountdown-top",
        left: "--fds-internal-countdownTimer-fixedCountdown-left",
        right: "--fds-internal-countdownTimer-fixedCountdown-right",
    },
} as const;

export const wrapper = css`
    width: 100%;
`;

export const countdown = css`
    ${Font["body-baseline-regular"]}
    display: flex;
    align-items: center;
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
    border-radius: ${Radius["sm"]};
    color: ${Colour["text-primary"]};
    border: ${Border["width-010"]} ${Border["solid"]};
    border-color: ${Colour["border-primary"]};
    background-color: ${Colour["bg"]};

    ${MediaQuery.MaxWidth.sm} {
        padding: ${Spacing["spacing-16"]};
    }

    &[data-warn="true"] {
        color: ${Colour["text-error"]};
        border-color: ${Colour["border-error"]};
    }
`;

export const countdownHidden = css`
    opacity: 0;
`;

export const countdownInline = css`
    position: relative;
`;

export const countdownFixed = css`
    position: fixed;
    z-index: 10;

    /* reset variables to prevent leaking to child components */
    ${tokens.fixedCountdown.top}: initial;
    ${tokens.fixedCountdown.left}: initial;
    ${tokens.fixedCountdown.right}: initial;
    top: var(${tokens.fixedCountdown.top});
    left: var(${tokens.fixedCountdown.left});
    right: var(${tokens.fixedCountdown.right});

    box-shadow: ${Shadow["xs-focus-strong"]};

    ${MediaQuery.MaxWidth.sm} {
        left: 0;
        right: 0;
        border-radius: 0;
        border-left: none;
        border-right: none;
        box-shadow: none;
    }

    &[data-warn="true"] {
        box-shadow: ${Shadow["xs-error-strong"]};
    }
`;

export const timeLeft = css`
    font-weight: ${Font.Spec["weight-bold"]};
    margin-left: ${Spacing["spacing-8"]};
    margin-right: ${Spacing["spacing-24"]};

    ${MediaQuery.MaxWidth.sm} {
        margin-right: ${Spacing["spacing-48"]};
    }
`;

export const timer = css`
    font-weight: ${Font.Spec["weight-semibold"]};
    margin-left: auto;
`;

export const timerIcon = css`
    color: ${Colour["icon-primary"]};

    &[data-warn="true"] {
        color: ${Colour["icon-error"]};
    }
`;
