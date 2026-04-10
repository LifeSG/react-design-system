import styled, { css } from "styled-components";
import { ExpandableElement } from "../shared/dropdown-list";
import { IconContainer } from "../shared/dropdown-list/expandable-element.styles";
import {
    ListItem,
    SelectedIndicator,
    UnselectedIndicator,
} from "../shared/dropdown-list/dropdown-list.styles";
import { Border, Colour, Font, Radius, Spacing } from "../theme";

// =============================================================================
// TRIGGER STYLES
// =============================================================================
export const StyledExpandableElement = styled(ExpandableElement)`
    min-width: 9rem;
    width: auto;
    ${Font["body-md-semibold"]}
    color: ${Colour["text-primary"]};
    height: 2.5rem;
    padding: 0 ${Spacing["spacing-16"]};
    border-radius: ${Radius["sm"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    background: ${Colour["bg"]};

    ${IconContainer} {
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

const IconWrapper = css`
    display: flex;
    align-items: center;

    svg {
        height: 1rem;
        width: 1rem;
    }
`;

export const LanguageIconWrapper = styled.span`
    ${IconWrapper}
    color: ${Colour["icon-primary"]};
`;

// =============================================================================
// DROPDOWN STYLES
// =============================================================================
export const DropdownPanel = styled.div`
    border-radius: ${Radius["sm"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    background: ${Colour["bg"]};
    overflow: hidden;
`;

export const DropdownList = styled.ul`
    list-style: none;
    margin: 0;
    padding: ${Spacing["spacing-8"]};
`;

export { SelectedIndicator, UnselectedIndicator };

export const DropdownItem = styled(ListItem)`
    align-items: center;
    ${Font["body-md-regular"]}
    color: ${Colour["text"]};

    &:hover {
        background: ${Colour["bg-hover-subtle"]};
    }

    ${(props) =>
        props.$selected &&
        css`
            background: transparent;
            color: ${Colour["text-selected"]};

            &:hover {
                background: ${Colour["bg-hover"]};
            }
        `}
`;
