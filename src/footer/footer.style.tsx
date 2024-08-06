import styled from "styled-components";
import { v2_Layout } from "../v2_layout";
import { v2_MediaQuery } from "../v2_media";
import { v2_Color } from "../v2_color";
import { v2_Text, v2_TextStyleHelper } from "../v2_text";

// =============================================================================
// GENERIC
// =============================================================================

export const BaseFooter = styled.footer`
    background: ${v2_Color.Neutral[7]};
`;

export const StyledFooterLink = styled(v2_Text.Hyperlink.Small)`
    color: ${v2_Color.Neutral[1]};
`;

// =============================================================================
// TOP SECTION
// =============================================================================

export const TopSection = styled(v2_Layout.V2_Content)`
    padding: 4rem 0;
    border-bottom: 1px solid ${v2_Color.Neutral[5]};

    ${v2_MediaQuery.MaxWidth.tablet} {
        padding: 2rem 0;
    }
`;

export const LogoSection = styled.div`
    grid-column: 1 / span 2;

    img {
        height: 4rem;
        width: auto;
    }

    ${v2_MediaQuery.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        margin-bottom: 2rem;
    }

    ${v2_MediaQuery.MaxWidth.mobileL} {
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

    ${v2_MediaQuery.MaxWidth.tablet} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }

    ${v2_MediaQuery.MaxWidth.mobileL} {
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

    ${v2_MediaQuery.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        margin-top: 2rem;
    }

    ${v2_MediaQuery.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`;

// =============================================================================
// BOTTOM SECTION
// =============================================================================

export const MobileOnlyBorder = styled.div`
    display: none;

    ${v2_MediaQuery.MaxWidth.tablet} {
        display: block;
        height: 1px;
        background: ${v2_Color.Neutral[6]};
    }
`;

export const BottomSection = styled(v2_Layout.V2_Content)`
    padding: 1.375rem 0;

    ${v2_MediaQuery.MaxWidth.tablet} {
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

    ${v2_MediaQuery.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${v2_MediaQuery.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`;

export const CopyrightSection = styled(BottomSectionContent)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${v2_MediaQuery.MaxWidth.tablet} {
        margin-top: 1rem;
        justify-content: flex-start;
        grid-column: 1 / span 8;
    }

    ${v2_MediaQuery.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`;

export const DisclaimerTextLink = styled(v2_Text.Hyperlink.Small)`
    ${v2_TextStyleHelper.getTextStyle("XSmall", "regular")}
    color: ${v2_Color.Neutral[1]};
    &:not(:last-child) {
        margin-right: 1.5rem;
    }

    svg {
        color: ${v2_Color.Neutral[1]};
        vertical-align: sub;
    }

    &:hover {
        color: ${v2_Color.Neutral[3]};
        svg {
            color: ${v2_Color.Neutral[3]};
        }
    }

    ${v2_MediaQuery.MaxWidth.tablet} {
        margin-bottom: 1rem;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${v2_MediaQuery.MaxWidth.tablet} {
        margin-bottom: 0.625rem;
    }
`;
