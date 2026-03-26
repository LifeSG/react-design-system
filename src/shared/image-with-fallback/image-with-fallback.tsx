import { useEffect, useRef } from "react";

import image from "./default.png";

export interface ImageWithFallbackProps {
    src: string;
    alt?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
}

export const ImageWithFallback = ({
    src,
    alt,
    className,
    "data-testid": testId,
}: ImageWithFallbackProps) => {
    const ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        // onError does not run if image is loaded from cache, so we need to
        // check if the image is actually able to render using naturalWidth and
        // naturalHeight
        const el = ref.current;
        if (
            el &&
            el.complete &&
            el.naturalHeight === 0 &&
            el.naturalWidth === 0
        ) {
            el.onerror = null;
            el.src = image;
        }
    }, []);

    const handleError = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
        const el = event.target as HTMLImageElement;
        el.onerror = null;
        el.src = image;
    };

    return (
        <img
            ref={ref}
            src={src}
            alt={alt || ""}
            className={className}
            data-testid={testId}
            onError={handleError}
        />
    );
};
