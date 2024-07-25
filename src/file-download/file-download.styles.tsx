import styled, { css } from "styled-components";
import { Color } from "../color";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import { Text } from "../text";
import { MediaQuery } from "../media";

// =============================================================================
// STYLING
// =============================================================================

interface StyleProps {
    $border?: boolean | undefined;
}

export const Container = styled.div<StyleProps>`
    position: relative;
    display: flex;
    flex-direction: column;

    ${(props) => {
        if (props.$border) {
            const color = encodeURIComponent(Color.Neutral[5](props));
            return css`
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${color}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");
                border-radius: 4px;
                padding: 2rem;

                ${MediaQuery.MaxWidth.mobileL} {
                    padding: 2rem 1.25rem;
                }
            `;
        }
    }}
`;

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

export const ListWrapper = styled.ul`
    list-style-type: none;
`;