import React from "react";
import {
    Background,
    Container,
    ForegroundOverlay,
    HeadingFocusText,
    HeadingText,
    Wrapper,
} from "./banner.styles";
import { BannerProps } from "./types";

export const Banner = ({
    children,
    imgset,
    ...otherProps
}: BannerProps): JSX.Element => {
    const renderText = () => {
        if (!imgset) {
            return <HeadingFocusText>{children}</HeadingFocusText>;
        } else {
            return (
                <HeadingText
                    foreground={!!imgset?.foreground}
                    data-testid="with-image"
                >
                    {children}
                </HeadingText>
            );
        }
    };

    return (
        <Wrapper
            imgset={imgset}
            aria-label={otherProps["aria-label"]}
            role="banner"
        >
            {imgset && imgset.foreground && (
                <ForegroundOverlay foreground={imgset.foreground} />
            )}
            <Background imgset={imgset}>
                <Container>{renderText()}</Container>
            </Background>
        </Wrapper>
    );
};
