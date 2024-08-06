import styled from "styled-components";
import { Layout } from "../layout";
import { v2_Color } from "../v2_color";
import { v2_MediaQuery } from "../v2_media";
import { Text } from "../text";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface WrapperStyleProps {
    $background: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled(Layout.Content)<WrapperStyleProps>`
    background: ${({ $background }) =>
        $background ? v2_Color.Neutral[7] : "transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`;

export const Title = styled(Text.H3)`
    margin-bottom: 1rem;
    grid-column: span 8;
`;

export const Description = styled(Text.Body)`
    margin-bottom: 2rem;
    grid-column: span 8;
`;

export const CustomSection = styled.div`
    grid-column: span 8;
`;

export const GridUl = styled.ul`
    grid-column: span 8;
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${v2_MediaQuery.MaxWidth.tablet} {
        column-gap: 1.5rem;
    }

    ${v2_MediaQuery.MaxWidth.mobileL} {
        grid-column: 0 / span 4;
        column-gap: 1rem;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`;
