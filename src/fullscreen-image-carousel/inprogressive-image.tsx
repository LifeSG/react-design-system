import { PlaceholderImageIcon } from "@lifesg/react-icons";
import React, { useEffect, useState } from "react";
import { ImageBox } from "./fullscreen-image-carousel.style";
import { ImprogressiveImageProps } from "./types";

export const ImprogressiveImage = (props: ImprogressiveImageProps) => {
    const { src, children, placeholder, ...rest } = props;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>();

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setLoading(false);
        };
        img.onerror = (e: any) => {
            setLoading(false);
            setError(e);
        };
    });

    if (children) {
        return (
            <React.Fragment>{children({ loading, error, src })}</React.Fragment>
        );
    }

    if (error) {
        return placeholder ? (
            <ImageBox src={placeholder} {...rest} />
        ) : (
            <PlaceholderImageIcon style={{ width: "100%", height: "100%" }} />
        );
    }

    return (
        <React.Fragment>
            <ImageBox src={src} {...rest} />
        </React.Fragment>
    );
};
