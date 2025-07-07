import { CrossIcon } from "@lifesg/react-icons/cross";
import { StarIcon } from "@lifesg/react-icons/star";
import { StarFillIcon } from "@lifesg/react-icons/star-fill";
import { StarHalfIcon } from "@lifesg/react-icons/star-half";
import styled, { css, keyframes } from "styled-components";
import { Button } from "../button";
import { ClickableIcon } from "../shared/clickable-icon";
import { Border, Colour, Font, MediaQuery, Radius } from "../theme";
import { Typography } from "../typography/typography";

const slideDown = keyframes`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

export const SmartAppBannerContainer = styled.div<{
    $offset: number;
    $isAnimated: boolean;
}>`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    position: fixed;
    margin: 0.5rem 1.25rem;
    ${(props) => {
        return `top: ${props.$offset}px;`;
    }}
    left: 0;
    width: calc(100% - 2.5rem);
    min-height: 5.5rem;
    z-index: 9001;
    background: ${Colour.bg};
    ${(props) => {
        return props.theme?.colourMode === "dark"
            ? css`
                  border: ${Border["width-010"](props)}
                      ${Border["solid"](props)} ${Colour["border"]};
              `
            : css`
                  box-shadow: 0 2px 8px
                      rgba(from ${Colour.Primitive["neutral-50"]} r g b / 24%);
              `;
    }}
    border-radius: ${Radius["md"]};
    ${(props) => {
        if (props.$isAnimated)
            return css`
                animation: ${slideDown} 0.3s;
            `;
    }}
`;

export const DismissContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`;

export const DismissButton = styled(ClickableIcon)`
    padding: 0;
`;

export const Cross = styled(CrossIcon)`
    color: ${Colour.icon};
    height: 1.25rem;
    width: 1.25rem;
`;

export const ProceedContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`;

export const TextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${MediaQuery.MaxWidth.xs} {
        margin: 0 0.5rem;
    }
`;

export const BannerIcon = styled.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`;

export const ButtonContainer = styled.div`
    max-width: 30%;
`;

export const StyledButton = styled(Button.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${Font["body-xs-semibold"]}
    }
`;

export const Title = styled(Typography.BodySM)`
    font-weight: ${Font.Spec["weight-bold"]};
    overflow-wrap: anywhere;
    ${MediaQuery.MaxWidth.xs} {
        ${Font["body-xs-bold"]}
    }
`;

export const Description = styled(Typography.BodyXS)`
    overflow-wrap: anywhere;
`;

export const RatingContainer = styled.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`;

const starIconStyle = css`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`;

export const Star = styled(StarFillIcon)`
    ${starIconStyle}
`;

export const StarHalf = styled(StarHalfIcon)`
    ${starIconStyle}
`;

export const StarEmpty = styled(StarIcon)`
    ${starIconStyle}
`;
