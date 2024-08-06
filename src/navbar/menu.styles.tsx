import styled from "styled-components";
import { Color } from "../color";
import { v2_MediaQuery } from "../v2_media";
import { Text, TextStyleHelper } from "../text";
import { v2_DesignToken } from "../v2_design-token";
// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================

// =============================================================================
// WRAPPER
// =============================================================================

export const Wrapper = styled.ul`
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    margin-top: 0;
    left: 0;
    top: 102%;
    min-width: 15.625rem;
    position: absolute;
    max-height: 20rem;

    background: ${Color.Neutral[8]};
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: ${v2_DesignToken.ElevationBoxShadow};
`;

export const MobileWrapper = styled.ul`
    display: none;
    list-style: none;

    ${v2_MediaQuery.MaxWidth.tablet} {
        border-left: 0.25rem solid ${Color.Primary};
        display: flex;
        flex-direction: column;
    }
`;

// =============================================================================
// LINK ITEMS
// =============================================================================

export const Link = styled(Text.Hyperlink.Small)`
    ${TextStyleHelper.getTextStyle("H6", "regular")};
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-start;
    text-align: left;
    color: ${Color.Neutral[1]};

    padding: 1px 1rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;

    :active,
    :focus {
        color: ${Color.Primary};
    }
    :hover {
        color: ${Color.Accent.Light[1]};
    }

    ${v2_MediaQuery.MaxWidth.tablet} {
        ${TextStyleHelper.getTextStyle("H5", "bold")}
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        line-height: 1.125rem;
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
    padding: 0.5rem 0;

    :first-child {
        padding-top: 1rem;
    }

    :last-child {
        padding-bottom: 1rem;
    }

    ${v2_MediaQuery.MaxWidth.tablet} {
        padding: 0.625rem 0;

        :first-child {
            padding-top: 0.25rem;
        }

        :last-child {
            padding-bottom: 0.625rem;
        }
    }
`;
