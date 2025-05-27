import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import styled, { css } from "styled-components";
import { Colour, Font, MediaQuery, Spacing } from "@/theme";
import { Typography } from "../typography/typography";

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
    margin: ${Spacing["spacing-32"]} 0;

    ${MediaQuery.MaxWidth.xl} {
        margin: ${Spacing["spacing-24"]} 0;
    }

    ${MediaQuery.MaxWidth.lg} {
        margin: ${Spacing["spacing-16"]} 0;
    }
`;

export const Content = styled.ul`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -${Spacing["spacing-8"]};
    font-size: ${Font.Spec["body-size-md"]};
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
    width: ${Spacing["spacing-64"]};
    height: calc(1lh + ${Spacing["spacing-4"]});
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;

    ${(props) => {
        let positionStyle: string;
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

        return css`
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
    margin: ${Spacing["spacing-8"]};
    height: 1em;
    width: 1em;
    color: ${Colour["icon-subtle"]};
`;

export const CurrentLabel = styled(Typography.BodyMD)`
    margin: ${Spacing["spacing-8"]} !important;
`;

export const PreviousLink = styled(Typography.LinkMD)`
    margin: ${Spacing["spacing-8"]} !important;
`;
