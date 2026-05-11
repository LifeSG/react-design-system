import { css } from "@linaria/core";

import { Border, Colour, Font, MediaQuery, Motion, Radius, Spacing } from "../theme";

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
    margin-bottom: ${Spacing["spacing-32"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-32"]};

    ${MediaQuery.MaxWidth.sm} {
        display: block;
        padding: ${Spacing["spacing-16"]} ${Spacing["spacing-20"]};
    }
`;

export const headerInteractive = css`
    cursor: pointer;
`;

export const labelText = css`
    ${Font["heading-sm-semibold"]}
    display: flex;
    align-items: center;
    margin-right: ${Spacing["spacing-16"]};
    color: ${Colour["text"]};
    overflow-wrap: anywhere;
`;

export const labelWrapper = css`
    display: flex;
`;

export const alertIcon = css`
    flex-shrink: 0;
    align-self: center;
    width: ${Font.Spec["heading-size-sm"]};
    height: ${Font.Spec["heading-size-sm"]};
    margin-right: ${Spacing["spacing-40"]};

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
        margin-top: ${Spacing["spacing-16"]};
        margin-right: 0;
    }
`;

export const handle = css`
    display: flex;
    align-items: center;
    padding: ${Spacing["spacing-16"]};
    margin: calc(${Spacing["spacing-16"]} * -1);
    cursor: pointer;
    background: transparent;
    border: none;

    ${MediaQuery.MaxWidth.sm} {
        margin-top: calc(${Spacing["spacing-16"]} * -1);
        margin-right: calc(${Spacing["spacing-16"]} * -1);
        margin-bottom: calc(${Spacing["spacing-16"]} * -1);
        /* stylelint-disable-next-line declaration-block-no-redundant-longhand-properties */
        margin-left: auto;
    }
`;

export const handleIcon = css`
    width: ${Font.Spec["heading-size-sm"]};
    height: ${Font.Spec["heading-size-sm"]};
    color: ${Colour["icon"]};
`;
