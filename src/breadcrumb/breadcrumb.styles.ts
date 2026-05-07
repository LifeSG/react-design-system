import { css } from "@linaria/core";

import { Colour, Font, MediaQuery, Spacing } from "../theme";

export const tokens = {
    fade: {
        backgroundColor: "--fds-internal-breadcrumb-fade-backgroundColor",
    },
};

// =============================================================================
// STYLE CLASSES
// =============================================================================
export const wrapper = css`
    position: relative;
    z-index: 1;
    width: 100%;
    margin: ${Spacing["spacing-32"]} 0;

    ${MediaQuery.MaxWidth.xl} {
        margin: ${Spacing["spacing-24"]} 0;
    }

    ${MediaQuery.MaxWidth.lg} {
        margin: ${Spacing["spacing-16"]} 0;
    }
`;

export const content = css`
    display: inline-flex;
    flex-wrap: wrap;
    width: 100%;
    margin-left: calc(${Spacing["spacing-8"]} * -1);
    overflow: scroll hidden;
    font-size: ${Font.Spec["body-size-md"]};
    white-space: nowrap;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${MediaQuery.MaxWidth.lg} {
        flex-wrap: nowrap;
    }
`;

export const fade = css`
    ${tokens.fade.backgroundColor}: initial;

    position: absolute;
    top: 50%;
    width: ${Spacing["spacing-64"]};
    height: calc(1lh + ${Spacing["spacing-4"]});
    pointer-events: none;
    transform: translateY(-50%);
`;

export const fadeLeft = css`
    ${MediaQuery.MaxWidth.lg} {
        left: calc(${Spacing["spacing-8"]} * -1);
        background-image: linear-gradient(
            to right,
            var(${tokens.fade.backgroundColor}, ${Colour.bg}),
            rgb(255 255 255 0.1%)
        );
    }
`;

export const fadeRight = css`
    ${MediaQuery.MaxWidth.lg} {
        right: ${Spacing["spacing-8"]};
        background-image: linear-gradient(
            to left,
            var(${tokens.fade.backgroundColor}, ${Colour.bg}),
            rgb(255 255 255 0.1%)
        );
    }
`;

export const item = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: inherit;
    line-height: inherit;
`;

export const caret = css`
    width: 1em;
    height: 1em;
    color: ${Colour["icon-subtle"]};
`;

export const slash = css`
    display: inline-block;
    color: ${Colour["text-subtlest"]};
`;

export const currentLabel = css`
    margin: ${Spacing["spacing-8"]} !important;
`;

export const previousLink = css`
    margin: ${Spacing["spacing-8"]} !important;
`;
