import styled from "styled-components";
import { MediaQuery, Spacing } from "../theme";
import { Typography } from "../typography";
import { Layout } from "../layout";
import { Divider } from "../divider";
import { ThemeFooter } from "../theme/components/theme-helper";

// =============================================================================
// GENERIC
// =============================================================================

export const BaseFooter = styled.footer`
    background: ${ThemeFooter["footer-colour-bg"]};
`;

export const StyledFooterLink = styled(Typography.LinkMD)`
    color: ${ThemeFooter["footer-link-colour-text"]};

    &:hover {
        color: ${ThemeFooter["footer-link-colour-text-hover"]};
    }
`;

// =============================================================================
// TOP SECTION
// =============================================================================

export const FullWidthDivider = styled(Divider)`
    width: 100%;
`;

export const TopSection = styled(Layout.Content)`
    padding: ${Spacing["spacing-64"]} 0;

    ${MediaQuery.MaxWidth.lg} {
        padding: ${Spacing["spacing-32"]} 0;

        [data-id="container"] {
            flex-direction: column;
            gap: ${Spacing["spacing-32"]};
        }
    }
`;

export const LogoSection = styled.div`
    display: flex;
    width: fit-content;
    margin-right: ${Spacing["spacing-64"]};

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${MediaQuery.MaxWidth.lg} {
        width: 100%;
        margin-right: 0;
    }
`;

export const LinkSectionWrapper = styled.div`
    display: flex;
    gap: ${Spacing["spacing-32"]};
    flex: 1 1 auto;
    max-width: calc(32% + ${Spacing["spacing-32"]});

    ${MediaQuery.MaxWidth.lg} {
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
            margin-bottom: ${Spacing["spacing-8"]};
        }

        a {
            display: inline-block;
        }
    }

    ${MediaQuery.MaxWidth.lg} {
        // first col
        grid-column: 1 / span 6;

        &:nth-of-type(2) {
            // 2nd col
            grid-column: 7 / span 6;
        }
    }

    ${MediaQuery.MaxWidth.md} {
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

    ${MediaQuery.MaxWidth.lg} {
        flex: 1 1 100%;
        margin-left: 0;
    }
`;

// =============================================================================
// BOTTOM SECTION
// =============================================================================

export const BottomSection = styled(Layout.Content)`
    padding: ${Spacing["spacing-20"]} 0;

    [data-id="container"] {
        column-gap: ${Spacing["spacing-32"]};
    }

    ${MediaQuery.MaxWidth.lg} {
        border-top: none;
        padding: ${Spacing["spacing-16"]} 0;

        [data-id="container"] {
            flex-direction: column;
        }
    }
`;

export const BottomSectionContent = styled.div`
    flex: 1 1 50%;
    display: flex;

    ${MediaQuery.MaxWidth.lg} {
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }
`;

export const CopyrightSection = styled(BottomSectionContent)`
    justify-content: flex-end;

    ${MediaQuery.MaxWidth.lg} {
        margin-top: ${Spacing["spacing-16"]};
        justify-content: flex-start;
    }
`;

export const CopyrightText = styled(Typography.BodyXS)`
    color: ${ThemeFooter["footer-colour-text"]};
`;

export const DisclaimerTextLink = styled(Typography.LinkXS)`
    color: ${ThemeFooter["footer-disclaimer-link-colour-text"]};
    &:not(:last-child) {
        margin-right: ${Spacing["spacing-16"]};
    }

    &:hover {
        color: ${ThemeFooter["footer-disclaimer-link-colour-text-hover"]};
    }

    ${MediaQuery.MaxWidth.lg} {
        margin-bottom: ${Spacing["spacing-12"]};
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${MediaQuery.MaxWidth.lg} {
        margin-bottom: ${Spacing["spacing-8"]};
    }
`;
