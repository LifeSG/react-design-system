import styled, { css } from "styled-components";
import { lineClampCss } from "../shared/styles";
import { Border, Colour, Font, MediaQuery, Radius, Spacing } from "../theme";
import { Typography } from "../typography";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================

// =============================================================================
// WRAPPER
// =============================================================================

export const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 100%;

    min-width: 15.625rem;
    width: 100%;
    max-height: 20rem;
    overflow: auto;

    padding: ${Spacing["spacing-8"]} 0;

    background: ${Colour["bg"]};
    border-radius: ${Radius["md"]};
    ${(props) => {
        return props.theme?.colourMode === "dark"
            ? css`
                  border: ${Border["width-010"]} ${Border["solid"]}
                      ${Colour["border"]};
              `
            : css`
                  box-shadow: 0 2px 8px
                      rgba(from ${Colour.Primitive["neutral-50"]} r g b / 24%);
              `;
    }}
`;

export const MobileWrapper = styled.ul`
    display: none;
    list-style: none;

    ${MediaQuery.MaxWidth.lg} {
        border-left: ${Border["width-040"]} solid ${Colour["border-selected"]};
        display: flex;
        flex-direction: column;
    }
`;

// =============================================================================
// LINK ITEMS
// =============================================================================

export const Link = styled(Typography.LinkBL)`
    width: 100%;
    position: relative;
    text-align: left;
    color: ${Colour["text"]};

    margin: 0 ${Spacing["spacing-8"]};

    // use border, as padding still shows an extra line after the ellipsis
    border: ${Border["solid"]} transparent;
    border-width: ${Spacing["spacing-12"]} ${Spacing["spacing-8"]};

    border-radius: ${Radius["md"]};

    ${lineClampCss(2)}
    white-space: pre-wrap;

    :hover,
    :active,
    :focus {
        background-color: ${Colour["bg-hover"]};
        color: ${Colour["text"]};
    }

    ${MediaQuery.MaxWidth.lg} {
        ${Font["body-md-regular"]}
    }
`;

// =============================================================================
// LINK ITEMS
// =============================================================================
export const MenuItem = styled.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
`;
