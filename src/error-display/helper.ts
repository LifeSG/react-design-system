import { MediaWidths } from "../spec/media-spec";

export interface ImagePathAttributes {
    base: string;
    md: string;
    lg: string;
    width: number;
    height: number;
}

export const imgAttributeHelper = (
    pathAttributes: ImagePathAttributes
): React.ImgHTMLAttributes<HTMLImageElement> => {
    const { base, md, lg, width, height } = pathAttributes;
    return {
        srcSet: `${base} 400w, ${md} 800w, ${lg} 1200w`,
        src: lg,
        sizes: `(max-width: ${MediaWidths.mobileL}px) 400px, (max-width: ${MediaWidths.tablet}px) 800px, 1200px`,
        width,
        height,
    };
};
