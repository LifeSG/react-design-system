import React, { useEffect, useState } from "react";
import { LoadingDots } from "../animations";
import { ImageBox } from "./image-carousel.style";
import defaultImg from "./image-default.jpg";
import { IImprogressiveImage } from "./types";

const ImprogressiveImage = (props: IImprogressiveImage) => {
    const { src, children, placeholder, ...rest } = props;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

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

    if (loading) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <LoadingDots className="h-full" />
            </div>
        );
    }

    if (children) {
        return (
            <React.Fragment>{children({ loading, error, src })}</React.Fragment>
        );
    }

    if (error) {
        return <ImageBox src={placeholder ?? defaultImg} {...rest} />;
    }

    return (
        <React.Fragment>
            <ImageBox src={src} {...rest} />
        </React.Fragment>
    );
};
export default ImprogressiveImage;
