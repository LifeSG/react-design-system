import { css } from "@linaria/core";

import { Colour, Font, Motion, Spacing } from "../theme";

export const tokens = {
    minimisableContent: {
        height: "--fds-internal-filter-minimisableContent-height",
    },
} as const;

export const filterItemWrapper = css`
    background-color: ${Colour["bg"]};
`;

export const filterItemWrapperStrong = css`
    background-color: ${Colour["bg-strong"]};
`;

export const divider = css`
    display: none;
    height: 1px;
    background-color: ${Colour["border"]};
`;

export const dividerVisible = css`
    display: block;
`;

export const dividerMobile = css`
    margin: 0 ${Spacing["spacing-16"]};
`;

export const filterItemHeader = css`
    display: flex;
    align-items: center;

    background-color: ${Colour["bg"]};
`;

export const filterItemHeaderMobile = css`
    background-color: transparent;
`;

export const filterItemExpandButton = css`
    margin: 0 0 0 auto;

    color: ${Colour["icon"]};
    &:hover {
        color: ${Colour["icon-hover"]};
    }
`;

export const chevronIcon = css`
    height: ${Font.Spec["body-size-baseline"]};
    width: ${Font.Spec["body-size-baseline"]};

    transform: rotate(0deg);
    transition: transform ${Motion["duration-350"]} ${Motion["ease-standard"]};
`;

export const chevronIconExpanded = css`
    transform: rotate(180deg);
`;

export const filterItemTitle = css`
    ${Font["heading-xs-semibold"]}
    color: ${Colour["text"]};

    margin: ${Spacing["spacing-24"]} 0;
    margin-left: ${Spacing["spacing-20"]};
`;

export const filterItemTitleMobile = css`
    ${Font["body-md-semibold"]}
    color: ${Colour["text-subtle"]};

    margin: ${Spacing["spacing-24"]} ${Spacing["spacing-20"]} 0
        ${Spacing["spacing-20"]};
`;

export const expandableItem = css`
    overflow: hidden;
`;

export const filterItemBody = css`
    padding: ${Spacing["spacing-24"]} ${Spacing["spacing-20"]};
`;

export const minimisableContent = css`
    ${tokens.minimisableContent.height}: initial;
    height: var(${tokens.minimisableContent.height});
`;

export const minimisableContentMinimisable = css`
    overflow: hidden;
`;

export const filterItemMinimiseButton = css`
    height: fit-content;
    padding: 0;
    margin: ${Spacing["spacing-16"]} 0 0 0;
`;
