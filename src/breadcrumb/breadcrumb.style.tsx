import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import styled, { css } from "styled-components";

import { Typography } from "../typography";
import { V3_Colour, V3_Font, V3_MediaQuery, V3_Spacing } from "../v3_theme";

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
    margin: ${V3_Spacing["spacing-32"]} 0;

    ${V3_MediaQuery.MaxWidth.xl} {
        margin: ${V3_Spacing["spacing-24"]} 0;
    }

    ${V3_MediaQuery.MaxWidth.lg} {
        margin: ${V3_Spacing["spacing-16"]} 0;
    }
`;

export const Content = styled.ul`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -${V3_Spacing["spacing-8"]};
    font-size: ${V3_Font.Spec["body-size-md"]};
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${V3_MediaQuery.MaxWidth.lg} {
        flex-wrap: nowrap;
    }
`;

export const Fade = styled.div<FadeProps>`
    width: ${V3_Spacing["spacing-64"]};
    height: calc(1lh + ${V3_Spacing["spacing-4"]});
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;

    ${(props) => {
        let positionStyle: string;
        const transparentColor = "rgba(255,255,255,0.001)";
        const fadeColor = V3_Colour.bg(props);

        if (props.$position === "left") {
            positionStyle = `
				left: -8px;
				background-image: linear-gradient(
					to right, 
					${props.$backgroundColor || fadeColor}, 
					${transparentColor}
				);
			`;
        } else {
            positionStyle = `
				right: 8px;
				background-image: linear-gradient(
					to left,
					${props.$backgroundColor || fadeColor},
					${transparentColor}
				);
			`;
        }

        return css`
            ${V3_MediaQuery.MaxWidth.lg} {
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
    height: 1em;
    width: 1em;
    color: ${V3_Colour["icon-subtle"]};
`;

export const Slash = styled(Typography.BodyMD)`
    display: inline-block;
    color: ${V3_Colour["text-subtlest"]};
`;

export const CurrentLabel = styled(Typography.BodyMD)`
    margin: ${V3_Spacing["spacing-8"]} !important;
`;

export const PreviousLink = styled(Typography.LinkMD)`
    margin: ${V3_Spacing["spacing-8"]} !important;
`;
