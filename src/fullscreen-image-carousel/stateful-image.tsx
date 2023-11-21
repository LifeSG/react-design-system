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
}

export const StatefulImage = ({
    src,
    className,
    alt,
    fit,
    placeholder,
}: StatefulImageProps) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Event | string>();

    useEffect(() => {
        setLoading(true);
        setError(undefined);

        const img = new Image();
        img.src = src;
        img.onload = () => {
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
