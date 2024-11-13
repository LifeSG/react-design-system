import styled from "styled-components";
import { Colour, MediaQuery } from "../theme";
import { Typography } from "../typography";
import { Layout } from "../layout";

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

export const TopSection = styled(Layout.Content)`
    padding: 4rem 0;

    ${MediaQuery.MaxWidth.lg} {
        padding: 2rem 0;
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
        grid-column: 1 / span 8;
        margin-bottom: 2rem;
    }

    ${MediaQuery.MaxWidth.sm} {
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

    ${MediaQuery.MaxWidth.lg} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }

    ${MediaQuery.MaxWidth.sm} {
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

    ${MediaQuery.MaxWidth.lg} {
        grid-column: 1 / span 8;
        margin-top: 2rem;
    }

    ${MediaQuery.MaxWidth.sm} {
        grid-column: 1 / span 4;
    }
`;

// =============================================================================
// BOTTOM SECTION
// =============================================================================

export const MobileOnlyBorder = styled.div`
    display: none;

    ${MediaQuery.MaxWidth.lg} {
        display: block;
        height: 1px;
        background: ${Colour["bg-strong"]};
    }
`;

export const BottomSection = styled(Layout.Content)`
    padding: 1.375rem 0;

    ${MediaQuery.MaxWidth.lg} {
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

    ${MediaQuery.MaxWidth.lg} {
        grid-column: 1 / span 8;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${MediaQuery.MaxWidth.sm} {
        grid-column: 1 / span 4;
    }
`;

export const CopyrightSection = styled(BottomSectionContent)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${MediaQuery.MaxWidth.lg} {
        margin-top: 1rem;
        justify-content: flex-start;
        grid-column: 1 / span 8;
    }

    ${MediaQuery.MaxWidth.sm} {
        grid-column: 1 / span 4;
    }
`;

export const DisclaimerTextLink = styled(Typography.LinkXS)`
    color: ${Colour.text};
    &:not(:last-child) {
        margin-right: 1.5rem;
    }

    svg {
        color: ${Colour.icon};
        vertical-align: top;
    }

    &:hover {
        color: ${Colour["text-subtler"]};
        svg {
            color: ${Colour["icon-subtle"]};
        }
    }

    ${MediaQuery.MaxWidth.lg} {
        margin-bottom: 1rem;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${MediaQuery.MaxWidth.lg} {
        margin-bottom: 0.625rem;
    }
`;
