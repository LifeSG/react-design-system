import styled from "styled-components";
import { MediaQuery, TextAttributes } from "../styles/spec";
import { Transition } from "../styles/spec/transition";
import { Color } from "../styles/theme";
import { Text } from "../text";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface WrapperProps {
    imageHoverAnimation: boolean;
}

interface LayoutProps {
    bottomOffset?: boolean;
}

interface TitleProps {
    alignVertical?: boolean;
}

interface ContainerStyleProps {
    styleType?: string;
}

// =============================================================================
// STYLING
// =============================================================================

const contentStyle = `
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
`;

// NOTE: Have to be earlier as it is used by Wrapper
export const PlayIcon = styled.img<LayoutProps>`
    position: absolute;
    left: calc(50% - 1.25rem);
    height: 2.5rem;
    width: 2.5rem;
    z-index: 2;

    ${({ bottomOffset }) => {
        if (bottomOffset) {
            return `
				top: 30%;
			`;
        } else {
            return `
				top: calc(50% - 1.25rem);
			`;
        }
    }}
`;

// NOTE: Have to be earlier as it is used by Wrapper
export const SelectorImage = styled.img`
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: ${Transition.Custom(350)};

    ${MediaQuery.MaxWidth.tablet} {
        display: none;
    }
`;

export const SelectorImageMobile = styled.img`
    display: none;

    ${MediaQuery.MaxWidth.tablet} {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }
`;

export const Wrapper = styled.a<WrapperProps>`
    position: relative;
    display: block;
    height: 18.75rem;
    width: 100%;
    overflow: hidden;

    &:hover {
        ${PlayIcon} {
            filter: brightness(10%) sepia(100) saturate(120) hue-rotate(15deg);
        }
    }

    ${(props) => {
        if (props.imageHoverAnimation) {
            return `
				&:hover,
				&:focus,
				&:active {
					${SelectorImage} {
						transform: scale(1.05);
					}
				}
			`;
        }
    }}
`;

export const OpacityLayer = styled.div`
    ${contentStyle}
    background-image: linear-gradient(to bottom, transparent,rgba(0,0,0,.75) 65%);
    z-index: 2;
`;

export const ContentContainer = styled.div`
    ${contentStyle}
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

type TextContainerType = LayoutProps & ContainerStyleProps;

export const TextContainer = styled.div<TextContainerType>`
    display: flex;
    flex-direction: column;
    z-index: 2;

    ${({ bottomOffset, styleType }) => {
        if (bottomOffset && styleType !== "block") {
            // base padding-bottom + description margin-top + description container - title line height
            // this will align the title (without description) to the lower line of the title (with description)
            const offsetAmount =
                1.5 +
                0.5 +
                TextAttributes.BodySmall.lineHeight * 2 -
                TextAttributes.Body.lineHeight;
            return `
				padding: 0 1.5rem ${offsetAmount}rem;
			`;
        } else {
            return `
				padding: 0 1.5rem 1.5rem;
			`;
        }
    }}

    ${({ styleType }) => {
        if (styleType === "block") {
            // vertical padding + title line height + margin + description line height
            const heightAmount =
                2 +
                TextAttributes.BodySmall.lineHeight * 2 +
                0.25 +
                TextAttributes.Body.lineHeight * 2;
            return `
				height: ${heightAmount}rem;
				padding: 1rem 1.5rem;
				background-color: rgba(40, 40, 40, 0.8);
			`;
        }
    }}
`;

export const TitleContainer = styled.div<TitleProps>`
    ${({ alignVertical }) => {
        if (alignVertical) {
            return `
				display: flex;
				align-items: flex-start;
				height: ${TextAttributes.Body.lineHeight * 2}rem;
			`;
        }
    }}
`;

export const DescriptionContainer = styled.div<ContainerStyleProps>`
    ${({ styleType }) => {
        return `
			display: flex;
			align-items: flex-start;
			height: ${TextAttributes.BodySmall.lineHeight * 2}rem;
			margin-top: ${styleType === "block" ? "0.25rem" : "0.5rem"};
		`;
    }}
`;

const baseTextStyle = `
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	margin-bottom: 0;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const Title = styled(Text.Body)`
    ${baseTextStyle}
    color: ${Color.Neutral[8]};
`;

export const Description = styled(Text.BodySmall)`
    ${baseTextStyle}
    color: ${Color.Neutral[8]};
`;
