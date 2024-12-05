import styled, { css } from "styled-components";
import { V2_Color } from "../v2_color";
import { Layout } from "../layout";
import { MediaQuery } from "../theme";
import { Typography } from "../typography";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface WrapperStyleProps {
    $background: boolean;
}

interface ContentStyleProps {
    $stretch: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
const columnWidthStyle = css<ContentStyleProps>`
    grid-column: ${(props) => (props.$stretch ? "1 / -1" : "span 8")};

    ${MediaQuery.MaxWidth.sm} {
        grid-column: 1 / -1;
    }
`;

export const Wrapper = styled(Layout.Content)<WrapperStyleProps>`
    background: ${({ $background }) =>
        $background
            ? V2_Color.Neutral[7]
            : "transparent"}; // not sure what bg colour to use
    padding-top: 2rem;
    padding-bottom: 2rem;
`;

export const Title = styled(Typography.HeaderSM)<ContentStyleProps>`
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

export const GridUl = styled.ul<ContentStyleProps>`
    ${columnWidthStyle}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${MediaQuery.MaxWidth.lg} {
        column-gap: 1.5rem;
    }

    ${MediaQuery.MaxWidth.sm} {
        column-gap: 1rem;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`;
