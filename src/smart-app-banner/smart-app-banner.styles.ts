import { CrossIcon } from "@lifesg/react-icons/cross";
import { StarIcon } from "@lifesg/react-icons/star";
import { StarFillIcon } from "@lifesg/react-icons/star-fill";
import { StarHalfIcon } from "@lifesg/react-icons/star-half";
import styled, { css, keyframes } from "styled-components";

import { Button } from "../button";
import { ClickableIcon } from "../shared/clickable-icon";
import { Typography } from "../typography";
import { V3_Border, V3_Colour, V3_Font, V3_MediaQuery, V3_Radius, V3_Shadow } from "../v3_theme";

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
    position: fixed;
    top: ${(props) => props.$offset + "px"};
    left: 0;
    z-index: 9001;
    display: flex;
    flex-direction: row-reverse;
    align-items: stretch;
    width: calc(100% - 2.5rem);
    min-height: 5.5rem;
    margin: 0.5rem 1.25rem;
    background: ${V3_Colour.bg};
    ${(props) =>
        props.theme?.colourMode === "dark"
            ? "border: " + V3_Border["width-010"] + " " + V3_Border["solid"] + " " + V3_Colour["border"] + ";"
            : "box-shadow: " + V3_Shadow["md-subtle"] + ";"}
    border-radius: ${V3_Radius["md"]};
    animation-name: ${(props) => (props.$isAnimated ? slideDown : "none")};
    animation-duration: ${(props) => (props.$isAnimated ? "0.3s" : "0s")};
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
    width: 1.25rem;
    height: 1.25rem;
    color: ${V3_Colour.icon};
`;

export const ProceedContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`;

export const TextContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    margin: 0.5rem;

    ${V3_MediaQuery.MaxWidth.xs} {
        margin: 0 0.5rem;
    }
`;

export const BannerIcon = styled.img`
    align-self: center;
    width: 2.65rem;
    height: auto;
`;

export const ButtonContainer = styled.div`
    max-width: 30%;
`;

export const StyledButton = styled(Button.Small)`
    height: auto;
    padding: 0.5rem;

    & > span {
        overflow-wrap: anywhere;
        ${V3_Font["body-xs-semibold"]}
    }
`;

export const Title = styled(Typography.BodySM)`
    font-weight: ${V3_Font.Spec["weight-bold"]};
    overflow-wrap: anywhere;

    ${V3_MediaQuery.MaxWidth.xs} {
        ${V3_Font["body-xs-bold"]}
    }
`;

export const Description = styled(Typography.BodyXS)`
    overflow-wrap: anywhere;
`;

export const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.25rem;
`;

const starIconStyle = css`
    width: 2rem;
    height: 2rem;
    padding-right: 0.25rem;
    color: #FFC107;
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
