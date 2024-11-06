import styled, { css } from "styled-components";
import { V2_Layout } from "../v2_layout";
import { V2_Color } from "../v2_color";
import { V2_MediaQuery } from "../v2_media";
import { V2_Text } from "../v2_text";

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

    ${V2_MediaQuery.MaxWidth.mobileL} {
        grid-column: 1 / -1;
    }
`;

export const Wrapper = styled(V2_Layout.Content)<WrapperStyleProps>`
    background: ${({ $background }) =>
        $background ? V2_Color.Neutral[7] : "transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`;

export const Title = styled(V2_Text.H3)<ContentStyleProps>`
    margin-bottom: 1rem;
    ${columnWidthStyle}
`;

export const Description = styled(V2_Text.Body)<ContentStyleProps>`
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

    ${V2_MediaQuery.MaxWidth.tablet} {
        column-gap: 1.5rem;
    }

    ${V2_MediaQuery.MaxWidth.mobileL} {
        column-gap: 1rem;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`;
