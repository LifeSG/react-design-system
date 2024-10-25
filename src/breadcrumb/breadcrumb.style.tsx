import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import styled from "styled-components";
import { MediaQuery } from "../theme";
import { Typography } from "../typography/typography";
import { Colour } from "../theme";

// =============================================================================
// STYLE TYPES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface FadeProps {
    $backgroundColor?: string[];
    $position?: "left" | "right";
}

interface ItemStyleProps {
    $styleProps?: string;
}

// =============================================================================
// STYLE COMPONENTS
// =============================================================================
export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    z-index: 1;

    margin: 2rem 0;

    ${MediaQuery.MaxWidth.xl} {
        margin: 1.5rem 0;
    }

    ${MediaQuery.MaxWidth.lg} {
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

    ${MediaQuery.MaxWidth.lg} {
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
        let positionStyle;
        const transparentColor = "rgba(255,255,255,0.001)";

        if (props.$position === "left") {
            positionStyle = `
				left: -2%;
				background-image: linear-gradient(
					to right, 
					${props.$backgroundColor || "white"}, 
					${transparentColor}
				);
			`;
        } else {
            positionStyle = `
				right: -2%;
				background-image: linear-gradient(
					to left,
					${props.$backgroundColor || "white"},
					${transparentColor}
				);
			`;
        }

        return `
			${MediaQuery.MaxWidth.lg} {
				${positionStyle}
			}
		`;
    }};
`;

export const Item = styled.li<ItemStyleProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${(props) => {
        return props.$styleProps || ``;
    }};
`;

export const Caret = styled(ChevronRightIcon)`
    margin: 0.25rem 0.25rem 0.1rem 0.25rem;
    color: ${Colour["icon-subtle"]};
`;

export const CurrentLabel = styled(Typography.BodyMD)`
    margin: 0.25rem !important;
`;

export const PreviousLink = styled(Typography.LinkSM)`
    margin: 0.25rem !important;
`;
