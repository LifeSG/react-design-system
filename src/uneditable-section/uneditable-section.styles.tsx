import styled, { css } from "styled-components";
import { Layout } from "../layout";
import { V3_Colour, V3_MediaQuery } from "../v3_theme";
import { Typography } from "../typography";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface WrapperStyleProps {
    $background: boolean;
}

interface ContentStyleProps {
    $stretch: boolean | undefined;
}

interface GridStyleProps extends ContentStyleProps {
    $fullWidth?: boolean | undefined;
}
// =============================================================================
// STYLING
// =============================================================================
const columnWidthStyle = css<ContentStyleProps>`
    grid-column: ${(props) => (props.$stretch ? "1 / -1" : "span 8")};

    ${V3_MediaQuery.MaxWidth.sm} {
        grid-column: 1 / -1;
    }
`;

export const Wrapper = styled(Layout.Content)<WrapperStyleProps>`
    background: ${({ $background }) =>
        $background ? V3_Colour["bg-strong"] : "transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`;

export const FullWidthWrapper = styled.div<WrapperStyleProps>`
    background: ${({ $background }) =>
        $background ? V3_Colour["bg-strong"] : "transparent"};
`;

export const Title = styled(Typography.HeadingSM)<ContentStyleProps>`
    margin-bottom: 1rem;
    ${columnWidthStyle}
`;

export const Description = styled(Typography.BodyBL)<ContentStyleProps>`
    margin-bottom: 2rem;
    ${columnWidthStyle}
`;

export const CustomSection = styled.div<ContentStyleProps>`
    ${columnWidthStyle}
`;

export const GridUl = styled.ul<GridStyleProps>`
    ${columnWidthStyle}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: ${({ $fullWidth }) =>
        $fullWidth ? "repeat(2, minmax(0, 1fr))" : "repeat(8, minmax(0, 1fr))"};

    ${V3_MediaQuery.MaxWidth.lg} {
        column-gap: 1.5rem;
    }

    ${V3_MediaQuery.MaxWidth.sm} {
        column-gap: 1rem;
    }

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`;
