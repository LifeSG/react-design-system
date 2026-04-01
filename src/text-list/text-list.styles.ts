import styled, { css } from "styled-components";

import { Colour, Font, MediaQuery } from "../theme";
import type { BulletType, CounterType, TextListSize } from "./types";

export const tokens = {
    listBottomMargin: "--fds-internal-textList-list-bottomMargin",
    orderedListCounterSeparator:
        "--fds-internal-textList-orderedList-counterSeparator",
    orderedListStartValue: "--fds-internal-textList-orderedList-startValue",
};

export const listSizeClassNames: Record<TextListSize, string> = {
    "heading-xxl": "textListSizeHeadingXxl",
    "heading-xl": "textListSizeHeadingXl",
    "heading-lg": "textListSizeHeadingLg",
    "heading-md": "textListSizeHeadingMd",
    "heading-sm": "textListSizeHeadingSm",
    "heading-xs": "textListSizeHeadingXs",
    "body-baseline": "textListSizeBodyBaseline",
    "body-md": "textListSizeBodyMd",
    "body-sm": "textListSizeBodySm",
    "body-xs": "textListSizeBodyXs",
};

export const counterTypeClassNames: Record<CounterType, string> = {
    decimal: "textListCounterTypeDecimal",
    "lower-alpha": "textListCounterTypeLowerAlpha",
    "lower-roman": "textListCounterTypeLowerRoman",
};

export const bulletTypeClassNames: Record<BulletType, string> = {
    disc: "textListBulletTypeDisc",
    circle: "textListBulletTypeCircle",
    square: "textListBulletTypeSquare",
    none: "textListBulletTypeNone",
};

export const orderedListReversedClassName = "textListOrderedListReversed";
export const orderedListCustomStartClassName = "textListOrderedListCustomStart";
export const unorderedListCustomIconClassName =
    "textListUnorderedListCustomIcon";

const baseStyle = css`
    ${tokens.listBottomMargin}: 0rem;
    margin-bottom: var(${tokens.listBottomMargin});

    // Counter matters
    counter-reset: list;

    font-weight: ${Font.Spec["weight-regular"]};
    color: ${Colour.text};

    &.${listSizeClassNames["heading-xxl"]} {
        ${Font["heading-xxl-regular"]}
    }
    &.${listSizeClassNames["heading-xl"]} {
        ${Font["heading-xl-regular"]}
    }
    &.${listSizeClassNames["heading-lg"]} {
        ${Font["heading-lg-regular"]}
    }
    &.${listSizeClassNames["heading-md"]} {
        ${Font["heading-md-regular"]}
    }
    &.${listSizeClassNames["heading-sm"]} {
        ${Font["heading-sm-regular"]}
    }
    &.${listSizeClassNames["heading-xs"]} {
        ${Font["heading-xs-regular"]}
    }
    &.${listSizeClassNames["body-baseline"]} {
        ${Font["body-baseline-regular"]}
    }
    &.${listSizeClassNames["body-md"]} {
        ${Font["body-md-regular"]}
    }
    &.${listSizeClassNames["body-sm"]} {
        ${Font["body-sm-regular"]}
    }
    &.${listSizeClassNames["body-xs"]} {
        ${Font["body-xs-regular"]}
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`;

export const StyledOrderedList = styled.ol`
    ${baseStyle}
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
        position: absolute;
        left: -2em;
    }

    &.${counterTypeClassNames.decimal} li:before {
        content: counter(list, decimal)
            var(${tokens.orderedListCounterSeparator});
    }

    &.${counterTypeClassNames["lower-alpha"]} li:before {
        content: counter(list, lower-alpha)
            var(${tokens.orderedListCounterSeparator});
    }

    &.${counterTypeClassNames["lower-roman"]} li:before {
        content: counter(list, lower-roman)
            var(${tokens.orderedListCounterSeparator});
    }

    &.${orderedListReversedClassName} li:before {
        counter-increment: list -1;
    }

    &.${orderedListCustomStartClassName} {
        counter-reset: list var(${tokens.orderedListStartValue});
    }

    ul > li:before {
        content: "";
    }
`;

export const StyledUnorderedList = styled.ul`
    ${baseStyle}

    margin-left: 2.5em;
    list-style-type: disc;

    &.${bulletTypeClassNames.disc} {
        list-style-type: disc;
    }

    &.${bulletTypeClassNames.circle} {
        list-style-type: circle;
    }

    &.${bulletTypeClassNames.square} {
        list-style-type: square;
    }

    &.${bulletTypeClassNames.none} {
        list-style-type: none;
    }

    &.${unorderedListCustomIconClassName} {
        margin-left: 0;
        list-style-type: none;

        & > li {
            display: flex;
            align-items: flex-start;
            gap: 0.5em;
        }
    }
`;
