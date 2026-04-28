import { css } from "@linaria/core";

import { Colour, Font, MediaQuery, Spacing } from "../theme";

export const tokens = {
    fade: {
        backgroundColor: "--fds-internal-breadcrumb-fade-backgroundColor",
    },
    item: {
        customStyles: "--fds-internal-breadcrumb-item-customStyles",
    },
};

// =============================================================================
// STYLE CLASSES
// =============================================================================
export const wrapper = css`
    position: relative;
    width: 100%;
    z-index: 1;
    margin: ${Spacing["spacing-32"]} 0;

    ${MediaQuery.MaxWidth.xl} {
        margin: ${Spacing["spacing-24"]} 0;
    }

    ${MediaQuery.MaxWidth.lg} {
        margin: ${Spacing["spacing-16"]} 0;
    }
`;

export const content = css`
    ${tokens.item.customStyles}: initial;
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: calc(${Spacing["spacing-8"]} * -1);
    font-size: ${Font.Spec["body-size-md"]};
    overflow-x: scroll;
    overflow-y: hidden;
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
    width: ${Spacing["spacing-64"]};
    height: calc(1lh + ${Spacing["spacing-4"]});
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
`;

export const fadeLeft = css`
    ${MediaQuery.MaxWidth.lg} {
        left: calc(${Spacing["spacing-8"]} * -1);
        background-image: linear-gradient(
            to right,
            var(${tokens.fade.backgroundColor}, ${Colour.bg}),
            rgba(255, 255, 255, 0.001)
        );
    }
`;

export const fadeRight = css`
    ${MediaQuery.MaxWidth.lg} {
        right: ${Spacing["spacing-8"]};
        background-image: linear-gradient(
            to left,
            var(${tokens.fade.backgroundColor}, ${Colour.bg}),
            rgba(255, 255, 255, 0.001)
        );
    }
`;

export const item = css`
    ${tokens.item.customStyles}: initial;
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
`;

export const caret = css`
    height: 1em;
    width: 1em;
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
