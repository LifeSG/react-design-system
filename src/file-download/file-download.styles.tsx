import styled, { css } from "styled-components";
import { V2_Color } from "../v2_color";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import { V2_Text } from "../v2_text";
import { V2_MediaQuery } from "../v2_media";

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
            const color = encodeURIComponent(V2_Color.Neutral[5](props));
            return css`
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${color}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");
                border-radius: 4px;
                padding: 2rem;

                ${V2_MediaQuery.MaxWidth.mobileL} {
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

export const Title = styled(V2_Text.H4)`
    margin-bottom: 0.5rem;
`;

export const TitleContainer = styled.div`
    color: ${V2_Color.Neutral[1]};
    ${applyHtmlContentStyle({ textSize: "body-baseline" })}
`;

export const Description = styled(V2_Text.BodySmall)`
    margin-bottom: 0;
    color: ${V2_Color.Neutral[3]};
`;

export const DescriptionContainer = styled.div`
    color: ${V2_Color.Neutral[3]};
    ${applyHtmlContentStyle({ textSize: "body-md" })}
`;

export const ListWrapper = styled.ul`
    list-style-type: none;
`;
