import styled from "styled-components";

import { DashedBorder } from "../dashed-border";
import { Markup } from "../markup";
import { Border, Colour, Font, MediaQuery, Radius, Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================

export const Container = styled(DashedBorder).attrs({
    thickness: Border["width-040"],
    radius: Radius["sm"],
    colour: Colour["border"],
})`
    position: relative;
    display: flex;
    flex-direction: column;

    &.containerBordered {
        padding: ${Spacing["spacing-32"]};

        ${MediaQuery.MaxWidth.sm} {
            padding: ${Spacing["spacing-32"]} ${Spacing["spacing-20"]};
        }
    }
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

export const TitleContainer = styled(Markup)`
    color: ${Colour["text"]};
`;

export const Description = styled.p`
    ${Font["body-md-regular"]}
    color: ${Colour["text-subtler"]};
`;

export const DescriptionContainer = styled(Markup)`
    color: ${Colour["text-subtler"]};
`;

export const ListWrapper = styled.ul`
    list-style-type: none;
`;
