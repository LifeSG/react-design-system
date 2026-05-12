import { css } from "@linaria/core";

import { lineClampCss } from "../shared/styles";
import {
    Border,
    Colour,
    Font,
    Motion,
    Radius,
    Shadow,
    Spacing,
} from "../theme";

export const tokens = {
    actionBarWrapperLeft: "--fds-internal-dataTable-actionBarWrapper-left",
    actionBarWrapperWidth: "--fds-internal-dataTable-actionBarWrapper-width",
} as const;

export const tableWrapper = css`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["md"]};

    // Hide scrollbar
    &::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`;

export const tableContainer = css`
    flex: 1;
`;

export const table = css`
    text-align: left;
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
`;

export const headerSticky = css`
    position: sticky;
    top: 0;
    z-index: 20;
`;

export const bodyCell = css`
    padding: 1.25rem 1rem;
    vertical-align: middle;
    color: ${Colour["text"]};
    border-bottom: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};

    &:first-child {
        padding-left: 1.5rem;
    }

    &:last-child {
        padding-right: 1.5rem;
    }
`;

export const bodyRow = css`
    background-color: ${Colour["bg"]};
    border-top: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};

    &:last-child {
        .${bodyCell} {
            border-bottom: none;
        }
    }
`;

export const bodyRowBottomBorder = css`
    &:last-child {
        .${bodyCell} {
            border-bottom: ${Border["width-010"]} ${Border["solid"]}
                ${Colour["border"]};
        }
    }
`;

export const actionBarWrapper = css`
    bottom: 0;
    position: sticky;
    left: 0;

    ${tokens.actionBarWrapperLeft}: initial;
    ${tokens.actionBarWrapperWidth}: initial;
`;

export const actionBarWrapperFixed = css`
    position: fixed;
    left: var(${tokens.actionBarWrapperLeft}, 0px);
    width: var(${tokens.actionBarWrapperWidth}, 100%);
`;

export const textButton = css`
    ${Font["body-md-semibold"]}
    cursor: pointer;
    color: ${Colour["text-primary"]};
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    &:hover {
        color: ${Colour["text-hover"]};
    }
`;

export const actionBar = css`
    overflow: hidden;
    display: flex;
    align-items: center;
    height: 3.5rem;
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-24"]};
    border-top: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    background-color: ${Colour["bg-selected"]};
    transition: all 300ms ease;
    border-radius: ${Radius["none"]} ${Radius["none"]} ${Radius["sm"]}
        ${Radius["sm"]};
`;

export const actionBarFloat = css`
    transform: translateX(0.5rem) translateY(-2rem);
    border-radius: ${Radius["sm"]};
    box-shadow: ${Shadow["xs-subtle"]};
    width: calc(100% - ${Spacing["spacing-16"]});
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
`;

export const headerRow = css`
    background-color: ${Colour["bg-stronger"]};
    height: 6rem;
    border-bottom: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
`;

export const headerCell = css`
    padding: 1.25rem 1rem;
    text-align: left;
    cursor: default;
    vertical-align: middle;
    color: ${Colour["text"]};
    border-bottom: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};

    &:first-child {
        padding-left: 1.5rem;
    }

    &:last-child {
        padding-right: 1.5rem;
    }

    &:focus-within {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: -3px;
    }
`;

export const headerCellClickable = css`
    cursor: pointer;
`;

export const headerCellCheckbox = css`
    width: 4rem;
    padding: 1.25rem 0.5rem 1.25rem 1.5rem;
`;

export const headerCellWrapper = css`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${Colour["text"]};
        margin-left: 0.5rem;
    }
`;

export const bodyRowAlternating = css`
    background-color: ${Colour["bg-strong"]};
`;

export const bodyRowSelected = css`
    background-color: ${Colour["bg-selected"]};
`;

export const bodyRowSelectable = css`
    &:hover {
        background-color: ${Colour["bg-hover-strong"]};
    }
`;

export const bodyCellCheckbox = css`
    padding: 1.25rem 0.5rem 1.25rem 1.5rem;
`;

export const bodyCellContent = css`
    ${lineClampCss(2)}
    text-overflow: ellipsis;
`;

export const checkBoxWrapper = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const loaderWrapper = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`;

export const errorDisplayTitle = css`
    margin-top: 2rem;
    margin-bottom: 1rem;
`;

export const emptyViewCell = css`
    padding: 4rem 0;

    &:first-child {
        padding-left: 1.5rem;
    }

    &:last-child {
        padding-right: 1.5rem;
    }
`;
