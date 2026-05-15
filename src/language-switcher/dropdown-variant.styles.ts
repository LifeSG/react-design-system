import { css } from "@linaria/core";

import { iconContainer } from "../shared/dropdown-list/expandable-element.styles";
import { Border, Colour, Font, Radius, Spacing } from "../theme";

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
