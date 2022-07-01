import React from "react";
import styled from "styled-components";
import { Text } from "../text/text";
import {
    VideoBannerActionProps,
    VideoBannerType,
    VideoDescriptionProps,
    VideoTitleProps,
} from "./types";
import videoIcon from "../../assets/img/video/video-icon.png";
import { Color } from "../styles/theme/color-theme";
import { MediaQuery } from "../styles/spec";

// =============================================================================
// TITLE
// =============================================================================
export const Title = (props: VideoTitleProps) => <TitleComponent {...props} />;

const TitleComponent = styled(Text.H1)`
    margin-bottom: 1rem;
    color: ${Color.Neutral[8]};

    ${MediaQuery.MaxWidth.mobileS} {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

// =============================================================================
// DESCRIPTION
// =============================================================================
export const Description = (props: VideoDescriptionProps) => (
    <DescriptionComponent {...props} />
);

const DescriptionComponent = styled(Text.BodySmall)`
    color: ${Color.Neutral[8]};
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    margin-bottom: 0;
    overflow: hidden;
    text-overflow: ellipsis;

    ${MediaQuery.MaxWidth.mobileL} {
        font-size: 1rem;
        line-height: 1.25rem;
    }
`;

// =============================================================================
// ACTION BUTTON
// =============================================================================
export const ActionButton = (props: VideoBannerActionProps) => {
    const { children, onClick, ...otherProps } = props;
    const type = props.type || "default";

    const handleOnClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        onClick(event);
    };

    return (
        <ActionButtonContainer
            {...otherProps}
            onClick={handleOnClick}
            href=""
            type={type}
        >
            <ActionButtonText>{children}</ActionButtonText>
            <Icon src={videoIcon} alt="" />
        </ActionButtonContainer>
    );
};

const ActionButtonText = styled(Text.H4).attrs({ as: "p" })``;

const Icon = styled.img`
    margin-left: 1rem;
`;

interface ActionButtonContainerStyleProps {
    type: VideoBannerType;
}

const ActionButtonContainer = styled.a<ActionButtonContainerStyleProps>`
    display: flex;
    align-items: center;
    padding: 0.25rem 0;
    color: ${Color.Neutral[8]};

    ${Text.H4} {
        color: ${Color.Neutral[8]};
    }

    ${(props) => {
        if (props.type === "default") {
            return `
				margin-top: 2.5rem;
			`;
        }
    }}

    :hover {
        ${Text.H4} {
            color: ${Color.Brand[1]};
        }

        ${Icon} {
            filter: brightness(10%) sepia(100) saturate(120) hue-rotate(15deg);
        }
    }
`;
