import styled from "styled-components";
import { Colour, MediaQuery } from "../theme";
import { Typography } from "../typography/typography";

// Units in rem
export const INDICATOR_BAR_MARGIN_RIGHT_TABLET = 0.5;

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

export const IndicatorBar = styled.div<IndicatorProps>`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${(props) => {
        const { highlighted } = props;
        const color = highlighted
            ? Colour["bg-primary-subtle"]
            : Colour["bg-disabled"];
        return `
            background-color: ${color(props)};
        `;
    }};
`;

export const IndicatorTitleDesktop = styled(Typography.BodyMD)<IndicatorProps>`
    overflow-wrap: anywhere;
    ${(props) => {
        const { highlighted } = props;
        const color = highlighted
            ? Colour["text-primary"]
            : Colour["text-disabled"];
        return `color: ${color(props)};`;
    }};
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
