import { css } from "@linaria/core";

import { iconContainer } from "../shared/dropdown-list/expandable-element.styles";
import { Border, Colour, Font, Radius, Spacing } from "../theme";

// =============================================================================
// TRIGGER STYLES
// =============================================================================
export const expandableElement = css`
    min-width: 9rem;
    width: auto;
    ${Font["body-md-semibold"]}
    color: ${Colour["text-primary"]};
    height: 2.5rem;
    padding: 0 ${Spacing["spacing-16"]};
    border-radius: ${Radius["sm"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    background: ${Colour["bg"]};

    .${iconContainer} {
        margin-left: auto;

        svg {
            color: ${Colour["text-selected"]};
        }
    }

    &:focus-visible {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: -2px;
    }
`;

export const languageIconWrapper = css`
    display: flex;
    align-items: center;
    color: ${Colour["icon-primary"]};

    svg {
        height: 1rem;
        width: 1rem;
    }
`;

// =============================================================================
// DROPDOWN STYLES
// =============================================================================
export const dropdownPanel = css`
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
