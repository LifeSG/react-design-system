import { css } from "@linaria/core";

import { Border, Colour, Font, Radius, Spacing } from "../theme";

export const tokens = {
    width: "--fds-internal-languageSwitcher-dropdown-width",
} as const;

export const dropdownPanel = css`
    ${tokens.width}: initial;

    width: var(${tokens.width});
    border-radius: ${Radius["sm"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    background: ${Colour["bg"]};
    overflow: hidden;
`;

export const dropdownList = css`
    list-style: none;
    margin: 0;
    padding: ${Spacing["spacing-8"]};
`;

export {
    baseIndicatorStyle,
    selectedIndicator,
} from "../shared/dropdown-list/dropdown-list.styles";

export const dropdownItem = css`
    align-items: center;
    ${Font["body-md-regular"]}
    color: ${Colour["text"]};

    &:hover {
        background: ${Colour["bg-hover-subtle"]};
    }
`;

export const dropdownItemSelected = css`
    background: transparent;
    color: ${Colour["text-selected"]};

    &:hover {
        background: ${Colour["bg-hover"]};
    }
`;
