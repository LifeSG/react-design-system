import styled from "styled-components";

import { Colour, MediaQuery, Radius, Spacing } from "../theme";
import { Typography } from "../typography";

// Units in rem
export const INDICATOR_BAR_MARGIN_RIGHT_TABLET = 0.5;

// =============================================================================
// STYLE COMPONENTS
// =============================================================================
export const Wrapper = styled.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${MediaQuery.MaxWidth.xl} {
        margin: 1.5rem 0;
    }

    ${MediaQuery.MaxWidth.lg} {
        margin: 1rem 0;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`;

export const IndicatorBar = styled.div`
    height: 4px;
    margin-bottom: ${Spacing["spacing-8"]};
    border-radius: ${Radius["full"]};
    background-color: ${Colour["bg-disabled"]};

    &.indicatorBarHighlighted {
        background-color: ${Colour["bg-primary-subtle"]};
    }
`;

export const IndicatorTitleDesktop = styled(Typography.BodyMD)`
    overflow-wrap: anywhere;
    color: ${Colour["text-disabled"]};

    &.indicatorTitleDesktopHighlighted {
        color: ${Colour["text-primary"]};
    }
`;

export const IndicatorTitleTablet = styled(Typography.BodyMD)`
    overflow-wrap: anywhere;
    color: ${Colour.text};
`;

export const Indicator = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${INDICATOR_BAR_MARGIN_RIGHT_TABLET + "rem"};
    }
`;
