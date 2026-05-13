import styled from "styled-components";

import { Border, Colour, Font, Motion, Radius, Spacing } from "../theme";

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

export const linkItemActiveClassName =
    "languageSwitcherLinkContainerVariantItemActive";

export const LinkItem = styled.button`
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
    background: none;
    cursor: pointer;

    &:hover {
        color: ${Colour["text-hover"]};
        text-decoration: underline;
    }

    &.${linkItemActiveClassName} {
        background: ${Colour["bg-primary-subtler"]};
        color: ${Colour["text-selected"]};
        cursor: default;

        &:hover {
            color: ${Colour["text-selected"]};
            text-decoration: none;
        }
    }

    &:focus-visible {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: -2px;
    }
`;
