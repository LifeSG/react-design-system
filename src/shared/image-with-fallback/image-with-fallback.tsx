import image from "../../navbar/img/default.png";
export interface ImageWithFallbackProps {
    imgSrc: string;
    alt?: string;
}

export const ImageWithFallback = ({ imgSrc, alt }: ImageWithFallbackProps) => {
    const handleError = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
        (event.target as HTMLImageElement).onerror = null;
        (event.target as HTMLImageElement).src = image;
    };

    return <img src={imgSrc} alt={alt ? alt : ""} onError={handleError} />;
};
