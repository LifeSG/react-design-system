import styled, { css } from "styled-components";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import { Border, Colour, Font, MediaQuery, Radius, Spacing } from "../theme";

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
                ${Border.Util["dashed-default"]({
                    radius: Radius["sm"],
                    thickness: Border["width-040"],
                    colour: Colour["border"],
                })}
                padding: ${Spacing["spacing-32"]};

                ${MediaQuery.MaxWidth.sm} {
                    padding: ${Spacing["spacing-32"]} ${Spacing["spacing-20"]};
                }
            `;
        }
    }}
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${Spacing["spacing-32"]};
`;

export const Title = styled.p`
    ${Font["heading-xs-regular"]}
    color: ${Colour["text"]};
    margin-bottom: ${Spacing["spacing-8"]};
`;

export const TitleContainer = styled.div`
    ${applyHtmlContentStyle({ textSize: "heading-xs" })}
    color: ${Colour["text"]};
`;

export const Description = styled.p`
    ${Font["body-md-regular"]}
    color: ${Colour["text-subtler"]};
`;

export const DescriptionContainer = styled.div`
    ${applyHtmlContentStyle({ textSize: "body-md" })}
    color: ${Colour["text-subtler"]};
`;

export const ListWrapper = styled.ul`
    list-style-type: none;
`;
