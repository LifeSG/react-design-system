import styled from "styled-components";
import { Layout } from "../layout";
import { Color } from "../color";
import { MediaQuery } from "../media";
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
        $background ? Color.Neutral[7] : "transparent"};
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

    ${MediaQuery.MaxWidth.tablet} {
        column-gap: 1.5rem;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        grid-column: 0 / span 4;
        column-gap: 1rem;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`;
