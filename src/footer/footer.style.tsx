import styled from "styled-components";
import { Layout } from "../layout";
import { MediaQuery } from "../media";
import { Color } from "../color";
import { Text, TextStyleHelper } from "../text";

// =============================================================================
// GENERIC
// =============================================================================

export const BaseFooter = styled.footer`
    background: ${Color.Neutral[7]};
`;

export const StyledFooterLink = styled(Text.Hyperlink.Small)`
    color: ${Color.Neutral[1]};
`;

// =============================================================================
// TOP SECTION
// =============================================================================

export const TopSection = styled(Layout.Content)`
    padding: 4rem 0;
    border-bottom: 1px solid ${Color.Neutral[5]};

    ${MediaQuery.MaxWidth.tablet} {
        padding: 2rem 0;
    }
`;

export const LogoSection = styled.div`
    grid-column: 1 / span 2;

    img {
        height: 4rem;
        width: auto;
    }

    ${MediaQuery.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        margin-bottom: 2rem;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
        margin-bottom: 2rem;
    }
`;

export const LinkSection = styled.ul`
    // first col
    grid-column: 3 / span 2;
    list-style-type: none;

    :nth-of-type(2) {
        // 2nd col
        grid-column: 5 / span 2;
    }

    li {
        :not(:last-child) {
            margin-bottom: 0.5rem;
        }

        a {
            display: inline-block;
            vertical-align: top;
            line-height: 1rem;
        }
    }

    ${MediaQuery.MaxWidth.tablet} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }

    ${MediaQuery.MaxWidth.mobileL} {
        // first col
        grid-column: 1 / span 2;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 3 / span 2;
        }
    }
`;

export const AddonSection = styled.div`
    grid-column: 9 / span 4;

    ${MediaQuery.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        margin-top: 2rem;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`;

// =============================================================================
// BOTTOM SECTION
// =============================================================================

export const MobileOnlyBorder = styled.div`
    display: none;

    ${MediaQuery.MaxWidth.tablet} {
        display: block;
        height: 1px;
        background: ${Color.Neutral[6]};
    }
`;

export const BottomSection = styled(Layout.Content)`
    padding: 1.375rem 0;

    ${MediaQuery.MaxWidth.tablet} {
        border-top: none;
        flex-direction: column;
        padding: 1rem 0;
    }
`;

export const BottomSectionContent = styled.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: 1rem;
    }

    ${MediaQuery.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${MediaQuery.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`;

export const CopyrightSection = styled(BottomSectionContent)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${MediaQuery.MaxWidth.tablet} {
        margin-top: 1rem;
        justify-content: flex-start;
        grid-column: 1 / span 8;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`;

export const DisclaimerTextLink = styled(Text.Hyperlink.Small)`
    ${TextStyleHelper.getTextStyle("XSmall", "regular")}
    color: ${Color.Neutral[1]};
    &:not(:last-child) {
        margin-right: 1.5rem;
    }

    &:hover {
        color: ${Color.Neutral[3]};
    }

    ${MediaQuery.MaxWidth.tablet} {
        margin-bottom: 1rem;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${MediaQuery.MaxWidth.tablet} {
        margin-bottom: 0.625rem;
    }
`;
