import styled from "styled-components";
import { Color } from "../color";
import { Layout } from "../layout";
import { MediaQuery } from "../media";
import { Text } from "../text";

// Units in rem
export const INDICATOR_BAR_WIDTH_MOBILE = 10;
export const INDICATOR_BAR_MARGIN_RIGHT_MOBILE = 0.5;
export const INDICATOR_BAR_FADE_WIDTH_MOBILE = 4;

// =============================================================================
// STYLE TYPES
// =============================================================================
interface FadeProps {
    backgroundColor: string[];
    position?: "left" | "right";
}

interface IndicatorProps {
    highlighted: boolean;
}

// =============================================================================
// STYLE COMPONENTS
// =============================================================================
export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    z-index: 1;

    margin: 2rem 0;

    ${MediaQuery.MaxWidth.desktopM} {
        margin: 1.5rem 0;
    }

    ${MediaQuery.MaxWidth.tablet} {
        margin: 1rem 0;
    }
`;

export const Content = styled.nav`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`;

export const Fade = styled.div<FadeProps>`
    width: ${INDICATOR_BAR_FADE_WIDTH_MOBILE + "rem"};
    top: 0;
    bottom: 0;
    position: absolute;
    pointer-events: none;

    ${(props) => {
        const { position, backgroundColor } = props;

        let positionStyle;
        const transparentColor = "rgba(255,255,255,0.001)";

        if (position === "left") {
            positionStyle = `
                left: -2%;
                background-image: linear-gradient(to right, ${
                    backgroundColor || "white"
                }, ${transparentColor});
            `;
        } else {
            positionStyle = `
                right: -2%;
                background-image: linear-gradient(to left, ${
                    backgroundColor || "white"
                }, ${transparentColor});
            `;
        }

        return `
            ${MediaQuery.MaxWidth.tablet} {
                ${positionStyle}
            }
        `;
    }};
`;

export const Container = styled(Layout.Content)`
    margin-top: 4.5rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
`;

export const IndicatorBar = styled.div<IndicatorProps>`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${(props) => {
        const { highlighted } = props;
        const color = highlighted ? Color.Accent.Light[1] : Color.Neutral[6];
        return `
            background-color: ${color(props)};
        `;
    }};

    ${MediaQuery.MaxWidth.mobileL} {
        width: ${INDICATOR_BAR_WIDTH_MOBILE + "rem"};
    }
`;

export const IndicatorTitle = styled(Text.BodySmall)<IndicatorProps>`
    margin-right: 0.5rem;

    ${(props) => {
        const { highlighted } = props;
        const color = highlighted ? Color.Primary : Color.Neutral[4];
        return `color: ${color(props)};`;
    }};
`;

export const Indicator = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${INDICATOR_BAR_MARGIN_RIGHT_MOBILE + "rem"};
    }
`;
