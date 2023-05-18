import image from "../../navbar/img/default.png";
export interface ImageWithFallbackProps {
    src: string;
    alt?: string;
}

export const ImageWithFallback = ({ src, alt }: ImageWithFallbackProps) => {
    const handleError = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
        (event.target as HTMLImageElement).onerror = null;
        (event.target as HTMLImageElement).src = image;
    };

    return <img src={src} alt={alt ? alt : ""} onError={handleError} />;
};
