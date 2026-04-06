import { css } from "@linaria/core";

import { Colour, Font, MediaQuery } from "../theme";
import type { TextListSize } from "./types";

export const tokens = {
    listBottomMargin: "--fds-internal-textList-list-bottomMargin",
    orderedListCounterStyle: "--fds-internal-textList-orderedList-counterStyle",
    orderedListCounterSeparator:
        "--fds-internal-textList-orderedList-counterSeparator",
    orderedListStartValue: "--fds-internal-textList-orderedList-startValue",
    unorderedListBulletType: "--fds-internal-textList-unorderedList-bulletType",
};

export const listBase = css`
    ${tokens.listBottomMargin}: 0rem;
    margin-bottom: var(${tokens.listBottomMargin});

    // Counter matters
    counter-reset: list;

    font-weight: ${Font.Spec["weight-regular"]};
    color: ${Colour.text};

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`;

export const listSize: Record<TextListSize, string> = {
    "heading-xxl": css`
        ${Font["heading-xxl-regular"]}
    `,
    "heading-xl": css`
        ${Font["heading-xl-regular"]}
    `,
    "heading-lg": css`
        ${Font["heading-lg-regular"]}
    `,
    "heading-md": css`
        ${Font["heading-md-regular"]}
    `,
    "heading-sm": css`
        ${Font["heading-sm-regular"]}
    `,
    "heading-xs": css`
        ${Font["heading-xs-regular"]}
    `,
    "body-baseline": css`
        ${Font["body-baseline-regular"]}
    `,
    "body-md": css`
        ${Font["body-md-regular"]}
    `,
    "body-sm": css`
        ${Font["body-sm-regular"]}
    `,
    "body-xs": css`
        ${Font["body-xs-regular"]}
    `,
};

export const orderedList = css`
    ${tokens.orderedListCounterSeparator}: ")";

    margin-left: 3em;
    list-style-position: outside;
    list-style-type: none;

    ${MediaQuery.MaxWidth.lg} {
        margin-left: 2.5em;
    }

    li {
        position: relative;
    }

    li:before {
        counter-increment: list;
        content: counter(list, var(${tokens.orderedListCounterStyle}, decimal))
            var(${tokens.orderedListCounterSeparator});
        position: absolute;
        left: -2em;
    }

    ul > li:before {
        content: "";
    }
`;

export const orderedListReversed = css`
    li:before {
        counter-increment: list -1;
    }
`;

export const orderedListCustomStart = css`
    counter-reset: list var(${tokens.orderedListStartValue});
`;

export const unorderedList = css`
    margin-left: 2.5em;
    list-style-type: var(${tokens.unorderedListBulletType}, disc);
`;

export const unorderedListCustomIcon = css`
    margin-left: 0;
    list-style-type: none;

    & > li {
        display: flex;
        align-items: flex-start;
        gap: 0.5em;
    }
`;
