import styled, { css } from "styled-components";
import { ExpandableElement } from "../shared/dropdown-list-v2";
import { IconContainer } from "../shared/dropdown-list-v2/expandable-element.styles";
import { Border, Colour, Font, Radius, Spacing } from "../theme";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface DropdownItemStyleProps {
    $active?: boolean;
    $selected?: boolean;
}

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
    }

    &:hover {
        background: ${Colour["bg-hover"]};
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

export const SelectedIndicator = styled.span`
    ${IconWrapper}
    color: ${Colour["icon-selected"]};
`;

export const UnselectedIndicator = styled.span`
    display: flex;
    width: 1rem;
    flex-shrink: 0;
`;

export const DropdownItem = styled.li<DropdownItemStyleProps>`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-8"]};
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${Radius["none"]};
    outline: none;

    ${(props) => {
        if (props.$active && props.$selected) {
            return css`
                background: ${Colour["bg-hover"]};
                color: ${Colour["text-selected"]};
            `;
        } else if (props.$selected) {
            return css`
                color: ${Colour["text-selected"]};
            `;
        } else if (props.$active) {
            return css`
                background: ${Colour["bg-hover-subtle"]};
            `;
        }
    }}
`;
