import { css } from "@linaria/core";

import { Colour, Font, MediaQuery, Radius } from "../theme";

// =============================================================================
// TOKENS
// =============================================================================
export const tokens = {
    wrapper: {
        startCol: "--fds-internal-timeline-wrapper-startCol",
        colSpan: "--fds-internal-timeline-wrapper-colSpan",
    },
} as const;

export const circleIndicator = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;

    &[data-variant="current"] {
        background-color: ${Colour["icon-primary-subtle"]};
    }

    &[data-variant="upcoming-active"] {
        border: 4px solid ${Colour["icon-primary-subtle"]};
    }

    &[data-variant="upcoming-inactive"] {
        border: 4px solid ${Colour["icon-subtle"]};
    }

    &[data-variant="disabled"] {
        background-color: ${Colour["icon-disabled-subtle"]};
    }

    &[data-variant="completed"] {
        background-color: ${Colour["icon-success"]};

        svg {
            color: ${Colour["icon-inverse"]};
        }
    }

    &[data-variant="numeric"] {
        background-color: ${Colour["icon-info"]};
        color: ${Colour["text-inverse"]};
        ${Font["body-sm-bold"]}
    }

    &[data-variant="error"] {
        width: 1.8rem;
        height: 1.8rem;
        margin: -0.15rem 0 -0.15rem -0.15rem;

        svg {
            color: ${Colour["icon-error"]};
            height: 100%;
            width: 100%;
        }
    }
`;

export const lineIndicator = css`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: ${Radius["full"]};

    &[data-variant="completed"] {
        background-color: ${Colour["icon-success"]};
    }

    &[data-variant="current"],
    &[data-variant="upcoming-active"] {
        background-color: ${Colour["icon-primary-subtle"]};
    }

    &[data-variant="upcoming-inactive"] {
        background-color: ${Colour["icon-subtle"]};
    }

    &[data-variant="disabled"] {
        background-color: ${Colour["icon-disabled-subtle"]};
    }

    &[data-variant="numeric"] {
        background-color: ${Colour["icon-info"]};
    }

    &[data-variant="error"] {
        margin-left: -0.15rem;
        background-color: ${Colour["icon-error"]};
    }
`;

export const timelineIndicators = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`;

export const timelineWrapper = css`
    ${tokens.wrapper.startCol}: initial;
    ${tokens.wrapper.colSpan}: initial;
    grid-column: var(${tokens.wrapper.startCol}, 3) / span
        var(${tokens.wrapper.colSpan}, 8);

    ${MediaQuery.MaxWidth.lg} {
        grid-column: span 8;
    }

    ${MediaQuery.MaxWidth.sm} {
        grid-column: span 8;
    }
`;

export const timelineTitle = css`
    margin-bottom: 1rem;

    ${MediaQuery.MaxWidth.lg} {
        margin-bottom: 1.5rem;
    }
`;

export const timelineItemTitle = css`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`;

// default is 2-8-2 on desktop
export const timelineItem = css`
    display: flex;

    &:last-of-type .${lineIndicator} {
        margin-bottom: 0;
    }
`;

export const timelineItemContent = css`
    margin-bottom: 2rem;
    width: 100%;
`;

export const timelinePills = css`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`;

export const timelinePill = css`
    padding: 0.125rem 0.5rem;
`;
