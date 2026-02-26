import styled from "styled-components";
import { V3_MediaQuery, V3_Spacing } from "../v3_theme";
import { Typography } from "../typography";
import { Layout } from "../layout";
import { Divider } from "../divider";
import { V3_ThemeFooter } from "../v3_theme/components/theme-helper";

// =============================================================================
// GENERIC
// =============================================================================

export const BaseFooter = styled.footer`
    background: ${V3_ThemeFooter["footer-colour-bg"]};
`;

export const StyledFooterLink = styled(Typography.LinkMD)`
    color: ${V3_ThemeFooter["footer-link-colour-text"]};

    &:hover {
        color: ${V3_ThemeFooter["footer-link-colour-text-hover"]};
    }
`;

// =============================================================================
// TOP SECTION
// =============================================================================

export const FullWidthDivider = styled(Divider)`
    width: 100%;
`;

export const TopSection = styled(Layout.Content)`
    padding: ${V3_Spacing["spacing-64"]} 0;

    ${V3_MediaQuery.MaxWidth.lg} {
        padding: ${V3_Spacing["spacing-32"]} 0;

        [data-id="container"] {
            flex-direction: column;
            gap: ${V3_Spacing["spacing-32"]};
        }
    }
`;

export const LogoSection = styled.div`
    display: flex;
    width: fit-content;
    margin-right: ${V3_Spacing["spacing-64"]};

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${V3_MediaQuery.MaxWidth.lg} {
        width: 100%;
        margin-right: 0;
    }
`;

export const LinkSectionWrapper = styled.div`
    display: flex;
    gap: ${V3_Spacing["spacing-32"]};
    flex: 1 1 auto;
    max-width: calc(32% + ${V3_Spacing["spacing-32"]});

    ${V3_MediaQuery.MaxWidth.lg} {
        max-width: 100%;
    }
`;

export const LinkSection = styled.ul`
    flex: 1 1 50%;
    list-style-type: none;

    &:nth-of-type(2) {
        // 2nd col
        grid-column: 7 / span 4;
    }

    li {
        &:not(:last-child) {
            margin-bottom: ${V3_Spacing["spacing-8"]};
        }

        a {
            display: inline-block;
        }
    }

    ${V3_MediaQuery.MaxWidth.lg} {
        // first col
        grid-column: 1 / span 6;

        &:nth-of-type(2) {
            // 2nd col
            grid-column: 7 / span 6;
        }
    }

    ${V3_MediaQuery.MaxWidth.md} {
        // first col
        grid-column: 1 / span 4;

        &:nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }
`;

export const AddonSection = styled.div`
    flex: 0 1 33%;
    margin-left: auto;

    ${V3_MediaQuery.MaxWidth.lg} {
        flex: 1 1 100%;
        margin-left: 0;
    }
`;

// =============================================================================
// BOTTOM SECTION
// =============================================================================

export const BottomSection = styled(Layout.Content)`
    padding: ${V3_Spacing["spacing-20"]} 0;

    [data-id="container"] {
        column-gap: ${V3_Spacing["spacing-32"]};
    }

    ${V3_MediaQuery.MaxWidth.lg} {
        border-top: none;
        padding: ${V3_Spacing["spacing-16"]} 0;

        [data-id="container"] {
            flex-direction: column;
        }
    }
`;

export const BottomSectionContent = styled.div`
    flex: 1 1 50%;
    display: flex;

    ${V3_MediaQuery.MaxWidth.lg} {
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }
`;

export const CopyrightSection = styled(BottomSectionContent)`
    justify-content: flex-end;

    ${V3_MediaQuery.MaxWidth.lg} {
        margin-top: ${V3_Spacing["spacing-16"]};
        justify-content: flex-start;
    }
`;

export const CopyrightText = styled(Typography.BodyXS)`
    color: ${V3_ThemeFooter["footer-colour-text"]};
`;

export const DisclaimerTextLink = styled(Typography.LinkXS)`
    color: ${V3_ThemeFooter["footer-disclaimer-link-colour-text"]};
    &:not(:last-child) {
        margin-right: ${V3_Spacing["spacing-16"]};
    }

    &:hover {
        color: ${V3_ThemeFooter["footer-disclaimer-link-colour-text-hover"]};
    }

    ${V3_MediaQuery.MaxWidth.lg} {
        margin-bottom: ${V3_Spacing["spacing-12"]};
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${V3_MediaQuery.MaxWidth.lg} {
        margin-bottom: ${V3_Spacing["spacing-8"]};
    }
`;
