import styled from "styled-components";
import { Colour, MediaQuery, Spacing } from "@/theme";
import { Typography } from "../typography";
import { Layout } from "../layout";
import { Divider } from "../divider";

// =============================================================================
// GENERIC
// =============================================================================

export const BaseFooter = styled.footer`
    background: ${Colour["bg-strong"]};
`;

export const StyledFooterLink = styled(Typography.LinkSM)`
    color: ${Colour.text};
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
    }
`;

export const LogoSection = styled.div`
    grid-column: 1 / span 2;

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${MediaQuery.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-bottom: ${Spacing["spacing-32"]};
    }

    ${MediaQuery.MaxWidth.md} {
        grid-column: 1 / span 8;
        margin-bottom: ${Spacing["spacing-32"]};
    }
`;

export const LinkSection = styled.ul`
    // first col
    grid-column: 3 / span 4;
    list-style-type: none;

    :nth-of-type(2) {
        // 2nd col
        grid-column: 7 / span 4;
    }

    li {
        :not(:last-child) {
            margin-bottom: ${Spacing["spacing-8"]};
        }

        a {
            display: inline-block;
        }
    }

    ${MediaQuery.MaxWidth.lg} {
        // first col
        grid-column: 1 / span 6;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 7 / span 6;
        }
    }

    ${MediaQuery.MaxWidth.md} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }
`;

export const AddonSection = styled.div`
    grid-column: 13 / span 6;

    ${MediaQuery.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-top: ${Spacing["spacing-32"]};
    }

    ${MediaQuery.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`;

// =============================================================================
// BOTTOM SECTION
// =============================================================================

export const BottomSection = styled(Layout.Content)`
    padding: ${Spacing["spacing-20"]} 0;

    ${MediaQuery.MaxWidth.lg} {
        border-top: none;
        flex-direction: column;
        padding: ${Spacing["spacing-16"]} 0;
    }
`;

export const BottomSectionContent = styled.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: ${Spacing["spacing-16"]};
    }

    ${MediaQuery.MaxWidth.lg} {
        grid-column: 1 / span 12;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${MediaQuery.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`;

export const CopyrightSection = styled(BottomSectionContent)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${MediaQuery.MaxWidth.lg} {
        margin-top: ${Spacing["spacing-16"]};
        justify-content: flex-start;
        grid-column: 1 / span 12;
    }

    ${MediaQuery.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`;

export const DisclaimerTextLink = styled(Typography.LinkXS)`
    color: ${Colour.text};
    &:not(:last-child) {
        margin-right: ${Spacing["spacing-16"]};
    }

    svg {
        color: ${Colour.icon};
    }

    &:hover {
        color: ${Colour["text-subtler"]};
        svg {
            color: ${Colour["icon-subtle"]};
        }
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
