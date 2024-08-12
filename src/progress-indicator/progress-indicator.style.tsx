import styled from "styled-components";
import { V2_Color } from "../v2_color";
import { V2_MediaQuery } from "../v2_media";
import { V2_Text } from "../v2_text";

// Units in rem
export const INDICATOR_BAR_MARGIN_RIGHT_MOBILE = 0.5;

// =============================================================================
// STYLE TYPES
// =============================================================================

interface IndicatorProps {
    highlighted: boolean;
}

// =============================================================================
// STYLE COMPONENTS
// =============================================================================
export const Wrapper = styled.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${V2_MediaQuery.MaxWidth.desktopM} {
        margin: 1.5rem 0;
    }

    ${V2_MediaQuery.MaxWidth.tablet} {
        margin: 1rem 0;
    }
`;

export const Content = styled.nav`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`;

export const IndicatorBar = styled.div<IndicatorProps>`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${(props) => {
        const { highlighted } = props;
        const color = highlighted
            ? V2_Color.Accent.Light[1]
            : V2_Color.Neutral[6];
        return `
            background-color: ${color(props)};
        `;
    }};
`;

export const IndicatorTitleDesktop = styled(V2_Text.BodySmall)<IndicatorProps>`
    overflow-wrap: anywhere;
    ${(props) => {
        const { highlighted } = props;
        const color = highlighted ? V2_Color.Primary : V2_Color.Neutral[3];
        return `color: ${color(props)};`;
    }};
`;

export const IndicatorTitleMobile = styled(V2_Text.BodySmall)`
    overflow-wrap: anywhere;
    color: ${V2_Color.Neutral[1]};
`;

export const Indicator = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${INDICATOR_BAR_MARGIN_RIGHT_MOBILE + "rem"};
    }
`;
