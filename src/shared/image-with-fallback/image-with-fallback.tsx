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
    const handleError = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
        (event.target as HTMLImageElement).onerror = null;
        (event.target as HTMLImageElement).src = image;
    };

    return (
        <img
            src={src}
            alt={alt || ""}
            className={className}
            data-testid={testId}
            onError={handleError}
        />
    );
};
