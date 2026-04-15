import styled, { css } from "styled-components";
import { Border, Colour, Font, Motion, Radius, Spacing } from "../theme";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface LinkItemStyleProps {
    $active?: boolean;
}

// =============================================================================
// LINK CONTAINER STYLES
// =============================================================================
export const LinkContainerWrapper = styled.div`
    display: inline-flex;
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
    align-items: center;
    border-radius: ${Radius["sm"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    background: ${Colour["bg"]};
`;

export const LinkList = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
    gap: 0 ${Spacing["spacing-8"]};
    flex-wrap: wrap;
`;

export const LinkListItem = styled.li`
    display: flex;
    align-items: center;
`;

export const LinkItem = styled.button<LinkItemStyleProps>`
    display: flex;
    padding: 0.25rem 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border: none;
    border-radius: ${Radius["md"]};
    ${Font["body-md-semibold"]}
    color: ${Colour["text-subtler"]};
    text-align: center;
    transition: color ${Motion["duration-150"]} ${Motion["ease-default"]};

    ${({ $active }) =>
        $active
            ? css`
                  background: ${Colour["bg-primary-subtler"]};
                  color: ${Colour["text-selected"]};
                  cursor: default;
              `
            : css`
                  background: none;
                  cursor: pointer;

                  &:hover {
                      color: ${Colour["text-hover"]};
                      text-decoration: underline;
                  }
              `}

    &:focus-visible {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: -2px;
    }
`;
