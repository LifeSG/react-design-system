import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { MediaWidths } from "../styles/spec";
import {
    ActionContainer,
    Container,
    Content,
    ImageContainer,
    Inner,
    Section,
    VideoContainerLgScreen,
    VideoContainerSmScreen,
    VideoDarkenOverlay,
    VideoPlayerLgScreen,
    Wrapper,
} from "./video-banner.styles";
import {
    CustomVideoBannerProps,
    DefaultVideoBannerProps,
    VideoBannerProps,
} from "./types";
import { ActionButton, Description, Title } from "./video-banner-elements";

export const VideoBanner = ({
    type = "default",
    videoSrc,
    backgroundOpacity = 0.3,
    mobileBackgroundImageSrc,
    content,
    mobilePlayerControls,
    ...otherProps
}: VideoBannerProps) => {
    // =============================================================================
    // STATES, REF
    // =============================================================================
    const [ready, setReady] = useState(false);
    const [hasTabbed, setHasTabbed] = useState<boolean>(false);
    const [startVideo, setStartVideo] = useState(false);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        window.addEventListener("keydown", handleTab);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("keydown", handleTab);
            setStartVideo(false);
        };
    }, []);

    useEffect(() => {
        const videoBg = document.getElementsByTagName("iframe")[0];
        if (videoBg) {
            videoBg.tabIndex = -1;
        }
    }, [hasTabbed]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleResize = () => {
        if (window.innerWidth > MediaWidths.mobileL) {
            setStartVideo(true);
        } else {
            setStartVideo(false);
        }
    };

    const handleTab = (event: KeyboardEvent) => {
        if (event.key === "Tab") {
            setHasTabbed(true);
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderContent = () => {
        if (type === "custom") {
            return (content as CustomVideoBannerProps).children;
        } else {
            const { title, description, action } =
                content as DefaultVideoBannerProps;

            return (
                <Inner>
                    <VideoContainerSmScreen>
                        <ReactPlayer
                            url={videoSrc}
                            height="100%"
                            width="100%"
                            controls={true}
                            playing={mobilePlayerControls?.isPlaying}
                            onPlay={mobilePlayerControls?.onPlay}
                            onPause={mobilePlayerControls?.onPause}
                        />
                    </VideoContainerSmScreen>
                    <Title data-testid="title">{title}</Title>
                    <Description data-testid="description">
                        {description}
                    </Description>
                    <ActionContainer>
                        <ActionButton data-testid="action-button" {...action} />
                    </ActionContainer>
                </Inner>
            );
        }
    };

    /** This is the video background that plays automatically */
    const renderLargeScreenView = () => {
        return (
            <>
                <VideoContainerLgScreen onFocus={(e) => e.preventDefault()}>
                    <VideoPlayerLgScreen>
                        <ReactPlayer
                            onReady={() => setReady(true)}
                            url={videoSrc}
                            controls={false}
                            playing={startVideo && ready}
                            muted={true}
                            height="100%"
                            width="100%"
                            loop={true}
                        />
                    </VideoPlayerLgScreen>
                </VideoContainerLgScreen>
                <VideoDarkenOverlay opacity={backgroundOpacity} />
            </>
        );
    };

    const renderSmallScreenView = () => {
        return <ImageContainer src={mobileBackgroundImageSrc} />;
    };

    return (
        <Wrapper aria-label={otherProps["aria-label"]} role="banner">
            {renderSmallScreenView()}
            {renderLargeScreenView()}
            <Content>
                <Section>
                    <Container>{renderContent()}</Container>
                </Section>
            </Content>
        </Wrapper>
    );
};
