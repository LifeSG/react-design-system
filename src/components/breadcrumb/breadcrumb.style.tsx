import styled from "styled-components";
import { Icon } from "../icon/icon";
import { MediaQuery } from "../styles/spec";
import { Color } from "../styles/theme";
import { Text } from "../text/text";

// =============================================================================
// STYLE TYPES
// =============================================================================
interface FadeProps {
    backgroundColor?: string[];
    position?: "left" | "right";
}

interface CaretProps {
    color?: string;
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

export const Content = styled.ul`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -0.25rem;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${MediaQuery.MaxWidth.tablet} {
        flex-wrap: nowrap;
    }
`;

export const Fade = styled.div<FadeProps>`
    width: 4rem;
    height: 1.75rem;
    top: 0;
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

export const Item = styled.li<any>`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${(props) => {
        return props.styleProps || ``;
    }};
`;

export const Caret = styled(Icon)<CaretProps>`
    margin: 0.25rem 0.25rem 0.1rem 0.25rem;
    font-weight: bold !important;
    color: ${(props) => props.color || Color.Neutral[4]};
`;

export const CurrentLabel = styled(Text.BodySmall)`
    margin: 0.25rem !important;
`;

export const PreviousLink = styled(Text.Hyperlink.Small)`
    margin: 0.25rem !important;
`;
