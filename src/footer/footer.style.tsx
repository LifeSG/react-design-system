import styled from "styled-components";
import { v2_Layout } from "../v2_layout";
import { V2_MediaQuery } from "../v2_media";
import { V2_Color } from "../v2_color";
import { V2_Text, V2_TextStyleHelper } from "../v2_text";

// =============================================================================
// GENERIC
// =============================================================================

export const BaseFooter = styled.footer`
    background: ${V2_Color.Neutral[7]};
`;

export const StyledFooterLink = styled(V2_Text.Hyperlink.Small)`
    color: ${V2_Color.Neutral[1]};
`;

// =============================================================================
// TOP SECTION
// =============================================================================

export const TopSection = styled(v2_Layout.V2_Content)`
    padding: 4rem 0;
    border-bottom: 1px solid ${V2_Color.Neutral[5]};

    ${V2_MediaQuery.MaxWidth.tablet} {
        padding: 2rem 0;
    }
`;

export const LogoSection = styled.div`
    grid-column: 1 / span 2;

    img {
        height: 4rem;
        width: auto;
    }

    ${V2_MediaQuery.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        margin-bottom: 2rem;
    }

    ${V2_MediaQuery.MaxWidth.mobileL} {
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

    ${V2_MediaQuery.MaxWidth.tablet} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }

    ${V2_MediaQuery.MaxWidth.mobileL} {
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

    ${V2_MediaQuery.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        margin-top: 2rem;
    }

    ${V2_MediaQuery.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`;

// =============================================================================
// BOTTOM SECTION
// =============================================================================

export const MobileOnlyBorder = styled.div`
    display: none;

    ${V2_MediaQuery.MaxWidth.tablet} {
        display: block;
        height: 1px;
        background: ${V2_Color.Neutral[6]};
    }
`;

export const BottomSection = styled(v2_Layout.V2_Content)`
    padding: 1.375rem 0;

    ${V2_MediaQuery.MaxWidth.tablet} {
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

    ${V2_MediaQuery.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${V2_MediaQuery.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`;

export const CopyrightSection = styled(BottomSectionContent)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${V2_MediaQuery.MaxWidth.tablet} {
        margin-top: 1rem;
        justify-content: flex-start;
        grid-column: 1 / span 8;
    }

    ${V2_MediaQuery.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`;

export const DisclaimerTextLink = styled(V2_Text.Hyperlink.Small)`
    ${V2_TextStyleHelper.getTextStyle("XSmall", "regular")}
    color: ${V2_Color.Neutral[1]};
    &:not(:last-child) {
        margin-right: 1.5rem;
    }

    svg {
        color: ${V2_Color.Neutral[1]};
        vertical-align: sub;
    }

    &:hover {
        color: ${V2_Color.Neutral[3]};
        svg {
            color: ${V2_Color.Neutral[3]};
        }
    }

    ${V2_MediaQuery.MaxWidth.tablet} {
        margin-bottom: 1rem;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${V2_MediaQuery.MaxWidth.tablet} {
        margin-bottom: 0.625rem;
    }
`;
