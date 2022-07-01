// Generated with util/create-component.js
import React from "react";
import playIcon from "../../assets/img/video/triangle.png";
import {
    ContentContainer,
    Description,
    DescriptionContainer,
    OpacityLayer,
    PlayIcon,
    SelectorImage,
    SelectorImageMobile,
    TextContainer,
    Title,
    TitleContainer,
    Wrapper,
} from "./image-selector.style";
import { ImageSelectorProps } from "./types";

export const ImageSelector = ({
    type = "default",
    imgSrc,
    mobileImgSrc,
    title,
    description,
    className,
    styleType = "faded",
    hoverAnimation = true,
    ...anchorProps
}: ImageSelectorProps) => {
    const amendedAnchorProps = {
        href: anchorProps.href || "",
        ...anchorProps,
    };

    const handleOnClick = (e: React.MouseEvent, onClick) => {
        if (onClick) {
            e.preventDefault();
            onClick();
        }
    };

    const renderDescription = () => (
        <DescriptionContainer styleType={styleType}>
            <Description>{description}</Description>
        </DescriptionContainer>
    );

    const renderTitle = () => (
        <TitleContainer alignVertical={!description}>
            <Title weight="bold">{title}</Title>
        </TitleContainer>
    );

    const renderTextComponent = () => {
        if (title || description) {
            return (
                <TextContainer
                    styleType={styleType}
                    bottomOffset={!description}
                >
                    {title && renderTitle()}
                    {description && renderDescription()}
                </TextContainer>
            );
        } else {
            return null;
        }
    };

    return (
        <Wrapper
            {...amendedAnchorProps}
            imageHoverAnimation={type === "default" ? hoverAnimation : false}
            onClick={(e) => handleOnClick(e, amendedAnchorProps.onClick)}
            className={className}
        >
            <SelectorImage
                src={imgSrc}
                alt={`${anchorProps.id || "image"}-selector`}
            />
            <SelectorImageMobile
                src={mobileImgSrc || imgSrc}
                alt={`${anchorProps.id || "image"}-selector`}
            />

            <ContentContainer>
                {styleType === "faded" && <OpacityLayer />}
                {type === "video-thumbnail" && (
                    <PlayIcon
                        src={playIcon}
                        bottomOffset={!!title || !!description}
                    />
                )}
                {renderTextComponent()}
            </ContentContainer>
        </Wrapper>
    );
};
