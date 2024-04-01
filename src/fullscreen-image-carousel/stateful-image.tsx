import React, { useEffect, useState } from "react";
import { LoadingDots } from "../animations";
import {
    DefaultPlaceholder,
    ImageBox,
    ImageWrapper,
} from "./stateful-image.style";

export interface StatefulImageProps {
    src: string;
    className?: string | undefined;
    alt?: string | undefined;
    fit?: React.CSSProperties["objectFit"] | undefined;
    placeholder?: React.ReactNode | undefined;
    retrieveImageDimension?: boolean;
    setDimension?: ({
        src,
        width,
        height,
    }: {
        src: string;
        width: number;
        height: number;
    }) => void;
}

export const StatefulImage = ({
    src,
    className,
    alt,
    fit,
    placeholder,
    retrieveImageDimension,
    setDimension,
}: StatefulImageProps) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Event | string>();

    useEffect(() => {
        setLoading(true);
        setError(undefined);

        const img = new Image();
        img.src = src;
        img.onload = () => {
            !!retrieveImageDimension &&
                setDimension({
                    src: img.src,
                    width: img.width,
                    height: img.height,
                });
            setLoading(false);
        };
        img.onerror = (e: Event | string) => {
            setLoading(false);
            setError(e);
        };
    }, [src]);

    const renderContent = () => {
        if (error) {
            return placeholder ?? <DefaultPlaceholder />;
        }

        if (loading) {
            return <LoadingDots />;
        }

        return <ImageBox src={src} alt={alt} $fit={fit} />;
    };

    return <ImageWrapper className={className}>{renderContent()}</ImageWrapper>;
};
