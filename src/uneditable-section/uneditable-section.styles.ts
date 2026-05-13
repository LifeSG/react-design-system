import styled, { css } from "styled-components";

import { Layout } from "../layout";
import { Colour, MediaQuery } from "../theme";
import { Typography } from "../typography";

// =============================================================================
// STYLING
// =============================================================================
const columnWidthStyle = css`
    grid-column: span 8;

    &.columnWidthStretch {
        grid-column: 1 / -1;
    }

    ${MediaQuery.MaxWidth.sm} {
        grid-column: 1 / -1;
    }
`;

export const Wrapper = styled(Layout.Content)`
    background: transparent;
    padding-top: 2rem;
    padding-bottom: 2rem;

    &.wrapperBackground {
        background: ${Colour["bg-strong"]};
    }
`;

export const FullWidthWrapper = styled.div`
    background: transparent;

    &.fullWidthWrapperBackground {
        background: ${Colour["bg-strong"]};
    }
`;

export const Title = styled(Typography.HeadingSM)`
    margin-bottom: 1rem;
    ${columnWidthStyle}
`;

export const Description = styled(Typography.BodyBL)`
    margin-bottom: 2rem;
    ${columnWidthStyle}
`;

export const CustomSection = styled.div`
    ${columnWidthStyle}
`;

export const GridUl = styled.ul`
    ${columnWidthStyle}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    &.gridUlFullWidth {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    ${MediaQuery.MaxWidth.lg} {
        column-gap: 1.5rem;
    }

    ${MediaQuery.MaxWidth.sm} {
        column-gap: 1rem;
    }

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`;
