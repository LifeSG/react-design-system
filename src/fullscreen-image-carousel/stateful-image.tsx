import type React from "react";
import { useEffect, useRef, useState } from "react";

import { LoadingDots } from "../animations";
import { useApplyStyle } from "../theme";
import * as styles from "./stateful-image.styles";

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
    const imageRef = useRef<HTMLImageElement>(null);

    useApplyStyle(imageRef, {
        [styles.tokens.imageBox.fit]: fit,
    });

    useEffect(() => {
        setLoading(true);
        setError(undefined);

        const img = new Image();
        img.src = src;
        img.onload = () => {
            if (!!retrieveImageDimension && setDimension) {
                setDimension({
                    src,
                    width: img.width,
                    height: img.height,
                });
            }

            setLoading(false);
        };
        img.onerror = (e: Event | string) => {
            setLoading(false);
            setError(e);
        };
    }, [src]);

    const renderContent = () => {
        if (error) {
            return placeholder ?? <styles.DefaultPlaceholder />;
        }

        if (loading) {
            return <LoadingDots />;
        }

        return <styles.ImageBox ref={imageRef} src={src} alt={alt} />;
    };

    return (
        <styles.ImageWrapper className={className}>
            {renderContent()}
        </styles.ImageWrapper>
    );
};
