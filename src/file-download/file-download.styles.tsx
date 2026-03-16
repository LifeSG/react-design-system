import styled, { css } from "styled-components";

import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_MediaQuery,
    V3_Radius,
    V3_Spacing,
} from "../v3_theme";

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
            return css`
                ${V3_Border.Util["dashed-default"]({
                    radius: V3_Radius["sm"],
                    thickness: V3_Border["width-040"],
                    colour: V3_Colour["border"],
                })}
                padding: ${V3_Spacing["spacing-32"]};

                ${V3_MediaQuery.MaxWidth.sm} {
                    padding: ${V3_Spacing["spacing-32"]}
                        ${V3_Spacing["spacing-20"]};
                }
            `;
        }
    }}
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${V3_Spacing["spacing-32"]};
`;

export const Title = styled.p`
    ${V3_Font["heading-xs-regular"]}
    color: ${V3_Colour["text"]};
    margin-bottom: ${V3_Spacing["spacing-8"]};
`;

export const TitleContainer = styled.div`
    ${applyHtmlContentStyle({ textSize: "heading-xs" })}
    color: ${V3_Colour["text"]};
`;

export const Description = styled.p`
    ${V3_Font["body-md-regular"]}
    color: ${V3_Colour["text-subtler"]};
`;

export const DescriptionContainer = styled.div`
    ${applyHtmlContentStyle({ textSize: "body-md" })}
    color: ${V3_Colour["text-subtler"]};
`;

export const ListWrapper = styled.ul`
    list-style-type: none;
`;
