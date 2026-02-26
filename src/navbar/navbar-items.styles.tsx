import { ChevronUpIcon } from "@lifesg/react-icons/chevron-up";
import styled, { css } from "styled-components";
import { ClickableIcon } from "../shared/clickable-icon";
import { V3_Font, V3_MediaQuery } from "../v3_theme";
import { V3_Colour } from "../v3_theme";
import { V3_ThemeNavbar } from "../v3_theme/components/theme-helper";
import { TypographyWeight } from "../typography";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $selected: boolean;
}

interface WrapperStyleProps {
    $alignLeft: boolean | undefined;
}

interface ItemStyleProps {
    $hiddenBranding: boolean | undefined;
}

// =============================================================================
// WRAPPER
// =============================================================================

export const Wrapper = styled.ul<WrapperStyleProps>`
    display: flex;
    list-style: none;
    position: relative;

    ${(props) => props.$alignLeft && "margin-right: auto;"}

    ${V3_MediaQuery.MaxWidth.lg} {
        display: none;
    }
`;

export const MobileWrapper = styled.ul`
    display: none;
    list-style: none;

    ${V3_MediaQuery.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`;

// =============================================================================
// LINK ITEMS
// =============================================================================
export const LinkItem = styled.li<ItemStyleProps>`
    display: flex;
    margin: 0 1rem;

    &:first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${(props) => (props.$hiddenBranding ? "-0.5rem" : "0")};
    }

    ${V3_MediaQuery.MaxWidth.lg} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`;

const linkCss = css<{ $selected: boolean; weight: TypographyWeight }>`
    ${(props) => V3_Font[`body-md-${props.weight}`]}

    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${V3_ThemeNavbar["navbar-link-colour-text"]};
    height: 100%;

    &:active,
    &:hover,
    &:focus {
        color: ${(props) =>
            props.$selected
                ? V3_ThemeNavbar["navbar-link-colour-text-selected-hover"]
                : V3_ThemeNavbar["navbar-link-colour-text-hover"]};
    }

    ${V3_MediaQuery.MaxWidth.lg} {
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`;
export const Link = styled.a<{ $selected: boolean; weight: TypographyWeight }>`
    ${linkCss}
`;

export const LinkButton = styled.button<{
    $selected: boolean;
    weight: TypographyWeight;
}>`
    ${linkCss}
    background: none;
    border: 0;
    padding: 0;
    cursor: pointer;
    text-align: left;
    margin: 0;
    box-shadow: none;
    font: inherit;
    color: inherit;
`;

export const LinkLabel = styled.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`;

export const LinkIndicator = styled.div<StyleProps>`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.25rem;
    background-color: ${V3_Colour["border-selected"]};

    &:hover {
        ${(props) => props.$selected && V3_Colour["border-selected-hover"]};
    }

    ${V3_MediaQuery.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`;

export const LinkIconContainer = styled.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`;

export const ExpandCollapseButton = styled(ClickableIcon)<StyleProps>`
    padding: 0.5rem;
    transform: rotate(${(props) => (props.$selected ? 0 : 180)}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`;

export const ChevronIcon = styled(ChevronUpIcon)<StyleProps>`
    height: 1.25rem;
    width: 1.25rem;
    color: ${V3_Colour.icon};
    &:hover {
        ${(props) =>
            props.$selected
                ? V3_Colour["icon-selected-hover"]
                : V3_Colour["icon-hover"]};
    }
`;
