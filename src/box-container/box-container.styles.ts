import { css } from "@linaria/core";

import {
    Border,
    Colour,
    Font,
    MediaQuery,
    Motion,
    Radius,
    Spacing,
} from "../theme";

export const handleIconContainer = css`
    transition: ${Motion["duration-250"]} ${Motion["ease-default"]};
`;

export const handleIconContainerExpanded = css`
    transform: rotate(180deg);
`;

export const handleIconContainerCollapsed = css`
    transform: rotate(0deg);
`;

export const container = css`
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    margin-bottom: ${Spacing["spacing-32"]};
`;

export const expandable = css`
    overflow: hidden;
`;

export const nonExpandable = css`
    height: max-content;
`;

export const childContainer = css`
    border-top: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
`;

export const header = css`
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-32"]};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${MediaQuery.MaxWidth.sm} {
        padding: ${Spacing["spacing-16"]} ${Spacing["spacing-20"]};
        display: block;
    }
`;

export const headerInteractive = css`
    cursor: pointer;
`;

export const labelText = css`
    ${Font["heading-sm-semibold"]}
    color: ${Colour["text"]};
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: ${Spacing["spacing-16"]};
`;

export const labelWrapper = css`
    display: flex;
`;

export const alertIcon = css`
    height: ${Font.Spec["heading-size-sm"]};
    width: ${Font.Spec["heading-size-sm"]};
    align-self: center;
    margin-right: ${Spacing["spacing-40"]};
    flex-shrink: 0;

    ${MediaQuery.MaxWidth.sm} {
        margin-right: 0;
    }
`;

export const alertIconError = css`
    color: ${Colour["icon-error"]};
`;

export const alertIconWarning = css`
    color: ${Colour["icon-warning"]};
`;

export const callToActionContainer = css`
    display: flex;
    margin-left: auto;

    ${MediaQuery.MaxWidth.sm} {
        flex-direction: column;
    }
`;

export const callToActionContainerCollapsible = css`
    margin-right: ${Spacing["spacing-40"]};

    ${MediaQuery.MaxWidth.sm} {
        margin-right: 0;
        margin-top: ${Spacing["spacing-16"]};
    }
`;

export const handle = css`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: ${Spacing["spacing-16"]};
    margin: calc(${Spacing["spacing-16"]} * -1);
    display: flex;
    align-items: center;

    ${MediaQuery.MaxWidth.sm} {
        margin: calc(${Spacing["spacing-16"]} * -1)
            calc(${Spacing["spacing-16"]} * -1)
            calc(${Spacing["spacing-16"]} * -1) 0;
        margin-left: auto;
    }
`;

export const handleIcon = css`
    color: ${Colour["icon"]};
    height: ${Font.Spec["heading-size-sm"]};
    width: ${Font.Spec["heading-size-sm"]};
`;
