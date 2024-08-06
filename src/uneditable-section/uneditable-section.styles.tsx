import styled from "styled-components";
import { v2_Layout } from "../v2_layout";
import { v2_Color } from "../v2_color";
import { v2_MediaQuery } from "../v2_media";
import { V2_Text } from "../v2_text";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface WrapperStyleProps {
    $background: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled(v2_Layout.V2_Content)<WrapperStyleProps>`
    background: ${({ $background }) =>
        $background ? v2_Color.Neutral[7] : "transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`;

export const Title = styled(V2_Text.H3)`
    margin-bottom: 1rem;
    grid-column: span 8;
`;

export const Description = styled(V2_Text.Body)`
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
