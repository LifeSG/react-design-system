import styled from "styled-components";
import { Color } from "../color";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import { Text } from "../text";

// =============================================================================
// STYLING
// =============================================================================
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`;

export const Title = styled(Text.H4)`
    margin-bottom: 0.5rem;
`;

export const TitleContainer = styled.div`
    color: ${Color.Neutral[1]};
    ${applyHtmlContentStyle({ textSize: "Body" })}
`;

export const Description = styled(Text.BodySmall)`
    margin-bottom: 0;
    color: ${Color.Neutral[3]};
`;

export const DescriptionContainer = styled.div`
    color: ${Color.Neutral[3]};
    ${applyHtmlContentStyle({ textSize: "BodySmall" })}
`;
